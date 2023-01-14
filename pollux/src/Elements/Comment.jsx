import { arrayUnion,arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, db } from '../Firebase/firebase';
import {v4 as uuidv4} from 'uuid'
import useAuthState from '../Firebase/hooks';


export default function Comment({id}){
    const [comment,setComment]=useState("");
    const [comments,setComments]=useState([]);
    const {currentlyLoggedInUser}=useAuthState(auth);
    const commentRef = doc(db,"Blogs",id)

useEffect(()=>{
    const docRef = doc(db,"Blogs",id)
    onSnapshot(docRef,(snapshot)=>{
       setComments(snapshot.data().comments);
    })
},[]);

const handleChangeComment=(e)=>{
    if(e.key ==="Enter"){
        updateDoc(commentRef,{
            comments:arrayUnion({
                user:currentlyLoggedInUser.uid,
                userName:currentlyLoggedInUser.displayName,
                comment:comment,
                createdAt:new Date(),
                commentId: uuidv4()
            }),
        }).then(()=>{
                setComment("");
            });
    }
}

const handleDeleteComment=(comment)=>{
    console.log(comment);
    updateDoc(commentRef, {
        comments:arrayRemove(comment),
    })
    .then((e) => {
        console.log(e);
    })
    .catch((error) => {
        console.log(error);
    })
}
    return(
        <div>comment
            
            <div className='container' >
                {
                comments.map(({commentId,user,comment,userName})=>(
                  <div key={commentId}>
                    <div className='border p-2 mt-2 row'>
                        <div>
                            <span className={`badge ${
                                user === currentlyLoggedInUser.uid?
                                "bg-success"
                                :"bg-primary"}`}>
                                {userName}
                                </span>
                                {comment}
                        </div>
                        <div >
                            {user ===currentlyLoggedInUser.uid && (
                                <i className='fa fa-times' 
                                onClick={()=>handleDeleteComment({commentId,user,comment,userName})}></i>
                            )}
                        </div>
                    </div>
                  </div>
                    ))}
                    {
                        currentlyLoggedInUser && (
                            <input 
                            type="text" 
                            className='form-control mt-4 mb-5' 
                            value={comment} 
                            onChange={(e)=>{setComment(e.target.value);
                            }}
                            placeholder="Add a comment"
                            onKeyUp={(e)=>{handleChangeComment(e);}}/>
                        )
}
            </div>
        </div>
    )
}
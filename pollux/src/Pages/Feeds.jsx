import React, { useState } from "react";
import BlogCard from "../BlogCards";
import NavBar from "../NavBar";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import LoginIcon from "../Elements/login";

function Feeds() {
  
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <div>
        <input
          class="search-bar"
          type="search"
          placeholder="Search"
          id="searchInput"
        ></input>
        <i class="fas fa-search search-icon"></i>
      </div>

      <LoginIcon/>

      <NavBar />
      <div class="feed myfeed">
     {/*} {Blogs.map((blog) => (

          <BlogCard
          key={blog.id}
          img={blog.imgURL}
          heading={blog.heading}
          desc={blog.desc}/>
     ))}*/}
     <BlogCard/>

      </div>
      
    </>
  );
}

export default Feeds;

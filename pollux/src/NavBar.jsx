import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PopUp from "./Elements/PopUp.jsx";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import {db,auth} from './Firebase/firebase'
import { collection ,addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const drawerWidth = 190;


function NavBar() {
  const [feedback, setFeedback] = useState(false);
  const [contri, setContri] = useState(false);
  const [cust, setCust] = useState(false);

  const [components, setComponents] = useState([""]);
  /********for adding new blog link ***********/
  const [Topic,setTopic]=useState("");
  const [Title,setTitle]=useState("");
  const bloglist=collection(db,'Blogs');
  
  let navigate = useNavigate();
  const handleSubmit=async (e)=>{ 
      e.preventDefault();
      if(Title===""||Topic===""){
        alert("Fill all the fields");
        return false;
      }else{
        
          await addDoc(bloglist,{
          Title,
          Topic,
          author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
          comments:[]
      }).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

      setTitle("")
      setTopic("")
  navigate("/feed");
        
      }
      
  };
  /********for adding Feedback ***********/
  const [Response,setResponse]=useState("");
  const feedbackRef=collection(db,"Feedback");
  
  const handleFeedback=async (e)=>{    
    e.preventDefault();
    if(Response===""){
      alert("Fill all the fields");
      return false;
    }else{
    await addDoc(feedbackRef,{
        Response,
        author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
        
    }).then(()=>{alert("Feedback submitted")}).catch(err=>{alert(err.message)});

    setResponse("");

    navigate("/feed");}
};
  /*************************/


  function Add(event) {
    setComponents([
      ...components,
      <>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-password-input"
            label="Name"
            type="Name"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Email ID"
            type="Email ID"
            autoComplete="current-password"
          />
        </Box>
      </>,
    ]);
  }

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(70, 43, 136, 0.4)",
            color: "white",
          },
        }}
        sx={{
          mx: 20,
          my: 10,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <Box>
          <Typography
            marginLeft={"-10px"}
            marginBottom={"20px"}
            textAlign={"center"}
            variant="h5"
            color={"#C69AF6"}
          >
            {" "}
            CELESTIAL <br /> BISCUIT{" "}
          </Typography>
        </Box>

        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <ListItem key="Home" disablePadding>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/feed" style={{ textDecoration: "none", color: "white" }}>
            <ListItem key="My Feed" disablePadding>
              <ListItemButton>
                <ListItemText primary="My Feed" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/Trending"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem key="Trending" disablePadding>
              <ListItemButton>
                <ListItemText primary="Trending" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link
            to="/My-Activity"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem key="My Activity" disablePadding>
              <ListItemButton>
                <ListItemText primary="My Activity" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/SearchPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem key="Search Topics" disablePadding>
              <ListItemButton>
                <ListItemText primary="Search Topics" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <ListItem key="Contribute" disablePadding>
            <ListItemButton onClick={() => setContri(true)}>
              <ListItemText primary="Contribute" />
            </ListItemButton>
          </ListItem>
          <PopUp
            trigger={contri}
            setTrigger={setContri}
            title="CONTRIBUTE"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam in sapien elementum ipsum molestie dictum sit amet eu
                    lorem."
          >
            <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "60ch" },
            }}
            noValidate
            autoComplete="off">
                <TextField fullWidth label="Title" id="Title" margin="20px" onChange={(e)=>{setTitle(e.target.value)}} required/>
                <TextField fullWidth label="Topic" id="Topic"  margin="20px" onChange={(e)=>{setTopic(e.target.value)}} required/>
                <Button variant="contained"
                        color="secondary"
                        sx={{ marginTop: "20px" }} 
                        onClick={handleSubmit}>SUBMIT
                </Button>
            </Box>
          </PopUp>

          <ListItem key="Invite" disablePadding>
            <ListItemButton onClick={() => setCust(true)}>
              <ListItemText primary="Invite" />
            </ListItemButton>
          </ListItem>
          <PopUp
            trigger={cust}
            setTrigger={setCust}
            title="INVITE"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam in sapien elementum ipsum molestie dictum sit amet eu
                    lorem."
            submitText="Invite"
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-password-input"
                label="Name"
                type="Name"
                autoComplete="current-password"
              />
              <TextField
                id="outlined-password-input"
                label="Email ID"
                type="Email ID"
                autoComplete="current-password"
              />
            </Box>
            <Button
              variant="text"
              sx={{
                display: "block",
                marginLeft: "49px",
                marginBottom: "2px",
              }}
              color="secondary"
              onClick={Add}
            >
              Add More
            </Button>
          </PopUp>

          <ListItem key="Feedback" disablePadding>
            <ListItemButton onClick={() => setFeedback(true)}>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
          <PopUp
            trigger={feedback}
            setTrigger={setFeedback}
            title="FEEDBACK"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
              sapien elementum ipsum molestie dictum sit amet eu lorem."
            
          >
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Feedback"
              multiline
              rows={4}
              defaultValue=""
              color="secondary"
              onChange={(e)=>{setResponse(e.target.value)}}
            />
            <Button variant="contained"
                        color="secondary"
                        sx={{ marginTop: "20px" }} 
                        onClick={handleFeedback}>SUBMIT
            </Button>
          </PopUp>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;

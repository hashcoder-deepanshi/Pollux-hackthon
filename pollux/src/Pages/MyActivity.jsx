import React from "react";
import NavBar from "../NavBar";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import Tabs from "../Elements/Tabs";
import BCards from "../Elements/BCards";
import Blogs from "../Blogs";
import LoginIcon from "../Elements/login";
function MyActivity() {
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <div class="search-bar2">
        <i class="fas fa-search search-icon2"></i>
      </div>

    <LoginIcon/>
      <NavBar />
      <Tabs/>
      <div class="feed myfeed">
        {Blogs.map((blog) => (
          <BCards
            key={blog.id}
            img={blog.imgURL}
            heading={blog.heading}
            
          />
        ))}
      </div>

    </>
  );
}

export default MyActivity;
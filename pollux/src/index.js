import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Feeds from "./Pages/Feeds";
import MyActivity from './Pages/MyActivity';
import BlogPost from './Pages/BlogPost';
import SearchPage from './Pages/SearchPage';
import LoginPage from './Pages/LoginPage';
import AdminPage from "./Pages/AdminPage";
import { AuthContextProvider } from "../src/Firebase/AuthContext";

// import "../public/index.css";

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/Trending" element={<Feeds />} />
          <Route path="/My-Activity" element={<MyActivity/>} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

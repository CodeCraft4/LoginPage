import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Avatar } from "@mui/material";
// import { collection, getDocs } from "firebase/firestore";
// import { useState } from "react";
// import { useEffect } from "react";
// import { db } from "../../../Firebase/firebase";
import Home from "../../../Pages/Home/Index";
import About from "../../../Pages/About/Index";
import Blogs from "../../../Pages/Blogs/Index";
import Contact from "../../../Pages/Contact/Index";
import Setting from "../../../Pages/Setting/Index";
import {
  Article,
  ContactMail,
  HomeMini,
  LoginOutlined,
  Logout,
  Settings,
} from "@mui/icons-material";

// const userEmail = collection(db, "admins");

const AsideNav = () => {
  // const [update, setUpdate] = useState([]);

  // const fetchData = async () => {
  //   const Email = await getDocs(userEmail);
  //   const emailData = Email.docs.map((ev) => ({
  //     ...ev.data(),
  //     id: ev.id,
  //   }));
  //   setUpdate(emailData);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          background: "#212121",
          color: "white",
          display: "block",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundImage:
              "url(https://images.pexels.com/photos/19781449/pexels-photo-19781449/free-photo-of-close-up-of-an-eagle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
            objectFit: "cover",
            border: "1px solid orange",
            margin: "15%",
          }}
        ></div>
        <ul>
          <li
            style={{
              padding: "1em",
            }}
          >
            <HomeMini />
            <NavLink
              to={"home"}
              style={({ isActive }) => {
                return {
                  fontSize: "1.3em",
                  color: isActive ? "orange" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li
            style={{
              padding: "1em",
            }}
          >
            <LoginOutlined />
            <NavLink
              to={"about"}
              style={({ isActive }) => {
                return {
                  fontSize: "1.3em",
                  color: isActive ? "orange" : "white",
                  textDecoration: "none",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li
            style={{
              padding: "1em",
            }}
          >
            <Article />
            <NavLink
              to={"blogs"}
              style={({ isActive }) => {
                return {
                  fontSize: "1.3em",
                  color: isActive ? "orange" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Blogs
            </NavLink>
          </li>
          <li
            style={{
              padding: "1em",
            }}
          >
            <ContactMail />
            <NavLink
              to={"contact"}
              style={({ isActive }) => {
                return {
                  fontSize: "1.3em",
                  color: isActive ? "orange" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Contact
            </NavLink>
          </li>
          <li
            style={{
              padding: "1em",
            }}
          >
            <Settings />
            <NavLink
              to={"setting"}
              style={({ isActive }) => {
                return {
                  fontSize: "1.3em",
                  color: isActive ? "orange" : "white",
                  textDecoration: "none",
                };
              }}
            >
              Setting
            </NavLink>
          </li>
          <hr />
          <li
            style={{
              padding: "1em",
            }}
          >
            <Logout />
            <NavLink
              to={"/"}
              style={{
                fontSize: "1.3em",
                color: "white",
                textDecoration: "none",
              }}
            >
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "80%",
          height: "100vh",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2em",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              fontFamily: "monospace",
            }}
          >
            Dashboard
          </h1>
          {/* {update?.map((e, index) => ( */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            // key={index}
          >
            {/* <Avatar /> <span>{e.Email ? e.Email : "admin@gmail.com"}</span> */}
            <Avatar /> <span>user@gmail.com</span>
          </div>
          {/* ))} */}
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
};

export default AsideNav;

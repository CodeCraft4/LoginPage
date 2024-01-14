import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Avatar } from "@mui/material";
import Home from "Pages/Home/Index";
import About from "Pages/About/Index";
import Blogs from "Pages/Blogs/Index";
import Contact from "Pages/Contact/Index";
import Setting from "Pages/Setting/Index";
// import { collection, getDocs } from "firebase/firestore";
// import { useState } from "react";
// import { useEffect } from "react";
// import { db } from "../../../Firebase/firebase";
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
            backgroundImage: "linear-gradient(to right,pink,aqua)",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid orange",
            margin: "15%",
          }}
        ></div>
        <ul>
          <li
            style={{
              padding: ".9em",
            }}
          >
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
              padding: ".9em",
            }}
          >
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
              padding: ".9em",
            }}
          >
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
              padding: ".9em",
            }}
          >
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
              padding: ".9em",
            }}
          >
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
              padding: ".9em",
            }}
          >
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

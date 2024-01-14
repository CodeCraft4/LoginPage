import React from "react";
import LogIn from "Components/LogIn/LogIn";
import SignUp from "Components/LogIn/SignUp";
import { Route, Routes } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Home from "Pages/Home/Index";
import About from "Pages/About/Index";
import Blogs from "Pages/Blogs/Index";
import Contact from "Pages/Contact/Index";
import Setting from "Pages/Setting/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route ptah="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

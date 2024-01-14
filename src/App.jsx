import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Contact from "./Pages/Contact/Index";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/LogIn/SignUp";
import Layout from "./Components/Layout/Layout";
import Blogs from "./Pages/Blogs/Index";
import Setting from "./Pages/Setting/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<LogIn />} />
          <Route ptah="/" element={<Layout />}>
            <Route path="signUp" element={<SignUp />} />
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

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Contact from "./Pages/Contact/Index";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/LogIn/SignUp";
import authProvider from "./context/ContextApi";

const App = () => {
  return (
    <authProvider>
      <Routes>
        <Route>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </authProvider>
  );
};

export default App;

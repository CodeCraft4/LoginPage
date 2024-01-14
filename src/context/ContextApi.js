import React, { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../Firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState([]);
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const context = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log(user, "<<<<<<>>>>>>");
        setData(user);
      } else {
        setData(null);
        console.log("<<<<<<<<<<<<<<<>???????????????>>>>>>>>>>>>>>>");
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
    return context();
  }, []);

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

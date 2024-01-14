import React, { useState, createContext, useContext, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../Firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  // const [currentUser, setCurrntUser] = useState(null);

  // useEffect(() => {
  //   const User = onAuthStateChanged(auth, async (user) => {
  //     try {
  //       if (user) {
  //         const existsUser = doc(db, "admins", user?.uid);
  //         const loggedIn = await getDoc(existsUser);
  //         if (loggedIn) {
  //           setCurrntUser(loggedIn);
  //         } else {
  //           const newExistUser = doc(db, "local", user?.uid);
  //           const newloggedIn = await getDoc(newExistUser);
  //           setCurrntUser(newloggedIn);
  //         }
  //         console.log(loggedIn, "<<<<<<DDDDDDDDD>>>>>>>>>>>>>>>");
  //       } else {
  //         setCurrntUser(null);
  //       }
  //     } catch (error) {
  //       alert(error.messge);
  //     }
  //   });

  //   return () => {
  //     User();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

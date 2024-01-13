import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { AuthProvider } from "../../context/ContextApi";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = collection(db, "admins");

  const navigate = useNavigate();

  const errorShown = () => {
    if (!(email && password)) {
      alert("please fill the Input fields for Sign In");
    }
  };

  const handleSignInForm = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((cr) => {
        console.log(cr, ">>>>>>>>>>>?????????? oLD uSER");
        navigate("home");
      })
      .catch((err) => {
        console.log(err.message);
      });

    if (email && password) {
      await addDoc(userInfo, {
        Email: email,
        Password: password,
      })
        .then((ref) => console.log("Refrence::::", ref.id))
        .catch((er) => console.log(er.message));
      alert("Successfully ");
    } else {
      console.log("somthing went wrong");
    }
  };

  return (
    <AuthProvider>
      <div
        style={{
          display: "flex",
          backgroundImage:
            "url(https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=600)",
          height: "100vh",
          backgroundSize: "100% 100%",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <form style={formStyle} onSubmit={handleSignInForm}>
          <h1
            style={{
              fontFamily: "monospace",
            }}
          >
            Sign In
          </h1>
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            style={inputStyle}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Send"
            style={submitBtn}
            onClick={errorShown}
            id="submit"
          />
          <br />
          <br />
          <p>
            Create new Account{" "}
            <Link to={"/signUp"}>
              <b>Sign Up</b>
            </Link>
          </p>
        </form>
      </div>
    </AuthProvider>
  );
};

export default LogIn;

const formStyle = {
  padding: "5em",
  outline: "1px solid gray",
  background: "hsla(100,10%,10%,.5)",
  textAlign: "center",
  borderRadius: "15px",
  display: "block",
  color: "white",
};

const inputStyle = {
  padding: "1em",
  border: "none",
  borderBottom: "1px solid gray",
  background: "hsla(260,10%,10%,.2)",
  margin: 3,
  color: "white",
};

const submitBtn = {
  padding: "1em",
  width: "100%",
  border: "none",
  cursor: "pointer",
  background: "hsla(40,90%,100%,.2)",
  color: "white",
};
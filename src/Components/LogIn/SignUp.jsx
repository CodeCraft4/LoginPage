import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const LogIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorShown = () => {
    if (!(name && email && password)) {
      alert("please create the account for Sign In");
    }
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((cr) => {
        console.log(cr, "Successfully....User");
        alert("Successfully");
      })
      .catch((er) => {
        console.log(er, "ERRRRRRRRRRRRRRR");
      });
  };

  return (
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
      <form style={formStyle} onSubmit={handleSubmitUser}>
        <h1
          style={{
            fontFamily: "monospace",
          }}
        >
          Sign Up
        </h1>
        <br />
        <br />
        <input
          type="text"
          value={name}
          onChange={(prev) => setName(prev.target.value)}
          placeholder="Enter Your Name"
          style={inputStyle}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          style={inputStyle}
          value={email}
          onChange={(prev) => setEmail(prev.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          style={inputStyle}
          value={password}
          onChange={(prev) => setPassword(prev.target.value)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Send"
          style={submitBtn}
          onClick={errorShown}
        />
        <br />
        <br />
        <p>
          Create new Account
          <Link to={"/"}>
            <b>Sign In</b>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;

const formStyle = {
  padding: "5em",
  outline: "1px solid gray",
  background: "hsla(100,10%,10%,.5)",
  textAlign: "center",
  borderRadius: "8px",
  display: "block",
  color: "white",
};

const inputStyle = {
  padding: "1em",
  border: "none",
  borderBottom: "1px solid gray",
  margin: 3,
  background: "hsla(260,10%,10%,.2)",
};

const submitBtn = {
  padding: "1em",
  width: "100%",
  border: "none",
  cursor: "pointer",
  background: "hsla(40,90%,100%,.2)",
  color: "white",
};

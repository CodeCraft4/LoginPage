import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { authProvider } from "./context/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <authProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </authProvider>
);

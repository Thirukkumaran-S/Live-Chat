import React from "react";
import image from "../Images/live-chat.png";
import "./myStyles.css";
import { Button, TextField } from "@mui/material";

function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image} alt="image" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login to your account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
}

export default Login;

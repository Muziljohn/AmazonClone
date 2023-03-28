import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="loginImage"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form>
          <h3>Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={signIn} type="submit">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p>New to amazon </p>
          <button className="loginSignupButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

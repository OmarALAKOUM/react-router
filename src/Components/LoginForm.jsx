import React, { useState } from "react";
import { loginUser } from '../API/UserAPI';
import { Link, useNavigate } from 'react-router'; 
import "../LoginForm.css"; 
import '../LoginForm.css'
import { AuthContext } from "../Context/ContextAPI";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const loginData = await loginUser(email, password);
      const { token, user } = loginData;

      if (token && user) {
         navigate("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.log(error)
      alert("Invalid email or password.");
    } 
  };
  
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
        </div>

        <p>Please login to your account</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            className="input-field"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <a className="forgot-password" href="#!">
            Forgot password?
          </a>
          <div className="register-link">
            <p>Don't have an account?</p>
            <Link to="/createUser" className="register-link-a">
                Register
            </Link>
            {/* <button className="register-btn" >  
              Register    //onClick={onRegister}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

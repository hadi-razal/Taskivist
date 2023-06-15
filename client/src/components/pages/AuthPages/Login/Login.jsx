import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_MY_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        console.log(auth);
        // alert("Login Successful");
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/user/note");
      }
    } catch (error) {
      toast.error("Enter Valid Credentials");
      toast.error(res.data.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="close-btn-container">
          <AiOutlineClose onClick={() => navigate("/")} className="close-btn" />
        </div>
        <h2>Login</h2>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>
          Dont Have An Account? <Link to={"/register"}>Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

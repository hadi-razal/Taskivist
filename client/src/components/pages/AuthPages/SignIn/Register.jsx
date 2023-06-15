import React, { useState } from "react";
import "./Regsiter.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${import.meta.env.VITE_MY_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      console.log(res.data.message);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message, {
          duration: 1000,
        });
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        toast.error(res.data && res.data.message, {
          duration: 1000,
        });
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="close-btn-container">
          <AiOutlineClose onClick={() => navigate("/")} className="close-btn" />
        </div>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
        <p>
          Have An Account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

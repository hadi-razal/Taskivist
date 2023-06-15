import React from "react";
import "./Hero.css";
import HomeLayout from "../Layout/HomeLayout.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HomeLayout>
      <div className="container">
        <h1>
          Your Ultimate Todo App <span>Taskivist</span>
        </h1>
        <p>
          Manage your tasks with ease and stay organized like never before with
          TaskTracker, the ultimate todo app designed to simplify your life.
          Whether you're a busy professional, a student with a hectic schedule,
          or someone looking to boost productivity, TaskTracker has got you
          covered.
        </p>
        <div className="btn-container">
          <Link className="get-start-btn" to={'/register'}>Get Started</Link>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Hero;

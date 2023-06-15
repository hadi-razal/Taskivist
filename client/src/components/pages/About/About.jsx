import React from "react";
import "./About.css";
import HomeLayout from "../../Layout/HomeLayout";

const About = () => {
  return (
    <HomeLayout>
      <div className="about-container">
        <h1 className="about-header">About</h1>
        <p>
          Welcome to our revolutionary todo app! Designed with productivity and
          simplicity in mind, our app is here to help you stay organized and
          accomplish your tasks with ease. With a sleek and intuitive interface,
          you can easily create, manage, and prioritize your to-do lists like
          never before. Whether you're a busy professional, a student, or a
          homemaker, our app is your ultimate companion for staying on top of
          your responsibilities. Seamlessly sync your tasks across all your
          devices, ensuring that you never miss an important deadline again.
          Experience the power of collaboration by sharing lists with friends,
          family, or colleagues, making teamwork a breeze. Set reminders, due
          dates, and even attach files to your tasks, keeping all the
          information you need in one place. Embrace a clutter-free life and
          unlock your full potential with our powerful yet user-friendly todo
          app. Start making progress today and transform the way you manage your
          tasks.
        </p>
      </div>
    </HomeLayout>
  );
};

export default About;

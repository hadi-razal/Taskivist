import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import HomeLayout from "../../Layout/HomeLayout";
import "./PageNotFound.css";

const Pagenotfound = () => {
  const navigate = useNavigate();
  return (
    // <HomeLayout>
    <div className="pnf">
      <h1 className="pnf-title">404</h1>
      <h2 className="pnf-heading">
        <span>Oops!</span> Page Not Found
      </h2>
      <div
        to="/"
        onClick={() => navigate(location.state || "/")}
        className="pnf-btn"
      >
        Go Back
      </div>
    </div>
    // </HomeLayout>
  );
};

export default Pagenotfound;

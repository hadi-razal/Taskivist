import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Link to={"/"}>
          <h1 className="logo">Taskivist</h1>
        </Link>
        <ul>
          <Link to={"/pricing"}>
          <li>Pricing</li>
          </Link>
          <Link to={"/about-us"}>
          <li>About Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

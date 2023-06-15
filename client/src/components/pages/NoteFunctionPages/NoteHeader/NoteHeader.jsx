import React from "react";
import "./NoteHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Link to={"/user/note"}>
          <h1 className="logo">Taskivist</h1>
        </Link>
        <ul>
          <li>
            <BsSearch />
          </li>
          <li onClick={() => navigate("/user/note/favorites")}>Favorites</li>
          <li onClick={() => navigate("/user/note/profile")}>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

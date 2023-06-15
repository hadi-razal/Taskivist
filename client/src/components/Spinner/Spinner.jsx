import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Spinner.css"

const Spinner = ({ path = "/login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const intervel = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(intervel);
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="spinner-container"
        style={{ height: "100vh" }}
      >
        <h1 >Redirecting To You In {count}</h1>
        <div>
          <span>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;

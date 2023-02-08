import React from "react";
import "./../../style/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="main">
      <h2>hover the mouse in the Black Screen</h2>
      <div className="card">
        <div className="text">
          <div className="main">
            <div><p className="jarvis"> React V-17.0.2 </p></div>
            <Link to="/home">
              <button className="btns">Home</button>
            </Link>

            <Link to="/about">
              <button className="btns">About</button>
            </Link>
            <Link to="/product">
              <button className="btns">Product</button>
            </Link>
            <Link to="/task">
              <button className="btns">task</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

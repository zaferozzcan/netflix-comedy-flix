import React from "react";
import "../../styles/Navbar.css";
import logo from "../../img/nf_logo.png";

export default function Navbar() {
  return (
    <div className="nav">
      <img className="nav_logo" src={logo} alt="nf_logo" />
    </div>
  );
}

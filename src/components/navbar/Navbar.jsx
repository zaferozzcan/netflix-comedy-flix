import React, { useState, useEffect } from "react";
import "../../styles/Navbar.css";
import logo from "../../img/nf_logo.png";

export default function Navbar() {
  //   const [show, setShow] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         setShow(true);
  //       } else {
  //         setShow(false);
  //       }
  //     });
  //     return window.removeEventListener("scroll", () => {});
  //   }, []);
  return (
    //   ${show && "nav_black"}
    <div className={`nav`}>
      <img className="nav_logo" src={logo} alt="nf_logo" />
    </div>
  );
}

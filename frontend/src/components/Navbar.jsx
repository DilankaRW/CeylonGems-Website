import React from "react";
import "./NavbarStyles.css";
import menuIcon from "./menubar.png";

export const Navbar = () => {
  return (
    <div className="navcontainer">
      <nav>
        <input type="checkbox" id="check" title="checkbox" />
        <label for="check" className="checkbtn">
          <i>
            <img src={menuIcon} width="35px" alt="menu" />
          </i>
        </label>
        <label className="logo">Ceylon Gems</label>
        <ul>
          <li>
            <a className="active">Home</a>
          </li>
          <li>
            <a>Gems</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

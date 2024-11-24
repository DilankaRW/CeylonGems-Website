import React, { useState } from "react";
import "./NavbarStyles.css";
import menubar from "./gem-blue.png";
import menuclose from "./gem-red.png";

export const Navbar = () => {
  const [menuImage, setMenuImage] = useState(menubar);
  const [activeLink, setActiveLink] = useState();

  const handleCheckboxChange = (event) => {
    setMenuImage(event.target.checked ? menuclose : menubar);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="navcontainer">
      <nav>
        <input
          type="checkbox"
          id="check"
          title="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check" className="checkbtn">
          <i>
            <img src={menuImage} width="35px" alt="menu" />
          </i>
        </label>
        <label className="logo">Ceylon Gems</label>
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#gems"
              className={activeLink === "gems" ? "active" : ""}
              onClick={() => handleLinkClick("gems")}
            >
              Gems
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeLink === "services" ? "active" : ""}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

import React, { useState } from "react";
import "./NavbarStyles.css";
import menubar from "./gem-blue.png";
import menuclose from "./gem-red.png";

export const Navbar = () => {
  const [menuImage, setMenuImage] = useState(menubar);
  const [activeLink, setActiveLink] = useState();

  const handleCheckboxChange = (event) => {
    setMenuImage(event.target.checked ? menuclose : menubar);

    // if (event.target.checked) {
    //   setMenuImage(menuclose);
    // } else {
    //   setMenuImage(menubar);
    // }
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
            <a>Home</a>
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

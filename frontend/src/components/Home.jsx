import React from "react";
import "./HomeStyles.css";
import Homeimg from "./HomeImg.jpg";

export const Home = () => {
  return (
    <div className="main">
      <img src={Homeimg} alt="HerpImg" />
    </div>
  );
};
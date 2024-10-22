import React, { useEffect } from "react";
import "./HomeStyles.css";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";

export const Home = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    const img5 = document.getElementById("img5");
    const img6 = document.getElementById("img6");
    const img7 = document.getElementById("img7");
    const img8 = document.getElementById("img8");

    const handleScroll = () => {
      let value = window.scrollY;

      text.style.marginTop = value * -1.5 + "px";

      // img1.style.top = value * 1.5 + "px";
      img1.style.left = value * -1.5 + "px";

      img2.style.top = value * -1.5 + "px";
      img2.style.left = value * -1.5 + "px";

      img3.style.left = value * -1.5 + "px";
      img3.style.top = value * -2 + "px";

      img4.style.top = value * -1 + "px";

      img5.style.left = value * 1.5 + "px";
      img5.style.top = value * -2 + "px";

      img6.style.top = value * -1.5 + "px";
      img6.style.left = value * 1.5 + "px";

      // img7.style.top = value * 1.5 + "px";
      img7.style.left = value * 1.5 + "px";

      img8.style.top = value * -2 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="parallax">
      <img src={img8} alt="" id="img8" />

      <img src={img1} alt="" id="img1" />
      <img src={img2} alt="" id="img2" />
      <img src={img3} alt="" id="img3" />
      <img src={img4} alt="" id="img4" />
      <img src={img5} alt="" id="img5" />
      <img src={img6} alt="" id="img6" />
      <h2 id="text">Under Construction</h2>
      <img src={img7} alt="" id="img7" />
    </div>
  );
};

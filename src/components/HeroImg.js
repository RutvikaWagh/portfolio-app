import  "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/istockphoto-1075599562-612x612.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="new">
      <div className="content">
        <p>HI, I'M RUTVIKA WAGH</p>
        <h1> A React Developer. </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroImg;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pexels-godisable-jacob-1943465.jpg ";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Goed Fashion</h1>
        <p>Stylish bags for your fashion craving</p>
        <Link to="/collection">
          <button> SHOP NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

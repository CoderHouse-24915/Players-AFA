import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import poster from "./poster.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={poster} alt="poster" width={400} />
      </Link>
    </div>
  );
};

export default Header;

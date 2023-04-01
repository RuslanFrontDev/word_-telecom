import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.svg";
import wt from "../../logo/wt.svg";
import telecom2 from "../../logo/wt2.svg"
const WorldTelecomIcon = () => {
  return (
    <div className="center-icon">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
        <img className="wt-num-logo" src={telecom2} alt="" />
        
        <h5 className="wt-num-logo-h"> | 255</h5>
      </Link>
    </div>
  );
};

export default WorldTelecomIcon;

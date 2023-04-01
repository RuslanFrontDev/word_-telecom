import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.svg";
import wt from "../../logo/wt.svg";
const HeaderTop = () => {
  return (
    <div className="container">
      <div className="header-top-in">
        <div className="header-top">
          <div className="header-top-logo">
            <Link to="/">
              <img className="logo" src={logo} alt=""/>
              <img className="wt-num-logo" src={wt} alt="" />
            </Link>
            |
            <div className="wt-num">
              <Link className="wt-tel" to="tel:*2555">
                <span className="wt-number">*2555</span>
              </Link>
            </div>
          </div>
          <div className="wt-about">
            <ul className="wt-about-category">
              <li>
                <Link to="/korporativ-satishlar">
                  <span className="wt-about-span">Korporativ-satışlar</span>
                </Link>
              </li>
              <li>
                <Link to="/elaqe">
                  <span className="wt-about-span">Mağazalarımız</span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className="wt-about-span">Bloq</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

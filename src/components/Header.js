import React from "react";
import HeaderBottom from "./header/HeaderBottom";
import HeaderTop from "./header/HeaderTop";

const Header = () => {
  return (
    <div className="general-header">
        <HeaderTop />
        <HeaderBottom />
    </div>
  );
};

export default Header;

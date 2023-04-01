import React from "react";
import HeaderCategory from "./HeaderCategory";
import HeaderCompany from "./HeaderCompany";
import HeaderSearch from "./HeaderSearch";
import WorldTelecomIcon from "./WorldTelecomIcon";
const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-bottom-include">
          <HeaderCategory />
          <HeaderSearch />
          <HeaderCompany />
          <WorldTelecomIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;

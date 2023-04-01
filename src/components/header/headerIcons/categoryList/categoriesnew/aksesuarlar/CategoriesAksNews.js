import React from "react";
import AksesuarAmount from "./AksesuarAmount";
import ElektronicClock from "./ElektronicClock";
import Other from "./Other";

const CategoriesAksNews = () => {
  return (
    <div>
      <div className="categories-news-aks">
        <div className="categories-news-aks-masonary">
          <div className="categories-news-aks-masonaryColumn">
            <AksesuarAmount />
            <ElektronicClock />
            <Other />
          </div>
        </div>
        <div>bos</div>
      </div>
    </div>
  );
};

export default CategoriesAksNews;

import React from "react";
import { Icon } from "../../../../../icons/Icon";
import CategoriesAksNews from "../categoriesnew/aksesuarlar/CategoriesAksNews";

const CategoryListAks = () => {
  return (
    <div className="categories-list">
      <div className="categories-list-full">
        <div className="categories-list-flex">
          <div className="categories-icon-aks">
            <Icon name="categoriesAks" />
          </div>
          <div className="categoriesAks-desc">
            <span className="categories_text">Qadjet və aksesuarlar</span>
          </div>
        </div>
      </div>
      <div className="categoriesAks-news">
        <CategoriesAksNews />
      </div>
    </div>
  );
};

export default CategoryListAks;

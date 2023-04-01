import React from "react";
import { Icon } from "../../../../icons/Icon";
import CategoriesTelNews from "../../../header/headerIcons/categoryList/categoriesnew/telefonsatislari/CategoriesTelNews";
import CategoryListAks from "../../../header/headerIcons/categoryList/category-ul-li/CategoryListAks";
import CategoryListComp from "../../../header/headerIcons/categoryList/category-ul-li/CategoryListComp";
import CategoryListNumber from "../../../header/headerIcons/categoryList/category-ul-li/CategoryListNumber";
import CategoryListTechnika from "../../../header/headerIcons/categoryList/category-ul-li/CategoryListTechnika";
import CategoryListTv from "../../../header/headerIcons/categoryList/category-ul-li/CategoryListTv";


const ContentCategoriesList = () => {
  return (
    <div>
      <div className="categories">
        <ul className="categoryList-ul">
          <li>
            <div className="categories-list">
              <div className="categories-list-full">
                <div className="categories-list-flex">
                  <div className="categories-icon-desc">
                    <Icon name="categoriesTel" />
                  </div>
                  <div className="categoriesTel-desc">
                    <span className="categories_text">
                      Telefon və planşetlər
                    </span>
                  </div>
                </div>
              </div>
              <div className="categoriesTel-news">
                <CategoriesTelNews />
              </div>
            </div>
          </li>
          <li>
            <CategoryListAks />
          </li>
          <li>
            <CategoryListTv />
          </li>
          <li>
            <CategoryListComp />
          </li>
          <li>
            <CategoryListTechnika />
          </li>
          <li>
            <CategoryListNumber />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentCategoriesList;

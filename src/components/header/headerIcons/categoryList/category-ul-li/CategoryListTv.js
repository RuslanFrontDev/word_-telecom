import React from 'react'
import { Icon } from '../../../../../icons/Icon';
import CategoriesTvNews from '../categoriesnew/categoriesTelevision/CategoriesTvNews';

const CategoryListTv = () => {
  return (
    <div className="categories-list">
      <div className="categories-list-full">
        <div className="categories-list-flex">
          <div className="categories-icon-tv">
            <Icon name="categoriesTv" />
          </div>
          <div className="categoriesTv-desc">
            <span className="categories_text">Tv, Audio və Əyləncə </span>
          </div>
        </div>
      </div>
      <div className="categoriesTv-news">
      <CategoriesTvNews/>
      </div>
    </div>
  );
}

export default CategoryListTv
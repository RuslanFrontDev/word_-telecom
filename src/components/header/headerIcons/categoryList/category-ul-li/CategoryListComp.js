import React from 'react'
import { Icon } from '../../../../../icons/Icon';
const CategoryListComp = () => {
  return (
    <div className="categories-list">
      <div className="categories-list-full">
        <div className="categories-list-flex">
          <div className="categories-icon-tv">
            <Icon name="categoriesComp" />
          </div>
          <div className="categoriesTv-desc">
            <span className="categories_text">Komputer texnikasi </span>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default CategoryListComp
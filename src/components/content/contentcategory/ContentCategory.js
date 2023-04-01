import React from 'react'
import ContentCategoriesList from './contentcategorieslist/ContentCategoriesList'

const ContentCategory = () => {
  return (
    <div className='content-category'>
      <div className='index-container'>
        <div className='contentcategories-margin'>
          <div className='contentcategories-list'>
            <ContentCategoriesList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCategory
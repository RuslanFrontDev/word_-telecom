import React from 'react'
import ContentCategory from './content/contentcategory/ContentCategory'
import ContentData from './content/contentdata/ContentData'

const Content = () => {
  return (
    <div className='content-layout'>
      <div className='container'>
        <div className='content-root'>
          <ContentCategory/>
          <ContentData/>
        </div>
      </div>
    </div>
  )
}

export default Content
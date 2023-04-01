import React from 'react'
import ContentBottomAdvertising from './botttomadvertising/ContentBottomAdvertising'
import ContentMoreSale from './moresale/ContentMoreSale'
import ContentNewProducts from './newproducts/ContentNewProducts'
import ContentSwiper from './swiper/ContentSwiper'
const ContentData = () => {
  return (
    <div className='contentData-layout'>
      <ContentSwiper/>
      <ContentMoreSale/>
      <ContentNewProducts/>
      <ContentBottomAdvertising/>
    </div>
  )
}

export default ContentData
import React from 'react'
import HomeTelephone from './HomeTelephone'
import PlancetteAmount from './PlancetteAmount'
import TelephoneAmount from './TelephoneAmount'

const CategoriesTelNews = () => {
  return (
    <div>
      <div className='categories-news-tel'>
         <div className='categories-news-tel-masonary'>
            <div className='categories-news-tel-masonaryColumn'>
               <TelephoneAmount/>
               <PlancetteAmount/>
               <HomeTelephone/>
            </div>
         </div>
         <div>bos</div>
      </div>
    </div>
  )
}

export default CategoriesTelNews
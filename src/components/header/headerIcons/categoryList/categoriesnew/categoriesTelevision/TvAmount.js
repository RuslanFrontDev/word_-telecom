import React from 'react'
import { Link } from 'react-router-dom'
import TvList from './TvList'

const TvAmount = () => {
  return (
    <div className='tv-amount'>
      <div className='tv-amount-link'>
         <Link to="/mehsullar/mobil-telefonlar" >Televizor</Link>
      </div>
      <TvList/>
      
    </div>
  )
}

export default TvAmount
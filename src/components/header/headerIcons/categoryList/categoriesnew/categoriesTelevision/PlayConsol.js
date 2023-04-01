import React from 'react'
import { Link } from 'react-router-dom'
import TvList from './TvList'

const PlayConsol = () => {
  return (
    <div className='tv-amount'>
      <div className='tv-amount-link'>
         <Link to="/mehsullar/mobil-telefonlar" >Oyun Konsollari</Link>
      </div>
      <TvList/>
      
    </div>
  )
}

export default PlayConsol
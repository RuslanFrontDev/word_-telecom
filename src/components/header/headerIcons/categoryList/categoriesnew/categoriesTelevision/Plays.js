import React from 'react'
import { Link } from 'react-router-dom'
import TvList from './TvList'

const Plays = () => {
  return (
    <div className='tv-amount'>
      <div className='tv-amount-link'>
         <Link to="/mehsullar/mobil-telefonlar" >Oyunlar</Link>
      </div>
      <TvList/>
      
    </div>
  )
}

export default Plays
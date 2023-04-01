import React from 'react'
import { Link } from 'react-router-dom'
import PlancetteList from './PlancetteList'

const PlancetteAmount = () => {
  return (
   <div className='planset-amount'>
   <div className='planset-amount-link'>
      <Link to="/mehsullar/plansetler" >Planşetlər</Link>
   </div>
   <PlancetteList/>
   
 </div>
  )
}

export default PlancetteAmount
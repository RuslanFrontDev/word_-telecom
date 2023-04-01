import React from 'react'
import { Link } from 'react-router-dom'
import TelephoneList from './TelephoneList'


const TelephoneAmount = () => {
  return (
    <div className='tel-amount'>
      <div className='tel-amount-link'>
         <Link to="/mehsullar/mobil-telefonlar" >Mobil telefonlar</Link>
      </div>
      <TelephoneList/>
      
    </div>
  )
}

export default TelephoneAmount
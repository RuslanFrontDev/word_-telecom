import React from 'react'
import { Link } from 'react-router-dom'
import HomeTelephoneList from './HomeTelephoneList'

const HomeTelephone = () => {
  return (
   <div className='homeTel-amount'>
   <div className='homeTel-amount-link'>
      <Link to="/mehsullar/ev-telefonlari" >Ev telefonları</Link>
   </div>
   <HomeTelephoneList/>
   
 </div>
  )
}

export default HomeTelephone
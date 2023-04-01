import React from 'react'
import { Link } from 'react-router-dom'

const HomeTelephoneList = () => {
  return (
   <div className="homeTelephone-list">
   <ul>
     <li>
       <Link to="/mehsullar/ev-telefonlari?brands=Panasonic">Apple</Link>
     </li>
     <li>
       <Link to="/mehsullar/ev-telefonlari?brands=Panasonic">Apple</Link>
     </li>
     <li>
       <Link to="/mehsullar/ev-telefonlari?brands=Panasonic">Apple</Link>
     </li>
   </ul>
 </div>
  )
}

export default HomeTelephoneList
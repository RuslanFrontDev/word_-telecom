import React from 'react'
import { Link } from 'react-router-dom'

const AksesuarList = () => {
   return (
      <div className="aksesuar-list">
      <ul>
        <li>
          <Link to="/mehsullar/mobil-planset?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-planset?brands=Apple">Apple</Link>
        </li>
        <li>
          <Link to="/mehsullar/mobil-planset?brands=Apple">Apple</Link>
        </li>
      </ul>
    </div>
     )
}

export default AksesuarList
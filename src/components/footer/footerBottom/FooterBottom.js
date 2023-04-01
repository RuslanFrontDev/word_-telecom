import React from 'react'
import { Link } from 'react-router-dom'
const FooterBottom = () => {
  return (
    <div className='footerbottom'>
      <div>
        <p>Bütün hüquqlar qorunur © World Telecom 1998-2023</p>
      </div>
      <div>
        <ul className='footernavigation-flex'>
          <li>
            <Link to="https://www.facebook.com">
              <i className='fab fa-facebook'></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <i className='fab fa-instagram'></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com">
              <i className='fab fa-youtube'></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterBottom
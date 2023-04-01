import React from 'react'
import FooterNavigation from './footernav/FooterNavigation'
import logo from "../../../logo/worldtel.svg"
import { Link } from 'react-router-dom'
const FooterBox = () => {
  return (
    <div className='footer-box'>
      <div className='footer-info'>
         <ul>
            <li className='footer-webLogo'>
               <div><h3>worldTelecom</h3></div>
            </li>
            <li>
               <Link to="tel:*2555">
                  <span className='wt-number2555'>*2555</span>
               </Link>
            </li>
            <li>
              <Link to="mailto:info@w-t.az">
                  <span className='wt-number2555'>info@w-t.az</span>
               </Link>
            </li>
            <li>
               <div>
                  <span>Magazalar</span>
               </div>
            </li>
            <li>
               <div>
                  <span>Kooperativ satislar</span>
               </div>
            </li>
            <li>
               <div>
                  <span>haqqimizda</span>
               </div>
            </li>
            <div className='footerweb-list'>
               <ul>
                  <li>
                    <Link to="/NVIDIA">
                      <span>NVIDIA</span>
                    </Link>
                   
                  </li>
                  <li>
                  <Link to="/applyForAjob">
                      <span>vakansiyalar</span>
                    </Link>
                  </li>
                  <li className='birbank'>
                  <Link to="https://www.kapitalbank.az/cards/TaksitCards">
                      <span>BirBank Karti elave edin</span>
                    </Link>
                  </li>
               </ul>
            </div>
            <li></li>
         </ul>
      </div>
      <FooterNavigation/>
    </div>
  )
}

export default FooterBox
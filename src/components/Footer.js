import React from 'react'
import FooterBottom from './footer/footerBottom/FooterBottom'
import FooterBox from './footer/footerBox/FooterBox'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-maxWidth'>
        <FooterBox/>
        <FooterBottom/>
      </div>
    </footer>
  )
}

export default Footer
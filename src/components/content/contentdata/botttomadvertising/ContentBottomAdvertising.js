import React from 'react'
import { Link } from 'react-router-dom'

const ContentBottomAdvertising = () => {
  return (
    <div className='contentAdvertising'>
      <div className='contentAdvertising-title'>
        <h3>Partnyorlar</h3>
      </div>
      <div className='contentAdvertising-advertisingContainer'>
        <div className='advertising-box'>
          <Link to="/apple">
            <img src='https://www.w-t.az/images/brands/apple.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/samsung">
            <img src='https://www.w-t.az/images/brands/samsung.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/xiaomi">
            <img src='https://www.w-t.az/images/brands/xiaomi.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/harman">
            <img src='https://www.w-t.az/images/brands/jbl.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/marshall">
            <img src='https://www.w-t.az/images/brands/marshall.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/tcl">
            <img src='https://www.w-t.az/images/brands/tcl.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/porodo">
            <img src='https://www.w-t.az/images/brands/prodo.svg' alt=""/>
          </Link>
        </div>
        <div className='advertising-box'>
          <Link to="/sony">
            <img src='https://www.w-t.az/images/brands/sony.svg' alt=""/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContentBottomAdvertising
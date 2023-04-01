import React from 'react'
//components
import ProfileIcon from './headerIcons/ProfileIcon';
import LikeIcon from './headerIcons/LikeIcon';
import CartIcon from './headerIcons/CartIcon'

const HeaderBottomIcon = () => {
  return (
    <div className='header-bottom-icons'>
      <ProfileIcon/>
      <LikeIcon/>
      <CartIcon/>
    </div>
  )
}

export default HeaderBottomIcon
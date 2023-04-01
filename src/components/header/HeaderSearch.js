import React from 'react'
import HeaderSearchInput from './HeaderSearchInput'
import { Icon } from '../../icons/Icon'
const HeaderSearch = () => {
  return (
    <div className='header-search'>
      <div className='header-search-carts'>
        <div className='header-search-include'>
          <HeaderSearchInput/>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearch
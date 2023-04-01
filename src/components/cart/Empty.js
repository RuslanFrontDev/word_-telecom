import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../icons/Icon'

const Empty = () => {
  return (
    <div className='empty'>
      <div className='emptyBasket'>
         <div>
            <Icon name="sebet"/>
         </div>
         <p>Sebetinizde mehsul yoxdur</p>
         <Link to="/">Ana Sehife</Link>
      </div>
    </div>
  )
}

export default Empty
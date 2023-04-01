import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../../icons/Icon'


const NowBuyReturnHome = () => {
  return (
    <div className='returnHome'>
      <Link to="/">Ana səhifə</Link>
      <div className='homedat'>
         <Icon name="cartDat"/>
      </div>
      <h5>Səbətim</h5>
    </div>
  )
}

export default NowBuyReturnHome
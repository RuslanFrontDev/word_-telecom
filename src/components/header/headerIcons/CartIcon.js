import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '../../../icons/Icon'
import { getTotals } from '../../../redux/stores/features/cartSlice'
const CartIcon = () => {
  const dispatch=useDispatch()
  const cart = useSelector((state) => state.cart);
  useEffect(()=>{
    dispatch(getTotals())
  },[cart, dispatch])
  const {cartTotalQuantity} = useSelector((state) => state.cart);
  return (
    <div className='header-cart-icon'>
      <Link to="/cart">
      <span className='cart-length'>{cartTotalQuantity>0?cartTotalQuantity:""}</span>
      <Icon name="cart"/>
      </Link>
     
    </div>
  )
}

export default CartIcon
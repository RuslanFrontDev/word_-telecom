import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import Empty from '../components/cart/Empty'
import ProductContainer from '../components/cart/ProductContainer'
import ReturnHomeComponent from '../components/cart/ReturnHomeComponent'

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <div className='cartContent'>
      <Helmet>
        <title>Səbətiniz</title>
        <meta name='description' content="səbətiniz description"/>
      </Helmet>
      <div className='container'>
        <ReturnHomeComponent/>
        <p className='sebet'>Səbətim</p>
        {cart.cartItems.length === 0? (<Empty/>):( <ProductContainer/>)}
        {/* <ProductContainer/> */}
       
      </div>
    </div>
  )
}

export default Cart
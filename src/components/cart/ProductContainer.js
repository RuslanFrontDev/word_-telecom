import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../icons/Icon";
import { addToCart, decreaseCart, getTotals, removeFromcart } from "../../redux/stores/features/cartSlice";

const ProductContainer = () => {
  const cart = useSelector((state) => state.cart);
  const {cartTotalAmount} = useSelector((state) => state.cart);
  const {cartTotalEndirim} = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromcart(cartItem))
  }
  const handleDecreaseCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) =>{
    dispatch(addToCart(cartItem))
  }
  useEffect(()=>{
    dispatch(getTotals())
  },[cart, dispatch])
  return (
    <div className="productContainer">
      <div className="priceUpDown">
        <div className="priceUpDown-container">
          <div>
            {cart.cartItems.map((cartItem) => (
              <div key={cartItem.id} className="cart-priceUpDown">
                <button onClick={()=>{handleRemoveFromCart(cartItem)}} className="cart-close">
                  <Icon name="cartClose" />
                </button>
                <Link to="/allsdlls">
                  <div className="priceUpDown-img">
                    <img src={cartItem.imageUrl} alt="" />
                  </div>
                </Link>
                <div className="cartPriceInfo">
                  <Link to="wlmdl">
                    <div className="cartPriceInfo-name">
                      <p>{cartItem.productName}</p>
                    </div>
                  </Link>
                  <Link to="wlmdl">
                    <div className="cartPriceInfo-current">
                      <div className="cartPriceInfo-currentPrice">
                        <span>{cartItem.price}</span>
                        <Icon name="cartManat" />
                      </div>
                    </div>
                  </Link>
                  <Link to="wlmdl">
                    <div className="cartPriceInfo-credit">
                      <div className="cartPriceInfo-creditinfo">
                        <span>Faizsiz kredit</span>
                      </div>
                      <div className="cartPriceInfo-creditPrice">
                        <div>
                          <span>Cemi</span>
                        </div>
                        <div>
                          <span>{cartItem.price}</span>
                          <Icon name="cartManat" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="cartPriceInfo-count">
                    <div className="gb">
                      <p>Yaddas</p>
                      <span>12GB</span>
                    </div>
                    <div>
                      <div className="cartPriceInfo-CountUpDown">
                        <div className="cartPriceInfo-counterButtons">
                          <div className="counterDown">
                            <button onClick={()=>handleDecreaseCart(cartItem)}>
                              <Icon name="counterDown" />
                            </button>
                          </div>
                          <div className="counterCount">{cartItem.cartQuantity}</div>
                          <div className="counterUp">
                            <button onClick={()=>handleIncreaseCart(cartItem)}>
                              <Icon name="counterUp" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* sebetim */}
      <div className='SumPrice'>
      <div className='basket-summary'>
         <div className='basket-summaryInfo'>
            <p className='basket-name'>Mehsullar</p>
            <div className='basket-cartTotalPrice'>
               <span>Total qiymet:</span>
               <div className='totalPriceBasket'>
                  <span>{cartTotalAmount}</span>
                  <div className='basketManat'>
                     <Icon name="cartManat"/>
                  </div>
               </div>
            </div>
            <div className='basket-cartTotalPrice'>
               <span>Endirim:</span>
               <div className='totalPriceBasket'>
                  <span>{cartTotalEndirim}</span>
                  <div className='basketManat'>
                     <Icon name="cartManat"/>
                  </div>
               </div>
            </div>
         </div>
         <div className='basketOrderBtnContainer'>
            <div className='basket-totalPriceBottomContainer'>
               <span>Toplam odenilecek:</span>
               <div className='basket-totalPriceBasket'>
                  <span>{cartTotalAmount}</span>
                  <div className='manatsvg'>
                     <Icon name="cartManat"/>
                  </div>
               </div>
            </div>
            <button>Sifarisi tamamla</button>
         </div>
      </div>
    </div>
    </div>
  );
};

export default ProductContainer;

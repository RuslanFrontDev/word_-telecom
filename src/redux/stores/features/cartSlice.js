import { createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
const initialState = {
  cartItems: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalEndirim: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.custom(
          <div className="info"><i className="fa-solid fa-circle-info"></i> ${action.payload.productName}-in sayını artırırsınız</div>,
          {
            posstion: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.productName} səbətinizə əlavə olundu`, {
          posstion: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    removeFromcart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems=nextCartItems
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
      toast.error(`${action.payload.productName} səbətinizdən silindi`, {
         posstion: "bottom-left",
       });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
     if(state.cartItems[itemIndex].cartQuantity > 1){
      state.cartItems[itemIndex].cartQuantity-=1;
      toast.custom(<div className="info"><i className="fa-solid fa-circle-info"></i> ${action.payload.productName}-in sayını azaldırsınız!</div>, {
        posstion: "bottom-left",
      });
     }else if(state.cartItems[itemIndex].cartQuantity === 1){
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems=nextCartItems
      toast.error(` ${action.payload.productName} səbətinizdən silindi`, {
        posstion: "bottom-left",
      });
     }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
      
    },
    getTotals(state, action){
      let {total, endirim, quantity}=state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price, endirim, cartQuantity}= cartItem
        const itemTotal = price*cartQuantity
        const itemEndirim = endirim*cartQuantity
        cartTotal.total+=itemTotal
        cartTotal.endirim+=itemEndirim
        cartTotal.quantity +=cartQuantity
        return cartTotal
      }, {
        total: 0,
        endirim: 0,
        quantity: 0
      })
      state.cartTotalQuantity = quantity;
      state.cartTotalEndirim = endirim;
      state.cartTotalAmount = total
    }
  },
});
export const { addToCart, removeFromcart, decreaseCart, getTotals} = cartSlice.actions;
export default cartSlice.reducer;

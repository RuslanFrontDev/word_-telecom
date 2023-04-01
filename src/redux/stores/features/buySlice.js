import { createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
const initialState = {
  nowbuyItems: []
};
const buySlice = createSlice({
  name:"nowbuy",
  initialState,
  reducers:{
    addToNowBuyCart(state, action){
      const itemIndex = state.nowbuyItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0){
        toast.error(
          ` ${state.nowbuyItems[itemIndex].productName} əlavə edilib`);
      }else{
        const tempProduct = { ...action.payload};
        state.nowbuyItems.push(tempProduct);
        toast.success(`${action.payload.productName} likeCart-a əlavə olundu`);
      }
    }
  }
})
export const {addToNowBuyCart} = buySlice.actions;
export default buySlice.reducer
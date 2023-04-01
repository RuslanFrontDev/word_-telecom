import { createSlice } from "@reduxjs/toolkit";
import  toast  from "react-hot-toast";
const initialState = {
   likeItems: []
 };
 const likeSlice = createSlice({
   name: "like",
   initialState,
   reducers: {
      addToLikeCart(state, action) {
         const itemIndex = state.likeItems.findIndex(
           (item) => item.id === action.payload.id
         );
         if (itemIndex >= 0) {
           toast.error(
             ` ${state.likeItems[itemIndex].productName} əlavə edilib`,
             {
               posstion: "bottom-left",
             }
           );
         //   return false
         } else {
           const tempProduct = { ...action.payload};
           state.likeItems.push(tempProduct);
           toast.success(`${action.payload.productName} likeCart-a əlavə olundu`, {
             posstion: "bottom-left",
           });
         }
       },
   }
 })

export const { addToLikeCart} = likeSlice.actions;
export default likeSlice.reducer;


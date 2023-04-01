import { configureStore } from "@reduxjs/toolkit";
import moresaleReducer from "./features/moresale";
import searchReducer from "./features/searchInput";
import cartReducer from "./features/cartSlice";
import likeReducer from "./features/likeSlice";
import authReducer from "./features/auth";
import nowbuyReducer from "./features/buySlice";
export const store = configureStore({
  reducer: {
    moresale: moresaleReducer,
    search: searchReducer,
    cart:cartReducer,
    like:likeReducer,
    auth:authReducer,
    nowbuy:nowbuyReducer
  },
});

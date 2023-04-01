import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
};

const searchInput = createSlice({
  name: "moresale-products",
  initialState,
  reducers: {
    searchProductName: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const {searchProductName} = searchInput.actions
export default searchInput.reducer;

 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  moreproducts: [],
  filteredDatas: [],
  loading: false,
  error: "",
};
export const moreproductsFetch = createAsyncThunk(
  "moreproductsFetch",
  async () => {
    const response = await axios.get("http://localhost:9000/moresaleproducts");
    return response?.data;
  }
);
const moresale = createSlice({
  name: "moresale-products",
  initialState,
  reducers: {
    filterData: (state, action) => {
      //  const filteredData = moreproductsData.moreproducts.filter((product) => {
  //    return product.productName.toLowerCase().includes(search.toLowerCase());
  //  });
      state.moreproducts = state.filteredDatas.filter(
        (product) =>  product.productName?.toLowerCase().includes(action.payload?.toLowerCase())
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(moreproductsFetch.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(moreproductsFetch.fulfilled, (state, action) => {
      state.moreproducts = action.payload;
      state.filteredDatas = action.payload
      state.loading = false;
    });
    builder.addCase(moreproductsFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error Fetching Data";
    });
  },
});
export const { filterData }= moresale.actions
export default moresale.reducer;



//action tiplere prefiks olaraq istifade olunur
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   moreproducts: [],
//   filteredDatas: [],
//   loading: false,
//   error: "",
// };
// export const moreproductsFetch = createAsyncThunk(
//   "moreproductsFetch",
//   async () => {
//     const response = await axios.get("http://localhost:9000/moresaleproducts");
//     return response?.data;
//   }
// );
// const moresale = createSlice({
//   name: "moresale-products",
//   initialState,
//   reducers: {
//     filterData: (state, action) => {
//       //  const filteredData = moreproductsData.moreproducts.filter((product) => {
//   //    return product.productName.toLowerCase().includes(search.toLowerCase());
//   //  });
//       state.filteredDatas = state.moreproducts.filter(
//         (product) =>  product.productName?.toLowerCase().includes(action.payload?.toLowerCase())
//         );
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(moreproductsFetch.pending, (state, action) => {
//       state.loading = true;
//       state.error = "";
//     });
//     builder.addCase(moreproductsFetch.fulfilled, (state, action) => {
//       state.moreproducts = action.payload;
//       state.filteredDatas = action.payload
//       state.loading = false;
//     });
//     builder.addCase(moreproductsFetch.rejected, (state, action) => {
//       state.loading = false;
//       state.error = "Error Fetching Data";
//     });
//   },
// });
// export const { filterData }= moresale.actions
// export default moresale.reducer;

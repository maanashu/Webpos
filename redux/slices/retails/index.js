import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainProductData: {},
 
};

export const retailsSlice = createSlice({
  name: "retails",
  initialState,
  reducers: {
    getMainProduct: (state) => {
      state.loading = true;
    },
    setMainProduct: (state, action) => {
      state.loading = false;
      state.mainProductData = action?.payload;
    },
  
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
    getMainProduct,
    setMainProduct,
 
} = retailsSlice.actions;

export const selectRetailData = (state) => state.retails;

export default retailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarCountData: {},
  loading: false,
};

export const shippingSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getShippingsSidebarCount: (state) => {
      state.loading = true;
    },
    setSidebarCountData: (state, action) => {
      state.loading = false;
      state.sidebarCountData = action?.payload;
    }
},
});

// Action creators are generated for each case reducer function
export const {
    getShippingsSidebarCount,
    setSidebarCountData
  } = shippingSlice.actions;
  
  export const selectsShippingData = (state) => state.customers;
  
  export default shippingSlice.reducer;
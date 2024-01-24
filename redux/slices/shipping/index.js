import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarCountData: {},
  loading: false,
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    getShippingsSidebarCount: (state) => {
      state.loading = true;
    },
    setSidebarCountData: (state, action) => {
      state.loading = false;
      state.sidebarCountData = action?.payload;
    },
    getShippingGraphData: (state) => {
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getShippingsSidebarCount,
  setSidebarCountData,
  getShippingGraphData,
} = shippingSlice.actions;

export const selectsShippingData = (state) => state.shipping;
export default shippingSlice.reducer;

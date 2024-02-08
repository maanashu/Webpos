import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  sidebarCountData: {},
  orderList: [],
  loading: false,
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    getShippingsSidebarCount: (state) => {
      state.loading = true;
    },
    setSidebarCountData: (state, action) => {
      state.loading = false;
      state.sidebarCountData = action?.payload;
    },
    changeStatusOfOrder: (state) => {
      state.loading = true;
    },
    getShippingsStatus: (state) => {
      state.loading = true;
    },
    getShippingstodayStatus: (state) => {
      state.loading = true;
    },
    getShippingGraphData: (state) => {
      state.loading = true;
    },
    getOrderStat: (state) => {
      state.loading = true;
    },
    getOrdersList: (state) => {
      state.loading = true;
    },
    setOrdersList: (state, action) => {
      state.loading = true;
      state.orderList = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getShippingsSidebarCount,
  setSidebarCountData,
  changeStatusOfOrder,
  getShippingsStatus,
  getShippingstodayStatus,
  getShippingGraphData,
  getOrderStat,
  getOrdersList,
  setOrdersList,
} = shippingSlice.actions;

export const selectsShippingData = (state) => state.shipping;
export default shippingSlice.reducer;

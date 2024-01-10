import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  orderListLoading: false,
  orderList: [],
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    getTodayOrderCount: (state) => {
      state.loading = true;
    },
    setTodayOrderCount: (state, action) => {
      state.loading = false;
    },
    getCurrentOrderStatus: (state) => {
      state.loading = true;
    },
    setCurrentOrderStatus: (state, action) => {
      state.loading = false;
    },
    getOrderStat: (state) => {
      state.loading = true;
    },
    setOrderStat: (state, action) => {
      state.loading = false;
    },
    getOrdersList: (state) => {
      state.orderListLoading = true;
    },
    setOrdersList: (state, action) => {
      state.orderListLoading = false;
      state.orderList = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getTodayOrderCount,
  setTodayOrderCount,
  getCurrentOrderStatus,
  setCurrentOrderStatus,
  getOrderStat,
  setOrderStat,
  getOrdersList,
  setOrdersList,
} = deliverySlice.actions;

export const deliveryData = (state) => state.delivery;

export default deliverySlice.reducer;

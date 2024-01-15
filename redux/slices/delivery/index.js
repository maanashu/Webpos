import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  orderListLoading: false,
  drawerOrderCountLoading: false,
  orderDetailLoading: false,
  orderList: [],
  drawerOrderCount: [],
  orderDetail: [],
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

    getDrawerOrdersCount: (state) => {
      state.drawerOrderCountLoading = true;
    },
    setDrawerOrdersCount: (state, action) => {
      state.drawerOrderCountLoading = false;
      state.drawerOrderCount = action?.payload;
    },
    getOrderDetailById: (state) => {
      state.orderDetailLoading = true;
    },
    setOrderDetailById: (state, action) => {
      state.orderDetailLoading = false;
      state.orderDetail = action?.payload;
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
  getDrawerOrdersCount,
  setDrawerOrdersCount,
  getOrderDetailById,
  setOrderDetailById,
} = deliverySlice.actions;

export const deliveryData = (state) => state.delivery;

export default deliverySlice.reducer;

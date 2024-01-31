import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    getProfitsData: (state) => {
      state.loading = true;
    },
    setProfitData: (state, action) => {
      state.loading = false;
    },
    orderAnalyticsData:  (state) => {
      state.loading = true;
    },
    setOrderData: (state, action) => {
      state.loading = false;
    },
    totalOrderAnalyticsDataApi:(state) => {
      state.loading = true;
    },
    setTotalOrderAnalyticsData:(state) => {
      state.loading = false;
    },
    totalAnalyticsProductSoldData:(state) => {
      state.loading = true;
    },
    setTotalAnalyticsProductSoldData:(state) => {
      state.loading = false;
    },
    totalInventoryDataApi:(state) => {
      state.loading = true;
    },
    setTotalInventoryData:(state) => {
      state.loading = false;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getProfitsData,
  totalInventoryDataApi,
  setTotalInventoryData,
  setProfitData,
  orderAnalyticsData,
  setOrderData,
  totalOrderAnalyticsDataApi,
  setTotalOrderAnalyticsData,
  totalAnalyticsProductSoldData,
  setTotalAnalyticsProductSoldData
} = analyticsSlice.actions;

export const analyticsDetails = (state) => state.analytics;

export default analyticsSlice.reducer;
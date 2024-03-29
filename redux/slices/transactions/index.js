import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  totalTraDetail: {},
  totalTraType: [],
  totalTra: {},
  notifications: [],
  loading: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    getTotalTraDetail: (state) => {
      state.loading = true;
    },
    setTotalTraDetail: (state, action) => {
      state.loading = false;
      state.totalTraDetail = action?.payload;
    },
    getTotalTraType: (state) => {
      state.loading = true;
    },
    setTotalTraType: (state, action) => {
      state.loading = false;
      state.totalTraType = action?.payload;
    },
    getTotalTra: (state) => {
      state.loading = true;
    },
    setTotalTra: (state, action) => {
      state.loading = false;
      state.totalTra = action?.payload;
    },
    getNotifications: (state) => {
      state.loading = true;
    },
    setNotifications: (state, action) => {
      state.loading = false;
      state.notifications = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getTotalTraDetail,
  setTotalTraDetail,
  getTotalTraType,
  setTotalTraType,
  getTotalTra,
  setTotalTra,
  getNotifications,
  setNotifications,
} = transactionsSlice.actions;

export const selectTransactionData = (state) => state.transactions;

export default transactionsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalTraDetail: {},
  totalTraType: [],
  totalTra: {},
  loading: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
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
} = transactionsSlice.actions;

export const selectTransactionData = (state) => state.transactions;

export default transactionsSlice.reducer;

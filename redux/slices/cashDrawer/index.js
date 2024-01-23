import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionHistory: {},
  loading: false,
};

export const cashDrawerSlice = createSlice({
  name: "cashDrawer",
  initialState,
  reducers: {
    getSessionHistory: (state) => {
      state.loading = true;
    },
    setSessionHistory: (state, action) => {
      state.loading = false;
      state.sessionHistory = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onErrorStopLoad, getSessionHistory, setSessionHistory } =
cashDrawerSlice.actions;

export const selectCashDrawerData = (state) => state.cashDrawer;

export default cashDrawerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  sessionHistory: {},
  drawerSession: {},
  drawerHistory: {},
  trackSession: {},
  expectedCashByDrawerId: {},
  loading: false,
};

export const cashDrawerSlice = createSlice({
  name: "cashDrawer",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    getSessionHistory: (state) => {
      state.loading = true;
    },
    setSessionHistory: (state, action) => {
      state.loading = false;
      state.sessionHistory = action?.payload;
    },
    getDrawerSession: (state) => {
      state.loading = true;
    },
    setGetDrawerSession: (state, action) => {
      state.loading = false;
      state.drawerSession = action?.payload;
    },
    getDrawerHistory: (state) => {
      state.loading = true;
    },
    setGetDrawerHistory: (state, action) => {
      state.loading = false;
      state.drawerHistory = action?.payload;
    },
    trackSessionSave: (state) => {
      state.loading = true;
    },
    setTrackSessionSave: (state, action) => {
      state.loading = false;
      state.trackSession = action?.payload;
    },
    getExpectedCashByDrawerId: (state) => {
      state.loading = true;
    },
    setExpectedCashByDrawerId: (state, action) => {
      state.loading = false;
      state.expectedCashByDrawerId = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getSessionHistory,
  setSessionHistory,
  getDrawerSession,
  setGetDrawerSession,
  getDrawerHistory,
  setGetDrawerHistory,
  trackSessionSave,
  setTrackSessionSave,
  getExpectedCashByDrawerId,
  setExpectedCashByDrawerId,
} = cashDrawerSlice.actions;

export const selectCashDrawerData = (state) => state.cashDrawer;

export default cashDrawerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionHistory: {},
  drawerSession: {},
  drawerHistory: {},
  trackSession: {},
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
} = cashDrawerSlice.actions;

export const selectCashDrawerData = (state) => state.cashDrawer;

export default cashDrawerSlice.reducer;

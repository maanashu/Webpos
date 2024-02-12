import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  sessionHistory: {},
  drawerSession: {},
  expectedCashByDrawerId: {},
  loading: false,
};

export const cashDrawerSlice = createSlice({
  name: "cashDrawer",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, (state, action) => {
    if(!action?.payload?.skipCashDrawer){
      return initialState;
    }
    return state;
  }),
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
    updateDrawerSession: (state) => {
      state.loading = true;
    },
    getExpectedCashByDrawerId: (state, action) => {
      state.loading = true;
    },
    setExpectedCashByDrawerId: (state, action) => {
      state.loading = false;
      state.expectedCashByDrawerId = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
    getSessionSummary: (state, action) => {},
    sendPaymentHistory: (state, action) => {}
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getSessionHistory,
  getSessionSummary,
  setSessionHistory,
  getDrawerSession,
  setGetDrawerSession,
  updateDrawerSession,
  getExpectedCashByDrawerId,
  setExpectedCashByDrawerId,
  sendPaymentHistory
} = cashDrawerSlice.actions;

export const selectCashDrawerData = (state) => state.cashDrawer;

export default cashDrawerSlice.reducer;

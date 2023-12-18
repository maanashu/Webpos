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
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getProfitsData,
  setProfitData
} = analyticsSlice.actions;

export default analyticsSlice.reducer;




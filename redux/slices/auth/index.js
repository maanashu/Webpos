import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersInfo: {},
  allPosUser: {},
  posUserLoginDetails: {},
  isLoggedIn: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userMerchantLogin: (state) => {
      state.loading = true;
    },
    setUserMerchantLogin: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.usersInfo = action?.payload
    },
    getAllPosUser: (state) => {
      state.loading = true;
    },
    setGetAllPosUser: (state, action) => {
      state.loading = false;
      state.allPosUser = action?.payload
    },
    posUserLogin: (state) => {
      state.loading = true;
    },
    setPosUserLogin: (state, action) => {
      state.loading = false;
      state.posUserLoginDetails = action?.payload
    },
    logout: (state, action) => {
      return initialState;
    },
   
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userMerchantLogin,
  setUserMerchantLogin,
  getAllPosUser,
  setGetAllPosUser,
  posUserLogin,
  setPosUserLogin,
  logout,
  onErrorStopLoad
} = authSlice.actions;

export const selectLoginAuth = (state) => state.auth;

export default authSlice.reducer;




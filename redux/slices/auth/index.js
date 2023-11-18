import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  allPosUser: {},
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
      state.userInfo = action?.payload
    },
    getAllPosUser: (state) => {
      state.loading = true;
    },
    setGetAllPosUser: (state, action) => {
      state.loading = false;
      state.allPosUser = action?.payload
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
  onErrorStopLoad
} = authSlice.actions;

export default authSlice.reducer;
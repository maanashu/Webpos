import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  usersInfo: "",
  selectedUserData: {},
  allPosUser: [],
  posUserLoginDetails: "",
  isLoggedIn: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    userMerchantLogin: (state) => {
      state.loading = true;
    },
    setUserMerchantLogin: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.usersInfo = action?.payload;
    },
    getAllPosUser: (state) => {
      state.loading = true;
    },
    setGetAllPosUser: (state, action) => {
      state.loading = false;
      state.allPosUser = action?.payload;
    },
    posUserLogin: (state) => {
      state.loading = true;
    },
    setPosUserLogin: (state, action) => {
      state.loading = false;
      state.posUserLoginDetails = action?.payload;
    },
    selectedPosUser: (state, action) => {
      state.selectedUserData = action?.payload;
    },

    logout: (state) => {
      // state.isLoggedIn = false;
      // state.usersInfo = "";
      // state.posUserLoginDetails = "";
      // state.loading = false;
    },

    posUserLogout: (state) => {
      state.isLoggedIn = false;
      state.posUserLoginDetails = "";
      state.loading = false;
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
  selectedPosUser,
  logout,
  posUserLogout,
  onErrorStopLoad,
} = authSlice.actions;

export const selectLoginAuth = (state) => state.auth;

export default authSlice.reducer;

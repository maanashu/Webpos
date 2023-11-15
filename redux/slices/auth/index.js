import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  userSignUp: {},
  isLoggedIn: false,
  loading: false,
  userInfoData: {}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.loading = true;
    },
    setUserLogin: (state, action) => {
      state.loading = false;
    },
    forgotPassword: (state) => {
      state.loading = true;
    },
    setForgetPassword: (state, action) => {
      state.loading = false;
    },
    resetPassword: (state) => {
      state.loading = true;
    },
    setResetPassword: (state, action) => {
      state.loading = false;
    },
    verifyPhoneApi: (state) => {
      state.loading = true;
    },
    setVerifyPhone: (state, action) => {
      state.loading = false;
    },
    verifyPhoneOtp: (state) => {
      state.loading = true;
    },
    setVerifyPhoneOtp: (state, action) => {
      state.loading = false;
    },
    resendPhoneOtp: (state) => {
      state.loading = true;
    },
    setResendPhoneOtp: (state, action) => {
      state.loading = false;
    },
    sendEmailOtp: (state) => {
      state.loading = true;
    },
    setSendEmailOtp: (state, action) => {
      state.loading = false;
    },
    verifyEmailOtp: (state) => {
      state.loading = true;
    },
    setVerifyEmailOtp: (state, action) => {
      state.loading = false;
    },
    getServices: (state) => {
      state.loading = true;
    },
    setGetServices: (state, action) => {
      state.loading = false;
    },
    signUp: (state) => {
      state.loading = true;
    },
    setSignUp: (state, action) => {
      state.loading = false;
    },
    subscriber: (state) => {
      state.loading = true;
    },
    setSubscriber: (state, action) => {
      state.loading = false;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    }, 
  },
});

// Action creators are generated for each case reducer function
export const {
  userLogin,
  setUserLogin,
  forgotPassword,
  setForgetPassword,
  resetPassword,
  setResetPassword,
  verifyPhoneApi,
  setVerifyPhone,
  verifyPhoneOtp,
  setVerifyPhoneOtp,
  resendPhoneOtp,
  setResendPhoneOtp,
  sendEmailOtp,
  setSendEmailOtp,
  verifyEmailOtp,
  setVerifyEmailOtp,
  getServices,
  setGetServices,
  signUp,
  setSignUp,
  subscriber,
  setSubscriber,
  onErrorStopLoad
} = authSlice.actions;

export default authSlice.reducer;
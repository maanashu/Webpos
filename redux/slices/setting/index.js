import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  getSettings: {},
  plansData: [],
  walletInfo: [],
  success: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    // start security slices..........................................

    onStopSuccess: (state, action) => {
      state.success = action.payload;
    },

    getActivePlan: (state) => {
      state.loading = true;
    },
    setGetActivePlan: (state, action) => {
      state.loading = false;
    },

    subScribePlan: (state) => {
      state.loading = true;
      state.success = false;
    },
    setSubScribePlan: (state) => {
      state.loading = false;
      state.success = true;
    },
    getAllPlans: (state) => {
      state.loading = true;
    },
    setGetAllPlans: (state, action) => {
      state.loading = false;
      state.plansData = action.payload;
    },
    getSecurityScanerCode: (state) => {
      state.loading = true;
    },
    setGetSecurityScanerCode: (state, action) => {
      state.loading = false;
    },
    getSecuritySettingInfo: (state) => {
      state.loading = true;
    },
    setGetSecuritySettingInfo: (state, action) => {
      state.loading = false;
      state.getSettings = action?.payload;
    },
    configureGoogleAuthenticator: (state) => {
      state.loading = true;
    },
    setConfigureGoogleAuthenticator: (state, action) => {
      state.loading = false;
    },
    verifyGoogleAuthenticator: (state) => {
      state.loading = true;
    },
    setVerifyGoogleAuthenticator: (state, action) => {
      state.loading = false;
    },
    forgetGoogleAuthenticator: (state) => {
      state.loading = true;
    },
    setForgetGoogleAuthenticator: (state, action) => {
      state.loading = false;
    },
    resetGoogleAuthenticator: (state) => {
      state.loading = true;
    },
    setResetGoogleAuthenticator: (state, action) => {
      state.loading = false;
    },
    // end security slices//////////////////////////////////////////////

    // start staff slices..........................................
    addNewStaff: (state) => {
      state.loading = true;
      state.success = false;
    },
    setaddNewStaff: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    getStaffDetails: (state) => {
      state.loading = true;
    },
    setGetStaffDetails: (state, action) => {
      state.loading = false;
    },
    getStaffRoles: (state) => {
      state.loading = true;
    },
    setGetStaffRoles: (state, action) => {
      state.loading = false;
    },
    updateSettings: (state) => {
      state.loading = true;
      state.success = false;
    },
    setUpdateSettings: (state, action) => {
      state.loading = false;
      state.getSettings = action?.payload;
      state.walletInfo = action?.payload;
      state.success = true;
    },
    // end staff slices////////////////////////////////////////////

    // start location slices..........................................
    getLocationDetails: (state) => {
      state.loading = true;
    },
    setGetLocationDetails: (state, action) => {
      state.loading = false;
    },
    updateLocationSetting: (state) => {
      state.loading = true;
    },
    setUpdateLocationSetting: (state, action) => {
      state.loading = false;
    },
    // end location slices////////////////////////////////////////////
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
    requestPayment: (state) => {
      state.loading = true;
    },
    viewPayment: (state) => {
      state.loading = true;
    },
    setViewPayment: (state, action) => {
      state.loading = false;
    },
    getLanguageList: (state) => {
      state.loading = true;
    },
    setGetLanguageList: (state, action) => {
      state.loading = false;
    },
    // end language slices////////////////////////////////////////////
  },
});

// Action creators are generated for each case reducer function
export const {
  getSecurityScanerCode,
  setGetSecurityScanerCode,
  getSecuritySettingInfo,
  setGetSecuritySettingInfo,
  configureGoogleAuthenticator,
  setConfigureGoogleAuthenticator,
  verifyGoogleAuthenticator,
  setVerifyGoogleAuthenticator,
  forgetGoogleAuthenticator,
  setForgetGoogleAuthenticator,
  resetGoogleAuthenticator,
  setResetGoogleAuthenticator,
  addNewStaff,
  setaddNewStaff,
  getStaffDetails,
  setGetStaffDetails,
  getStaffRoles,
  setGetStaffRoles,
  getLocationDetails,
  setGetLocationDetails,
  updateSettings,
  setUpdateSettings,
  updateLocationSetting,
  setUpdateLocationSetting,
  onErrorStopLoad,
  requestPayment,
  viewPayment,
  setViewPayment,
  getAllPlans,
  setGetAllPlans,
  subScribePlan,
  setSubScribePlan,
  getActivePlan,
  setGetActivePlan,
  getLanguageList,
  setGetLanguageList,
  onStopSuccess
} = settingSlice.actions;

export const settingInfo = (state) => state.setting;

export default settingSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { dashboardSlice } from "./dashboard";
import { HYDRATE } from "next-redux-wrapper";
import { customersSlice } from "./customers";
import { analyticsSlice } from "./analytics";
import { transactionsSlice } from "./transactions";
import { settingSlice } from "./setting";
import { deliverySlice } from "./delivery";
import { retailsSlice } from "./retails";
import { shippingSlice } from "./shipping";

const mainReducer = combineReducers({
  auth: authSlice.reducer,
  dashboard: dashboardSlice.reducer,
  customers: customersSlice.reducer,
  analytics: analyticsSlice.reducer,
  transactions: transactionsSlice.reducer,
  setting: settingSlice.reducer,
  delivery: deliverySlice.reducer,
  retails: retailsSlice.reducer,
  shipping: shippingSlice.reducer
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: // Handle the HYDRATE action
      return {
        ...state, // Keep any existing state
        // Merge in the rehydrated state
      };
    default:
      return mainReducer(state, action);
  }
};

export default rootReducer;

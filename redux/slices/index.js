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
import { cashDrawerSlice } from "./cashDrawer";
import { returnSlice } from "./productReturn";
import { bookingsSlice } from "./bookings";

const mainReducer = combineReducers({
  auth: authSlice.reducer,
  dashboard: dashboardSlice.reducer,
  customers: customersSlice.reducer,
  analytics: analyticsSlice.reducer,
  transactions: transactionsSlice.reducer,
  setting: settingSlice.reducer,
  delivery: deliverySlice.reducer,
  retails: retailsSlice.reducer,
  shipping: shippingSlice.reducer,
  cashDrawer: cashDrawerSlice.reducer,
  return: returnSlice.reducer,
  bookings: bookingsSlice.reducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: // Handle the HYDRATE action
      return {
        ...state, // Keep any existing state
        // Merge in the rehydrated state
      };
    // case "auth/logout": // Handle the HYDRATE action
    //   return {};
    default:
      return mainReducer(state, action);
  }
};

export default rootReducer;

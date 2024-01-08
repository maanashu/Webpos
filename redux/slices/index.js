import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { dashboardSlice } from "./dashboard";
import { HYDRATE } from 'next-redux-wrapper';
import { customersSlice } from "./customers";
import { analyticsSlice } from "./analytics";
import { settingSlice } from "./setting";

  const mainReducer = combineReducers({
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    customers: customersSlice.reducer,
    analytics: analyticsSlice.reducer,
    setting: settingSlice.reducer,
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
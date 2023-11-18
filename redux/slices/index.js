import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { HYDRATE } from 'next-redux-wrapper';

  const mainReducer = combineReducers({
    auth: authSlice.reducer,
})

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
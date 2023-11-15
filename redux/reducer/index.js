import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import auth from "./auth";
import common from "./common";
import pageContent from "./pageContent";
import geo from "./geo";

const combinedReducer = combineReducers({
    auth,
    common,
    pageContent,
    geo
}); 

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state    
            // users: {
            //     users: [...action.payload.users.users, ...state.users.users]
            // }
        }
        return nextState;
    } else {

    return combinedReducer(state, action)
  }
}

export default masterReducer;

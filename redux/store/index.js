import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import masterReducer from '../reducer/index';

// middleware
const initalState = {}
const middleware = [thunk];

// creating store
export const store = configureStore(
    { reducer: masterReducer },
    initalState,
    composeWithDevTools()
);
// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore)
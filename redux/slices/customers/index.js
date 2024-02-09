import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  allCustomersData: {},
  allCustomersList: {},
  searchCustomerList: {},
  sellerAreaList: {},
  userDetailsAndOrder: {},
  userMarketingStatus: { userId: null, status: false },
  storeLocation: {},
  loading: false,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    getAllCustomers: (state) => {
      state.loading = true;
    },
    setAllCustomers: (state, action) => {
      state.loading = false;
      state.allCustomersData = action?.payload;
    },
    getAllCustomersList: (state) => {
      state.loading = true;
    },
    setAllCustomersList: (state, action) => {
      state.loading = false;
      state.allCustomersList = action?.payload;
    },
    setSearchedCustomerList: (state, action) => {
      state.loading = false;
      state.searchCustomerList = action?.payload;
    },
    getSellerAreaList: (state) => {
      state.loading = true;
    },
    setSellerAreaList: (state, action) => {
      state.loading = true;
      state.sellerAreaList = action.payload;
    },
    getUserDetailsAndOrders: (state) => {
      state.loading = true;
    },
    setUserDetailsAndOrders: (state, action) => {
      state.loading = false;
      state.userDetailsAndOrder = action.payload;
    },
    getUserMarketingStatus: (state) => {
      state.loading = true;
    },
    setUserMarketingStatus: (state, action) => {
      state.loading = false;
      state.userMarketingStatus = action.payload;
    },
    getStoreLocation: (state) => {
      state.loading = true;
    },
    setStoreLocation: (state, action) => {
      state.loading = false;
      state.storeLocation = action.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllCustomers,
  setAllCustomers,
  onErrorStopLoad,
  getSellerAreaList,
  setSellerAreaList,
  getAllCustomersList,
  setAllCustomersList,
  getUserDetailsAndOrders,
  setUserDetailsAndOrders,
  getUserMarketingStatus,
  setUserMarketingStatus,
  setSearchedCustomerList,
  getStoreLocation,
  setStoreLocation,
} = customersSlice.actions;

export const selectCustomersData = (state) => state.customers;

export default customersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCustomersData: {},
  allCustomersList: {},
  loading: false,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
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
  setAllCustomersList,
  getAllCustomersList,
} = customersSlice.actions;

export const selectCustomersData = (state) => state.customers;

export default customersSlice.reducer;

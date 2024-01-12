import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainProductData: {},
  oneProductData: {},
  mainServicesData:{},
};

export const retailsSlice = createSlice({
  name: "retails",
  initialState,
  reducers: {
    getMainProduct: (state) => {
      state.loading = true;
    },
    setMainProduct: (state, action) => {
      state.loading = false;
      state.mainProductData = action?.payload?.payload;
    },
    getOneProductById: (state) => {
      state.loading = true;
    },
    setOneProductById: (state, action) => {
      state.loading = false;
      state.oneProductData = action?.payload?.payload;
    },
    getMainServices: (state) => {
      state.loading = true;
    },
    setMainServices: (state, action) => {
      state.loading = false;
      state.getMainServices = action?.payload?.payload;
      state.mainServicesData = action?.payload?.payload;
    },
    availableOffers: (state) => {
      state.loading = true;
    },
    setAvailableOffers: (state, action) => {
      state.loading = false;
      state.availableOffers = action?.payload?.payload;
    },
    productCart: (state) => {
      state.loading = true;
    },
    setProductCart: (state, action) => {
      state.loading = false;
      state.productCart = action?.payload?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getMainProduct,
  setMainProduct,
  getOneProductById,
  setOneProductById,
  getMainServices,
  setMainServices,
  availableOffers,
  setAvailableOffers,
  productCart,
  setProductCart
} = retailsSlice.actions;

export const selectRetailData = (state) => state.retails;

export default retailsSlice.reducer;

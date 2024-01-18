import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainProductData: {},
  oneProductData: {},
  oneServiceData: {},
  mainServicesData: {},
  availableOffers: {},
  cartDetails: {},
  checkSuppliedVariantLoad: false,
  addTocartLoad: false,
  clearCartLoading:false,
  getTipsLoad: false,
  getTipsData: {},
  updateCartByTipLoad: false,
  createOrderLoad: false,
  createOrderData: {},
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
    getOneServiceById: (state) => {
      state.loading = true;
    },
    setOneServiceById: (state, action) => {
      state.loading = false;
      state.oneServiceData = action?.payload?.payload;
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
      state.cartDetails = action?.payload?.payload;
    },
    addNotes: (state) => {
      state.loading = true;
    },
    setNotes: (state, action) => {
      state.loading = false;
      state.addNotes = action?.payload?.payload;
    },
    addDiscount: (state) => {
      state.loading = true;
    },
    setDiscount: (state, action) => {
      state.loading = false;
      state.addNotes = action?.payload?.payload;
    },
    addTocart: (state) => {
      state.addTocartLoad = true;
    },
    setAddTocart: (state) => {
      state.addTocartLoad = false;
    },
    clearCart: (state) => {
      state.loading = true;
    },
    setClearCart: (state) => {
      state.clearCartLoading = true;
    },
    checkSuppliedVariant: (state) => {
      state.loading = true;
      state.checkSuppliedVariantLoad = true;
    },
    setCheckSuppliedVariant: (state, action) => {
      state.loading = false;
      state.checkSuppliedVariantLoad = false;
      // state.addNotes = action?.payload?.payload;
    },
    getTips: (state) => {
      state.loading = true;
      state.getTipsLoad = true;
    },
    setGetTips: (state) => {
      state.loading = true;
      state.getTipsLoad = false;
      state.getTipsData = action?.payload;
    },
    updateCartByTip: (state) => {
      state.updateCartByTipLoad = true;
    },
    setUpdateCartByTip: (state) => {
      state.updateCartByTipLoad = false;
    },
    createOrder: (state) => {
      state.createOrderLoad = true;
    },
    setCreateOrder: (state) => {
      state.createOrderLoad = false;
      // state.createOrderData = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  getMainProduct,
  setMainProduct,
  getOneProductById,
  setOneProductById,
  getOneServiceById,
  setOneServiceById,
  getMainServices,
  setMainServices,
  availableOffers,
  setAvailableOffers,
  productCart,
  setProductCart,
  addNotes,
  setNotes,
  addTocart,
  setAddTocart,
  clearCart,
  setDiscount,
  addDiscount,
  checkSuppliedVariant,
  setCheckSuppliedVariant,
  getTips,
  setGetTips,
  updateCartByTip,
  setUpdateCartByTip,
  createOrder,
  setCreateOrder,
} = retailsSlice.actions;

export const selectRetailData = (state) => state.retails;

export default retailsSlice.reducer;

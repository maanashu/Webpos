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
  clearCartLoading: false,
  getTipsLoad: false,
  getTipsData: {},
  updateCartByTipLoad: false,
  createOrderLoad: false,
  createOrderData: {},
  drawerSession: {},
  drawerSessionLoad: false,
  productCartLoad: false,
  clearCartLoad: false,
  attachCustomerLoad: false,
  attachCustomerData: {},
  availableOffersLoad: false,
  customProuductAddLoad: false,
  getUserDetailLoad: false,
  userDetailData: {},
  productCart: {},
  getTimeSlotsLoad: false,
  timeSlots: [],
  addToCartServiceLoad: false,
  clearOneProductLoad: false,
  merchantWalletCheckLoad: false,
  getWalletQrLoad: false,
  walletQrData: {},
  getWalletQrLoad: false,
  walletGetByPhoneLoad: false,
  walletGetByPhoneData: [],
  requestCheckLoad: false,
  requestCheckData: "",
  qrcodestatusData: "",
  qrcodestatusLoad: false,
  paymentRequestCancelLoad: false,
  getMainProductLoad: false,
  getMainServicesLoad: false,
};

export const retailsSlice = createSlice({
  name: "retails",
  initialState,
  reducers: {
    getMainProduct: (state) => {
      state.getMainProductLoad = true;
    },
    setMainProduct: (state, action) => {
      state.getMainProductLoad = false;
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
      state.getMainServicesLoad = true;
    },
    setMainServices: (state, action) => {
      state.getMainServicesLoad = false;
      state.getMainServices = action?.payload?.payload;
      state.mainServicesData = action?.payload?.payload;
    },
    availableOffers: (state) => {
      state.loading = true;
      state.availableOffersLoad = true;
    },
    setAvailableOffers: (state, action) => {
      state.loading = false;
      state.availableOffersLoad = false;
      state.availableOffers = action?.payload?.payload;
    },
    productCart: (state) => {
      state.productCartLoad = true;
    },
    setProductCart: (state, action) => {
      state.productCartLoad = false;
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
      state.clearCartLoad = true;
    },
    setClearCart: (state) => {
      state.loading = false;
      state.clearCartLoad = false;
    },
    checkSuppliedVariant: (state) => {
      state.checkSuppliedVariantLoad = true;
    },
    setCheckSuppliedVariant: (state, action) => {
      state.checkSuppliedVariantLoad = false;
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
    setCreateOrder: (state, action) => {
      state.createOrderLoad = false;
      state.createOrderData = action?.payload?.payload;
    },
    clearCart: (state) => {
      state.loading = true;
    },
    getDrawerSession: (state) => {
      state.loading = true;
      state.drawerSessionLoad = true;
    },
    setDrawerSession: (state, action) => {
      state.loading = false;
      state.drawerSessionLoad = false;
      state.drawerSession = action?.payload?.payload;
    },

    attachCustomer: (state) => {
      state.attachCustomerLoad = true;
    },
    setAttachCustomer: (state, action) => {
      state.attachCustomerLoad = false;
      // state.attachCustomerData = action?.payload?.payload;
    },
    customProuductAdd: (state) => {
      state.customProuductAddLoad = true;
    },
    setCustomProuductAdd: (state, action) => {
      state.customProuductAddLoad = false;
      // state.attachCustomerData = action?.payload?.payload;
    },
    getUserDetail: (state) => {
      state.getUserDetailLoad = true;
    },
    setUserDetail: (state, action) => {
      state.getUserDetailLoad = false;
      state.userDetailData = action?.payload?.payload;
    },

    getTimeSlots: (state) => {
      state.getTimeSlotsLoad = true;
    },
    setTimeSlots: (state, action) => {
      state.getTimeSlotsLoad = false;
      state.timeSlots = action?.payload?.payload?.slots;
    },

    addToCartService: (state) => {
      state.addToCartServiceLoad = true;
    },
    setAddToCartService: (state, action) => {
      state.addToCartServiceLoad = false;
      // state.timeSlots = action?.payload?.payload?.slots;
    },

    clearOneProduct: (state) => {
      state.clearOneProductLoad = true;
    },
    setClearOneProduct: (state, action) => {
      state.clearOneProductLoad = false;
      // state.timeSlots = action?.payload?.payload?.slots;
    },

    merchantWalletCheck: (state) => {
      state.merchantWalletCheckLoad = true;
    },
    setMerchantWalletCheck: (state, action) => {
      state.merchantWalletCheckLoad = false;
      // state.timeSlots = action?.payload?.payload?.slots;
    },

    getWalletQr: (state) => {
      state.getWalletQrLoad = true;
    },
    setWalletQr: (state, action) => {
      state.getWalletQrLoad = false;
      state.walletQrData = action?.payload?.payload;
    },

    walletGetByPhone: (state) => {
      state.walletGetByPhoneLoad = true;
    },
    setwalletByPhone: (state, action) => {
      state.walletGetByPhoneLoad = false;
      state.walletGetByPhoneData = action?.payload?.payload?.data;
    },

    requestMoney: (state) => {
      state.requestMoneyLoad = true;
    },
    setRequestMoney: (state, action) => {
      state.requestMoneyLoad = false;
    },

    requestCheck: (state) => {
      state.requestCheckLoad = true;
    },
    setRequestCheck: (state, action) => {
      state.requestCheckLoad = false;
      state.requestCheckData = action?.payload?.payload?.status;
    },

    qrcodestatus: (state) => {
      state.qrcodestatusLoad = true;
    },
    setQrcodestatus: (state, action) => {
      state.qrcodestatusLoad = false;
      state.qrcodestatusData = action?.payload?.payload?.status;
    },

    paymentRequestCancel: (state) => {
      state.paymentRequestCancelLoad = true;
    },
    setPaymentRequestCancel: (state, action) => {
      state.paymentRequestCancelLoad = false;
      // state.qrcodestatusData = action?.payload?.payload?.status;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
      state.availableOffersLoad = false;
      state.productCartLoad = false;
      state.createOrderLoad = false;
      state.customProuductAddLoad = false;
      state.getUserDetailLoad = false;
      state.attachCustomerLoad = false;
      state.getTimeSlotsLoad = false;
      state.addToCartServiceLoad = false;
      state.checkSuppliedVariantLoad = false;
      state.clearOneProductLoad = false;
      state.merchantWalletCheckLoad = false;
      state.getWalletQrLoad = false;
      state.walletGetByPhoneLoad = false;
      state.requestMoneyLoad = false;
      state.requestCheckLoad = false;
      state.qrcodestatusLoad = false;
      state.paymentRequestCancelLoad = false;
      state.updateCartByTipLoad = false;
      state.getMainProductLoad = false;
      state.getMainServicesLoad = false;
      state.addTocartLoad = false;
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
  clearCart,
  getDrawerSession,
  setDrawerSession,
  attachCustomer,
  setAttachCustomer,
  customProuductAdd,
  setCustomProuductAdd,
  getUserDetail,
  setUserDetail,
  getTimeSlots,
  setTimeSlots,
  addToCartService,
  setAddToCartService,
  clearOneProduct,
  setClearOneProduct,
  merchantWalletCheck,
  setMerchantWalletCheck,
  getWalletQr,
  setWalletQr,
  walletGetByPhone,
  setwalletByPhone,
  requestMoney,
  setRequestMoney,
  requestCheck,
  setRequestCheck,
  qrcodestatus,
  setQrcodestatus,
  paymentRequestCancel,
  setPaymentRequestCancel,
} = retailsSlice.actions;

export const selectRetailData = (state) => state.retails;

export default retailsSlice.reducer;

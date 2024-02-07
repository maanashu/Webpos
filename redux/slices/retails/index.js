import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  mainProductData: {},
  oneProductData: {},
  oneServiceData: {},
  mainServicesData: {},
  availableOffers: {},
  cartDetails: {},
  checkSuppliedVariantLoad: false,
  addTocartLoad: false,
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
  loading: false,
  productCategories: [],
  productSubCategories: [],
  productBrands: [],
  serviceCategories: [],
  serviceSubCategories: [],
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
  updateCartLoad: false,
  getHoldProductCartLoad: false,
  holdProductData: [],
  localCartArray: [],
  holdCartLoad: false,
  cartLength: 0,
  attachWithPhone: false,
  attachWithEmail: false,
  updatePriceLoad: false,
};

export const retailsSlice = createSlice({
  name: "retails",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    getMainProduct: (state) => {
      state.getMainProductLoad = true;
    },
    setMainProduct: (state, action) => {
      console.log("actions", JSON.stringify(action));
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
    setCartLength: (state, action) => {
      console.log("actionasasasa", JSON.stringify(action));
      state.cartLength = action?.payload;
    },
    setProductCart: (state, action) => {
      state.productCartLoad = false;
      state.productCart = action?.payload?.payload;
      state.cartDetails = action?.payload?.payload;
    },
    createBulkCart: (state, action) => {},
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
      state.clearCartLoad = true;
    },
    setClearCart: (state) => {
      state.clearCartLoad = false;
      state.localCartArray = [];
      state.cartLength = 0;
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
    // clearCart: (state) => {
    //   state.loading = true;
    // },
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

    getProductFilterCategory: (state) => {
      state.loading = true;
    },
    getProductFilterSubCategory: (state) => {
      state.loading = true;
    },
    getProductFilterBrands: (state) => {
      state.loading = true;
    },

    setProductCategory: (state, action) => {
      state.loading = false;
      state.productCategories = action?.payload;
    },

    setProductSubCategory: (state, action) => {
      state.loading = false;
      state.productSubCategories = action?.payload;
    },

    setProductBrands: (state, action) => {
      state.loading = false;
      state.productBrands = action?.payload;
    },

    setServiceCategory: (state, action) => {
      state.loading = false;
      state.serviceCategories = action?.payload;
    },

    setServiceSubCategory: (state, action) => {
      state.loading = false;
      state.serviceSubCategories = action?.payload;
    },

    getServiceFilterCategory: (state) => {
      state.loading = true;
    },
    getServiceFilterSubCategory: (state) => {
      state.loading = true;
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

    updateCart: (state) => {
      state.updateCartLoad = true;
    },
    setUpdateCart: (state, action) => {
      state.updateCartLoad = false;
      // state.qrcodestatusData = action?.payload?.payload?.status;
    },

    getHoldProductCart: (state) => {
      state.getHoldProductCartLoad = true;
    },
    setHoldProductCart: (state, action) => {
      state.getHoldProductCartLoad = false;
      state.holdProductData = action?.payload?.payload;
    },

    // addLocalCart: (state) => {
    //   state.getHoldProductCartLoad = true;
    // },
    setLocalCart: (state, action) => {
      state.localCartArray = action?.payload;
    },

    holdCart: (state) => {
      state.holdCartLoad = true;
    },
    setHoldCart: (state, action) => {
      state.holdCartLoad = false;
      // state.qrcodestatusData = action?.payload?.payload?.status;
    },

    setAttachWithPhone: (state, action) => {
      state.attachWithPhone = action?.payload;
    },
    setAttachWithEmail: (state, action) => {
      state.attachWithEmail = action?.payload;
    },

    updatePrice: (state) => {
      state.updatePriceLoad = true;
    },
    setUpdatePrice: (state, action) => {
      state.updatePriceLoad = false;
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
      state.clearCartLoad = false;
      state.updateCartLoad = false;
      state.getHoldProductCartLoad = false;
      state.holdCartLoad = false;
      state.updatePriceLoad = false;
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
  setCartLength,
  setProductCart,
  createBulkCart,
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
  setClearCart,
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
  getProductFilterCategory,
  getProductFilterSubCategory,
  getProductFilterBrands,
  setProductCategory,
  setProductSubCategory,
  setProductBrands,
  getServiceFilterCategory,
  getServiceFilterSubCategory,
  setServiceCategory,
  setServiceSubCategory,
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
  updateCart,
  setUpdateCart,
  getHoldProductCart,
  setHoldProductCart,
  addLocalCart,
  setLocalCart,
  holdCart,
  setHoldCart,
  setAttachWithPhone,
  setAttachWithEmail,
  updatePrice,
  setUpdatePrice,
} = retailsSlice.actions;

export const selectRetailData = (state) => state.retails;

export default retailsSlice.reducer;

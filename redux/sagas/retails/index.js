import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import {
  ORDER_API_URL,
  AUTH_API_URL,
  PRODUCT_API_URL,
  WALLET_API_URL,
} from "../../../utilities/config";
import {
  onErrorStopLoad,
  setMainProduct,
  setOneProductById,
  setOneServiceById,
  setMainServices,
  setAvailableOffers,
  setProductCart,
  setDiscount,
  setNotes,
  selectRetailData,
  setCheckSuppliedVariant,
  setAddTocart,
  setGetTips,
  setUpdateCartByTip,
  setCreateOrder,
  setDrawerSession,
  setAttachCustomer,
  setCustomProuductAdd,
  setUserDetail,
  setTimeSlots,
  setClearOneProduct,
  setProductCategory,
  setProductSubCategory,
  setProductBrands,
  setMerchantWalletCheck,
  setWalletQr,
  setwalletByPhone,
  setRequestMoney,
  setRequestCheck,
  setQrcodestatus,
  setPaymentRequestCancel,
  setClearCart,
  setServiceCategory,
  setServiceSubCategory,
  setUpdateCart,
  setHoldProductCart,
  setHoldCart,
  setCartLength,
  setUpdatePrice,
} from "../../slices/retails";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { store, wrapper } from "../..";
import auth from "../../slices/auth";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";
const USER_API_URL_V1 = AUTH_API_URL + "/api/v1/";
const WALLET_API_URL_V1 = WALLET_API_URL + "/api/v1/";

function* getMainProduct(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products?app_name=pos&delivery_options=3&service_type=product&page=1&limit=25&${params}`
    );

    if (resp.status) {
      yield put(setMainProduct(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getOneProductById(action) {
  const dataToSend = { ...action.payload?.params };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products/${action.payload?.productId}?${params}`
    );
    if (resp.status) {
      yield put(setOneProductById(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getMainServices(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products?app_name=pos&delivery_options=2&service_type=service&need_pos_users=true&check_stock_out=true&need_next_available_slot=true&page=1&limit=25&${params}`
    );
    if (resp.status) {
      yield put(setMainServices(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* getOneServiceById(action) {
  const dataToSend = { ...action.payload?.params };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products/${action.payload?.serviceId}?${params}`
    );
    if (resp.status) {
      yield put(setOneServiceById(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* availableOffers(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}offer/products?app_name=pos&delivery_options=${
        dataToSend?.type == "product" ? "1,3,4" : "2"
      }&service_type=${dataToSend?.type}&${params}`
    );
    if (resp.status) {
      yield put(setAvailableOffers(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* createBulkCart(action) {
  const dataToSend = { ...action.payload };
  // const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL_V1}poscarts/bulk-create`,
      dataToSend
    );
    console.log("responseee", JSON.stringify(resp));
    if (resp.status) {
      yield call(productCart);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* productCart(action) {
  try {
    const resp = yield call(ApiClient.get, `${ORDER_API_URL_V1}poscarts/user`);
    if (resp.status) {
      yield put(setProductCart(resp.data));
      // yield put(setCartLength(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* addTocart(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL}/api/v1/poscarts`,
      (action.payload = action.payload)
    );
    if (resp.status) {
      yield put(setAddTocart(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* clearCart(action) {
  try {
    const resp = yield call(
      ApiClient.delete,
      `${ORDER_API_URL}/api/v1/poscarts`
    );
    if (resp.status) {
      yield put(setClearCart(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* addNotes(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend);
  const idValue = params.get("id");
  delete dataToSend.cb;
  delete dataToSend.id;
  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/${idValue}`,
      dataToSend
    );

    if (resp.status) {
      yield put(setNotes(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    //yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* addDiscount(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend);
  const idValue = params.get("id");
  delete dataToSend.cb;
  delete dataToSend.id;
  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/${idValue}`,
      dataToSend
    );
    if (resp.status) {
      yield put(setDiscount(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* checkSuppliedVariant(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend);
  const colorSizeId = params.get("colorAndSizeId");
  const suppliedId = params.get("supplyId");
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}supply_variants/by-attribute-value-ids?attribute_value_ids=${colorSizeId}&supply_id=${suppliedId}`
    );
    if (resp.status) {
      yield put(setCheckSuppliedVariant(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data?.payload));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTips(action) {
  const dataToSend = { ...action.payload };
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}tips/${action.payload}`
    );
    if (resp.status) {
      yield put(setGetTips(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* updateCartByTip(action) {
  const body = { ...action.payload };
  delete body.cartId;
  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/${action.payload?.cartId}`,
      body
    );
    if (resp.status) {
      yield put(setUpdateCartByTip(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* createOrder(action) {
  const attachWithPhone = store?.getState()?.retails?.attachWithPhone;
  const attachWithEmail = store?.getState()?.retails?.attachWithEmail;
  const body = {
    ...action.payload,
    reciept_on_phone: attachWithPhone,
    reciept_on_email: attachWithEmail,
  };
  delete body.tips;

  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL_V1}orders/pos`,
      body
    );
    if (resp.status) {
      yield put(setCreateOrder(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getDrawerSession(action) {
  const body = { ...action?.payload };

  try {
    const resp = yield call(
      ApiClient.post,
      `${USER_API_URL_V1}drawer_management/drawer-session`,
      body
    );
    if (resp.status) {
      yield put(setDrawerSession(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* attachCustomer(action) {
  const body = { ...action?.payload };
  delete body.cartId;

  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL_V1}poscarts/attach/user/${action?.payload?.cartId}`,
      body
    );
    if (resp.status) {
      toast.success(resp?.data?.msg);
      yield put(setAttachCustomer(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* customProuductAdd(action) {
  const body = { ...action.payload };
  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL_V1}poscarts/custom-product`,
      body
    );
    if (resp.status) {
      yield put(setCustomProuductAdd(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getUserDetail(action) {
  const body = { ...action.payload };
  try {
    const resp = yield call(
      ApiClient.post,
      `${USER_API_URL_V1}user_profiles/by-phone-number`,
      body
    );
    if (resp.status) {
      yield put(setUserDetail(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTimeSlots(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}slots/pos/service-appointment-slots?${params}`
    );
    if (resp.status) {
      yield put(setTimeSlots(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* addToCartService(action) {
  const body = { ...action.payload };
  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL}/api/v1/poscarts`,
      body
    );
    if (resp.status) {
      yield put(setAddTocart(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* clearOneProduct(action) {
  const body = { ...action.payload };
  try {
    const resp = yield call(
      ApiClient.delete,
      `${ORDER_API_URL_V1}poscarts/${body?.cartId}/${body?.productId}`,
      body
    );
    if (resp.status) {
      yield put(setClearOneProduct(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getProductFilterCategory(action) {
  const dataToSend = { ...action.payload };
  const authData = store?.getState()?.auth;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;

  const params = {
    seller_id: sellerId,
    main_category: true,
    service_type: "product",
  };

  // If needs searched category
  if (dataToSend?.search) {
    params.search = dataToSend.search;
  }

  const queryParams = new URLSearchParams(params).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}categories?${queryParams}`
    );
    if (resp.status) {
      yield put(setProductCategory(resp?.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getProductFilterSubCategory(action) {
  const dataToSend = { ...action.payload };
  const authData = store.getState().auth;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;

  const params = {
    seller_id: sellerId,
    need_subcategory: true,
    service_type: "product",
    check_product_existance: false,
  };

  // If needs searched subcategory
  if (dataToSend?.search) {
    params.search = dataToSend.search;
  }

  const queryParams = new URLSearchParams(params).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}categories?${queryParams}`
    );
    if (resp.status) {
      yield put(setProductSubCategory(resp?.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getProductFilterBrands(action) {
  const dataToSend = { ...action.payload };
  const authData = store.getState().auth;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;

  const params = {
    seller_id: sellerId,
  };

  // If needs searched subcategory
  if (dataToSend?.search) {
    params.search = dataToSend.search;
  }

  const queryParams = new URLSearchParams(params).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}brands?${queryParams}`
    );
    if (resp.status) {
      yield put(setProductBrands(resp?.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getServiceFilterCategory(action) {
  const dataToSend = { ...action.payload };
  const authData = store.getState().auth;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;

  const params = {
    seller_id: sellerId,
    main_category: true,
    service_type: "service",
  };

  // If needs searched category
  if (dataToSend?.search) {
    params.search = dataToSend.search;
  }

  const queryParams = new URLSearchParams(params).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}categories?${queryParams}`
    );
    if (resp.status) {
      yield put(setServiceCategory(resp?.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getServiceFilterSubCategory(action) {
  const dataToSend = { ...action.payload };
  const authData = store.getState().auth;
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;

  const params = {
    seller_id: sellerId,
    need_subcategory: true,
    service_type: "service",
    check_product_existance: false,
  };

  // If needs searched subcategory
  if (dataToSend?.search) {
    params.search = dataToSend.search;
  }

  const queryParams = new URLSearchParams(params).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}categories?${queryParams}`
    );
    if (resp.status) {
      yield put(setServiceSubCategory(resp?.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* merchantWalletCheck(action) {
  const sellerId = action?.payload?.seller_id;

  try {
    const resp = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}users/uuid/${sellerId}`
    );
    if (resp.status) {
      yield put(setMerchantWalletCheck(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data?.payload));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getWalletQr(action) {
  const cartID = action?.payload?.cartId;

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}poscarts/qr-code/${cartID}`
    );
    if (resp.status) {
      yield put(setWalletQr(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data?.payload));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* walletGetByPhone(action) {
  const phoneNumber = action?.payload?.phoneNumber;

  try {
    const resp = yield call(
      ApiClient.get,
      `${WALLET_API_URL_V1}wallets/other?search=${phoneNumber}`
    );

    if (resp.status) {
      {
        resp?.statusCode == 200
          ? toast.success("Wallet Found Succesfully")
          : toast.error("Wallet Not Found");
      }
      yield put(setwalletByPhone(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data?.payload));
    }
  } catch (e) {
    // toast.error("Wallet Not Found");
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* requestMoney(action) {
  const body = { ...action?.payload };

  try {
    const resp = yield call(
      ApiClient.post,
      `${WALLET_API_URL_V1}transactions/request-money`,
      body
    );
    if (resp.status) {
      yield put(setRequestMoney(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data?.payload));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* requestCheck(action) {
  const dataToSend = action?.payload?.requestId;

  try {
    const resp = yield call(
      ApiClient.get,
      `${WALLET_API_URL_V1}transactions/${dataToSend}`
    );
    if (resp.status) {
      yield put(setRequestCheck(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* qrcodestatus(action) {
  const dataToSend = action?.payload?.cartId;

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}poscarts/check-payment-status/${dataToSend}`
    );
    if (resp.status) {
      yield put(setQrcodestatus(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* paymentRequestCancel(action) {
  const dataToSend = action?.payload?.requestId;

  try {
    const resp = yield call(
      ApiClient.patch,
      `${WALLET_API_URL_V1}transactions/request/cancel/${dataToSend}`
    );
    if (resp.status) {
      {
        resp?.data?.msg == "Transaction cancelled" &&
          toast.success("Payment Request Cancel");
      }
      yield put(setPaymentRequestCancel(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* updateCart(action) {
  const body = action?.payload;
  const dataToSend = action?.payload?.cartId;
  delete body.cartId;

  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/change-qty/${dataToSend}`,
      body
    );
    if (resp.status) {
      yield put(setUpdateCart(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getHoldProductCart(action) {
  const dataToSend = action?.payload?.cartId;

  try {
    const resp = yield call(ApiClient.get, `${ORDER_API_URL_V1}poscarts/`);
    if (resp.status) {
      yield put(setHoldProductCart(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* holdCart(action) {
  const dataToSend = action?.payload?.cartId;
  const body = action?.payload;
  delete body.cartId;

  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/change-hold-status/${dataToSend}`,
      body
    );
    if (resp.status) {
      yield put(setHoldCart(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* updatePrice(action) {
  const cartId = action?.payload?.cartid;
  const productId = action?.payload?.cartProductId;
  const body = action?.payload;
  delete body.cartid;
  delete body.cartProductId;

  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}poscarts/update-price/${cartId}/${productId}`,
      body
    );
    if (resp.status) {
      yield put(setUpdatePrice(resp.data));
      yield call(action.payload.cb, (action.res = resp?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* retailsSaga() {
  yield all([
    takeLatest("retails/getMainProduct", getMainProduct),
    takeLatest("retails/getOneProductById", getOneProductById),
    takeLatest("retails/getMainServices", getMainServices),
    takeLatest("retails/getOneServiceById", getOneServiceById),
    takeLatest("retails/availableOffers", availableOffers),
    takeLatest("retails/productCart", productCart),
    takeLatest("retails/availableOffers", availableOffers),
    takeLatest("retails/addNotes", addNotes),
    takeLatest("retails/addDiscount", addDiscount),
    takeLatest("retails/addTocart", addTocart),
    takeLatest("retails/clearCart", clearCart),
    takeLatest("retails/checkSuppliedVariant", checkSuppliedVariant),
    takeLatest("retails/getTips", getTips),
    takeLatest("retails/updateCartByTip", updateCartByTip),
    takeLatest("retails/createOrder", createOrder),
    takeLatest("retails/getDrawerSession", getDrawerSession),
    takeLatest("retails/attachCustomer", attachCustomer),
    takeLatest("retails/customProuductAdd", customProuductAdd),
    takeLatest("retails/getUserDetail", getUserDetail),
    takeLatest("retails/getTimeSlots", getTimeSlots),
    takeLatest("retails/addToCartService", addToCartService),
    takeLatest("retails/updateCart", updateCart),
    takeLatest("retails/clearOneProduct", clearOneProduct),
    takeLatest("retails/getProductFilterCategory", getProductFilterCategory),
    takeLatest(
      "retails/getProductFilterSubCategory",
      getProductFilterSubCategory
    ),
    takeLatest("retails/getServiceFilterCategory", getServiceFilterCategory),
    takeLatest(
      "retails/getServiceFilterSubCategory",
      getServiceFilterSubCategory
    ),
    takeLatest("retails/getProductFilterBrands", getProductFilterBrands),
    takeLatest("retails/merchantWalletCheck", merchantWalletCheck),
    takeLatest("retails/getWalletQr", getWalletQr),
    takeLatest("retails/walletGetByPhone", walletGetByPhone),
    takeLatest("retails/requestMoney", requestMoney),
    takeLatest("retails/requestCheck", requestCheck),
    takeLatest("retails/qrcodestatus", qrcodestatus),
    takeLatest("retails/paymentRequestCancel", paymentRequestCancel),
    takeLatest("retails/getHoldProductCart", getHoldProductCart),
    takeLatest("retails/holdCart", holdCart),
    takeLatest("retails/createBulkCart", createBulkCart),
    takeLatest("retails/updatePrice", updatePrice),
  ]);
}

export default retailsSaga;

import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import {
  ORDER_API_URL,
  AUTH_API_URL,
  PRODUCT_API_URL,
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
} from "../../slices/retails";
import { all, call, put, takeLatest } from "redux-saga/effects";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";
const USER_API_URL_V1 = AUTH_API_URL + "/api/v1/";

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
      `${PRODUCT_API_URL_V1}products?delivery_options=2&service_type=service&need_&check_stock_out=true&${params}`
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
      `${PRODUCT_API_URL_V1}offer/products?app_name=pos&delivery_options=1,3,4&service_type=product&${params}`
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
function* productCart(action) {
  try {
    const resp = yield call(ApiClient.get, `${ORDER_API_URL_V1}poscarts/user`);
    if (resp.status) {
      yield put(setProductCart(resp.data));
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
  const body = { ...action.payload };
  delete body.tips;
  // delete body.mode_of_payment;
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
  ]);
}

export default retailsSaga;

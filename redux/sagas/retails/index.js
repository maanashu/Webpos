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
  setAllCustomersList,
  setSellerAreaList,
  setUserDetailsAndOrders,
  setUserMarketingStatus,
  setOneProductById,
} from "../../slices/retails";
import { all, call, put, takeLatest } from "redux-saga/effects";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";

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
      // yield call(action.payload.cb, (action.res = resp));
      console.log("resp.data", resp.data);
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
    console.log(
      "111111111111111111",
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

function* retailsSaga() {
  yield all([
    takeLatest("retails/getMainProduct", getMainProduct),
    takeLatest("retails/getOneProductById", getOneProductById),
  ]);
}

export default retailsSaga;

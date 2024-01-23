import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
  setAllCustomers,
  setAllCustomersList,
  setSellerAreaList,
  setUserDetailsAndOrders,
  setUserMarketingStatus,
} from "../../slices/customers";
import { all, call, put, takeLatest } from "redux-saga/effects";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";

function* getAllCustomers(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/pos/statistics/customers/count-new?${params}`
    );
    if (resp.status) {
      yield put(setAllCustomers(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getAllCustomersList(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/customers/analysis?${params}`
    );
    if (resp.status) {
      yield put(setAllCustomersList(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getSellerAreaList(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/customers/state?${params}`
    );
    if (resp.status) {
      yield put(setSellerAreaList(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getUserDetailsAndOrders(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders?${params}`
    );
    if (resp.status) {
      yield put(setUserDetailsAndOrders(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getUserMarketingStatus(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${AUTH_API_URL}/api/v1/marketings/status?${params}`
    );
    if (resp.status) {
      yield put(setUserMarketingStatus(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* customersSaga() {
  yield all([
    takeLatest("customers/getAllCustomers", getAllCustomers),
    takeLatest("customers/getAllCustomersList", getAllCustomersList),
    takeLatest("customers/getSellerAreaList", getSellerAreaList),
    takeLatest("customers/getUserDetailsAndOrders", getUserDetailsAndOrders),
    takeLatest("customers/getUserMarketingStatus", getUserMarketingStatus),
  ]);
}

export default customersSaga;

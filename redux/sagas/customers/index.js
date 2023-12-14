import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
  setAllCustomers,
  setAllCustomersList,
} from "../../slices/customers";
import { all, call, put, takeLatest } from "redux-saga/effects";

// https://apiorder.jobr.com:8004/api/v1/orders/pos/statistics/customers/count-new?seller_id=016b1b3a-d7d3-4fc3-a76b-995b23c43852&filter=month

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

function* customersSaga() {
  yield all([
    takeLatest("customers/getAllCustomers", getAllCustomers),
    takeLatest("customers/getAllCustomersList", getAllCustomersList),
  ]);
}

export default customersSaga;

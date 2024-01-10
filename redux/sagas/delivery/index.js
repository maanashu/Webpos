import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";

import { all, call, put, takeLatest } from "redux-saga/effects";
import { setOrdersList } from "../../slices/delivery";

function* getTodayOrderCount(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  console.log("PARAMA", params);
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/today/orders-count?seller_id=${params}`
    );
    if (resp) {
      console.log("Response", resp);
      //   yield put(setProfitData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getCurrentOrderStatus(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/delivering-orders/count?seller_id=${params}`
    );
    if (resp) {
      //   yield put(setProfitData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getOrderStat(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/orders/conversion/statistics?seller_id=${dataToSend?.seller_id}&filter=week&delivery_option=${dataToSend?.requestType}`
    );
    if (resp) {
      console.log("Response", resp);
      //   yield put(setProfitData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getOrdersList(action) {
  const dataToSend = { ...action.payload };

  const params = new URLSearchParams(dataToSend).toString();
  console.log(
    "444565464456456456456564654465465456=-=",
    `${ORDER_API_URL}/api/v1/orders?${params}`
  );
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders?${params}`
    );
    if (resp) {
      console.log("ResponseLIST==--==-=-=-", resp);
      yield put(setOrdersList(resp?.data == "" ? [] : resp?.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* deliverySaga() {
  yield all([takeLatest("delivery/getTodayOrderCount", getTodayOrderCount)]);
  yield all([
    takeLatest("delivery/getCurrentOrderStatus", getCurrentOrderStatus),
  ]);
  yield all([takeLatest("delivery/getOrderStat", getOrderStat)]);
  yield all([takeLatest("delivery/getOrdersList", getOrdersList)]);
}

export default deliverySaga;

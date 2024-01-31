import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";

import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  setAcceptOrder,
  setDrawerOrdersCount,
  setOrderDetailById,
  setOrdersList,
} from "../../slices/delivery";

const API_URL = {
  getTodayOrderCount: "/api/v1/orders/pos/today/orders-count?",
  getCurrentOrderStat: "/api/v1/orders/pos/delivering-orders/count?",
  getOrderStat: "/api/v1/orders/pos/orders/conversion/statistics?",
  getOrderList: "/api/v1/orders?",
  getDrawerCount: "/api/v1/orders/pos/statistics?",
  getOrderDetailById: "/api/v1/orders/pos/",
  acceptOrder: "/api/v1/orders/status/",
  verifyPickupOtp: "/api/v1/orders/verify-pickup-otp",
};

function* getTodayOrderCount(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}${API_URL.getTodayOrderCount}${params}`
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

function* getCurrentOrderStatus(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}${API_URL.getCurrentOrderStat}${params}`
    );
    if (resp) {
      // yield put(setProfitData(resp.data));

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
      `${ORDER_API_URL}${API_URL.getOrderStat}${params}`
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

function* getOrdersList(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}${API_URL.getOrderList}${params}`
    );

    if (resp) {
      yield put(setOrdersList(resp?.data == "" ? [] : resp?.data?.payload));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    console.log("error", e);
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* getDrawerOrdersCount(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  console.log("paramsss", params);
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}${API_URL.getDrawerCount}${params}`
    );
    if (resp) {
      yield put(
        setDrawerOrdersCount(resp?.data == "" ? [] : resp?.data?.payload)
      );

      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getOrderDetailById(action, callbackFn) {
  const dataToSend = action.payload;

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}${API_URL.getOrderDetailById}${dataToSend?.order_id}`
    );
    if (resp) {
      console.log("OrderId  ", JSON.stringify(resp));
      // yield put(
      //   setOrderDetailById(resp?.data == "" ? [] : resp?.data?.payload)
      // );
      // callbackFn && callbackFn(resp);

      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* acceptOrder(action, callbackFn) {
  const dataToSend = action.payload;
  console.log(
    "Endpoin",
    `${ORDER_API_URL}${API_URL.acceptOrder}${dataToSend?.orderId}`
  );

  const body = {
    status: dataToSend.status,
  };
  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL}${API_URL.acceptOrder}${dataToSend?.orderId}`,
      body
    );
    console.log("Response--", resp);
    if (resp) {
      setAcceptOrder();
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    console.log("Errorr0", e);
    // yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* verifyPickupOtp(action, callbackFn) {
  const dataToSend = action.payload;

  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL}${API_URL.verifyPickupOtp}`,
      dataToSend
    );
    if (!resp?.status) {
      toast.error("Invalid Otp");
    }

    if (resp) {
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
  yield all([
    takeLatest("delivery/getDrawerOrdersCount", getDrawerOrdersCount),
  ]);
  yield all([takeLatest("delivery/getOrderDetailById", getOrderDetailById)]);
  yield all([takeLatest("delivery/acceptOrder", acceptOrder)]);
  yield all([takeLatest("delivery/verifyPickupOtp", verifyPickupOtp)]);
}

export default deliverySaga;

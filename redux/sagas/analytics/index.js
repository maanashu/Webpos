import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad, setProfitData, setOrderData, setTotalOrderAnalyticsData, setTotalAnalyticsProductSoldData, setTotalInventoryData
} from "../../slices/analytics";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* getProfitsData(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/analytics?${params}`
    );
    if (resp) {
      yield put(setProfitData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* orderAnalyticsData(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/analytics/count/graph-new?${params}`
    );
    if (resp) {
      yield put(setOrderData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* totalOrderAnalyticsDataApi(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/statistics/orders/total-new?${params}`
    );
    if (resp) {
      yield put(setTotalOrderAnalyticsData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* totalAnalyticsProductSoldData(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/statistics/product/sold?${params}`
    );
    if (resp) {
      yield put(setTotalAnalyticsProductSoldData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* totalInventoryDataApi(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/statistics/inventory?${params}`
    );
    if (resp) {
      yield put(setTotalInventoryData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    // yield put(onErrorStopLoad());
    console.log(e,"total inventory data")
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* analyticsSaga() {
  yield all([
    takeLatest("analytics/getProfitsData", getProfitsData),
    takeLatest("analytics/orderAnalyticsData", orderAnalyticsData),
    takeLatest("analytics/totalOrderAnalyticsDataApi", totalOrderAnalyticsDataApi),
    takeLatest("analytics/totalAnalyticsProductSoldData", totalAnalyticsProductSoldData),
    takeLatest("analytics/totalInventoryDataApi", totalInventoryDataApi),
  ]);
}

export default analyticsSaga;
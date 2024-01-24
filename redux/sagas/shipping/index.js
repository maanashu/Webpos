import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
} from "../../slices/customers";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { setSidebarCountData } from "../../slices/shipping";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";

function* getShippingsSidebarCount(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/pos/seller/multi-status/orders-count?${params}`
    );
    if (resp.status) {
      yield put(setSidebarCountData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      console.log(resp, "response");
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e, "error");
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* changeStatusOfOrder(action) {
  const dataToSend = { ...action.payload };
  let id = dataToSend?.orderId
  delete dataToSend.cb;
  delete dataToSend.orderId;
  console.log(dataToSend,'data to send');
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL_V1}orders/status/${id}`,dataToSend
    );
    if (resp.status) {
      // yield put(setSidebarCountData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      console.log(resp, "response");
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e, "error");
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* getShippingsStatus(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/pos/shipping/orders?${params}`
    );
    if (resp.status) {
      yield call(action.payload.cb, (action.res = resp));
      console.log(resp, "response");
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e, "error");
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* getShippingGraphData(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/pos/graph/orders?${params}`
    );
    if (resp.status) {
      yield call(action.payload.cb, (action.res = resp));
      console.log(resp, "response");
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e, "error");
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* shippingSaga() {
    yield all([
      takeLatest("shipping/getShippingsSidebarCount", getShippingsSidebarCount),
      takeLatest("shipping/changeStatusOfOrder", changeStatusOfOrder),
      takeLatest("shipping/getShippingsStatus", getShippingsStatus),
      takeLatest("shipping/getShippingstodayStatus", getShippingsStatus),
      takeLatest("shipping/getShippingGraphData", getShippingGraphData),
    ]);
  }
  
  export default shippingSaga;
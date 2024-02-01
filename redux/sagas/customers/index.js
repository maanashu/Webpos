import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
  setAllCustomers,
  setAllCustomersList,
  setSearchedCustomerList,
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

function* getAllCustomersList(action, callbackFn) {
  console.log("actiondgjsgd", action);
  console.log("callback", callbackFn);

  const dataToSend = { ...action.payload };

  const type = dataToSend?.customerType?.toLowerCase().replace(/\s+/g, "_");
  const defaultParams = {
    seller_id: dataToSend?.sellerID,
    type: type,
  };

  const queryParams = {
    ...defaultParams,
  };
  if (dataToSend?.page) {
    queryParams.page = dataToSend?.page;
  }
  if (dataToSend?.limit) {
    queryParams.limit = dataToSend?.limit;
  }
  if (dataToSend?.search) {
    queryParams.search = dataToSend?.search;
  }

  if (dataToSend?.calenderDate !== undefined) {
    queryParams.date = dataToSend?.calenderDate;
  }

  if (dataToSend?.area !== "none" && dataToSend?.area !== undefined) {
    queryParams.area = dataToSend?.area;
  }

  if (dataToSend?.dayWisefilter) {
    queryParams.filter = dataToSend?.dayWisefilter;
  }

  if (
    dataToSend?.start_date !== "Invalid date" &&
    dataToSend?.start_date !== undefined
  ) {
    queryParams.start_date = dataToSend?.start_date;
  }

  if (
    dataToSend?.end_date !== "Invalid date" &&
    dataToSend?.end_date !== undefined
  ) {
    queryParams.end_date = dataToSend?.end_date;
  }

  const params = new URLSearchParams(queryParams).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/customers/analysis?${params}`
    );
    if (resp.status) {
      if (dataToSend?.search) {
        yield put(setSearchedCustomerList(resp.data));
      }
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

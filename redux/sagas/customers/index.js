import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
  setAllCustomers,
  setAllCustomersList,
  setSearchedCustomerList,
  setSellerAreaList,
  setStoreLocation,
  setUpdateMarketingStatus,
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
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getAllCustomersList(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
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

  if (dataToSend?.calenderDate) {
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
      yield put(setAllCustomersList(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
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
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getUserDetailsAndOrders(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;

  const defaultParams = {
    seller_id: dataToSend?.seller_id,
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

  if (dataToSend?.user_uid) {
    queryParams.user_uid = dataToSend?.user_uid;
  }

  if (dataToSend?.month !== "none" && dataToSend?.month !== undefined) {
    queryParams.month = dataToSend?.month;
  }

  if (
    dataToSend?.store_location !== "none" &&
    dataToSend?.store_location !== undefined
  ) {
    queryParams.store_location = dataToSend?.store_location;
  }

  const params = new URLSearchParams(queryParams).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders?${params}`
    );
    if (resp.status) {
      yield put(setUserDetailsAndOrders(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* updateUserMarketingStatus(action) {
  const dataToSend = { ...action.payload };
  console.log("fgagasjfgsa", dataToSend)
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.post,
      `${AUTH_API_URL}/api/v1/marketings?${params}`
    );
    if (resp.status) {
      yield put(setUpdateMarketingStatus(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
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
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getStoreLocation(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/customers/city?${params}`
    );
    if (resp.status) {
      yield put(setStoreLocation(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* customersSaga() {
  yield all([
    takeLatest("customers/getAllCustomers", getAllCustomers),
    takeLatest("customers/getAllCustomersList", getAllCustomersList),
    takeLatest("customers/getSellerAreaList", getSellerAreaList),
    takeLatest("customers/getUserDetailsAndOrders", getUserDetailsAndOrders),
    takeLatest("customers/getUserMarketingStatus", getUserMarketingStatus),
    takeLatest("customers/getStoreLocation", getStoreLocation),
    takeLatest(
      "customers/updateUserMarketingStatus",
      updateUserMarketingStatus
    ),
  ]);
}

export default customersSaga;

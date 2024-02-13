import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  onErrorStopLoad,
  setNotifications,
  setTotalTra,
  setTotalTraDetail,
  setTotalTraType,
} from "../../slices/transactions";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const USER_API_URL_V1 = AUTH_API_URL + "/api/v1/";

function* getTotalTra(action) {
  const dataToSend = { ...action.payload };
  // delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/wallet/transaction/analysis?${params}`
    );

    if (resp.status) {
      yield put(setTotalTra(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTotalTraDetail(action) {
  const dataToSend = { ...action.payload };
  // delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();

  const defaultParams = {
    seller_id: dataToSend?.sellerId,
    transaction_type: dataToSend?.transactionType,
  };

  const queryParams = {
    ...defaultParams,
    page: dataToSend?.page,
    limit: dataToSend?.limit,
  };

  // if (data?.search) {
  //   queryParams.search = data?.search;
  // }

  if (dataToSend?.calendarDate !== undefined) {
    queryParams.date = dataToSend?.calendarDate;
  }

  if (dataToSend?.status !== "none") {
    queryParams.status = dataToSend?.status;
  }

  if (dataToSend?.orderType !== "none" && dataToSend?.orderType !== undefined) {
    queryParams.order_type = dataToSend?.orderType;
  }

  if (dataToSend?.dayWiseFilter) {
    queryParams.filter_by = dataToSend?.dayWiseFilter;
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

  if (dataToSend?.app_name !== undefined) {
    queryParams.app_name = dataToSend?.app_name;
  }

  if (dataToSend?.delivery_option !== undefined) {
    queryParams.delivery_option = dataToSend?.delivery_option;
  }
  const stringifiedQueryParams = new URLSearchParams(queryParams).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/?${stringifiedQueryParams}`
    );
    if (resp) {
      yield put(setTotalTraDetail(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTotalTraType(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  const defaultParams = {
    seller_id: dataToSend?.sellerID,
  };
  const queryParams = {
    ...defaultParams,
  };

  if (dataToSend?.orderType !== "none" && dataToSend?.orderType !== undefined) {
    queryParams.order_type = dataToSend?.orderType;
  }

  if (dataToSend?.calendarDate !== undefined) {
    queryParams.date = dataToSend?.calendarDate;
  }

  if (dataToSend?.dayWiseFilter) {
    queryParams.filter = dataToSend?.dayWiseFilter;
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
  const stringifiedQueryParams = new URLSearchParams(queryParams).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}orders/pos/transaction-count?${stringifiedQueryParams}`
    );
    if (resp.status) {
      yield put(setTotalTraType(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getNotifications() {
  try {
    const resp = yield call(ApiClient.get, `${USER_API_URL_V1}notifications`);
    if (resp.status) {
      yield put(setNotifications(resp.data?.payload?.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* transactionsSaga() {
  yield all([takeLatest("transactions/getTotalTraDetail", getTotalTraDetail)]);
  yield all([takeLatest("transactions/getTotalTraType", getTotalTraType)]);
  yield all([takeLatest("transactions/getTotalTra", getTotalTra)]);
  yield all([takeLatest("transactions/getNotifications", getNotifications)]);
}

export default transactionsSaga;

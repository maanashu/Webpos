import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  onErrorStopLoad,
  setTotalTra,
  setTotalTraDetail,
  setTotalTraType,
} from "../../slices/transactions";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";

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
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTotalTraDetail(action) {
  const dataToSend = { ...action.payload };
  // delete dataToSend.cb;
  const params = new URLSearchParams(dataToSend).toString();
  console.log("first", action);

  const defaultParams = {
    seller_id: action?.sellerId,
    transaction_type: action?.transactionType,
  };

  const queryParams = {
    ...defaultParams,
    page: action?.page,
    limit: action?.limit,
  };

  // if (data?.search) {
  //   queryParams.search = data?.search;
  // }

  if (action?.calendarDate !== undefined) {
    queryParams.date = action?.calendarDate;
  }

  if (action?.status !== "none") {
    queryParams.status = action?.status;
  }

  if (action?.orderType !== "none") {
    queryParams.order_type = action?.orderType;
  }

  if (action?.dayWiseFilter) {
    queryParams.filter_by = action?.dayWiseFilter;
  }

  if (
    action?.start_date !== "Invalid date" &&
    action?.start_date !== undefined
  ) {
    queryParams.start_date = action?.start_date;
  }

  if (action?.end_date !== "Invalid date" && action?.end_date !== undefined) {
    queryParams.end_date = action?.end_date;
  }

  if (action?.app_name !== undefined) {
    queryParams.app_name = action?.app_name;
  }

  if (action?.delivery_option !== undefined) {
    queryParams.delivery_option = action?.delivery_option;
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
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getTotalTraType(action) {
  console.log("first", action);
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();

  const defaultParams = {
    seller_id: action?.sellerID,
  };
  const queryParams = {
    ...defaultParams,
  };

  if (action?.orderType !== "none") {
    queryParams.order_type = action?.orderType;
  }

  if (action?.calendarDate !== undefined) {
    queryParams.date = action?.calendarDate;
  }

  if (action?.dayWiseFilter) {
    queryParams.filter = action?.dayWiseFilter;
  }

  if (
    action?.start_date !== "Invalid date" &&
    action?.start_date !== undefined
  ) {
    queryParams.start_date = action?.start_date;
  }

  if (action?.end_date !== "Invalid date" && action?.end_date !== undefined) {
    queryParams.end_date = action?.end_date;
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
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* transactionsSaga() {
  yield all([takeLatest("transactions/getTotalTraDetail", getTotalTraDetail)]);
  yield all([takeLatest("transactions/getTotalTraType", getTotalTraType)]);
  yield all([takeLatest("transactions/getTotalTra", getTotalTra)]);
}

export default transactionsSaga;

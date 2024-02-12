import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { AUTH_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  onErrorStopLoad,
  setExpectedCashByDrawerId,
  setGetDrawerSession,
  setSessionHistory
} from "../../slices/cashDrawer";

const USER_API_URL_V1 = AUTH_API_URL + "/api/v1/";

function* getSessionHistory(action) {
  const dataToSend = { ...action.payload };

  const queryParams = {
    page: dataToSend?.page,
    limit: dataToSend?.limit,
  };

  // if (data?.search) {
  //   queryParams.search = data?.search;
  // }

  if (dataToSend?.calendarDate !== undefined) {
    queryParams.filter_date = dataToSend?.calendarDate;
  }

  if (dataToSend?.staffId !== "none") {
    queryParams.pos_user_id = dataToSend?.staffId;
  }

  const stringifiedQueryParams = new URLSearchParams(queryParams).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/drawer-session/history/?${stringifiedQueryParams}`
    );
    if (resp) {
      yield put(setSessionHistory(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* sendPaymentHistory(action) {
  const dataToSend = { ...action.payload };

  const queryParams = {};

  if (dataToSend?.drawer_id) {
    queryParams.drawer_id = dataToSend.drawer_id;
  }

  const stringifiedQueryParams = new URLSearchParams(queryParams).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/payment/history/send/?${stringifiedQueryParams}`
    );
    if (resp) {
      // yield put(setSessionHistory(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getSessionSummary(action) {
  try {
    const body = { ...action?.payload };
    delete body.cb
    const stringifiedQueryParams = new URLSearchParams(body).toString();

    const resp = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/payment/history?${stringifiedQueryParams}`
    );
    
    if (resp) {
      yield put(setSessionHistory(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getDrawerSession(action) {
  const body = { ...action?.payload };
  try {
    const resp = yield call(
      ApiClient.post,
      `${USER_API_URL_V1}drawer_management/drawer-session`,
      body
    );
    if (resp.status) {
      // yield put(setGetDrawerSession(resp.data));
      yield put(setGetDrawerSession(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* updateDrawerSession(action) {
  const body = { ...action?.payload };
  delete body?.cb
  try {
    const resp = yield call(
      ApiClient.post,
      `${USER_API_URL_V1}drawer_management`,
      body
    );
    if (resp.status) {
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getExpectedCashByDrawerId(action) {
  try {
    const resp = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/drawer-session/cash-expected/${action?.payload?.drawer_session_id}`
    );

    if (resp.status) {
      yield put(setExpectedCashByDrawerId(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* cashDrawerSaga() {
  yield all([takeLatest("cashDrawer/getSessionHistory", getSessionHistory)]);
  yield all([takeLatest("cashDrawer/getDrawerSession", getDrawerSession)]);
  yield all([takeLatest("cashDrawer/updateDrawerSession", updateDrawerSession)]);
  yield all([takeLatest("cashDrawer/getSessionSummary", getSessionSummary)]);
  yield all([takeLatest("cashDrawer/sendPaymentHistory", sendPaymentHistory)]);
  yield all([
    takeLatest(
      "cashDrawer/getExpectedCashByDrawerId",
      getExpectedCashByDrawerId
    ),
  ]);
}

export default cashDrawerSaga;

import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { AUTH_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  onErrorStopLoad,
  setGetDrawerHistory,
  setGetDrawerSession,
  setSessionHistory,
  setTrackSessionSave,
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
      // yield call(action.payload.cb, (action.res = resp));
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
      yield put(setGetDrawerSession(resp.data));
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

function* getDrawerHistory(action) {
  const body = { ...action?.payload };
  try {
    const reswithId = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/payment/history`,
      body
    );
    const resWithoutId = yield call(
      ApiClient.get,
      `${USER_API_URL_V1}drawer_management/payment/history`
    );

    const resp = body ? reswithId : resWithoutId;

    if (resp.status) {
      yield put(setGetDrawerHistory(resp.data));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* trackSessionSave(action) {
  const body = { ...action?.payload };
  try {
    const resp = yield call(
      ApiClient.post,
      `${USER_API_URL_V1}drawer_management`,
      body
    );
    if (resp.status) {
      yield put(setTrackSessionSave(resp.data));
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
  yield all([takeLatest("cashDrawer/getDrawerHistory", getDrawerHistory)]);
  yield all([takeLatest("cashDrawer/trackSessionSave", trackSessionSave)]);
}

export default cashDrawerSaga;

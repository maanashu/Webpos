import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,
  setConfigureGoogleAuthenticator,
setGetSecurityScanerCode,
setGetSecuritySettingInfo,
setVerifyGoogleAuthenticator,
setForgetGoogleAuthenticator,
setResetGoogleAuthenticator
} from "../../slices/setting";
import { toast } from "react-toastify";
import { ORDER_API_URL, AUTH_API_URL,USER_SERVICE_URL } from "../../../utilities/config"

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getSecuritySettingInfo(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.get, (`${USER_SERVICE_URL}/api/v1/user_settings?app_name=${action.payload.app_name}&seller_id=${action.payload.seller_id}`));
    if (resp.status) {
      yield put(setGetSecuritySettingInfo(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getSecurityScanerCode(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.get, (`${AUTH_API_URL}/api/v1/users/2fa/generate-qr-code`));
    if (resp.status) {
      yield put(setGetSecurityScanerCode(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* configureGoogleAuthenticator(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/2fa/configure-qr-code`),(action.payload = action.payload));
    if (resp.status) {
      yield put(setConfigureGoogleAuthenticator(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* verifyGoogleAuthenticator(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/2fa/verify`),(action.payload = action.payload));
    if (resp.status) {
      yield put(setVerifyGoogleAuthenticator(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* forgetGoogleAuthenticator(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.get, (`${AUTH_API_URL}/api/v1/users/2fa/forgot`));
    if (resp.status) {
      yield put(setForgetGoogleAuthenticator(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* resetGoogleAuthenticator(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/2fa/reset`),(action.payload = action.payload));
    if (resp.status) {
      yield put(setResetGoogleAuthenticator(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(resp?.data?.msg);
    }
    else {
      throw resp
    }
  } catch (e) {
    yield put(onErrorStopLoad())
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* settingSaga() {
  yield all([
    takeLatest("setting/getSecuritySettingInfo", getSecuritySettingInfo),
    takeLatest("setting/getSecurityScanerCode", getSecurityScanerCode),
    takeLatest("setting/configureGoogleAuthenticator", configureGoogleAuthenticator),
    takeLatest("setting/verifyGoogleAuthenticator", verifyGoogleAuthenticator),
    takeLatest("setting/forgetGoogleAuthenticator", forgetGoogleAuthenticator),
    takeLatest("setting/resetGoogleAuthenticator", resetGoogleAuthenticator),
  ]);
}

export default settingSaga;




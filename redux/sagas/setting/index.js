import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,
setGetSecurityScanerCode
} from "../../slices/setting";
import { toast } from "react-toastify";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config"

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* getSecurityScanerCode(action) {
    console.log(action,"hiiaction");
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

function* settingSaga() {
  yield all([
    takeLatest("setting/getSecurityScanerCode", getSecurityScanerCode),
  ]);
}

export default settingSaga;

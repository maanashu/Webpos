import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import ApiPath from "../../../constants/apiUrl";
import {
  onErrorStopLoad,
  setUserMerchantLogin,
  setGetAllPosUser,
  setPosUserLogin,
} from "../../slices/auth";
import { toast } from "react-toastify";
import { PRODUCT_API_URL, AUTH_API_URL } from "../../../utilities/config";
import { getSecuritySettingInfo } from "../../slices/setting";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* userMerchantLogin(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      `${AUTH_API_URL}/api/v1/users/merchant/login`,
      (action.payload = action.payload)
    );
    if (resp.status) {
      localStorage.setItem(
        "merchantAuthToken",
        resp.data?.payload?.token ? resp.data?.payload?.token : ""
      );
      yield put(setUserMerchantLogin(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* getAllPosUser(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  try {
    const resp = yield call(
      ApiClient.get,
      `${AUTH_API_URL}/api/v1/users/merchant/pos-user?seller_id=${action.payload.seller_id}`
    );
    if (resp.status) {
      yield put(setGetAllPosUser(resp.data?.payload?.pos_staff));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* posUserLogin(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  try {
    const resp = yield call(
      ApiClient.post,
      `${AUTH_API_URL}/api/v1/users/merchant/pos-user/login`,
      (action.payload = action.payload)
    );
    if (resp.status) {
      if (resp.data?.payload?.user_profiles?.is_two_fa_enabled === false) {
        localStorage.setItem(
          "authToken",
          resp.data?.payload?.token ? resp.data?.payload?.token : ""
        );
      } else {
        localStorage.setItem(
          "2FAToken",
          resp.data?.payload?.token ? resp.data?.payload?.token : ""
        );
      }
      yield put(setPosUserLogin(resp.data));
      yield call(action.payload.cb, (action.res = resp));

      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    // toast.error(e?.error?.response?.data?.msg);
  }
}

function* authSaga() {
  yield all([
    takeLatest("auth/userMerchantLogin", userMerchantLogin),
    takeLatest("auth/getAllPosUser", getAllPosUser),
    takeLatest("auth/posUserLogin", posUserLogin),
  ]);
}

export default authSaga;

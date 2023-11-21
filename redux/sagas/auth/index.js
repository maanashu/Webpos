import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import ApiPath from '../../../constants/apiUrl';
import {
  onErrorStopLoad,
  setUserMerchantLogin,
  setGetAllPosUser,
  setPosUserLogin
} from "../../slices/auth";
import { toast } from "react-toastify";
import { PRODUCT_API_URL, AUTH_API_URL } from "../../../utilities/config"

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* userMerchantLogin(action) {
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/merchant/login`),(action.payload = action.payload));
    if (resp.status) {
      localStorage.setItem("authToken", resp.data?.payload?.token ? resp.data?.payload?.token : "")
      localStorage.setItem("uniqueId", resp.data?.payload?.uniqe_id ? resp.data?.payload?.uniqe_id : "")
      yield put(setUserMerchantLogin(resp.data));
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


function* getAllPosUser(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  // console.log(action, "action");
  try {
    const resp = yield call(ApiClient.get, (`${AUTH_API_URL}/api/v1/users/merchant/pos-user?seller_id=${action.payload.seller_id}`));
    if (resp.status) {
      yield put(setGetAllPosUser(resp.data));
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

function* posUserLogin(action) {
  const dataToSend = { ...action.payload }
  delete dataToSend.cb
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/merchant/pos-user/login`),(action.payload = action.payload));
    if (resp.status) {
      yield put(setPosUserLogin(resp.data));
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

function* authSaga() {
  yield all([
    takeLatest("auth/userMerchantLogin", userMerchantLogin),
    takeLatest("auth/getAllPosUser", getAllPosUser),
    takeLatest("auth/posUserLogin", posUserLogin),

  ]);
}

export default authSaga;

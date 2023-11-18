import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import ApiPath from '../../../constants/apiUrl';
import {
  onErrorStopLoad,
  setUserMerchantLogin,
  setGetAllPosUser
} from "../../slices/auth";
import { toast } from "react-toastify";
import { PRODUCT_API_URL, AUTH_API_URL } from "../../../utilities/config"

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* userMerchantLogin(action) {
  console.log(action, "action");
  try {
    const resp = yield call(ApiClient.post, (`${AUTH_API_URL}/api/v1/users/merchant/login`), (action.payload = action.payload));
    if (resp.status) {
      localStorage.setItem("authToken", resp.data?.payload?.token ? resp.data?.payload?.token : "")
      yield put(setUserMerchantLogin(resp.data.data));
      yield call(action.payload.cb, action.res = resp)
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
  console.log(action, "action");
  try {
    const resp = yield call(ApiClient.get, (`${AUTH_API_URL}/api/v1/users/merchant/pos-user?page=${action.payload.page}&limit=${action.payload.limit}&seller_id=${action.payload.seller_id}`));
    if (resp.status) {
      yield put(setGetAllPosUser(resp.data.data));
      yield call(action.payload.cb, action.res = resp)
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
// function* verifyPhoneOtp(action) {
//   try {
//     const resp = yield call(
//       ApiClient.post,
//       (`${AUTH_API_URL}/api/v1/users/merchant/verify-otp`),
//       (action.params = action.payload)
//     );
//     if (resp.status) {
//       yield put(setVerifyPhoneOtp(resp.data));
//       yield call(action.payload.cb, resp);
//       toast.success(resp.data.msg);
//     } else {
//       throw resp;
//     }
//   } catch (e) {
//     yield put(onErrorStopLoad());
//     toast.dismiss();
//     toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
//   }
// }


function* authSaga() {
  yield all([
    takeLatest("auth/userMerchantLogin", userMerchantLogin),
    takeLatest("auth/getAllPosUser", getAllPosUser),

  ]);
}

export default authSaga;

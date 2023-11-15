import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,
  setUserLogin,
  setForgetPassword,
  setResetPassword,
  setVerifyPhone,
  setVerifyPhoneOtp,
  setResendPhoneOtp,
  setSendEmailOtp,
  setVerifyEmailOtp,
  setGetServices,
  setSubscriber,
  setSignUp
} from "../../slices/auth";
import { toast } from "react-toastify";
import {PRODUCT_API_URL, AUTH_API_URL} from "../../../utilities/config"

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* userLogin(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/login`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setUserLogin(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* forgotPassword(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/forgot-password`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setForgetPassword(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* resetPassword(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/reset-password`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setResetPassword(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* verifyPhoneApi(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/send-otp`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setVerifyPhone(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* verifyPhoneOtp(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/verify-otp`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setVerifyPhoneOtp(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* resendPhoneOtp(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/resend-otp`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setResendPhoneOtp(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* sendEmailOtp(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/send-otp`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setSendEmailOtp(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e.error.response.data.msg);
  }
}

function* verifyEmailOtp(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant/verify-otp`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setVerifyEmailOtp(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* signUp(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/users/merchant`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setSignUp(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e,"erroror on signup ")
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* subscriber(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (`${AUTH_API_URL}/api/v1/subscribers`),
      (action.params = action.payload)
    );
    if (resp.status) {
      yield put(setSubscriber(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* getServices(action) {
  try {
    const resp = yield call(
      ApiClient.get,
      (`${PRODUCT_API_URL}/api/v1/services/b2b`),
    );
    if (resp.status) {
      yield put(setGetServices(resp.data));
      yield call(action.payload.cb, resp);
      toast.success(resp.data.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.dismiss();
    toast.error(e?.error?.response?.data?.payload?.length > 0 ? e?.error?.response?.data?.payload[0] : e?.error?.response?.data?.msg ? e?.error?.response?.data?.msg : e?.error?.message);
  }
}

function* authSaga() {
  yield all([
    takeLatest("auth/userLogin", userLogin),
    takeLatest("auth/forgotPassword", forgotPassword),
    takeLatest("auth/resetPassword", resetPassword),    
    takeLatest("auth/verifyPhoneApi", verifyPhoneApi),   
    takeLatest("auth/verifyPhoneOtp", verifyPhoneOtp),    
    takeLatest("auth/resendPhoneOtp", resendPhoneOtp),
    takeLatest("auth/sendEmailOtp", sendEmailOtp),
    takeLatest("auth/verifyEmailOtp", verifyEmailOtp),
    takeLatest("auth/getServices", getServices),
    takeLatest("auth/getServices", signUp),
    takeLatest("auth/subscriber", subscriber),
  ]);
}

export default authSaga;

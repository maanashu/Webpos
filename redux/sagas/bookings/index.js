import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import { onErrorStopLoad, setGetAppointments } from "../../slices/bookings";
import { toast } from "react-toastify";
import { ORDER_API_URL, AUTH_API_URL } from "../../../utilities/config";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* getAppointments(action) {
  const dataToSend = { ...action.payload.params };
  try {
    const params = new URLSearchParams(dataToSend).toString();

    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/appointments?${params}`
    );

    if (resp.status) {
      yield put(setGetAppointments(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      // toast.success(resp?.data?.msg);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* bookingSaga() {
  yield all([takeLatest("bookings/getAppointments", getAppointments)]);
}

export default bookingSaga;

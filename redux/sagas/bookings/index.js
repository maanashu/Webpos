import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,
  setGetAppointments,
  setUpdateAppointmentStatus,
  setGetStaffUsers,
} from "../../slices/bookings";
import { toast } from "react-toastify";
import {
  ORDER_API_URL,
  AUTH_API_URL,
  USER_SERVICE_URL,
} from "../../../utilities/config";
import { APPOINTMENT_STATUS } from "../../../constants/enums";
// Worker saga will be fired on USER_FETCH_REQUESTED actions

const getAppointmentStatusMessage = (status) => {
  if (status === APPOINTMENT_STATUS.ACCEPTED_BY_SELLER) {
    return "Appointment approved";
  } else if (status === APPOINTMENT_STATUS.REJECTED_BY_SELLER) {
    return "Appointment Rejected";
  } else if (status === APPOINTMENT_STATUS.COMPLETED) {
    return "Appointment Completed";
  } else if (status === APPOINTMENT_STATUS.CHECKED_IN) {
    return "Appointment Checked In";
  }
};

function* getAppointments(action) {
  const dataToSend = { ...action.payload.params };
  try {
    const params = new URLSearchParams(dataToSend).toString();

    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/appointments?${params}`
    );

    // console.log("BOOKINGS----" + JSON.stringify(resp));
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

function* updateAppointmentStatus(action) {
  const { appointmentId, status } = action.payload;
  try {
    const body = {
      status: `${status}`,
    };
    const resp = yield call(
      ApiClient.put,
      `${ORDER_API_URL}/api/v1/appointments/status/${appointmentId}`,
      body
    );

    if (resp.status) {
      yield put(setUpdateAppointmentStatus(resp.data));
      yield call(action.payload.cb, (action.res = resp));
      toast.success(getAppointmentStatusMessage(status));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getStaffUsers(action) {
  const dataToSend = { ...action.payload.params };
  try {
    const params = new URLSearchParams(dataToSend).toString();
    const resp = yield call(
      ApiClient.get,
      `${USER_SERVICE_URL}/api/v1/users/merchant/pos-user?${params}`
    );
    if (resp.status) {
      yield put(setGetStaffUsers(resp.data));
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
  yield all([
    takeLatest("bookings/getStaffUsers", getStaffUsers),
    takeLatest("bookings/getAppointments", getAppointments),
    takeLatest("bookings/updateAppointmentStatus", updateAppointmentStatus),
  ]);
}

export default bookingSaga;

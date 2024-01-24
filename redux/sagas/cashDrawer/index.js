import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { AUTH_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { onErrorStopLoad, setSessionHistory } from "../../slices/cashDrawer";

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
function* cashDrawerSaga() {
  yield all([takeLatest("cashDrawer/getSessionHistory", getSessionHistory)]);
}

export default cashDrawerSaga;

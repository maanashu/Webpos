import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad, setProfitData,
} from "../../slices/analytics";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* getProfitsData(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb
  const params = new URLSearchParams(dataToSend).toString();

  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL}/api/v1/orders/pos/analytics?${params}`
    );
    if (resp) {
      yield put(setProfitData(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* analyticsSaga() {
    yield all([
      takeLatest("analytics/getProfitsData", getProfitsData),
    ]);
  }
  
  export default analyticsSaga;
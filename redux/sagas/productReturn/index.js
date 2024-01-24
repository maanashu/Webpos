import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, PRODUCT_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  setSearchInvoiceByInvoiceId,
  setSearchBySKU,
  setReturnToInventory
} from "../../slices/productReturn";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";
const invoiceKey = "invoices/by-invoice-number";

function* searchInvoiceByInvoiceId(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  delete dataToSend.invoiceId;
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}${invoiceKey}/${action.payload.invoiceId}?seller_id=${action.payload.seller_id}`
    );
    if (resp.status) {
      yield put(setSearchInvoiceByInvoiceId(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else if (!resp.data) {
      yield put(setSearchInvoiceByInvoiceId(null));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* searchBySKU(action) {
  const dataToSend = { ...action.payload };
  delete dataToSend.cb;
  delete dataToSend.search;
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products/search-one?app_name=pos&seller_id=${action.payload.seller_id}&search=${action.payload.search}`
    );
    if (resp.status) {
      yield put(setSearchBySKU(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else if (!resp.data) {
      yield put(setSearchBySKU(null));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* returnToInventory(action) {
  console.log(action,'action');
  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL}/api/v1/returns`,
      (action.payload = action.payload)
    );
    if (resp.status) {
      yield put(setReturnToInventory(resp.data));
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

function* returnSaga() {
  yield all([
    takeLatest("return/searchInvoiceByInvoiceId", searchInvoiceByInvoiceId),
    takeLatest("return/searchBySKU", searchBySKU),
    takeLatest("return/returnToInventory", returnToInventory),
  ]);

}

export default returnSaga;

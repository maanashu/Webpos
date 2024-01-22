import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { setSearchInvoiceByInvoiceId } from "../../slices/productReturn";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const invoiceKey="invoices/by-invoice-number";

function* searchInvoiceByInvoiceId(action) {
    const dataToSend = { ...action.payload };;
    delete dataToSend.cb;
    delete dataToSend.invoiceId;
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}${invoiceKey}/${action.payload.invoiceId}?seller_id=${action.payload.seller_id}`
      // {{order_url}}/api/v1/invoices/by-invoice-number/:invoiceNumber?seller_id=eda660e7-b20e-40c3-ad8d-1bd44bf65ff2
// https://apiorder.jobr.com:8004/api/v1/invoices/by-invoice-number/375?seller_id=e39a8bc8-ffc7-4047-b710-c743b9c1d498
    );
    if (resp.status) {
      yield put(setSearchInvoiceByInvoiceId(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}


function* returnSaga() {
  yield all([takeLatest("return/searchInvoiceByInvoiceId", searchInvoiceByInvoiceId)]);
}

export default returnSaga;

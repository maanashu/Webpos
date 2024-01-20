import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL } from "../../../utilities/config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { setSearchInvoiceByInvoiceId } from "../../slices/productReturn";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const invoiceKey="invoices/by-invoice-number";

function* searchInvoiceByInvoiceId(action) {
    console.log(action,'actionInvoice');
    const dataToSend = { ...action.payload };
    console.log(dataToSend,"dataToSend");
    const params = new URLSearchParams(dataToSend).toString();
    console.log(params,'params');
    delete dataToSend.cb;
    delete dataToSend.invoiceId;
  try {
    const resp = yield call(
      ApiClient.get,
      `${ORDER_API_URL_V1}+${invoiceKey}+${action.payload.invoiceId}?${action.payload.seller_id}`
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

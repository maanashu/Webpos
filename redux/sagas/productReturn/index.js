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
    );
    if (resp.status) {
      yield put(setSearchInvoiceByInvoiceId(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    }
    else if(!resp.data){
      yield put(setSearchInvoiceByInvoiceId(null));
    }
    else {
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

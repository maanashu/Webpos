import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import { ORDER_API_URL, AUTH_API_URL, PRODUCT_API_URL } from "../../../utilities/config";
import {
  onErrorStopLoad,
  setMainProduct,
  setAllCustomersList,
  setSellerAreaList,
  setUserDetailsAndOrders,
  setUserMarketingStatus,
} from "../../slices/retails";
import { all, call, put, takeLatest } from "redux-saga/effects";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";

function* getMainProduct(productTypeID = {}) {
    console.log('fghjklfghjklfghjkl')
  const defaultParams = {
    app_name: 'pos',
    delivery_options: '3',
    // seller_id: productTypeID?.data?.sellerId,
    service_type: 'product',
    page: 1,
    limit: 25,
  };
  let finalParams;
  if(Object.keys(productTypeID).length !== 0){
    finalParams = {
        ...defaultParams,
        ...productTypeID
    }
    }else{
        finalParams = {
            ...defaultParams,
        }
  }

  const params = new URLSearchParams(finalParams).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products?${params}`
    );
    console.log('1111111111')
    if (resp.status) {
      yield put(setMainProduct(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}



function* retailsSaga() {
  yield all([
    takeLatest("retails/getMainProduct", getMainProduct),
 
  ]);
}

export default retailsSaga;

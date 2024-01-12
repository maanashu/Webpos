import { toast } from "react-toastify";
import { ApiClient } from "../../../utilities/api";
import {
  ORDER_API_URL,
  AUTH_API_URL,
  PRODUCT_API_URL,
} from "../../../utilities/config";
import {
  onErrorStopLoad,
  setMainProduct,
  setOneProductById,
  setMainServices,
  setAvailableOffers,
  setProductCart,
} from "../../slices/retails";
import { all, call, put, takeLatest } from "redux-saga/effects";

const ORDER_API_URL_V1 = ORDER_API_URL + "/api/v1/";
const PRODUCT_API_URL_V1 = PRODUCT_API_URL + "/api/v1/";

function* getMainProduct(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products?app_name=pos&delivery_options=3&service_type=product&page=1&limit=25&${params}`
    );

    if (resp.status) {
      yield put(setMainProduct(resp.data));
      // yield call(action.payload.cb, (action.res = resp));
      console.log("resp.data", resp.data);
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getOneProductById(action) {
  const dataToSend = { ...action.payload?.params };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products/${action.payload?.productId}?${params}`
    );
    if (resp.status) {
      yield put(setOneProductById(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* getMainServices(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}products?delivery_options=2&service_type=service&need_&check_stock_out=true&seller_id=e39a8bc8-ffc7-4047-b710-c743b9c1d498`
    );
    if (resp.status) {
      yield put(setMainServices(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* availableOffers(action) {
  const dataToSend = { ...action.payload };
  const params = new URLSearchParams(dataToSend).toString();
  try {
    const resp = yield call(
      ApiClient.get,
      `${PRODUCT_API_URL_V1}offer/products?app_name=pos&delivery_options=1,3,4&service_type=product&seller_id=e39a8bc8-ffc7-4047-b710-c743b9c1d498`
    );
    if (resp.status) {
      yield put(setAvailableOffers(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}
function* productCart(action) {
  try {
    const resp = yield call(ApiClient.get, `${ORDER_API_URL_V1}poscarts/user`);
    if (resp.status) {
      yield put(setProductCart(resp.data));
      yield call(action.payload.cb, (action.res = resp));
    } else {
      throw resp;
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    toast.error(e?.error?.response?.data?.msg);
  }
}

function* addTocart(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      `${ORDER_API_URL}/api/v1/poscarts`,
      (action.payload = action.payload)
    );
    if (resp.status) {
      // yield put(setUserMerchantLogin(resp.data));
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

function* retailsSaga() {
  yield all([
    takeLatest("retails/getMainProduct", getMainProduct),
    takeLatest("retails/getOneProductById", getOneProductById),
    takeLatest("retails/getMainServices", getMainServices),
    takeLatest("retails/availableOffers", availableOffers),
    takeLatest("retails/productCart", productCart),
    takeLatest("retails/addTocart", addTocart),
  ]);
}

export default retailsSaga;

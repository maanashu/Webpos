import { all, fork, spawn } from "redux-saga/effects";
import authSaga from "./auth";
import dashboardSaga from "./dashboard";
import bookingSaga from "./bookings";
import customersSaga from "./customers";
import analyticsSaga from "./analytics";
import transactionsSaga from "./transactions";
import settingSaga from "./setting";
import retailsSaga from "./retails";
import deliverySaga from "./delivery";
import shippingSaga from "./shipping";
import cashDrawerSaga from "./cashDrawer";
import returnSaga from "./productReturn";

export default function* rootSaga() {
  yield all([
    spawn(authSaga),
    spawn(dashboardSaga),
    spawn(customersSaga),
    spawn(analyticsSaga),
    spawn(transactionsSaga),
    spawn(settingSaga),
    spawn(deliverySaga),
    spawn(retailsSaga),
    spawn(shippingSaga),
    spawn(cashDrawerSaga),
    spawn(returnSaga),
    spawn(bookingSaga),
    // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    // fork(saga2),
  ]);
}

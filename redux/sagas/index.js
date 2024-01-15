import { all, fork, spawn } from "redux-saga/effects";
import authSaga from "./auth";
import dashboardSaga from "./dashboard";
import customersSaga from "./customers";
import analyticsSaga from "./analytics";
import transactionsSaga from "./transactions";
import settingSaga from "./setting";
import deliverySaga from "./delivery";

export default function* rootSaga() {
  yield all([
    spawn(authSaga),
    spawn(dashboardSaga),
    spawn(customersSaga),
    spawn(analyticsSaga),
    spawn(transactionsSaga),
    spawn(settingSaga),
    spawn(deliverySaga),
    // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    // fork(saga2),
  ]);
}

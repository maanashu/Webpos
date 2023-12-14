import { all, fork, spawn } from "redux-saga/effects";
import authSaga from "./auth";
import dashboardSaga from "./dashboard";
import customersSaga from "./customers";

export default function* rootSaga() {
    yield all([
        spawn(authSaga),
        spawn(dashboardSaga),
        spawn(customersSaga),
        // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        // fork(saga2),
    ]);
}

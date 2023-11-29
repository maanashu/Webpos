import { all, fork, spawn } from "redux-saga/effects";
import authSaga from "./auth";
import dashboardSaga from "./dashboard";

export default function* rootSaga() {
    yield all([
        spawn(authSaga),
        spawn(dashboardSaga),
        // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        // fork(saga2),
    ]);
}

import { all } from "redux-saga/effects"
import loginWatcher from "../pages/login/saga"
import loadDataWatcher from "../pages/products/saga"

function* rootSaga() {
  yield all([loginWatcher(), loadDataWatcher()])
}

export default rootSaga

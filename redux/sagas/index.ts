import { all } from "redux-saga/effects"
import loadDataWatcher from "./productSaga"
import loginWatcher from "./userSaga"

function* rootSaga() {
  yield all([loginWatcher(), loadDataWatcher()])
}

export default rootSaga

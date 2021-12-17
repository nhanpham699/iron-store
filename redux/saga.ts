import axios from "axios"
import { AnyAction } from "redux"
import { all, call, put, takeEvery } from "redux-saga/effects"
import { loading, loginSuccess } from "./actions"
import { actionTypes } from "./types"

const loginInstance = axios.create({ baseURL: "/api" })

const loginPost = (req: string) =>
  loginInstance.request({
    method: "POST",
    url: `/login`,
    data: req,
  })

function* loginRequest(action: AnyAction): any {
  try {
    yield put(loading(true))
    const res = yield call(loginPost, action.req)
    if (!res.data.errCode) {
      yield put(loginSuccess(res.data.username))
      // yield put(loading(false))
      window.location.href = "/"
    } else {
      yield put(loginSuccess(""))
      yield put(loading(false))
    }
  } catch (err) {}
}

function* loginWatcher() {
  yield takeEvery(actionTypes.LOGIN, loginRequest)
}

function* rootSaga() {
  yield all([loginWatcher()])
}

export default rootSaga

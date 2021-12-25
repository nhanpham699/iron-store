import axios from "axios"
import { AnyAction } from "redux"
import { call, put, takeEvery } from "redux-saga/effects"
import { loading, loginSuccess } from "./actions"
import { actionTypes } from "./types"

const loginInstance = axios.create({ baseURL: "/api" })

interface IUser {
  username: string
  password: string
}

const loginPost = (req: IUser) =>
  loginInstance.request({
    method: "POST",
    url: `/login`,
    data: req,
  })

function* loginRequest(action: AnyAction): any {
  try {
    yield put(loading(true))
    const res = yield call(loginPost, action.req)
    if (!res.data.error) {
      yield put(loginSuccess(res.data.username))
      // yield put(loading(false))
      window.location.href = "/"
    } else {
      yield put(loading(false))
      yield put(loginSuccess("null"))
    }
  } catch (err) {}
}

export default function* loginWatcher() {
  yield takeEvery(actionTypes.LOGIN, loginRequest)
}

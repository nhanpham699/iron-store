import axios from "axios"
import { AnyAction } from "redux"
import { all, call, put, takeEvery } from "redux-saga/effects"
import { loadDataFailed, loadDataSuccess, loadingData } from "./actions"
import { actionTypes } from "./types"

const dataInstance = axios.create({ baseURL: "/hocphi/api" })

const inquiryPost = (req: any) =>
  dataInstance.request({
    method: "POST",
    url: `/inquiry`,
    data: req,
  })

function* dataRequest(action: AnyAction): any {
  try {
    yield put(loadingData(true))
    const res = yield call(inquiryPost, action.req)
    if (!res.data.errCode) {
      yield put(loadDataSuccess(res.data))
      yield put(loadingData(false))
      // history.push("/detail")
    } else {
      // const errCode = resultCodeInquiry(res.data.errCode)
      yield put(loadDataFailed())
      yield put(loadingData(false))
    }
  } catch (err) {}
}

function* reset() {
  try {
    yield put(loadDataFailed())
  } catch (err) {}
}

function* dataWatcher() {
  yield takeEvery(actionTypes.LOAD_DATA, dataRequest)
  yield takeEvery(actionTypes.RESET, reset)
}

function* rootSaga() {
  yield all([dataWatcher()])
}

export default rootSaga

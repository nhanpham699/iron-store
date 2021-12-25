import axios from "axios"
import { AnyAction } from "redux"
import { call, put, takeEvery } from "redux-saga/effects"
import {
  editData,
  loadDataSuccess,
  loading,
  updateDataSuccess,
} from "./actions"
import { initEditedState } from "./reducer"
import { actionTypes, IProduct } from "./types"

const dataInstance = axios.create({ baseURL: "/api" })

const loadDataGet = () =>
  dataInstance.request({
    method: "GET",
    url: `/products`,
  })
const createDataPost = (data: IProduct) =>
  dataInstance.request({
    method: "POST",
    url: `/products/create`,
    data: data,
  })
const updateDataPost = (data: IProduct) =>
  dataInstance.request({
    method: "POST",
    url: `/products/update`,
    data: data,
  })
const dataDelete = (_id: string) =>
  dataInstance.request({
    method: "POST",
    url: `/products/create`,
    data: _id,
  })

function* loadDataRequest(): any {
  try {
    yield put(loading(true))
    const res = yield call(loadDataGet)
    if (!res.data.error) {
      yield put(loadDataSuccess(res.data))
      yield put(loading(false))
    } else {
      yield put(loadDataSuccess([]))
      yield put(loading(false))
    }
  } catch (err) {}
}

function* createDataRequest(action: AnyAction): any {
  try {
    yield put(loading(true))
    const res = yield call(createDataPost, action.data)
    if (!res.data.error) {
      yield put(loadDataSuccess(res.data))
      yield put(loading(false))
    } else {
      yield put(loadDataSuccess([]))
      yield put(loading(false))
    }
  } catch (err) {}
}

function* updateDataRequest(action: AnyAction): any {
  try {
    yield put(loading(true))
    const res = yield call(updateDataPost, action.data)
    if (!res.data.error) {
      yield put(updateDataSuccess(action.data))
      yield put(loading(false))
      yield put(editData(initEditedState))
    } else {
      yield put(loading(false))
    }
  } catch (err) {}
}

function* deleteDataRequest(action: AnyAction): any {
  try {
    yield put(loading(true))
    const res = yield call(dataDelete, action.data)
    if (!res.data.error) {
      yield put(loadDataSuccess(res.data))
      yield put(loading(false))
    } else {
      yield put(loadDataSuccess([]))
      yield put(loading(false))
    }
  } catch (err) {}
}

export default function* loadDataWatcher() {
  yield takeEvery(actionTypes.LOAD_DATA_REQUEST, loadDataRequest)
  yield takeEvery(actionTypes.CREATE_DATA_REQUEST, createDataRequest)
  yield takeEvery(actionTypes.UPDATE_DATA_REQUEST, updateDataRequest)
  yield takeEvery(actionTypes.DELETE_DATA_REQUEST, deleteDataRequest)
}

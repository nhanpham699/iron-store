import { actionTypes } from "../types"
import * as actionIs from "../types/actions"

export function loadData(req: any) {
  return { type: actionTypes.LOAD_DATA, req }
}

interface ILoginReq {
  username: string
  paswword: string
}

export function login(req: any) {
  return { type: actionTypes.LOGIN, req }
}

export function loginSuccess(username: string) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    username,
  }
}

export function loadDataSuccess(data: actionIs.LoadDataSuccess) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}

export function loadDataFailed() {
  return {
    type: actionTypes.LOAD_DATA_FAILED,
  }
}

export function reset() {
  return {
    type: actionTypes.RESET,
  }
}

export function loading(load: boolean) {
  return {
    type: actionTypes.LOADING,
    load,
  }
}

export function errorState(err: boolean) {
  return {
    type: actionTypes.ERROR_STATE,
    err,
  }
}

import { actionTypes } from "./types"

export function login(req: any) {
  return { type: actionTypes.LOGIN, req }
}

export function loginSuccess(username: string) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    username,
  }
}

export function loading(load: boolean) {
  return {
    type: actionTypes.LOADING,
    load,
  }
}

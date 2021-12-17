export enum actionTypes {
  LOAD_DATA = "LOAD_DATA",
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILED = "LOAD_DATA_FAILED",
  LOADING = "LOADING",
  START_CLOCK = "START_CLOCK",
  TICK_CLOCK = "TICK_CLOCK",
  ERROR_STATE = "ERROR_STATE",
  RESET = "RESET",
}

export type Action =
  | Loading
  | LoadData
  | Login
  | LoginSuccess
  | LoadDataSuccess
  | LoadDataFailed
  | StartClock
  | TickClock
  | ErrorState
  | Reset

export interface ErrorState {
  type: actionTypes.ERROR_STATE
  error: boolean
}

export interface StartClock {
  type: actionTypes.START_CLOCK
}

export interface TickClock {
  type: actionTypes.TICK_CLOCK
  light: boolean
  ts: number
}

export interface LoadData {
  type: actionTypes.LOAD_DATA
  req: any
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS
  data: any
}

export interface LoadDataFailed {
  type: actionTypes.LOAD_DATA_FAILED
}

export interface Loading {
  type: actionTypes.LOADING
  load: boolean
}

export interface Reset {
  type: actionTypes.RESET
}

export interface Login {
  type: actionTypes.LOGIN
  req: {
    username: string
    password: string
  }
}

export interface LoginSuccess {
  type: actionTypes.LOGIN_SUCCESS
  username: string
}

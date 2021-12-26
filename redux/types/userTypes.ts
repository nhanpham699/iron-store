export enum actionTypes {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOADING = "LOADING",
}

export type Action = Login | LoginSuccess | Loading

export interface UserState {
  loading: boolean
  username: string
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

export interface Loading {
  type: actionTypes.LOADING
  load: boolean
}

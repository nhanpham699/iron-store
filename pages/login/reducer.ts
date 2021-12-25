import { HYDRATE } from "next-redux-wrapper"
import { Action, actionTypes, UserState } from "./types"

export const initialState: UserState = {
  loading: false,
  username: "",
}

const userReducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: UserState }
): UserState => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
      }
    case actionTypes.LOADING:
      return {
        ...state,
        ...{ loading: action.load },
      }
    default:
      return state
  }
}

export default userReducer

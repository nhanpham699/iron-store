import { HYDRATE } from "next-redux-wrapper"
import { Action, actionTypes, AppState } from "./types"

export const initialState: AppState = {
  error: false,
  loading: false,
  username: "",
}

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState }
): AppState => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ username: action.username },
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

export default reducer

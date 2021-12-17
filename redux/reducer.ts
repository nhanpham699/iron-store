import { HYDRATE } from "next-redux-wrapper"
import { Action, actionTypes, AppState } from "./types"

export const initialState: AppState = {
  error: false,
  loading: false,
}

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState }
): AppState => {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ inquiryData: action.data },
      }
    default:
      return state
  }
}

export default reducer

import { HYDRATE } from "next-redux-wrapper"
import { Action, actionTypes, IProduct, ProductState } from "./types"

export const initEditedState = {
  _id: "",
  name: "",
  price: 0,
  type: "",
  date: "",
  quantity: 0,
}

export const initialState: ProductState = {
  loading: false,
  data: [],
  isEdited: initEditedState,
}

const productReducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: ProductState }
): ProductState => {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
    case actionTypes.EDIT_DATA:
      return {
        ...state,
        isEdited: action.data,
      }
    case actionTypes.UPDATE_DATA_SUCCESS:
      const prIndex = state.data.findIndex(
        (pr: IProduct) => pr._id === action.data._id
      )
      state.data[prIndex] = action.data
      return {
        ...state,
        data: state.data,
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

export default productReducer

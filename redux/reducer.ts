import { combineReducers } from "redux"
import userReducer from "../pages/login/reducer"
import productReducer from "../pages/products/reducer"

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
})

export default rootReducer

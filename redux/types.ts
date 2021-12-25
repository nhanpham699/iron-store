import { UserState } from "../pages/login/types"
import { ProductState } from "../pages/products/types"

export default interface AppState {
  user: UserState
  products: ProductState
}

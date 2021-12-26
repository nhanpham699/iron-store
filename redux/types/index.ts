import { ProductState } from "./productTypes"
import { UserState } from "./userTypes"

export default interface AppState {
  user: UserState
  products: ProductState
}

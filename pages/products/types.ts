export enum actionTypes {
  LOAD_DATA_REQUEST = "LOAD_DATA_REQUEST",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  CREATE_DATA_REQUEST = "CREATE_DATA_REQUEST",
  CREATE_DATA_SUCCESS = "CREATE_DATA_SUCCESS",
  DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST",
  DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS",
  UPDATE_DATA_REQUEST = "UPDATE_DATA_REQUEST",
  UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS",
  EDIT_DATA = "EDIT_DATA",
  LOADING = "LOADING",
}

export type Action =
  | LoadDataRequest
  | LoadDataSuccess
  | Loading
  | CreateDataRequest
  | CreateDataSuccess
  | UpdateDataRequest
  | UpdateDataSuccess
  | DeleteDataRequest
  | DeleteDataSuccess
  | EditData

export interface IProduct {
  _id: string
  name: string
  price: number
  quantity: number
  date: string
  type: string
}

export interface ProductState {
  loading: boolean
  data: IProduct[]
  isEdited: IProduct
}

export interface LoadDataRequest {
  type: actionTypes.LOAD_DATA_REQUEST
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS
  data: IProduct[]
}

export interface CreateDataRequest {
  type: actionTypes.CREATE_DATA_REQUEST
}

export interface CreateDataSuccess {
  type: actionTypes.CREATE_DATA_SUCCESS
  data: IProduct
}

export interface UpdateDataRequest {
  type: actionTypes.UPDATE_DATA_REQUEST
}

export interface UpdateDataSuccess {
  type: actionTypes.UPDATE_DATA_SUCCESS
  data: IProduct
}

export interface DeleteDataRequest {
  type: actionTypes.DELETE_DATA_REQUEST
}

export interface DeleteDataSuccess {
  type: actionTypes.DELETE_DATA_SUCCESS
  id: string
}

export interface Loading {
  type: actionTypes.LOADING
  load: boolean
}

export interface EditData {
  type: actionTypes.EDIT_DATA
  data: IProduct
}

import { actionTypes, IProduct, ProductState } from "../types/productTypes"
// display products
export function loadDataRequest() {
  return { type: actionTypes.LOAD_DATA_REQUEST }
}

export function loadDataSuccess(data: ProductState[]) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}
// add a product
export function createDataRequest(data: IProduct) {
  return { type: actionTypes.CREATE_DATA_REQUEST, data }
}

export function createDataSuccess(data: IProduct) {
  return {
    type: actionTypes.CREATE_DATA_SUCCESS,
    data,
  }
}

// update a product
export function updateDataRequest(data: IProduct) {
  return { type: actionTypes.UPDATE_DATA_REQUEST, data }
}

export function updateDataSuccess(data: IProduct) {
  return {
    type: actionTypes.UPDATE_DATA_SUCCESS,
    data,
  }
}

// delete a product
export function deleteDataRequest(_id: string) {
  return { type: actionTypes.DELETE_DATA_REQUEST, _id }
}

export function deleteDataSuccess(_id: string) {
  return {
    type: actionTypes.DELETE_DATA_SUCCESS,
    _id,
  }
}

export function editData(data: IProduct) {
  return { type: actionTypes.EDIT_DATA, data }
}

export function loading(load: boolean) {
  return {
    type: actionTypes.LOADING,
    load,
  }
}

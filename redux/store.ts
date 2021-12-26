import { createWrapper } from "next-redux-wrapper"
import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

// const persistConfig = {
//   key: "root",
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

export const makeStore = () => {
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

// export const persistor = persistStore(store)

export const wrapper = createWrapper(makeStore)

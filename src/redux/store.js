import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { bacApi } from "./Api/Api";


const rootReducer = combineReducers({
  [bacApi.reducerPath]: bacApi.reducer,
 
})

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bacApi.middleware),
})

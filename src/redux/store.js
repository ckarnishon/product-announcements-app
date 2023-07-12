import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from "./Slises/tokenSlise";
import SellerSlise from "./Slises/sellerSlise"
import { bacApi } from "./Api/Api";


export const store = configureStore({
  reducer: {
    [bacApi.reducerPath]: bacApi.reducer,
    userToken: tokenSlice,
    Seller: SellerSlise,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bacApi.middleware),
});

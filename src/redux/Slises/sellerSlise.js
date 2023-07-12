import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idSeller: null,
  SellerName: null,
  SellerEmail: null,
  citySeller: null,
  avatarSeller: null,
  sellsFrom: null,
  SellerPhone: null,
};

const SellerSlise = createSlice({
  name: "SellerInfo",
  initialState,
  reducers: {
    setSeller(state, action) {
      state.idSeller = action.payload.idSeller;
      state.SellerName = action.payload.SellerName;
      state.SellerEmail = action.payload.SellerEmail;
      state.citySeller = action.payload.citySeller;
      state.avatarSeller = action.payload.avatarSeller;
      state.sellsFrom = action.payload.sellsFrom;
      state.SellerPhone = action.payload.SellerPhone;
    },
  },
});

export const { setSeller } = SellerSlise.actions;

export default SellerSlise.reducer;

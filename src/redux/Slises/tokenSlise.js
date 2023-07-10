import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  tokenType: null,
};

const tokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    setUser(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
    },
  },
});

export const { setUser } = tokenSlice.actions;

export default tokenSlice.reducer;

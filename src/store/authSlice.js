import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const userId = localStorage.getItem("email");
const initialAuthState = {
  isAuthenticated: !!token,
  token: token,
  userId: userId,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = localStorage.getItem("email");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;

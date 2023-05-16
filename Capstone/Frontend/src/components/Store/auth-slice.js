import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedIn: false, token: "", username: "", message: "" },
  reducers: {
    login(state, action) {
      state.username = action.payload.username;
      state.message = action.payload.message;
      state.loggedIn = !state.loggedIn;
      localStorage.setItem("email", `${action.payload.username}@demo.com`);
      localStorage.setItem("success", action.payload.success);
      localStorage.setItem("message", action.payload.message);
    },
    logout(state, action) {
      state.loggedIn = !state.loggedIn;
      localStorage.clear("email");
      localStorage.clear("success");
      localStorage.clear("message");
    },
  },
});

export const authSliceReducer = authSlice.reducer;
export const authSliceAction = authSlice.actions;

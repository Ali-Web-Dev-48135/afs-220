import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showNotification: false, showMessage: false },
  reducers: {
    show(state) {
      state.showNotification = !state.showNotification;
    },
    hide(state) {
      state.showNotification = !state.showNotification;
    },
    showMessage(state) {
      state.showMessage = !state.showMessage;
    },
    hideMessage(state) {
      state.showMessage = !state.showMessage;
    },
  },
});

export const uiSliceReducer = uiSlice.reducer;
export const uiSliceAction = uiSlice.actions;

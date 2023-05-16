import { createSlice } from "@reduxjs/toolkit";

const shopInventorySlice = createSlice({
  name: "cart",
  initialState: {
    inventoryItems: [],
    inventoryItem: {},
    inventoryFilteredItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.inventoryItems = action.payload;
    },
    getOneItem(state, action) {
      state.inventoryItem = action.payload;
    },
    getFilteredItemsByCategory(state, action)
    {
        state.inventoryFilteredItems = action.payload;
    }
  },
});

export const shopInventoryReducer = shopInventorySlice.reducer;
export const shopInventoryAction = shopInventorySlice.actions;

import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], totalPrice: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemExistCheck = state.cart.find((item) => item.id === newItem.id);
      if (!itemExistCheck) {
        const newItemToAdd = {
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          qty: 1,
          imageUrl: newItem.imageUrl,
          category: newItem.category,
          productrating: newItem.productrating,
        };
        state.totalPrice += newItemToAdd.qty * newItemToAdd.price;
        state.cart.push(newItemToAdd);
      } else {
        const findTheExistingItem = state.cart.find(
          (item) => item.id === newItem.id
        );
        const existingItemIndex = state.cart.findIndex(
          (item) => item.id === findTheExistingItem.id
        );
        state.cart[existingItemIndex].qty++;
        state.totalPrice += state.cart[existingItemIndex].price;
      }
      
    },
    removeFromCart(state, action) {
      const itemToRemoveId = action.payload.id;

      const existingItemObject = state.cart.find(
        (item) => item.id === itemToRemoveId
      );
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === existingItemObject.id
      );
      if (state.cart[existingItemIndex].qty === 1) {
        state.totalPrice -= state.cart[existingItemIndex].price;
        state.cart = state.cart.filter(
          (item) => item.id !== state.cart[existingItemIndex].id
        );
        return;
      }
      state.cart[existingItemIndex].qty--;
      state.totalPrice -= state.cart[existingItemIndex].price;
    },
    resetCart(state) {
      state.cart = [];
      state.totalPrice = 0;
    }
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const cartSliceAction = cartSlice.actions;

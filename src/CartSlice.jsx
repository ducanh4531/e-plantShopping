import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name,
      );

      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        // Add new item with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {},
    updateQuantity: (state, action) => {},
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

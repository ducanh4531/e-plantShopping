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
    removeItem: (state, action) => {
      // Remove item from cart based on item name
      const itemNameToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.name !== itemNameToRemove,
      );
    },
    updateQuantity: (state, action) => {
      // Extract name and new quantity from payload
      const { name, amount } = action.payload;

      // Find the item and update its quantity
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

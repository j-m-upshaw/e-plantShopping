import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      //retrieved the plant information from the given payload
      const {name, image, cost} = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }

      else {
        //adds to cart when item isn't present
        state.items.push({name, image, cost, quantity: 1});
      }
    
    },
    removeItem: (state, action) => {
      const {name} = action.payload;
      //creates a new array without the item name that matches the given payload
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

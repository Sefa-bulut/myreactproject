import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    decreaseCartItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id)
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const { addToCart, decreaseCartItem, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

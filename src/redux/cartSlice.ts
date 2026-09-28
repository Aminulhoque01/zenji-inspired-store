import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  cartOpen: boolean;
};

const initialState: CartState = {
  items: [],
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    /* =========================================
       ADD TO CART
    ========================================= */

    addToCart: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        slug: string;
        image: string;
        price: number;
        size: string;
      }>
    ) => {
      const product = action.payload;

      /*
        Same product + same size
        = increase quantity
      */

      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      // Open cart drawer after adding
      state.cartOpen = true;
    },

    /* =========================================
       INCREASE QUANTITY
    ========================================= */

    increaseQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        size: string;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size
      );

      if (item) {
        item.quantity += 1;
      }
    },

    /* =========================================
       DECREASE QUANTITY
    ========================================= */

    decreaseQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        size: string;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (cartItem) =>
            !(
              cartItem.id === action.payload.id &&
              cartItem.size === action.payload.size
            )
        );
      }
    },

    /* =========================================
       REMOVE ITEM
    ========================================= */

    removeFromCart: (
      state,
      action: PayloadAction<{
        id: string;
        size: string;
      }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size
          )
      );
    },

    /* =========================================
       CLEAR CART
    ========================================= */

    clearCart: (state) => {
      state.items = [];
    },

    /* =========================================
       OPEN / CLOSE CART
    ========================================= */

    setCartOpen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.cartOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  setCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
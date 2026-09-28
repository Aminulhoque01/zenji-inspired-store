import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

export type WishlistItem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  oldPrice?: number | null;
  sale?: boolean;
};

type WishlistState = {
  items: WishlistItem[];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    /* =========================================
       TOGGLE WISHLIST
    ========================================= */

    toggleWishlist: (
      state,
      action: PayloadAction<WishlistItem>
    ) => {
      const product = action.payload;

      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        state.items = state.items.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.items.push(product);
      }
    },

    /* =========================================
       REMOVE
    ========================================= */

    removeFromWishlist: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    /* =========================================
       CLEAR
    ========================================= */

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
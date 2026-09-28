import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    toggleWishlist(
      state,
      action: PayloadAction<WishlistItem>
    ) {
      const exists = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromWishlist(
      state,
      action: PayloadAction<string>
    ) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearWishlist(state) {
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

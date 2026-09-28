import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const CART_STORAGE_KEY = "zenji_cart";
const WISHLIST_STORAGE_KEY = "zenji_wishlist";

/* =========================================
   LOAD CART
========================================= */

function loadCart() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const saved = localStorage.getItem(
      CART_STORAGE_KEY
    );

    if (!saved) {
      return undefined;
    }

    const parsed = JSON.parse(saved);

    return {
      cart: parsed,
    };
  } catch {
    return undefined;
  }
}

/* =========================================
   LOAD WISHLIST
========================================= */

function loadWishlist() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const saved = localStorage.getItem(
      WISHLIST_STORAGE_KEY
    );

    if (!saved) {
      return undefined;
    }

    const parsed = JSON.parse(saved);

    return {
      wishlist: parsed,
    };
  } catch {
    return undefined;
  }
}

/* =========================================
   LOAD SAVED STATE
========================================= */

const savedCart = loadCart();
const savedWishlist = loadWishlist();

const preloadedState =
  savedCart || savedWishlist
    ? {
        ...(savedCart || {}),
        ...(savedWishlist || {}),
      }
    : undefined;

/* =========================================
   STORE
========================================= */

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },

  preloadedState,
});

/* =========================================
   PERSIST TO LOCAL STORAGE
========================================= */

if (typeof window !== "undefined") {
  store.subscribe(() => {
    try {
      const state = store.getState();

      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(state.cart)
      );

      localStorage.setItem(
        WISHLIST_STORAGE_KEY,
        JSON.stringify(state.wishlist)
      );
    } catch {
      // Ignore localStorage errors
    }
  });
}

/* =========================================
   TYPES
========================================= */

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;
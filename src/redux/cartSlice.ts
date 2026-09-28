import {
createSlice,
PayloadAction,
} from "@reduxjs/toolkit";

export interface CartProduct {
size: string;
id: string;
name: string;
price: number;
image: string;
quantity: number;
}

interface CartState {
isCartOpen: boolean;
items: CartProduct[];
}

const initialState: CartState = {
isCartOpen: false,
items: [],
};

const cartSlice = createSlice({
name: "cart",

initialState,

reducers: {
/* ==========================================
ADD TO CART
========================================== */

 
addToCart: (
  state,
  action: PayloadAction<
    Omit<CartProduct, "quantity">
  >
) => {
  const existingProduct =
    state.items.find(
      (item) =>
        item.id === action.payload.id &&
        item.size === action.payload.size
    );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    state.items.push({
      ...action.payload,
      quantity: 1,
    });
  }

  // Open cart drawer automatically
  state.isCartOpen = true;
},

/* ==========================================
   REMOVE FROM CART
========================================== */

removeFromCart: (
  state,
  action: PayloadAction<string>
) => {
  state.items = state.items.filter(
    (item) =>
      item.id !== action.payload
  );
},

/* ==========================================
   INCREASE QUANTITY
========================================== */

increaseQuantity: (
  state,
  action: PayloadAction<string>
) => {
  const item = state.items.find(
    (item) =>
      item.id === action.payload
  );

  if (item) {
    item.quantity += 1;
  }
},

/* ==========================================
   DECREASE QUANTITY
========================================== */

decreaseQuantity: (
  state,
  action: PayloadAction<string>
) => {
  const item = state.items.find(
    (item) =>
      item.id === action.payload
  );

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.items = state.items.filter(
      (cartItem) =>
        cartItem.id !== action.payload
    );
  }
},

/* ==========================================
   OPEN / CLOSE CART DRAWER
========================================== */

setCartOpen: (
  state,
  action: PayloadAction<boolean>
) => {
  state.isCartOpen = action.payload;
},

/* ==========================================
   CLEAR CART
========================================== */

clearCart: (state) => {
  state.items = [];
},
 

},
});

export const {
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
setCartOpen,
clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

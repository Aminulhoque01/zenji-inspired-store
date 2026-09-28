"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import {
useAppDispatch,
useAppSelector,
} from "../redux/hooks";

import { setCartOpen } from "../redux/cartSlice";

export default function CartDrawer() {
const dispatch = useAppDispatch();

const isCartOpen = useAppSelector(
(state) => state.cart.isCartOpen
);

const closeCart = () => {
dispatch(setCartOpen(false));
};

return ( <AnimatePresence>
{isCartOpen && (
<>
{/* =====================================================
BACKDROP
===================================================== */}

```
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        onClick={closeCart}
        aria-hidden="true"
        className="
          fixed
          inset-0
          z-[190]
          bg-black/60
          backdrop-blur-[2px]
        "
      />

      {/* =====================================================
          CART DRAWER
      ===================================================== */}

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="
          fixed
          right-0
          top-0
          z-[200]
          flex
          h-[100dvh]
          w-full
          flex-col
          bg-black
          text-white
          shadow-[-20px_0_60px_rgba(0,0,0,0.25)]

          sm:w-[420px]
          md:w-[440px]
          lg:max-w-[460px]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            min-h-[72px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            sm:px-6
          "
        >
          {/* TITLE */}

          <div className="flex items-center gap-3">
            <h2
              className="
                font-display
                text-[20px]
                font-black
                uppercase
                leading-none
                tracking-[-0.03em]
                sm:text-[22px]
              "
            >
              YOUR CART
            </h2>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                bg-red-600
                px-1.5
                font-mono
                text-[9px]
                font-bold
                leading-none
              "
            >
              1
            </span>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              border
              border-white/15
              transition-all
              duration-200
              hover:border-white
              hover:bg-white
              hover:text-black
              active:scale-95
            "
          >
            <X
              size={19}
              strokeWidth={1.4}
            />
          </button>
        </div>

        {/* =================================================
            CART CONTENT
        ================================================= */}

        <div
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            py-6
            sm:px-6
          "
        >
          {/* EMPTY CART */}

          <div
            className="
              flex
              min-h-full
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <div
              className="
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                border
                border-white/10
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                BAG
              </span>
            </div>

            <h3
              className="
                font-display
                text-[24px]
                font-black
                uppercase
                tracking-[-0.04em]
              "
            >
              YOUR CART IS EMPTY
            </h3>

            <p
              className="
                mt-2
                max-w-[260px]
                font-mono
                text-[9px]
                uppercase
                leading-relaxed
                tracking-[0.14em]
                text-white/40
              "
            >
              Add something from the latest drop
              to your cart.
            </p>

            <button
              type="button"
              onClick={closeCart}
              className="
                mt-7
                bg-white
                px-7
                py-3.5
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-black
                transition
                hover:bg-white/90
                active:scale-[0.98]
              "
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            shrink-0
            border-t
            border-white/10
            px-5
            py-4
            sm:px-6
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/30
            "
          >
            <span>ZENJI®</span>
            <span>SECURE CHECKOUT</span>
          </div>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>
 

);
}

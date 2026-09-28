"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  X,
  ArrowRight,
  Trash2,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { decreaseQuantity, increaseQuantity, removeFromCart, setCartOpen } from "@/src/redux/cartSlice";

 

 

export default function CartDrawer() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(
    (state) => state.cart.isCartOpen
  );

  const items = useAppSelector(
    (state) => state.cart.items
  );

  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 100
        ? 0
        : 10;

  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={() =>
              dispatch(setCartOpen(false))
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[200]
              cursor-default
              bg-black/55
              backdrop-blur-[2px]
            "
          />

          {/* DRAWER */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-0
              top-0
              z-[210]
              flex
              h-dvh
              w-full
              max-w-[460px]
              flex-col
              bg-[#090909]
              text-white
              shadow-2xl
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-5
              "
            >
              <div className="flex items-center gap-3">
                <h2
                  className="
                    font-display
                    text-2xl
                    font-black
                    uppercase
                    tracking-[-0.04em]
                  "
                >
                  Your Cart
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
                  "
                >
                  {items.reduce(
                    (sum, item) =>
                      sum + item.quantity,
                    0
                  )}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  dispatch(setCartOpen(false))
                }
                aria-label="Close cart"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/15
                  transition
                  hover:border-white
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div
                  className="
                    flex
                    min-h-[55vh]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/35
                    "
                  >
                    YOUR CART IS EMPTY
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[260px]
                      font-mono
                      text-[9px]
                      leading-6
                      text-white/50
                    "
                  >
                    Add a piece from the collection
                    and it will appear here.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(setCartOpen(false))
                    }
                    className="
                      mt-7
                      border
                      border-white/25
                      px-6
                      py-3
                      font-mono
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="
                        border-b
                        border-white/10
                        pb-5
                      "
                    >
                      <div className="flex gap-4">
                        <Link
                          href={`/drop/${item.slug}`}
                          onClick={() =>
                            dispatch(
                              setCartOpen(false)
                            )
                          }
                          className="
                            relative
                            h-28
                            w-24
                            shrink-0
                            overflow-hidden
                            bg-white/10
                          "
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-3">
                            <div>
                              <div
                                className="
                                  font-mono
                                  text-[7px]
                                  uppercase
                                  tracking-[0.16em]
                                  text-white/35
                                "
                              >
                                THE_ORIGIN_DROP
                              </div>

                              <Link
                                href={`/drop/${item.slug}`}
                                onClick={() =>
                                  dispatch(
                                    setCartOpen(false)
                                  )
                                }
                                className="
                                  mt-1
                                  block
                                  font-display
                                  text-[15px]
                                  font-bold
                                  uppercase
                                  leading-none
                                "
                              >
                                {item.name}
                              </Link>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                dispatch(
                                  removeFromCart(item.id)
                                )
                              }
                              aria-label={`Remove ${item.name}`}
                              className="
                                shrink-0
                                text-white/35
                                transition
                                hover:text-red-500
                              "
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>

                          <div
                            className="
                              mt-5
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                border
                                border-white/15
                              "
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    decreaseQuantity(
                                      item.id
                                    )
                                  )
                                }
                                className="
                                  flex
                                  h-8
                                  w-8
                                  items-center
                                  justify-center
                                  transition
                                  hover:bg-white
                                  hover:text-black
                                "
                              >
                                <Minus size={12} />
                              </button>

                              <span
                                className="
                                  flex
                                  h-8
                                  min-w-8
                                  items-center
                                  justify-center
                                  border-x
                                  border-white/15
                                  font-mono
                                  text-[9px]
                                "
                              >
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    increaseQuantity(
                                      item.id
                                    )
                                  )
                                }
                                className="
                                  flex
                                  h-8
                                  w-8
                                  items-center
                                  justify-center
                                  transition
                                  hover:bg-white
                                  hover:text-black
                                "
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <span
                              className="
                                font-mono
                                text-[11px]
                                font-bold
                              "
                            >
                              A$
                              {(
                                item.price *
                                item.quantity
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER */}
            {items.length > 0 && (
              <div
                className="
                  border-t
                  border-white/10
                  bg-[#0d0d0d]
                  px-6
                  py-5
                "
              >
                <div className="space-y-3">
                  <div
                    className="
                      flex
                      justify-between
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-white/50
                    "
                  >
                    <span>Subtotal</span>
                    <span>A${subtotal.toFixed(2)}</span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-white/50
                    "
                  >
                    <span>Shipping</span>
                    <span>
                      {shipping === 0
                        ? "FREE"
                        : `A$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      justify-between
                      border-t
                      border-white/10
                      pt-4
                      font-mono
                      text-[12px]
                      font-bold
                      uppercase
                    "
                  >
                    <span>Total</span>
                    <span>A${total.toFixed(2)}</span>
                  </div>

                  <p
                    className="
                      pt-1
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/30
                    "
                  >
                    Free shipping on orders over A$100
                  </p>
                </div>

                <Link
                  href="/checkout"
                  onClick={() =>
                    dispatch(setCartOpen(false))
                  }
                  className="
                    mt-5
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    bg-red-600
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    transition
                    hover:bg-red-500
                  "
                >
                  CHECKOUT
                  <ArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    dispatch(setCartOpen(false))
                  }
                  className="
                    mt-2
                    flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    border
                    border-white/20
                    font-mono
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

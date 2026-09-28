"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Trash2,
  ArrowUpRight,
} from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/redux/hooks";

import {
  removeFromWishlist,
} from "@/src/redux/wishlistSlice";

import {
  addToCart,
  setCartOpen,
} from "@/src/redux/cartSlice";

type WishlistItem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
};

export default function WishlistPage() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(
    (state) => state.wishlist.items
  ) as WishlistItem[];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-black px-5 pb-14 pt-32 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
            YOUR_SAVED // ARCHIVE
          </div>

          <div className="mt-5 flex items-end justify-between gap-8">
            <h1
              className="
                max-w-[900px]
                font-display
                text-[15vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                sm:text-[11vw]
                md:text-[8vw]
                lg:text-[7vw]
              "
            >
              SAVED
              <span className="block">
                PIECES
              </span>
            </h1>

            <div
              className="
                hidden
                pb-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-white/40
                md:block
              "
            >
              {items.length} SAVED
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1500px]">

          {/* =================================================
              EMPTY WISHLIST
          ================================================= */}
          {items.length === 0 ? (
            <div
              className="
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                border
                border-black/10
                text-center
              "
            >
              <Heart
                size={34}
                strokeWidth={1.2}
              />

              <h2
                className="
                  mt-5
                  font-display
                  text-3xl
                  font-black
                  uppercase
                  tracking-[-0.04em]
                "
              >
                Nothing saved yet
              </h2>

              <p
                className="
                  mt-3
                  max-w-[340px]
                  font-mono
                  text-[9px]
                  leading-6
                  text-black/45
                "
              >
                Tap SAVE on any product to build your
                wishlist.
              </p>

              <Link
                href="/collection"
                className="
                  mt-7
                  bg-black
                  px-7
                  py-4
                  font-mono
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition
                  hover:bg-red-600
                "
              >
                BROWSE COLLECTION
              </Link>
            </div>
          ) : (
            /* =================================================
               WISHLIST GRID
            ================================================= */
            <div
              className="
                grid
                grid-cols-2
                gap-x-3
                gap-y-12
                sm:grid-cols-2
                sm:gap-x-5
                lg:grid-cols-3
                lg:gap-x-6
                xl:grid-cols-4
              "
            >
              {items.map((item) => (
                <article
                  key={item.id}
                  className="group"
                >

                  {/* =================================================
                     PRODUCT IMAGE
                  ================================================= */}
                  <Link
                    href={`/drop/${item.slug}`}
                    className="
                      relative
                      block
                      aspect-[4/5]
                      overflow-hidden
                      bg-[#f1f1ef]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="
                        (max-width: 639px) 47vw,
                        (max-width: 1023px) 46vw,
                        (max-width: 1279px) 30vw,
                        24vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.035]
                      "
                    />

                    {/* VIEW DETAILS */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        translate-y-full
                        bg-black/90
                        px-4
                        py-4
                        font-mono
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                        transition-transform
                        duration-300
                        group-hover:translate-y-0
                      "
                    >
                      VIEW DETAILS

                      <ArrowUpRight
                        size={12}
                        className="ml-1 inline-block"
                      />
                    </div>
                  </Link>

                  {/* =================================================
                     PRODUCT INFO
                  ================================================= */}
                  <div className="pt-4">

                    <div
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.18em]
                        text-black/35
                      "
                    >
                      COLLECTION // THE_ORIGIN_DROP
                    </div>

                    <div className="mt-2 flex items-start justify-between gap-3">

                      <div>
                        <h2
                          className="
                            font-display
                            text-[13px]
                            font-bold
                            uppercase
                            leading-none
                          "
                        >
                          {item.name}
                        </h2>

                        <div
                          className="
                            mt-2
                            font-mono
                            text-[10px]
                            font-bold
                          "
                        >
                          A$
                          {item.price.toFixed(2)}
                        </div>
                      </div>

                      {/* DELETE ICON */}
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(
                            removeFromWishlist(item.id)
                          );
                        }}
                        aria-label={`Remove ${item.name}`}
                        className="
                          text-black/35
                          transition
                          hover:text-red-600
                        "
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    {/* =================================================
                       ACTION BUTTONS
                    ================================================= */}
                    <div className="mt-4 grid grid-cols-2">

                      {/* REMOVE */}
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(
                            removeFromWishlist(item.id)
                          );
                        }}
                        className="
                          border
                          border-black
                          px-3
                          py-3
                          font-mono
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          transition
                          hover:bg-black
                          hover:text-white
                        "
                      >
                        REMOVE
                      </button>

                      {/* ADD TO CART */}
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: item.id,
                              name: item.name,
                              slug: item.slug,
                              image: item.image,
                              price: item.price,
                              size: "M"
                            })
                          );

                          dispatch(
                            setCartOpen(true)
                          );
                        }}
                        className="
                          border
                          border-black
                          bg-black
                          px-3
                          py-3
                          font-mono
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-white
                          transition
                          hover:bg-red-600
                        "
                      >
                        ADD TO CART →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
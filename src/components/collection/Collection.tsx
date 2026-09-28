"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Search,
  ArrowUpRight,
  ChevronDown,
  Heart,
  X,
} from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/redux/hooks";

import {
  addToCart,
} from "@/src/redux/cartSlice";

import {
  toggleWishlist,
} from "@/src/redux/wishlistSlice";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    id: "blue-flame",
    name: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    image: "/assest/Blue-flame-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    tags: ["sale", "new"],
  },

  {
    id: "bushido",
    name: "BUSHIDO TEE",
    slug: "bushido-tee",
    image: "/assest/Bushido-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["limited"],
  },

  {
    id: "demon-blood",
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    image: "/assest/Demon-blood-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    tags: ["sale"],
  },

  {
    id: "domain-expansion",
    name: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    image: "/assest/Domain-expansion-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["limited"],
  },

  {
    id: "free-soul",
    name: "FREE SOUL TEE",
    slug: "free-soul-tee",
    image: "/assest/Free-soul-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["new"],
  },

  {
    id: "limitless",
    name: "LIMITLESS TEE",
    slug: "limitless-tee",
    image: "/assest/Limitless-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["limited"],
  },

  {
    id: "paradise-spirit",
    name: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    image: "/assest/Paradise-spirit-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["limited"],
  },

  {
    id: "warrior-spirit",
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    image: "/assest/Warrior-spirit-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    tags: ["sale"],
  },

  {
    id: "water-breathing",
    name: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    image: "/assest/Water-breathing-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    tags: ["limited"],
  },

  {
    id: "will-of-the-sun",
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    image: "/assest/Will-of-the-sun-4.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    tags: ["sale"],
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "SALE",
    value: "sale",
  },
  {
    label: "NEW_ARRIVAL",
    value: "new",
  },
  {
    label: "LIMITED",
    value: "limited",
  },
];

/* =========================================================
   AVAILABLE SIZES
========================================================= */

const SIZES = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

/* =========================================================
   COLLECTION
========================================================= */

export default function Collection() {
  const dispatch = useAppDispatch();

  /* =========================================
     WISHLIST
  ========================================= */

  const wishlistItems = useAppSelector(
    (state) => state.wishlist.items
  );

  /* =========================================
     FILTER STATE
  ========================================= */

  const [activeFilter, setActiveFilter] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const [size, setSize] =
    useState("ALL");

  const [sort, setSort] =
    useState("featured");

  /* =========================================
     SIZE MODAL
  ========================================= */

  const [selectedProduct, setSelectedProduct] =
    useState<
      (typeof products)[number] | null
    >(null);

  /* =========================================
     FILTER PRODUCTS
  ========================================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* FILTER */

    if (activeFilter !== "all") {
      result = result.filter((product) =>
        product.tags.includes(activeFilter)
      );
    }

    /* SEARCH */

    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    }

    /* SORT */

    if (sort === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [
    activeFilter,
    search,
    sort,
  ]);

  /* =========================================
     RETURN
  ========================================= */

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =====================================================
          COLLECTION HERO
      ===================================================== */}

      <section
        data-site-hero
        className="
          relative
          overflow-hidden
          border-b
          border-white/10
          bg-black
          px-5
          pb-8
          pt-[92px]
          text-white

          sm:px-8
          sm:pb-10
          sm:pt-[104px]

          lg:px-12
          lg:pt-[112px]
        "
      >
        <div className="mx-auto max-w-[1500px]">

          <div
            className="
              grid
              min-h-[520px]
              grid-cols-1

              lg:grid-cols-[minmax(0,1fr)_180px]
              lg:gap-10
            "
          >

            {/* LEFT */}

            <div className="flex flex-col justify-between">

              <div>

                <div
                  className="
                    font-mono
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-red-500

                    sm:text-[9px]
                  "
                >
                  THE_ORIGIN_DROP // COMPLETE ARCHIVE
                </div>

                <h1
                  className="
                    mt-5
                    max-w-[980px]
                    font-display
                    text-[8vw]
                    font-black
                    uppercase
                    leading-[1]
                    tracking-[-0.075em]
                    text-white

                    sm:text-[2vw]
                    md:text-[3vw]
                    lg:text-[5vw]
                  "
                >
                  ANIME GRAPHIC TEES —

                  <span className="block">
                    THE FULL COLLECTION
                  </span>
                </h1>

                <div className="mt-7 max-w-[500px]">

                  <p
                    className="
                      font-mono
                      text-[9px]
                      leading-[1.7]
                      text-white/60

                      sm:text-[10px]
                    "
                  >
                    Every drop. Every arc. Documented.
                  </p>

                  <p
                    className="
                      mt-3
                      font-mono
                      text-[9px]
                      leading-[1.7]
                      text-white/45

                      sm:text-[10px]
                    "
                  >
                    Every Zenji drop in one place.
                    Explore limited-edition anime
                    graphic tees, oversized streetwear
                    pieces and numbered drops that
                    never restock.
                  </p>

                </div>

              </div>

              {/* META */}

              <div
                className="
                  mt-16
                  border-t
                  border-white/10
                  pt-5

                  lg:mt-10
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.15em]
                    text-white/40

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:text-[8px]
                  "
                >
                  <span>
                    10 PIECES // THE_ORIGIN_DROP // EST_2024
                  </span>

                  <span>
                    AUSTRALIA-WIDE SHIPPING
                  </span>
                </div>

              </div>

            </div>

            {/* GHOST NUMBER */}

            <div
              className="
                pointer-events-none
                hidden
                items-start
                justify-end

                lg:flex
              "
            >
              <span
                aria-hidden="true"
                className="
                  -mr-1
                  mt-20
                  select-none
                  font-display
                  text-[180px]
                  font-black
                  leading-none
                  tracking-[-0.09em]
                  text-white/[0.035]
                "
              >
                10
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FILTER / TOOLBAR
      ===================================================== */}

      <section
        className="
          sticky
          top-[70px]
          z-40

          border-b
          border-black/10
          bg-white/95
          backdrop-blur-md

          supports-[backdrop-filter]:bg-white/90

          lg:top-[78px]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1500px]
            px-5

            sm:px-8
            lg:px-12
          "
        >

          {/* FILTER TABS */}

          <div
            className="
              flex
              overflow-x-auto
              border-b
              border-black/10
              scrollbar-hide
            "
          >

            {filters.map((filter) => {

              const active =
                activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() =>
                    setActiveFilter(
                      filter.value
                    )
                  }
                  className={`
                    relative
                    shrink-0
                    px-5
                    py-5
                    font-mono
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    transition-colors
                    first:pl-0

                    ${
                      active
                        ? "text-black"
                        : "text-black/35 hover:text-black"
                    }
                  `}
                >

                  {filter.label}

                  {active && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-red-600
                      "
                    />
                  )}

                </button>
              );
            })}

          </div>

          {/* TOOLBAR */}

          <div
            className="
              flex
              flex-col
              gap-3
              py-4

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* FILTERS */}

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >

              {/* SIZE */}

              <div className="relative">

                <select
                  value={size}
                  onChange={(e) =>
                    setSize(e.target.value)
                  }
                  className="
                    h-9
                    appearance-none
                    border
                    border-black/15
                    bg-white
                    pl-3
                    pr-9
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.1em]
                    outline-none
                    transition
                    hover:border-black
                  "
                >

                  <option value="ALL">
                    Filter by size
                  </option>

                  {SIZES.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}

                </select>

                <ChevronDown
                  size={12}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                  "
                />

              </div>

              {/* PRICE */}

              <div className="relative">

                <select
                  className="
                    h-9
                    appearance-none
                    border
                    border-black/15
                    bg-white
                    pl-3
                    pr-9
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.1em]
                    outline-none
                    transition
                    hover:border-black
                  "
                >

                  <option>
                    Filter by price
                  </option>

                  <option>
                    Under A$35
                  </option>

                  <option>
                    A$35 — A$40
                  </option>

                </select>

                <ChevronDown
                  size={12}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                  "
                />

              </div>

              {/* SORT */}

              <div className="relative">

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="
                    h-9
                    appearance-none
                    border
                    border-black/15
                    bg-white
                    pl-3
                    pr-9
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.1em]
                    outline-none
                    transition
                    hover:border-black
                  "
                >

                  <option value="featured">
                    Sort products
                  </option>

                  <option value="price-low">
                    Price: Low
                  </option>

                  <option value="price-high">
                    Price: High
                  </option>

                  <option value="name">
                    Name
                  </option>

                </select>

                <ChevronDown
                  size={12}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                  "
                />

              </div>

            </div>

            {/* SEARCH */}

            <div
              className="
                relative
                flex
                h-9
                w-full
                max-w-[300px]
                items-center
              "
            >

              <Search
                size={13}
                className="
                  absolute
                  left-3
                  text-black/35
                "
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="SEARCH..."
                className="
                  h-full
                  w-full
                  border
                  border-black/15
                  bg-white
                  pl-9
                  pr-3
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  outline-none
                  placeholder:text-black/30
                  focus:border-black
                "
              />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <section
        className="
          px-5
          py-10

          sm:px-8
          sm:py-14

          lg:px-12
          lg:py-16
        "
      >

        <div className="mx-auto max-w-[1500px]">

          {/* COUNT */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-black/45
              "
            >
              {filteredProducts.length} ITEMS
            </span>

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-black/35
              "
            >
              THE_ORIGIN_DROP
            </span>

          </div>

          {/* GRID */}

          {filteredProducts.length > 0 ? (

            <div
              className="
                grid
                grid-cols-2
                gap-x-3
                gap-y-10

                sm:grid-cols-2
                sm:gap-x-5
                sm:gap-y-14

                lg:grid-cols-3
                lg:gap-x-6
                lg:gap-y-16

                xl:grid-cols-4
              "
            >

              {filteredProducts.map(
                (product) => (

                  <ProductCard
                    key={product.id}
                    product={product}

                    isSaved={wishlistItems.some(
                      (item) =>
                        item.id === product.id
                    )}

                    onToggleWishlist={() =>
                      dispatch(
                        toggleWishlist({
                          id: product.id,
                          name: product.name,
                          slug: product.slug,
                          image: product.image,
                          price: product.price,
                          oldPrice:
                            product.oldPrice,
                          sale:
                            product.sale,
                        })
                      )
                    }

                    /*
                      IMPORTANT:
                      এখানে সরাসরি addToCart করছি না।
                      আগে size modal open হবে।
                    */

                    onAddToCart={() =>
                      setSelectedProduct(
                        product
                      )
                    }
                  />

                )
              )}

            </div>

          ) : (

            <div
              className="
                flex
                min-h-[300px]
                items-center
                justify-center
                border
                border-black/10
              "
            >

              <p
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-black/45
                "
              >
                NO PRODUCTS FOUND
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          MORE DROPS
      ===================================================== */}

      <section
        className="
          border-t
          border-black/10
          bg-[#f5f5f2]
          px-5
          py-24

          sm:px-8
          sm:py-32

          lg:px-12
        "
      >

        <div
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >

          <div
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-red-600
            "
          >
            AWAKENING // REDACTED
          </div>

          <h2
            className="
              mt-4
              font-display
              text-[15vw]
              font-black
              uppercase
              leading-[0.75]
              tracking-[-0.07em]

              sm:text-[11vw]
              md:text-[8vw]
            "
          >
            MORE DROPS

            <span className="block">
              COMING
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[420px]
              font-mono
              text-[9px]
              leading-[1.7]
              text-black/55
            "
          >
            New pieces are already in the
            works. Leave your email and
            you&apos;ll hear when the next arc
            awakens.
          </p>

          {/* EMAIL */}

          <form
            onSubmit={(e) =>
              e.preventDefault()
            }
            className="
              mx-auto
              mt-8
              flex
              max-w-[480px]
              flex-col
              gap-2

              sm:flex-row
            "
          >

            <input
              type="email"
              placeholder="ENTER_EMAIL //"
              className="
                h-12
                flex-1
                border
                border-black/20
                bg-white
                px-4
                font-mono
                text-[8px]
                uppercase
                tracking-[0.12em]
                outline-none
                focus:border-black
              "
            />

            <button
              type="submit"
              className="
                h-12
                bg-black
                px-7
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                transition
                hover:bg-red-600
              "
            >
              NOTIFY ME
            </button>

          </form>

        </div>
      </section>

      {/* =====================================================
          SIZE MODAL
      ===================================================== */}

      {selectedProduct && (
        <SizeModal
          product={selectedProduct}

          onClose={() =>
            setSelectedProduct(null)
          }

          onSelectSize={(selectedSize) => {

            /*
              NOW add to cart with selected size
            */

            dispatch(
              addToCart({
                id: selectedProduct.id,
                name: selectedProduct.name,
                slug: selectedProduct.slug,
                image: selectedProduct.image,
                price: selectedProduct.price,
                size: selectedSize,
              })
            );

            /*
              Close modal
            */

            setSelectedProduct(null);
          }}
        />
      )}

    </main>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  isSaved,
  onToggleWishlist,
  onAddToCart,
}: {
  product: (typeof products)[number];

  isSaved: boolean;

  onToggleWishlist: () => void;

  onAddToCart: () => void;
}) {

  return (
    <article className="min-w-0">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="group relative">

        <Link
          href={`/drop/${product.slug}`}
          className="
            relative
            block
            aspect-[4/5]
            overflow-hidden
            border
            border-black
            bg-[#f1f1ef]
          "
        >

          {/*

            Normal img intentionally used here.

            This avoids the Next/Image preload selector
            issue that you were getting before.

          */}

          <img
            src={product.image}
            alt={product.name}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover

              transition-transform
              duration-700
              ease-out

              group-hover:scale-[1.035]
            "
          />

          {/* SALE RIBBON */}

          {product.sale && (
            <div
              className="
                absolute
                -left-9
                top-5
                z-10
                w-32
                rotate-[-45deg]
                bg-red-600
                py-1
                text-center
                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
              "
            >
              SALE 15% OFF
            </div>
          )}

          {/* VIEW DETAILS */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              translate-y-full

              border-t
              border-white/20
              bg-black/90

              px-4
              py-3

              text-center
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

      </div>

      {/* =====================================================
          INFO
      ===================================================== */}

      <div
        className="
          border-x
          border-b
          border-black
          bg-white
        "
      >

        <div className="px-3 pt-3">

          <div
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.16em]
              text-black/35
            "
          >
            COLLECTION // THE_ORIGIN_DROP
          </div>

          <div
            className="
              mt-2
              flex
              items-start
              justify-between
              gap-3
            "
          >

            <h2
              className="
                font-display
                text-[12px]
                font-bold
                uppercase
                leading-none
                tracking-[-0.01em]

                sm:text-[14px]
              "
            >
              {product.name}
            </h2>

            <div
              className="
                shrink-0
                text-right
                font-mono
              "
            >

              {product.oldPrice && (
                <div
                  className="
                    text-[8px]
                    text-black/35
                    line-through
                  "
                >
                  A$
                  {product.oldPrice.toFixed(2)}
                </div>
              )}

              <div
                className={`
                  text-[12px]
                  font-bold

                  ${
                    product.sale
                      ? "text-red-600"
                      : "text-black"
                  }
                `}
              >
                A$
                {product.price.toFixed(2)}
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-2
            border-t
            border-black
          "
        >

          {/* SAVE */}

          <button
            type="button"
            onClick={onToggleWishlist}
            className={`
              flex
              h-11
              items-center
              justify-center
              gap-1.5

              border-r
              border-black

              font-mono
              text-[7px]
              font-bold
              uppercase
              tracking-[0.08em]

              transition

              ${
                isSaved
                  ? "bg-red-600 text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }
            `}
          >

            <Heart
              size={11}
              fill={
                isSaved
                  ? "currentColor"
                  : "none"
              }
            />

            {isSaved
              ? "SAVED"
              : "SAVE"}

          </button>

          {/* ADD TO CART */}

          <button
            type="button"
            onClick={onAddToCart}
            className="
              flex
              h-11
              items-center
              justify-center
              gap-1

              bg-black

              font-mono
              text-[7px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-white

              transition
              hover:bg-red-600
            "
          >

            ADD TO CART

            <ArrowUpRight size={11} />

          </button>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   SIZE MODAL
========================================================= */

function SizeModal({
  product,
  onClose,
  onSelectSize,
}: {
  product: (typeof products)[number];

  onClose: () => void;

  onSelectSize: (
    size: string
  ) => void;
}) {

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]

        flex
        items-center
        justify-center

        bg-black/70
        p-4
        backdrop-blur-sm

        animate-in
        fade-in
        duration-200
      "
      onClick={onClose}
    >

      {/* MODAL */}

      <div
        className="
          relative
          w-full
          max-w-[430px]

          overflow-hidden

          border
          border-black
          bg-white

          shadow-2xl

          animate-in
          zoom-in-95
          duration-200
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* =================================================
            CLOSE
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close size selection"
          className="
            absolute
            right-3
            top-3
            z-20

            flex
            h-8
            w-8
            items-center
            justify-center

            bg-black
            text-white

            transition
            hover:bg-red-600
          "
        >
          <X size={14} />
        </button>

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            bg-[#f1f1ef]
          "
        >

          <img
            src={product.image}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* SALE */}

          {product.sale && (
            <div
              className="
                absolute
                left-[-35px]
                top-5
                w-32

                rotate-[-45deg]

                bg-red-600

                py-1

                text-center

                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
              "
            >
              SALE 15% OFF
            </div>
          )}

        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-5">

          <div
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-black/40
            "
          >
            SELECT SIZE // ZENJI
          </div>

          {/* TITLE / PRICE */}

          <div
            className="
              mt-2
              flex
              items-end
              justify-between
              gap-4
            "
          >

            <h3
              className="
                font-display
                text-[24px]
                font-black
                uppercase
                leading-none
              "
            >
              {product.name}
            </h3>

            <div
              className="
                shrink-0
                font-mono
                text-[12px]
                font-bold
                text-red-600
              "
            >
              A$
              {product.price.toFixed(2)}
            </div>

          </div>

          <p
            className="
              mt-3
              font-mono
              text-[8px]
              leading-[1.6]
              text-black/45
            "
          >
            Choose your size before adding
            this piece to your cart.
          </p>

          {/* =================================================
              SIZE BUTTONS
          ================================================= */}

          <div
            className="
              mt-5
              grid
              grid-cols-3
              gap-2

              sm:grid-cols-6
            "
          >

            {SIZES.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() =>
                  onSelectSize(item)
                }
                className="
                  flex
                  h-11
                  items-center
                  justify-center

                  border
                  border-black/20
                  bg-white

                  font-mono
                  text-[9px]
                  font-bold
                  tracking-[0.1em]

                  transition

                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                {item}
              </button>

            ))}

          </div>

          {/* INFO */}

          <div
            className="
              mt-5
              border-t
              border-black/10
              pt-4

              font-mono
              text-[7px]
              uppercase
              tracking-[0.12em]
              text-black/35
            "
          >
            Oversized fit // XS–XXL
          </div>

        </div>

      </div>

    </div>
  );
}
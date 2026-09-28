"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Heart,
  Minus,
  Plus,
  X,
} from "lucide-react";

import {
  addToCart,
} from "@/src/redux/cartSlice";

import {
  toggleWishlist,
} from "@/src/redux/wishlistSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/redux/hooks";

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
    colorway: "ELECTRIC BLUE",
    sku: "ZNJ-BLU-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A graphic built around movement, pressure and controlled energy. Blue Flame turns the intensity of anime-inspired artwork into a clean streetwear statement.",
  },

  {
    id: "bushido",
    name: "BUSHIDO TEE",
    slug: "bushido-tee",
    image: "/assest/Bushido-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-BUS-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "Built around discipline, restraint and the warrior spirit. A minimal anime-inspired graphic designed to carry the weight of the story without overwhelming the silhouette.",
  },

  {
    id: "demon-blood",
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    image: "/assest/Demon-blood-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    colorway: "CRIMSON PINK",
    sku: "ZNJ-DEM-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "The mark of the cursed. Worn by those who survived. The Demon Blood graphic is built around the idea of a mark earned rather than chosen — drawn with an intentionally unsteady edge so it reads like a scar rather than a logo.",
  },

  {
    id: "domain-expansion",
    name: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    image: "/assest/Domain-expansion-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-DOM-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A bold graphic inspired by limitless technique and controlled chaos. Designed for a strong visual impact while keeping the oversized streetwear silhouette clean.",
  },

  {
    id: "free-soul",
    name: "FREE SOUL TEE",
    slug: "free-soul-tee",
    image: "/assest/Free-soul-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-FRE-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "Freedom without permission. A graphic-led piece built around individuality, movement and choosing your own path.",
  },

  {
    id: "limitless",
    name: "LIMITLESS TEE",
    slug: "limitless-tee",
    image: "/assest/Limitless-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-LIM-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A visual study of infinite potential, translated into a heavyweight oversized tee made for everyday streetwear.",
  },

  {
    id: "paradise-spirit",
    name: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    image: "/assest/Paradise-spirit-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-PAR-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A quieter piece from the collection — built around spirit, balance and the contrast between calm and intensity.",
  },

  {
    id: "warrior-spirit",
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    image: "/assest/Warrior-spirit-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    colorway: "WASHED BLACK",
    sku: "ZNJ-WAR-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A tribute to discipline, resilience and the part of you that keeps moving forward.",
  },

  {
    id: "water-breathing",
    name: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    image: "/assest/Water-breathing-graphic.avif",
    price: 39.99,
    oldPrice: null,
    sale: false,
    colorway: "WASHED BLACK",
    sku: "ZNJ-WAT-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "Flow, precision and controlled movement translated into a graphic anime streetwear piece.",
  },

  {
    id: "will-of-the-sun",
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    image: "/assest/Will-of-the-sun-4.avif",
    price: 33.99,
    oldPrice: 39.99,
    sale: true,
    colorway: "WASHED BLACK",
    sku: "ZNJ-SUN-001",
    model: "Model is 165 cm / 5'5\", wearing size S.",
    description:
      "A graphic about persistence, light and the will to keep moving when everything else disappears.",
  },
];

/* =========================================================
   SIZES
========================================================= */

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

/* =========================================================
   GALLERY
========================================================= */

const cloudinaryBase =
  "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products";

function getGallery(slug: string, fallback: string) {
  const productName = slug
    .replace("-tee", "")
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join("-");

  return [
    `${cloudinaryBase}/${productName}-1.webp`,
    `${cloudinaryBase}/${productName}-2.webp`,
    `${cloudinaryBase}/${productName}-3.webp`,
    `${cloudinaryBase}/${productName}-4.webp`,
    `${cloudinaryBase}/${productName}-5.webp`,
  ];
}

/* =========================================================
   PAGE
========================================================= */

export default function ProductDetailsPage() {
  const params = useParams();

  const slug = String(params.slug);

  const product = products.find(
    (item) => item.slug === slug
  );

  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector(
    (state) => state.wishlist.items
  );

  const isSaved = wishlistItems.some(
    (item) => item.id === product?.id
  );

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [selectedSize, setSelectedSize] =
    useState<string | null>(null);

  const [copied, setCopied] =
    useState(false);

  const [galleryErrors, setGalleryErrors] =
    useState<Record<number, boolean>>({});

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 py-40 text-black">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-black/40
            "
          >
            ERROR // PRODUCT NOT FOUND
          </div>

          <h1
            className="
              mt-4
              font-display
              text-[12vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.06em]
              sm:text-[8vw]
            "
          >
            404
          </h1>

          <Link
            href="/collection"
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              bg-black
              px-6
              py-4
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            <ArrowLeft size={12} />
            BACK TO COLLECTION
          </Link>
        </div>
      </main>
    );
  }

  const gallery = getGallery(
    product.slug,
    product.image
  );

  const activeGalleryImage =
    galleryErrors[selectedImage]
      ? product.image
      : gallery[selectedImage];

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        size: selectedSize,
      })
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      // clipboard unavailable
    }
  };

  const handleWishlist = () => {
    dispatch(
      toggleWishlist({
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        oldPrice: product.oldPrice,
        sale: product.sale,
      })
    );
  };

  return (
    <main
      data-site-hero
      className="
        min-h-screen
        bg-white
        text-black
      "
    >
      {/* =====================================================
          TOP
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-[1500px]
          px-5
          pb-10
          pt-[105px]
          sm:px-8
          lg:px-12
          lg:pt-[120px]
        "
      >
        {/* BACK */}

        <Link
          href="/collection"
          className="
            inline-flex
            items-center
            gap-2
            font-mono
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-black/50
            transition
            hover:text-black
          "
        >
          <ArrowLeft size={10} />
          BACK TO COLLECTION
        </Link>

        {/* =================================================
            PRODUCT AREA
        ================================================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT — GALLERY
          ================================================= */}

          <div className="min-w-0">
            <div
              className="
                relative
                overflow-hidden
                border
                border-black
                bg-[#eeeeec]
              "
            >
              {/* SALE */}

              {product.sale && (
                <div
                  className="
                    absolute
                    left-[-42px]
                    top-7
                    z-20
                    w-40
                    rotate-[-45deg]
                    bg-red-600
                    py-1.5
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

              <img
                src={activeGalleryImage}
                alt={product.name}
                className="
                  block
                  aspect-[4/5]
                  h-full
                  w-full
                  object-cover
                "
                onError={() => {
                  setGalleryErrors(
                    (prev) => ({
                      ...prev,
                      [selectedImage]: true,
                    })
                  );
                }}
              />
            </div>

            {/* THUMBNAILS */}

            <div
              className="
                mt-2
                grid
                grid-cols-6
                gap-2
              "
            >
              {gallery.map(
                (image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    className={`
                      relative
                      aspect-square
                      overflow-hidden
                      border
                      bg-[#eeeeec]
                      transition

                      ${
                        selectedImage === index
                          ? "border-black"
                          : "border-black/15 hover:border-black/50"
                      }
                    `}
                  >
                    <img
                      src={
                        galleryErrors[index]
                          ? product.image
                          : image
                      }
                      alt={`${product.name} view ${
                        index + 1
                      }`}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                      onError={() => {
                        setGalleryErrors(
                          (prev) => ({
                            ...prev,
                            [index]: true,
                          })
                        );
                      }}
                    />
                  </button>
                )
              )}
            </div>

            {/* MOBILE SCROLL NOTE */}

            <div
              className="
                mt-3
                text-right
                font-mono
                text-[7px]
                uppercase
                tracking-[0.16em]
                text-black/30
                lg:hidden
              "
            >
              BROWSE PRODUCT VIEWS →
            </div>
          </div>

          {/* =================================================
              RIGHT — PRODUCT INFO
          ================================================= */}

          <div className="lg:pt-1">
            {/* LABEL */}

            <div
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-black/40
              "
            >
              DROP / {product.name}
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-4
                max-w-[600px]
                font-display
                text-[12vw]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.065em]
                sm:text-[9vw]
                lg:text-[5vw]
                xl:text-[4.6vw]
              "
            >
              {product.name}
            </h1>

            {/* SHARE */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-2
                border-b
                border-black/10
                pb-5
              "
            >
              <span
                className="
                  mr-1
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-black/40
                "
              >
                SHARE
              </span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="
                  inline-flex
                  h-8
                  items-center
                  gap-2
                  border
                  border-black/15
                  px-3
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.08em]
                  transition
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                "
              >
                {copied ? (
                  <>
                    <Check size={11} />
                    COPIED
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    COPY LINK
                  </>
                )}
              </button>

              <button
                type="button"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-black/15
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                X
              </button>

              <button
                type="button"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-black/15
                  font-mono
                  text-[8px]
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                f
              </button>

              <button
                type="button"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-black/15
                  font-mono
                  text-[8px]
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                ◎
              </button>
            </div>

            {/* COLOR */}

            <div className="mt-6">
              <div
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-black/40
                "
              >
                COLORWAY: {product.colorway}
              </div>
            </div>

            {/* PRICE */}

            <div className="mt-3 flex items-end gap-3">
              <span
                className={`
                  font-display
                  text-[30px]
                  font-black
                  uppercase
                  leading-none
                  ${
                    product.sale
                      ? "text-red-600"
                      : "text-black"
                  }
                `}
              >
                A${product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span
                  className="
                    pb-1
                    font-mono
                    text-[10px]
                    text-black/35
                    line-through
                  "
                >
                  A${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* STOCK */}

            <div
              className="
                mt-2
                font-mono
                text-[7px]
                uppercase
                tracking-[0.14em]
                text-black/45
              "
            >
              ● IN STOCK
            </div>

            {/* SIZE */}

            <div className="mt-7">
              <div
                className="
                  mb-3
                  font-mono
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                SELECT SIZE
              </div>

              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => {
                  const active =
                    selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`
                        h-11
                        border
                        font-mono
                        text-[8px]
                        font-bold
                        transition

                        ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-black/25 bg-white hover:border-black"
                        }
                      `}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MODEL */}

            <p
              className="
                mt-4
                max-w-[470px]
                font-mono
                text-[7px]
                leading-[1.65]
                text-black/50
              "
            >
              {product.model} Oversized fit —
              size down if between sizes.
            </p>

            {/* SIZE GUIDE */}

            <button
              type="button"
              className="
                mt-3
                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.14em]
                underline
                underline-offset-4
              "
            >
              VIEW SIZE GUIDE
            </button>

            {/* ACTIONS */}

            <div
              className="
                mt-8
                grid
                grid-cols-2
                border
                border-black
              "
            >
              <button
                type="button"
                onClick={handleWishlist}
                className={`
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  border-r
                  border-black
                  font-mono
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  transition

                  ${
                    isSaved
                      ? "bg-red-600 text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                <Heart
                  size={12}
                  fill={
                    isSaved
                      ? "currentColor"
                      : "none"
                  }
                />

                {isSaved
                  ? "SAVED"
                  : "WISHLIST"}
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  bg-black
                  font-mono
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-white
                  transition
                  hover:bg-red-600
                  disabled:cursor-not-allowed
                  disabled:bg-black/20
                "
              >
                {selectedSize
                  ? `ADD TO CART — ${selectedSize}`
                  : "SELECT A SIZE"}

                <ArrowRight size={12} />
              </button>
            </div>

            {/* WARNING */}

            {!selectedSize && (
              <div
                className="
                  mt-2
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.1em]
                  text-red-600
                "
              >
                SELECT A SIZE TO CONTINUE
              </div>
            )}

            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="mt-10">
              <div
                className="
                  border-b
                  border-black
                  pb-3
                  font-display
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[-0.01em]
                "
              >
                PRODUCT DETAILS
              </div>

              <p
                className="
                  mt-5
                  max-w-[600px]
                  font-mono
                  text-[8px]
                  leading-[1.85]
                  text-black/55
                "
              >
                {product.description}
              </p>

              <p
                className="
                  mt-4
                  max-w-[600px]
                  font-mono
                  text-[8px]
                  leading-[1.85]
                  text-black/55
                "
              >
                Printed on 240gsm heavyweight
                cotton, oversized cut and garment
                washed for a structured streetwear
                feel. The graphic is screenprinted
                to retain its density through
                repeated washing.
              </p>

              <p
                className="
                  mt-4
                  max-w-[600px]
                  font-mono
                  text-[8px]
                  leading-[1.85]
                  text-black/55
                "
              >
                A limited ZENJI drop. Once this run
                sells through, the piece is not
                reprinted.
              </p>
            </div>

            {/* =================================================
                SPECS
            ================================================= */}

            <div className="mt-8">
              <SpecRow
                label="COLOURWAY"
                value={product.colorway}
              />

               
              <SpecRow
                label="FABRIC"
                value="240gsm heavyweight cotton"
              />

              <SpecRow
                label="FIT"
                value="Oversized — size down if between sizes"
              />

              <SpecRow
                label="CONSTRUCTION"
                value="Garment washed. Anime graphic screenprint."
              />

              <SpecRow
                label="RUN"
                value="Limited — no restocks"
              />

              <SpecRow
                label="SKU"
                value={product.sku}
              />
            </div>

            {/* CARE */}

            <div className="mt-8 border-t border-black/10">
              <AccordionRow title="MATERIAL & CARE">
                Cold wash inside out. No tumble
                dry. Hang dry only. Iron inside out
                on low heat.
              </AccordionRow>

              <AccordionRow title="HOW IT FITS">
                Oversized streetwear cut. The model
                is 165 cm / 5'5" wearing size S.
                Size down if you are between sizes.
              </AccordionRow>

              <AccordionRow title="SIZE GUIDE">
                Available sizes are XS, S, M, L,
                XL and XXL.
              </AccordionRow>

              <AccordionRow title="SHIPPING & RETURNS">
                Australia-wide shipping. Free
                shipping on orders over A$100.
                Returns apply to eligible unworn
                items according to the store policy.
              </AccordionRow>
            </div>

            {/* SKU */}

            <div
              className="
                mt-6
                font-mono
                text-[7px]
                uppercase
                tracking-[0.16em]
                text-black/30
              "
            >
              SKU: {product.sku}
            </div>
          </div>
        </div>

        {/* =====================================================
            COLLECTION MARKER
        ===================================================== */}

        <div
          className="
            mt-16
            border-t
            border-black/10
            pt-5
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
              font-mono
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-black/35
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>THE_ORIGIN_DROP</span>

            <span>
              ZENJI // AUSTRALIA // EST. 2024
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SPEC ROW
========================================================= */

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[120px_1fr]
        gap-4
        border-b
        border-black/10
        py-3
      "
    >
      <span
        className="
          font-mono
          text-[7px]
          font-bold
          uppercase
          tracking-[0.12em]
        "
      >
        {label}
      </span>

      <span
        className="
          font-mono
          text-[7px]
          leading-[1.6]
          text-black/50
        "
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   ACCORDION ROW
========================================================= */

function AccordionRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          py-4
          text-left
        "
      >
        <span
          className="
            font-mono
            text-[7px]
            font-bold
            uppercase
            tracking-[0.14em]
          "
        >
          {title}
        </span>

        {open ? (
          <Minus size={12} />
        ) : (
          <Plus size={12} />
        )}
      </button>

      {open && (
        <div
          className="
            pb-4
            font-mono
            text-[8px]
            leading-[1.7]
            text-black/50
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}
 
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: "blue-flame",
    name: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    price: "A$33.99",
    oldPrice: "A$39.99",
    sale: true,

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "bushido",
    name: "BUSHIDO TEE",
    slug: "bushido-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "demon-blood",
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    price: "A$33.99",
    oldPrice: "A$39.99",
    sale: true,

    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "domain-expansion",
    name: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "free-soul",
    name: "FREE SOUL TEE",
    slug: "free-soul-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "limitless",
    name: "LIMITLESS TEE",
    slug: "limitless-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "paradise-spirit",
    name: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1506629905607-d9f1a9f6e1d6?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "warrior-spirit",
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    price: "A$33.99",
    oldPrice: "A$39.99",
    sale: true,

    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "water-breathing",
    name: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    price: "A$39.99",
    oldPrice: null,
    sale: false,

    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "will-of-sun",
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    price: "A$33.99",
    oldPrice: "A$39.99",
    sale: true,

    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",

    hoverImage:
      "https://images.unsplash.com/photo-1506629905607-d9f1a9f6e1d6?q=80&w=1200&auto=format&fit=crop",
  },
];

const DESKTOP_VISIBLE = 4;

export default function LatestDrops() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = products.length - DESKTOP_VISIBLE;

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1,
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1,
    );
  };

  return (
    <section
      id="latest-drops"
      className="relative overflow-hidden bg-[#f4f2ec] px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.32em] text-black/45 sm:text-[10px]">
              Collection // THE_ORIGIN_DROP
            </p>

            <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.8] tracking-[-0.07em]">
              LATEST_DROPS
            </h2>
          </div>

          {/* DESKTOP ARROWS */}

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous products"
              className="group flex h-11 w-11 items-center justify-center border border-black/20 bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next products"
              className="group flex h-11 w-11 items-center justify-center border border-black/20 bg-transparent transition-all duration-300 hover:bg-black hover:text-white"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        <div className="mb-7 flex items-center justify-between sm:hidden">
          <Link
            href="/shop"
            className="text-[9px] font-bold uppercase tracking-[0.22em]"
          >
            VIEW_ALL
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center border border-black/20 transition-colors hover:bg-black hover:text-white"
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.5}
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center border border-black/20 transition-colors hover:bg-black hover:text-white"
            >
              <ArrowRight
                size={15}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* ============================================
            PRODUCT CAROUSEL
        ============================================ */}

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * 25}%`,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-full shrink-0 pr-3 sm:w-1/2 sm:pr-5 lg:w-1/4 lg:pr-6"
              >
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.04, 0.2),
                  }}
                  className="group border border-black p-2"
                >
                  {/* ==================================
                      PRODUCT IMAGE
                  ================================== */}

                  <Link
                    href={`/shop/${product.slug}`}
                    className="relative block overflow-hidden bg-[#e5e3dc]"
                  >
                    {/* SALE BADGE */}

                    {product.sale && (
                      <div className="absolute left-3 top-3 z-30 bg-black px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-white sm:left-4 sm:top-4 sm:text-[9px]">
                        SALE 15% OFF
                      </div>
                    )}

                    {/* IMAGE WRAPPER */}

                    <div className="relative aspect-[0.82] overflow-hidden">

                      {/* ================================
                          FIRST IMAGE
                      ================================= */}

                      <img
                        src={product.image}
                        alt={`ZENJI ${product.name}`}
                        className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.055]"
                        loading={index < 4 ? "eager" : "lazy"}
                      />

                      {/* ================================
                          SECOND / HOVER IMAGE
                      ================================= */}

                      <img
                        src={product.hoverImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 z-10 h-full w-full object-cover opacity-0 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.055] group-hover:opacity-100"
                        loading="lazy"
                      />

                      {/* DARK OVERLAY */}

                      <div className="absolute inset-0 z-20 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

                      {/* VIEW PRODUCT */}

                      <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-full bg-black px-5 py-4 text-white transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                            VIEW PRODUCT
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* ==================================
                      PRODUCT INFORMATION
                  ================================== */}

                  <div className="pt-4 sm:pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="text-[10px] font-bold uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-50 sm:text-[11px]"
                      >
                        {product.name}
                      </Link>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 opacity-30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </div>

                    {/* PRICE */}

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-medium sm:text-[11px]">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-[9px] text-black/35 line-through sm:text-[10px]">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.16em] text-black/35">
                      THE_ORIGIN_DROP
                    </p>
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============================================
            BOTTOM NAVIGATION
        ============================================ */}

        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5 sm:mt-14">
          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                className="text-[9px] font-bold uppercase tracking-[0.18em]"
              >
                {String(currentIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>

            <span className="text-[9px] text-black/25">
              /
            </span>

            <span className="text-[9px] text-black/40">
              {String(maxIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <Link
            href="/shop"
            className="group hidden items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] sm:flex"
          >
            <span>VIEW_ALL</span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
 

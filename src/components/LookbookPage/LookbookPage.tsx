"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type FilterType = "ALL" | "FRONT" | "BACK" | "ON MODEL";

type LookbookItem = {
  id: string;
  product: string;
  slug: string;
  type: "FRONT" | "BACK" | "ON MODEL";
  image: string;
  badge?: string;
};

const IMAGE_BASE =
  "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products";

const LOOKBOOK_ITEMS: LookbookItem[] = [
  // BLUE FLAME
  {
    id: "blue-flame-front",
    product: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Blue-flame-1.webp`,
    badge: "SALE",
  },
  {
    id: "blue-flame-back",
    product: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Blue-flame-2.webp`,
    badge: "SALE",
  },
  {
    id: "blue-flame-model",
    product: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Blue-flame-3.webp`,
    badge: "SALE",
  },

  // BUSHIDO
  {
    id: "bushido-front",
    product: "BUSHIDO TEE",
    slug: "bushido-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Bushido-1.webp`,
    badge: "LIMITED",
  },
  {
    id: "bushido-back",
    product: "BUSHIDO TEE",
    slug: "bushido-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Bushido-2.webp`,
    badge: "LIMITED",
  },
  {
    id: "bushido-model",
    product: "BUSHIDO TEE",
    slug: "bushido-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Bushido-3.webp`,
    badge: "LIMITED",
  },

  // DEMON BLOOD
  {
    id: "demon-blood-front",
    product: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Demon-blood-1.webp`,
    badge: "SALE",
  },
  {
    id: "demon-blood-back",
    product: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Demon-blood-2.webp`,
    badge: "SALE",
  },
  {
    id: "demon-blood-model",
    product: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Demon-blood-3.webp`,
    badge: "SALE",
  },

  // DOMAIN EXPANSION
  {
    id: "domain-expansion-front",
    product: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Domain-expansion-1.webp`,
  },
  {
    id: "domain-expansion-back",
    product: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Domain-expansion-2.webp`,
  },
  {
    id: "domain-expansion-model",
    product: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Domain-expansion-3.webp`,
  },

  // FREE SOUL
  {
    id: "free-soul-front",
    product: "FREE SOUL TEE",
    slug: "free-soul-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Free-soul-1.webp`,
    badge: "LIMITED",
  },
  {
    id: "free-soul-back",
    product: "FREE SOUL TEE",
    slug: "free-soul-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Free-soul-2.webp`,
    badge: "LIMITED",
  },
  {
    id: "free-soul-model",
    product: "FREE SOUL TEE",
    slug: "free-soul-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Free-soul-3.webp`,
    badge: "LIMITED",
  },

  // LIMITLESS
  {
    id: "limitless-front",
    product: "LIMITLESS TEE",
    slug: "limitless-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Limitless-1.webp`,
    badge: "LIMITED",
  },
  {
    id: "limitless-back",
    product: "LIMITLESS TEE",
    slug: "limitless-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Limitless-2.webp`,
    badge: "LIMITED",
  },
  {
    id: "limitless-model",
    product: "LIMITLESS TEE",
    slug: "limitless-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Limitless-3.webp`,
    badge: "LIMITED",
  },

  // PARADISE SPIRIT
  {
    id: "paradise-spirit-front",
    product: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Paradise-spirit-1.webp`,
  },
  {
    id: "paradise-spirit-back",
    product: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Paradise-spirit-2.webp`,
  },
  {
    id: "paradise-spirit-model",
    product: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Paradise-spirit-3.webp`,
  },

  // WARRIOR SPIRIT
  {
    id: "warrior-spirit-front",
    product: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Warrior-spirit-1.webp`,
    badge: "SALE",
  },
  {
    id: "warrior-spirit-back",
    product: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Warrior-spirit-2.webp`,
    badge: "SALE",
  },
  {
    id: "warrior-spirit-model",
    product: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Warrior-spirit-3.webp`,
    badge: "SALE",
  },

  // WATER BREATHING
  {
    id: "water-breathing-front",
    product: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Water-breathing-1.webp`,
    badge: "NEW ARRIVAL",
  },
  {
    id: "water-breathing-back",
    product: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Water-breathing-2.webp`,
    badge: "NEW ARRIVAL",
  },
  {
    id: "water-breathing-model",
    product: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Water-breathing-3.webp`,
    badge: "NEW ARRIVAL",
  },

  // WILL OF THE SUN
  {
    id: "will-of-the-sun-front",
    product: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    type: "FRONT",
    image: `${IMAGE_BASE}/Will-of-the-sun-1.webp`,
    badge: "SALE",
  },
  {
    id: "will-of-the-sun-back",
    product: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    type: "BACK",
    image: `${IMAGE_BASE}/Will-of-the-sun-2.webp`,
    badge: "SALE",
  },
  {
    id: "will-of-the-sun-model",
    product: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    type: "ON MODEL",
    image: `${IMAGE_BASE}/Will-of-the-sun-3.webp`,
    badge: "SALE",
  },
];

const FILTERS: FilterType[] = [
  "ALL",
  "FRONT",
  "BACK",
  "ON MODEL",
];

export default function LookbookPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterType>("ALL");

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") {
      return LOOKBOOK_ITEMS;
    }

    return LOOKBOOK_ITEMS.filter(
      (item) => item.type === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        data-site-hero
        className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#050505] text-white"
        style={{ backgroundColor: "#050505" }}
      >
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(80,0,0,0.10),transparent_42%)]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Decorative symbol */}
        <div className="pointer-events-none absolute right-[48%] top-[42%] hidden text-[30px] font-black text-white/10 md:block">
          力
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-8 pt-32 sm:px-8 md:px-12 lg:px-16 lg:pb-10">

          {/* Small archive label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[1px] w-5 bg-[#e11]" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#e11] sm:text-[10px]">
              THE_ORIGIN_DROP // EDITORIAL ARCHIVE 2024
            </span>
          </div>

          {/* HUGE TITLE */}
          <h1
            className="
              max-w-[1100px]
              font-black
              uppercase
              leading-[0.80]
              tracking-[-0.055em]
              text-white
              text-[18vw]
              sm:text-[15vw]
              md:text-[12vw]
              lg:text-[9.5vw]
              xl:text-[9vw]
            "
          >
            <span className="block">
              ANIME STREETWEAR —
            </span>

            <span className="block">
              LOOK
            </span>

            <span className="block">
              BOOK
            </span>
          </h1>

          {/* Description */}
          <div className="mt-7 max-w-[1100px] sm:mt-8">
            <p className="font-mono text-[9px] leading-[1.8] tracking-[0.02em] text-white/65 sm:text-[10px] md:text-[11px]">
              The Origin Drop — The Full Visual Archive. Every
              Zenji anime tee, shot front, back, and on model.
              Browse the full Zenji lookbook to see fit, fabric
              drape, and graphic detail before you buy.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-7 h-px w-full bg-white/15 sm:mt-8" />

          {/* Metadata */}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/45 sm:text-[9px]">
              10 PIECES // THE_ORIGIN_DROP // ARCHIVE 2024
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/45 sm:text-[9px]">
              ANIME STREETWEAR // AUSTRALIA
            </span>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30">
              SCROLL
            </span>

            <div className="h-8 w-px bg-white/20" />
          </div>
        </div>
      </section>

      {/* =====================================================
          LOOKBOOK SECTION
      ===================================================== */}
      <section className="w-full bg-[#f3f3f1] px-4 py-16 text-black sm:px-6 md:px-10 lg:px-14 lg:py-24">

        <div className="mx-auto max-w-[1400px]">

          {/* Section heading */}
          <div className="flex flex-col gap-8 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">
                THE_ORIGIN_DROP
              </p>

              <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.04em] sm:text-4xl md:text-5xl">
                BROWSE THE ZENJI
                <br />
                LOOKBOOK
              </h2>
            </div>

            <p className="max-w-[380px] font-mono text-[9px] leading-[1.8] text-black/55 sm:text-[10px]">
              Every piece from The Origin Drop photographed
              front, back, and on model.
            </p>
          </div>

          {/* =================================================
              FILTER BAR
          ================================================= */}
          <div className="flex flex-col gap-5 border-b border-black/15 py-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      border
                      px-4
                      py-2.5
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      transition-all
                      duration-200
                      ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/20 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                      }
                    `}
                  >
                    {filter}

                    {active && (
                      <ChevronDown
                        size={11}
                        strokeWidth={2}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">
              {filteredItems.length} IMAGES
            </span>
          </div>

          {/* =================================================
              IMAGE GRID
          ================================================= */}
          <div className="grid grid-cols-1 gap-[1px] bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <LookbookCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          SHOP CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 md:px-12 lg:px-16 lg:py-32">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px]">

          <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-red-500">
            THE_ORIGIN_DROP // LIMITED STOCK
          </p>

          <h2 className="max-w-[1000px] text-[15vw] font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-[12vw] lg:text-[9vw]">
            SHOP
            <br />
            THE
            <br />
            COLLECTION
          </h2>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-[400px] font-mono text-[9px] leading-[1.8] text-white/45 sm:text-[10px]">
              Every piece from The Origin Drop, limited stock.
              Once it sells out, it is not reprinted.
            </p>

            <Link
              href="/collection"
              className="group inline-flex w-fit items-center gap-4 border border-white/30 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              SHOP NOW

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   LOOKBOOK CARD
========================================================= */

function LookbookCard({
  item,
}: {
  item: LookbookItem;
}) {
  return (
    <Link
      href={`/drop/${item.slug}`}
      className="group relative block overflow-hidden bg-[#dededb]"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">

        <img
          src={item.image}
          alt={`${item.product} ${item.type.toLowerCase()}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Image dark overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

        {/* Badge */}
        {item.badge && (
          <div className="absolute left-3 top-3 z-10">
            <span className="bg-[#e11] px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-white">
              {item.badge}
            </span>
          </div>
        )}

        {/* Type */}
        <div className="absolute right-3 top-3 z-10">
          <span className="bg-black/80 px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {item.type}
          </span>
        </div>

        {/* Hover bottom panel */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-black/90 p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/45">
                {item.type}
              </p>

              <p className="mt-1 text-sm font-black uppercase tracking-[-0.02em]">
                {item.product}
              </p>
            </div>

            <ArrowUpRight
              size={17}
              className="shrink-0"
            />

          </div>
        </div>
      </div>

      {/* Card information */}
      <div className="flex items-center justify-between border-t border-black/10 bg-white px-4 py-4">

        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-black/40">
            ZENJI // {item.type}
          </p>

          <h3 className="mt-1 text-[12px] font-black uppercase tracking-[-0.02em]">
            {item.product}
          </h3>
        </div>

        <ArrowUpRight
          size={15}
          className="text-black/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
        />
      </div>
    </Link>
  );
}
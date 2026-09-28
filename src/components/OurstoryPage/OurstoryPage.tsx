"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ABOUT_ITEMS = [
  {
    label: "WHAT ZENJI IS",
    text: "An Australian anime streetwear brand built around storytelling, individuality and the warrior spirit.",
  },
  {
    label: "FOUNDED",
    text: "ZENJI was founded in 2024.",
  },
  {
    label: "WHAT WE MAKE",
    text: "Limited-edition anime-inspired graphic tees made from heavyweight 240gsm cotton.",
  },
  {
    label: "SHIPPING",
    text: "We ship Australia-wide, with free shipping on orders over A$100 and standard delivery within 1–2 weeks.",
  },
  {
    label: "RESTOCKS",
    text: "Every piece is a limited run. Once it sells out, it is gone — there are no restocks.",
  },
  {
    label: "PRICING",
    text: "ZENJI tees are A$39.99, with selected pieces available at A$33.99 during promotional drops.",
  },
  {
    label: "INFLUENCES",
    text: "Our visual language draws from samurai discipline, Japanese iconography, anime and modern street culture.",
  },
  {
    label: "BASED IN",
    text: "ZENJI is based in Australia and ships across every Australian state and territory.",
  },
  {
    label: "ANIME INSPIRATION",
    text: "Our designs draw inspiration from anime culture alongside original samurai-inspired artwork and visual storytelling.",
  },
  {
    label: "THE ORIGIN DROP",
    text: "The Origin Drop is available now, with selected pieces currently offered at 15% off.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white">

      <section
        data-site-hero
        className="w-full bg-black"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="mx-auto w-full max-w-[720px] px-6 pb-24 pt-32 sm:px-8 sm:pt-36 md:pb-28 md:pt-40">

          {/* =================================================
              PAGE LABEL
          ================================================= */}

          <div className="mb-3">
            <span className="font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-red-600 sm:text-[8px]">
              ABOUT // ZENJI
            </span>
          </div>

          {/* =================================================
              MAIN TITLE
          ================================================= */}

          <h1
            className="
              max-w-[720px]
              font-black
              uppercase
              leading-[0.99]
              text-[5vw]
              tracking-[-0.065em]
              text-white
            "
             
          >
            <span className="block">
              ANIME STREETWEAR
            </span>

            <span className="block">
              AUSTRALIA —
            </span>

            <span className="block">
              BORN FROM THE
            </span>

            <span className="block">
              WARRIOR SPIRIT.
            </span>
          </h1>

          {/* =================================================
              STORY
          ================================================= */}

          <div className="mt-8 space-y-5 sm:mt-9 sm:space-y-6">

            <p className="font-mono text-[8px] leading-[1.8] text-white/65 sm:text-[9px]">
              ZENJI began with one belief: what you wear should
              tell a story.
            </p>

            <p className="font-mono text-[8px] leading-[1.8] text-white/65 sm:text-[9px]">
              Inspired by samurai discipline, anime art and
              modern street culture, we create premium
              streetwear for those who choose their own path.
            </p>

            <p className="font-mono text-[8px] leading-[1.8] text-white/65 sm:text-[9px]">
              Every piece combines Japanese-inspired artwork,
              powerful symbolism and oversized silhouettes —
              designed to express courage, creativity and
              individuality.
            </p>

          </div>

          {/* =================================================
              QUOTE
          ================================================= */}

          <blockquote className="mt-7 border-l border-red-700 pl-4 sm:mt-8">

            <p className="font-mono text-[8px] leading-[1.85] text-white/75 sm:text-[9px]">
              ZENJI is more than a name on a shirt. It represents
              the warrior within — the part of us that keeps
              moving forward, stays true to itself and refuses
              to fade into the crowd.
            </p>

          </blockquote>

          {/* =================================================
              MORE STORY
          ================================================= */}

          <div className="mt-7 space-y-5 sm:mt-8">

            <p className="font-mono text-[8px] leading-[1.8] text-white/65 sm:text-[9px]">
              We design for the dreamers, fighters, creators
              and outsiders shaping their own future.
            </p>

            <p className="font-mono text-[8px] leading-[1.8] text-white/65 sm:text-[9px]">
              Wear your story. Wear your spirit. Wear ZENJI.
            </p>

          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div className="mt-7 sm:mt-8">

            <p className="font-mono text-[8px] font-medium uppercase leading-[1.8] tracking-[0.04em] text-white">
              FOR THE DREAMERS. FIGHTERS. CREATORS. OUTSIDERS.
            </p>

            <Link
              href="/collection"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-2
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                transition-colors
                duration-200
                hover:text-red-500
              "
            >
              EXPLORE THE COLLECTION

              <ArrowUpRight
                size={10}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

              <span className="ml-1 text-red-600">
                →
              </span>
            </Link>

          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="mt-8 h-px w-full bg-white/15 sm:mt-10" />

          {/* =================================================
              ABOUT ZENJI
          ================================================= */}

          <section className="mt-7 sm:mt-8">

            <div className="mb-5">

              <h2
                className="
                  font-black
                  uppercase
                  leading-none
                  tracking-[-0.045em]
                  text-white
                "
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", "Arial Narrow", sans-serif',
                  fontSize: "clamp(25px, 4vw, 44px)",
                }}
              >
                ABOUT ZENJI
              </h2>

            </div>

            {/* Info list */}

            <div className="space-y-4">

              {ABOUT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/[0.08] pb-4"
                >

                  <div className="mb-1.5">
                    <span className="font-mono text-[7px] font-bold uppercase tracking-[0.1em] text-red-600 sm:text-[8px]">
                      {item.label}
                    </span>
                  </div>

                  <p className="max-w-[680px] font-mono text-[7.5px] leading-[1.8] text-white/60 sm:text-[8px]">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* =================================================
              BOTTOM SIGNATURE
          ================================================= */}

          <div className="mt-9 border-t border-white/15 pt-5">

            <div className="flex items-end justify-between gap-6">

              <div>

                <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">
                  ZENJI // AUSTRALIA
                </p>

                <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">
                  THE_ORIGIN_DROP
                </p>

              </div>

              <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">
                EST. 2024
              </span>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
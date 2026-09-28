"use client";

import Image from "next/image";

import backgroundImage from "../../public/assest/background_2.avif";

const features = [
  {
    title: "BUILT TO LAST",
    text: "240gsm heavyweight 100% cotton, garment washed so it keeps its shape, screenprinted to survive the wash cycle. Oversized streetwear cut, sizes XS to XXL.",
  },
  {
    title: "ORIGINAL ARTWORK",
    text: "Every ZENJI anime graphic is drawn for the drop it appears on and printed once. No stock templates, no restocks — a limited run stays a limited run.",
  },
  {
    title: "SHIPPED AUSTRALIA-WIDE",
    text: "Dispatched from Australia, delivered in 1–2 weeks, free over A$100. You have 14 days to return anything unworn.",
  },
];

export default function AboutZenji() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white pt-10">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Extra bottom darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/85" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[900px] flex-col px-6 py-16 sm:px-10 sm:py-20 lg:px-0 lg:py-14">
        
        {/* =================================================
            INTRO
        ================================================= */}

        <div className="max-w-[740px]">
          
          {/* Small red label */}

          <div className="mb-3 font-mono text-[8px] font-bold uppercase tracking-[0.32em] text-red-500 sm:text-[9px]">
            THE ORIGIN STORY // WHO WE ARE
          </div>

          {/* Main heading */}

          <h2
            className="
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.055em]
              text-white
              text-[11vw]
              sm:text-[8vw]
              md:text-[6.5vw]
              lg:text-[54px]
            "
          >
            ANIME STREETWEAR
          </h2>

          {/* Description */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-6
              font-mono
              text-[9px]
              leading-[1.65]
              text-white/85
              sm:grid-cols-2
              sm:gap-10
              sm:text-[9px]
              md:text-[10px]
            "
          >
            <p>
              ZENJI is an anime streetwear label based in Australia, started
              in 2024 by people who grew up on late-night subs and long
              shonen arcs. We make anime graphic tees for anyone who wants
              the reference to read as design first — a piece you can wear
              to work, to a con, or to the shops on a Sunday without having
              to explain it.
            </p>

            <p>
              Every drop starts as original artwork. The pieces borrow
              Japanese streetwear&apos;s restraint — heavy cotton, muted
              colourways, one strong graphic — and take their subjects from
              the anime we actually watch: samurai discipline, cursed marks,
              techniques with no limit. That makes ZENJI an anime clothing
              brand Australia can claim as its own, cut for the way people
              dress here. Runs are small and infinite: once a drop sells
              through it is never reprinted, so the piece you own stays
              yours.
            </p>
          </div>
        </div>

        {/* =================================================
            FEATURES
        ================================================= */}

        <div className="mt-14 sm:mt-16">
          
          {/* Section heading */}

          <h3
            className="
              font-black
              uppercase
              leading-none
              tracking-[-0.035em]
              text-white
              text-[20px]
              sm:text-[23px]
              md:text-[25px]
            "
          >
            WHY CHOOSE ZENJI
          </h3>

          {/* Cards */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  min-h-[125px]
                  border
                  border-white/20
                  bg-black/75
                  p-4
                  backdrop-blur-[2px]
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:bg-black/85
                "
              >
                {/* Card title */}

                <div className="font-mono text-[7px] font-bold uppercase tracking-[0.28em] text-red-500 sm:text-[8px]">
                  {feature.title}
                </div>

                {/* Card text */}

                <p className="mt-3 font-mono text-[8px] leading-[1.65] text-white/85 sm:text-[9px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM TEXT
        ================================================= */}

        <div className="mt-auto pt-14">
          <div className="border-t border-white/10 pt-5">
            <p className="max-w-[760px] font-mono text-[7px] leading-[1.7] tracking-[0.03em] text-white/35 sm:text-[8px]">
              ZENJI is an Australian anime clothing brand making limited-run
              anime graphic tees and Japanese streetwear staples for fans
              across Australia. Shop the latest drop and wear the artwork
              before it disappears.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Mail,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const collaborationTypes = [
  {
    number: "01",
    title: "CREATORS",
    text: "Artists and illustrators whose work suits a limited run. ZENJI drops are small and never restocked, so a collaboration is a finite piece with your name on it, not an open-ended licence.",
  },
  {
    number: "02",
    title: "BRANDS",
    text: "Joint drops and co-branded pieces with brands working the same ground — anime, gaming and Australian streetwear.",
  },
  {
    number: "03",
    title: "PRESS",
    text: "Interviews, stockist enquiries and product for editorial. Same address, same response window.",
  },
];

const benefits = [
  {
    number: "01",
    title: "A FINISHED PIECE, NOT A MOCKUP",
    text: "Sampling, print, photography, fulfilment and returns are handled here. You approve artwork and see the sample; the rest is the label's problem.",
  },
  {
    number: "02",
    title: "CREDITED EVERYWHERE IT APPEARS",
    text: "Your name runs on the product page, in the drop announcement and on the piece itself. A ZENJI collaboration is not a white-label print.",
  },
  {
    number: "03",
    title: "AN AUDIENCE THAT BUYS LIMITED RUNS",
    text: "The list is small and it is not cold. It is built from people who have already bought a drop that never restocked, which is a different audience from a general streetwear following.",
  },
  {
    number: "04",
    title: "FIXED SCOPE, CLEAN ENDING",
    text: "One run, one agreed count, one window. Nothing renews, nothing is reprinted, and the artwork stays yours for everything else you do with it.",
  },
];

const pitchPoints = [
  "Who you are, and a link to your work or your audience.",
  "What you have in mind — a capsule, a shoot, a giveaway, an article.",
  "Rough timing, and anything already fixed — a launch date, an event.",
];

export default function Collaboration() {
  return (
    <main className="bg-black text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        data-site-hero
        className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-black"
      >
        {/* background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-32 sm:px-8 lg:px-12">
          {/* top metadata */}
          <div className="flex items-start justify-between gap-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
              THE_ORIGIN_DROP // PARTNERSHIPS
            </div>

            <div className="hidden text-right font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:block">
              ZENJI // SYSTEM 04
              <br />
              AUSTRALIA
            </div>
          </div>

          {/* main hero */}
          <div className="relative py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl"
            >
              <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">
                <span className="h-2 w-2 bg-red-500" />
                OPEN // PARTNERSHIPS
              </div>

              <h1 className="font-black uppercase leading-[0.78] tracking-[-0.065em] text-white">
                <span className="block text-[18vw] sm:text-[15vw] lg:text-[13vw]">
                  COLLAB
                </span>

                <span className="block text-[18vw] sm:text-[15vw] lg:text-[13vw]">
                  ORATION
                </span>
              </h1>

              <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                <p className="max-w-3xl font-mono text-xs leading-7 text-white/55 sm:text-sm">
                  ZENJI is an Australian anime streetwear label founded in
                  2024, making limited runs of 240gsm heavyweight cotton tees
                  that are never reprinted. We work with people whose output
                  suits that: a small number of pieces, made once.
                </p>

                <div className="flex items-end justify-start lg:justify-end">
                  <a
                    href="#pitch"
                    className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition hover:border-red-500 hover:bg-red-500"
                  >
                    START A CONVERSATION
                    <ArrowDownRight
                      size={14}
                      className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* bottom metadata */}
          <div className="grid grid-cols-2 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:grid-cols-4">
            <div>01 // COLLABORATION</div>
            <div>FINITE RUNS</div>
            <div>240GSM COTTON</div>
            <div className="text-right">ZENJI // AUSTRALIA</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT COLLABORATION MEANS
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[280px_1fr]">
            {/* label */}
            <div>
              <div className="sticky top-28">
                <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-red-500">
                  01 // THE MODEL
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                  HOW IT WORKS
                </div>
              </div>
            </div>

            {/* content */}
            <div>
              <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.045em] sm:text-7xl lg:text-[7vw]">
                WHAT A ZENJI
                <br />
                COLLABORATION
                <br />
                MEANS
              </h2>

              <div className="mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
                <p className="font-mono text-xs leading-7 text-white/55 sm:text-sm">
                  A ZENJI collaboration is a finite object, not a licensing
                  deal. One run of one piece, made with you, with both names
                  on it — then it stops.
                </p>

                <p className="font-mono text-xs leading-7 text-white/55 sm:text-sm">
                  There is no evergreen line, no renewal, and nothing carried
                  quietly into the next season. That shape suits people whose
                  work is already the point: an illustrator with a following,
                  a brand with its own audience, a creator whose taste is the
                  reason anyone is watching.
                </p>
              </div>

              <div className="mt-10 max-w-5xl border-l border-red-500 pl-6">
                <p className="font-mono text-xs leading-7 text-white/70 sm:text-sm">
                  What the label brings is the garment and everything around
                  it — 240gsm heavyweight cotton, screenprinting, product
                  photography, the store, the drop mechanics, and a mailing
                  list built from people who have bought a limited run before.
                </p>

                <p className="mt-5 font-mono text-xs leading-7 text-white/70 sm:text-sm">
                  What you bring is the artwork and the reason anyone cares
                  about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-red-500">
                02 // PARTNERS
              </div>

              <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                WHO WE
                <br />
                WORK WITH
              </h2>
            </div>

            <div className="hidden max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-white/30 lg:block">
              DIFFERENT OUTPUT.
              <br />
              SAME APPROACH.
              <br />
              ONE FINITE RUN.
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-3">
            {collaborationTypes.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b border-white/10 p-7 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-red-500">
                    {item.number}
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-white/20 transition group-hover:translate-x-1 group-hover:text-red-500"
                  />
                </div>

                <h3 className="mt-20 text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-6 font-mono text-xs leading-6 text-white/45">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU GET
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-red-500">
                03 // THE OUTPUT
              </div>

              <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-[7vw]">
                WHAT
                <br />
                YOU GET
              </h2>
            </div>

            <div className="lg:pt-10">
              <p className="font-mono text-[10px] uppercase leading-6 tracking-[0.12em] text-white/30">
                THE GARMENT.
                <br />
                THE DROP.
                <br />
                THE AUDIENCE.
                <br />
                THE END.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 border-t border-white/10 md:grid-cols-2">
            {benefits.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`border-b border-white/10 p-7 lg:p-10 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-8">
                  <span className="font-mono text-[10px] text-red-500">
                    {item.number}
                  </span>

                  <span className="font-mono text-[9px] text-white/20">
                    ZENJI // COLLAB
                  </span>
                </div>

                <h3 className="mt-12 max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl font-mono text-xs leading-6 text-white/45">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO PITCH
      ========================================================= */}
      <section
        id="pitch"
        className="border-b border-white/10 bg-white text-black"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[300px_1fr]">
            <div>
              <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-red-600">
                04 // NEXT STEP
              </div>

              <div className="font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-black/40">
                NO FORM.
                <br />
                NO PORTAL.
                <br />
                JUST AN EMAIL.
              </div>
            </div>

            <div>
              <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-[7vw]">
                HOW TO
                <br />
                PITCH
              </h2>

              <p className="mt-12 max-w-3xl font-mono text-xs leading-7 text-black/55 sm:text-sm">
                Pitching is one email. There is no form, no portal and no deck
                template — three honest paragraphs tell us more than a filled-
                in brief does.
              </p>

              <p className="mt-6 max-w-3xl font-mono text-xs leading-7 text-black/55 sm:text-sm">
                Send the three things below to the address at the bottom of
                this page, from whichever account your work actually lives on,
                and include links rather than attachments.
              </p>

              <div className="mt-14 max-w-3xl border-t border-black/10">
                {pitchPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex gap-6 border-b border-black/10 py-6"
                  >
                    <span className="font-mono text-[10px] text-red-600">
                      0{index + 1}
                    </span>

                    <p className="font-mono text-xs leading-6 text-black/65">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMAIL CTA
      ========================================================= */}
      <section className="bg-red-600 text-white">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                <Mail size={13} />
                SEND IT TO
              </div>

              <a
                href="mailto:admin@zenji.shop"
                className="block break-all text-[10vw] font-black uppercase leading-[0.82] tracking-[-0.065em] transition hover:opacity-70 sm:text-7xl lg:text-[8vw]"
              >
                ADMIN@
                <br />
                ZENJI.SHOP
              </a>
            </div>

            <div className="max-w-xs">
              <p className="font-mono text-xs leading-6 text-white/75">
                We read every message and respond within 2 business days.
              </p>

              <a
                href="mailto:admin@zenji.shop"
                className="mt-7 inline-flex items-center gap-3 border border-white px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] transition hover:bg-white hover:text-red-600"
              >
                EMAIL ZENJI
                <MoveUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM NAV
      ========================================================= */}
      <section className="bg-black">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row lg:px-12">
          <Link
            href="/"
            className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 transition hover:text-white"
          >
            ← RETURN TO BASE
          </Link>

          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
            ZENJI // PARTNERSHIPS // 2024—
          </div>

          <Link
            href="/collection"
            className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 transition hover:text-white"
          >
            SHOP COLLECTION
            <ArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
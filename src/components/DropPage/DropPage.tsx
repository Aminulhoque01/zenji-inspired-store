"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
 
  Mail,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: "blue-flame",
    name: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    image: "/assest/Blue-flame-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
  },

  {
    id: "demon-blood",
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    image: "/assest/Demon-blood-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
  },

  {
    id: "warrior-spirit",
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    image: "/assest/Warrior-spirit-graphic.avif",
    price: 33.99,
    oldPrice: 39.99,
  },

  {
    id: "will-of-the-sun",
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    image: "/assest/Will-of-the-sun-4.avif",
    price: 33.99,
    oldPrice: 39.99,
  },
];

/* =========================================================
   COUNTDOWN
========================================================= */

const DROP_DATE = new Date(
  "2026-11-01T00:00:00+11:00"
).getTime();

function getTimeLeft(): TimeLeft {
  const difference = DROP_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function DropPage() {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  const [email, setEmail] = useState("");

  /* =======================================================
     COUNTDOWN TIMER
  ======================================================= */

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     FORMAT
  ======================================================= */

  const formatNumber = (number: number) =>
    String(number).padStart(2, "0");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[calc(100vh-0px)]
          overflow-hidden
          bg-black
        "
      >
        {/* ===================================================
            BACKGROUND IMAGE
        =================================================== */}

        <div className="absolute inset-0">
          {/* BACKGROUND COLLAGE */}

          <div
            className="
              absolute
              inset-0
              grid
              grid-cols-4
              opacity-[0.24]
            "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  relative
                  h-full
                  overflow-hidden
                "
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  priority
                  sizes="25vw"
                  className="
                    object-cover
                    grayscale
                  "
                />
              </div>
            ))}
          </div>

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-black/75
            "
          />

          {/* GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.07),transparent_45%)]
            "
          />

          {/* VIGNETTE */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.82)_85%)]
            "
          />
        </div>

        {/* ===================================================
            DECORATIVE LINES
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            -translate-x-1/2
            bg-white/[0.04]
            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-1/2
            h-px
            bg-white/[0.035]
          "
        />

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            py-32
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1100px]
              text-center
            "
          >
            {/* SMALL LABEL */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-red-500
                sm:text-[8px]
              "
            >
              <span className="h-1 w-1 rounded-full bg-red-600" />

              INCOMING TRANSMISSION

              <span className="h-1 w-1 rounded-full bg-red-600" />
            </div>

            {/* MAIN TITLE */}

            <h1
              className="
                mt-6
                font-display
                text-[18vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.08em]
                text-white
                sm:text-[14vw]
                md:text-[12vw]
                lg:text-[10vw]
              "
            >
              AWAKENING
            </h1>

            <h2
              className="
                -mt-1
                font-display
                text-[17vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.08em]
                text-red-600
                sm:text-[13vw]
                md:text-[11vw]
                lg:text-[9.5vw]
              "
            >
              IS COMING.
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-7
                max-w-[460px]
                font-mono
                text-[8px]
                leading-[1.8]
                tracking-[0.08em]
                text-white/55
                sm:text-[9px]
              "
            >
              THE NEXT CHAPTER BEGINS.
              <br />
              ARE YOU READY?
            </p>

            {/* DROP DATE */}

            <div
              className="
                mt-5
                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              DROP DATE: 01 NOV 2026
            </div>

            {/* =================================================
                COUNTDOWN
            ================================================= */}

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-[520px]
                grid-cols-4
                border-y
                border-white/10
              "
            >
              <CountdownItem
                value={formatNumber(
                  timeLeft.days
                )}
                label="DAYS"
              />

              <CountdownItem
                value={formatNumber(
                  timeLeft.hours
                )}
                label="HOURS"
              />

              <CountdownItem
                value={formatNumber(
                  timeLeft.minutes
                )}
                label="MINUTES"
              />

              <CountdownItem
                value={formatNumber(
                  timeLeft.seconds
                )}
                label="SECONDS"
              />
            </div>

            {/* SMALL STATUS */}

            <div
              className="
                mt-7
                font-mono
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-red-500
              "
            >
              AWAKENING // IS COMING
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SCROLL INDICATOR
        =================================================== */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-2
              font-mono
              text-[6px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            SCROLL

            <span
              className="
                h-8
                w-px
                bg-white/20
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          WAITLIST SECTION
      ===================================================== */}

      <section
        className="
          border-t
          border-white/10
          bg-black
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
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-red-500
            "
          >
            GET EARLY ACCESS
          </div>

          <h2
            className="
              mt-5
              font-display
              text-[16vw]
              font-black
              uppercase
              leading-[0.75]
              tracking-[-0.075em]
              sm:text-[11vw]
              md:text-[8vw]
            "
          >
            JOIN THE
            <span className="block text-white/25">
              WAITLIST.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[440px]
              font-mono
              text-[9px]
              leading-[1.8]
              text-white/45
            "
          >
            Be first to shop Awakening.
            Exclusive early access and
            pre-drop access for waitlist
            members.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (!email.trim()) return;

              setEmail("");
            }}
            className="
              mx-auto
              mt-9
              flex
              max-w-[520px]
              flex-col
              gap-2
              sm:flex-row
            "
          >
            <div className="relative flex-1">
              <Mail
                size={13}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-white/30
                "
              />

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
                placeholder="YOUR EMAIL ADDRESS"
                className="
                  h-12
                  w-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-10
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/25
                  focus:border-white/40
                "
              />
            </div>

            <button
              type="submit"
              className="
                flex
                h-12
                items-center
                justify-center
                gap-2
                bg-red-600
                px-7
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              JOIN THE WAITLIST

              <ArrowRight size={13} />
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          CURRENT DROP
      ===================================================== */}

      <section
        className="
          border-t
          border-black/10
          bg-white
          px-5
          py-20
          text-black
          sm:px-8
          sm:py-28
          lg:px-12
        "
      >
        <div
          className="
            mx-auto
            max-w-[1500px]
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-black/10
              pb-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <div
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-red-600
                "
              >
                THE_ORIGIN_DROP // STILL AVAILABLE
              </div>

              <h2
                className="
                  mt-4
                  font-display
                  text-[14vw]
                  font-black
                  uppercase
                  leading-[0.75]
                  tracking-[-0.075em]
                  sm:text-[10vw]
                  md:text-[7vw]
                "
              >
                WHILE
                <span className="block">
                  YOU WAIT.
                </span>
              </h2>
            </div>

            <Link
              href="/collection"
              className="
                flex
                w-fit
                items-center
                gap-2
                border
                border-black
                px-5
                py-3
                font-mono
                text-[7px]
                font-bold
                uppercase
                tracking-[0.14em]
                transition
                hover:bg-black
                hover:text-white
              "
            >
              VIEW FULL COLLECTION

              <ArrowUpRight size={12} />
            </Link>
          </div>

          {/* PRODUCTS */}

          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-x-3
              gap-y-10
              sm:grid-cols-2
              sm:gap-x-5
              lg:grid-cols-4
              lg:gap-x-6
            "
          >
            {products.map((product) => (
              <article
                key={product.id}
                className="group"
              >
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
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="
                      (max-width: 639px) 47vw,
                      (max-width: 1023px) 46vw,
                      24vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.035]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      translate-y-full
                      bg-black/90
                      px-4
                      py-4
                      text-center
                      font-mono
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
                    "
                  >
                    VIEW PRODUCT

                    <ArrowUpRight
                      size={11}
                      className="ml-1 inline-block"
                    />
                  </div>
                </Link>

                <div className="pt-4">
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
                    <h3
                      className="
                        font-display
                        text-[12px]
                        font-bold
                        uppercase
                        leading-none
                        sm:text-[14px]
                      "
                    >
                      {product.name}
                    </h3>

                    <div className="text-right font-mono">
                      <div
                        className="
                          text-[8px]
                          text-black/35
                          line-through
                        "
                      >
                        A${product.oldPrice.toFixed(2)}
                      </div>

                      <div
                        className="
                          text-[12px]
                          font-bold
                          text-red-600
                        "
                      >
                        A${product.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

       
    </main>
  );
}

/* =========================================================
   COUNTDOWN ITEM
========================================================= */

function CountdownItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        border-r
        border-white/10
        py-4
        last:border-r-0
      "
    >
      <div
        className="
          font-display
          text-2xl
          font-black
          leading-none
          tracking-[-0.05em]
          sm:text-3xl
        "
      >
        {value}
      </div>

      <div
        className="
          mt-2
          font-mono
          text-[6px]
          uppercase
          tracking-[0.2em]
          text-white/30
        "
      >
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div
        className="
          font-mono
          text-[7px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-white
        "
      >
        {title}
      </div>

      <div className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="
              block
              font-mono
              text-[8px]
              uppercase
              tracking-[0.12em]
              text-white/35
              transition
              hover:text-white
            "
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";

const shopLinks = [
  { label: "Home", href: "/" },
  { label: "Drop", href: "/drop" },
  { label: "Collection", href: "/collection" },
];

const helpLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Contact Us", href: "/contact" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Review", href: "/reviews" },
  { label: "Collaboration", href: "/collaboration" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto min-h-[330px] w-full max-w-[1350px] px-8 py-12 sm:px-12 lg:px-20">

        {/* =================================================
            HUGE BACKGROUND ZENJI
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[38px]
            -translate-x-1/2
            select-none
            whitespace-nowrap
            font-black
            uppercase
            leading-none
            tracking-[-0.09em]
            text-white/[0.035]
            text-[145px]
            sm:text-[190px]
            md:text-[220px]
            lg:text-[245px]
          "
        >
          ZENJI
        </div>

        {/* =================================================
            FOOTER CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-12
            md:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr]
            md:gap-10
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col">

            {/* Logo */}

            <Link
              href="/"
              className="
                mb-7
                flex
                h-12
                w-12
                items-center
                justify-center
                text-4xl
                font-black
                italic
                tracking-[-0.12em]
                text-white
              "
              aria-label="ZENJI Home"
            >
              Z
            </Link>

            {/* Description */}

            <p
              className="
                max-w-[235px]
                font-mono
                text-[8px]
                leading-[1.65]
                text-white/65
                sm:text-[9px]
              "
            >
              Wear the ARC. Anime-inspired
              streetwear for gamers and otaku.
              Every drop limited. No restocks.
              Ever.
            </p>

            {/* Social title */}

            <div
              className="
                mt-6
                mb-3
                font-mono
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              FOLLOW THE LORE
            </div>

            {/* Social buttons */}

            <div className="flex flex-wrap gap-1">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-8
                  items-center
                  gap-2
                  bg-white
                  px-3
                  font-mono
                  text-[8px]
                  font-medium
                  text-black
                  transition
                  hover:bg-white/80
                "
              >
                <span className="text-[11px]">♪</span>
                TikTok
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-8
                  items-center
                  gap-2
                  bg-[#d62976]
                  px-3
                  font-mono
                  text-[8px]
                  font-medium
                  text-white
                  transition
                  hover:opacity-80
                "
              >
                <span className="text-[10px]">◎</span>
                Instagram
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-8
                  items-center
                  gap-2
                  bg-[#1877f2]
                  px-3
                  font-mono
                  text-[8px]
                  font-medium
                  text-white
                  transition
                  hover:opacity-80
                "
              >
                <span className="text-[10px]">f</span>
                Facebook
              </a>

            </div>
          </div>


          {/* =================================================
              SHOP
          ================================================= */}

          <FooterColumn
            title="SHOP"
            links={shopLinks}
          />


          {/* =================================================
              HELP
          ================================================= */}

          <FooterColumn
            title="HELP"
            links={helpLinks}
          />


          {/* =================================================
              ABOUT
          ================================================= */}

          <FooterColumn
            title="ABOUT"
            links={aboutLinks}
          />

        </div>
      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          border-t
          border-white/10
          bg-black
        "
      >

        <div
          className="
            mx-auto
            flex
            min-h-[60px]
            w-full
            max-w-[1350px]
            flex-col
            justify-center
            gap-3
            px-8
            py-4

            sm:px-12

            md:flex-row
            md:items-center
            md:justify-between

            lg:px-20
          "
        >

          {/* Copyright */}

          <p
            className="
              font-mono
              text-[7px]
              leading-relaxed
              text-white/40
              sm:text-[8px]
            "
          >
            © 2026 ZENJI. Every drop is a limited run —
            once it sells out, it is not reprinted.
          </p>


          {/* Legal */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
              font-mono
              text-[7px]
              text-white/45
              sm:text-[8px]
            "
          >

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-white"
            >
              Cookies
            </Link>

            <span className="hidden text-white/20 sm:inline">
              |
            </span>

            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              Anime-inspired. Games-built. Community-owned.
            </span>

          </div>

        </div>
      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>

      {/* Column title */}

      <div
        className="
          mb-7
          font-mono
          text-[7px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/55
        "
      >
        {title}
      </div>


      {/* Links */}

      <nav className="flex flex-col gap-5">

        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              w-fit
              font-mono
              text-[8px]
              font-medium
              text-white
              transition
              duration-200
              hover:text-white/50
              sm:text-[9px]
            "
          >
            {link.label}
          </Link>
        ))}

      </nav>

    </div>
  );
}
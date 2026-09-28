"use client";

import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
  ChevronDown,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import CartDrawer from "./CartDrawer";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/redux/hooks";

import {
  setCartOpen,
} from "@/src/redux/cartSlice";

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const [mobileMenu, setMobileMenu] =
    useState(false);

  /* =======================================================
     SCROLL STATE

     false = top of page
     true  = user has scrolled

     Top:
       Header sits underneath AnnouncementBar
       Header is transparent

     Scroll:
       AnnouncementBar disappears
       Header moves to top
       Header becomes black
  ======================================================= */

  const [scrolled, setScrolled] =
    useState(false);

  /* =======================================================
     ANNOUNCEMENT HEIGHT
  ======================================================= */

  const [announcementHeight, setAnnouncementHeight] =
    useState(0);

  /* =======================================================
     CART
  ======================================================= */

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  /* =======================================================
     WISHLIST
  ======================================================= */

  const wishlistCount = useAppSelector(
    (state) =>
      state.wishlist.items.length
  );

  /* =======================================================
     GET ANNOUNCEMENT HEIGHT
  ======================================================= */

  useEffect(() => {
    const updateAnnouncementHeight = () => {
      const announcement =
        document.getElementById(
          "announcement-bar"
        );

      if (!announcement) {
        setAnnouncementHeight(0);
        return;
      }

      const height =
        announcement.getBoundingClientRect()
          .height;

      setAnnouncementHeight(height);
    };

    /*
     * Initial measurement
     */

    updateAnnouncementHeight();

    /*
     * Resize observer
     * This is important because
     * AnnouncementBar changes height
     * when it hides.
     */

    const announcement =
      document.getElementById(
        "announcement-bar"
      );

    let resizeObserver: ResizeObserver | null =
      null;

    if (announcement) {
      resizeObserver =
        new ResizeObserver(() => {
          updateAnnouncementHeight();
        });

      resizeObserver.observe(
        announcement
      );
    }

    /*
     * Window resize
     */

    window.addEventListener(
      "resize",
      updateAnnouncementHeight
    );

    return () => {
      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        updateAnnouncementHeight
      );
    };
  }, []);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      /*
       * Even a small scroll will:
       *
       * 1. Hide AnnouncementBar
       * 2. Move Header to top
       * 3. Make Header black
       */

      setScrolled(
        window.scrollY > 10
      );
    };

    /*
     * Check initial position
     */

    handleScroll();

    /*
     * Listen to scroll
     */

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  /* =======================================================
     HEADER POSITION
  ======================================================= */

  const headerTop = scrolled
    ? 0
    : announcementHeight;

  /* =======================================================
     HEADER BACKGROUND
  ======================================================= */

  const headerBackground = scrolled
    ? "bg-black shadow-[0_1px_0_rgba(255,255,255,0.08)]"
    : "bg-transparent";

  /* =======================================================
     ACTIVE NAV
  ======================================================= */

  const isActive = (
    href: string
  ) => {
    return pathname === href;
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* ===================================================
          DESKTOP HEADER
      =================================================== */}

      <header
        style={{
          top: headerTop,
        }}
        className={`
          fixed
          left-0
          z-[100]
          hidden
          w-full
          text-white
          transition-[top,background-color,box-shadow]
          duration-500
          ease-out
          lg:block
          ${headerBackground}
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[78px]
            max-w-[1500px]
            items-center
            px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="
              shrink-0
              font-display
              text-[34px]
              font-black
              leading-none
              tracking-[0.15em]
            "
          >
            ZENJI
          </Link>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}

          <nav
            className="
              absolute
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-11
            "
          >
            {/* DROP */}

            <DesktopNavLink
              href="/drop"
              active={isActive("/drop")}
            >
              DROP
            </DesktopNavLink>

            {/* COLLECTION */}

            <DesktopNavLink
              href="/collection"
              active={isActive(
                "/collection"
              )}
            >
              COLLECTION
            </DesktopNavLink>

            {/* LOOKBOOK */}

            <DesktopNavLink
              href="/lookbook"
              active={isActive(
                "/lookbook"
              )}
            >
              LOOKBOOK
            </DesktopNavLink>

            {/* OUR STORY */}

            <DesktopNavLink
              href="/our-story"
              active={isActive(
                "/our-story"
              )}
            >
              OUR STORY
            </DesktopNavLink>

            {/* MORE */}

            <button
              type="button"
              className="
                flex
                items-center
                gap-1
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                transition-opacity
                hover:opacity-60
              "
            >
              MORE

              <ChevronDown
                size={13}
                strokeWidth={1.7}
              />
            </button>
          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div
            className="
              ml-auto
              flex
              items-center
              gap-6
            "
          >
            {/* SEARCH */}

            <button
              type="button"
              aria-label="Search"
              className="
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <Search
                size={20}
                strokeWidth={1.7}
              />
            </button>

            {/* WISHLIST */}

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="
                relative
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <Heart
                size={21}
                strokeWidth={1.7}
              />

              {wishlistCount > 0 && (
                <span
                  className="
                    absolute
                    -right-3
                    -top-3
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    bg-red-600
                    px-1
                    text-[8px]
                    font-bold
                    text-white
                  "
                >
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* CART */}

            <button
              type="button"
              onClick={() =>
                dispatch(
                  setCartOpen(true)
                )
              }
              aria-label="Cart"
              className="
                relative
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <ShoppingBag
                size={21}
                strokeWidth={1.7}
              />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -right-3
                    -top-3
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    bg-red-600
                    px-1
                    text-[8px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* ACCOUNT */}

            <button
              type="button"
              aria-label="Account"
              className="
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <UserRound
                size={21}
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================
          MOBILE HEADER
      =================================================== */}

      <header
        style={{
          top: headerTop,
        }}
        className={`
          fixed
          left-0
          z-[100]
          w-full
          text-white
          transition-[top,background-color,box-shadow]
          duration-500
          ease-out
          lg:hidden
          ${headerBackground}
        `}
      >
        <div
          className="
            flex
            h-[70px]
            items-center
            justify-between
            px-5
          "
        >
          {/* MENU */}

          <button
            type="button"
            onClick={() =>
              setMobileMenu(true)
            }
            aria-label="Open menu"
            className="
              transition-transform
              duration-200
              hover:scale-110
            "
          >
            <Menu
              size={24}
              strokeWidth={1.7}
            />
          </button>

          {/* LOGO */}

          <Link
            href="/"
            className="
              font-display
              text-[32px]
              font-black
              leading-none
              tracking-[-0.08em]
            "
          >
            ZENJI
          </Link>

          {/* CART */}

          <button
            type="button"
            onClick={() =>
              dispatch(
                setCartOpen(true)
              )
            }
            className="relative"
            aria-label="Cart"
          >
            <ShoppingBag
              size={23}
              strokeWidth={1.7}
            />

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-red-600
                  px-1
                  text-[8px]
                  font-bold
                  text-white
                "
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              fixed
              inset-0
              z-[200]
              bg-[#111]
              text-white
            "
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() =>
                setMobileMenu(false)
              }
              className="
                absolute
                right-5
                top-5
                transition-transform
                duration-200
                hover:rotate-90
              "
              aria-label="Close menu"
            >
              <X
                size={27}
                strokeWidth={1.7}
              />
            </button>

            {/* MOBILE MENU CONTENT */}

            <div
              className="
                flex
                h-full
                flex-col
                justify-between
                px-6
                pb-8
                pt-28
              "
            >
              <nav className="flex flex-col">
                {/* DROP */}

                <MobileNavLink
                  href="/drop"
                  index={0}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  DROP
                </MobileNavLink>

                {/* COLLECTION */}

                <MobileNavLink
                  href="/collection"
                  index={1}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  COLLECTION
                </MobileNavLink>

                {/* LOOKBOOK */}

                <MobileNavLink
                  href="/lookbook"
                  index={2}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  LOOKBOOK
                </MobileNavLink>

                {/* OUR STORY */}

                <MobileNavLink
                  href="/our-story"
                  index={3}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  OUR STORY
                </MobileNavLink>

                {/* WISHLIST */}

                <MobileNavLink
                  href="/wishlist"
                  index={4}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  WISHLIST
                </MobileNavLink>
              </nav>

              {/* MOBILE FOOTER */}

              <div
                className="
                  border-t
                  border-white/10
                  pt-5
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                ZENJI® — ANIME STREETWEAR
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          CART DRAWER
      =================================================== */}

      <CartDrawer />
    </>
  );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function DesktopNavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        font-mono
        text-[11px]
        font-bold
        uppercase
        tracking-[0.18em]
        transition-colors
        duration-200
        ${
          active
            ? "text-red-600"
            : "text-white hover:text-white"
        }
      `}
    >
      {children}

      <span
        className={`
          absolute
          -bottom-2
          left-0
          h-[1px]
          bg-current
          transition-all
          duration-300
          ${
            active
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileNavLink({
  href,
  children,
  index,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: index * 0.08,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="
          block
          border-b
          border-white/10
          py-5
          font-display
          text-5xl
          font-black
          uppercase
          tracking-[-0.04em]
          transition-colors
          duration-200
          hover:text-red-600
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}
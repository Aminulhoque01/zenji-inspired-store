 
// "use client";

// import {
//   Heart,
//   Menu,
//   Search,
//   ShoppingBag,
//   UserRound,
//   X,
//   ChevronDown,
// } from "lucide-react";

// import {
//   AnimatePresence,
//   motion,
// } from "framer-motion";

// import {
//   useEffect,
//   useState,
// } from "react";

// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../redux/hooks";

// import { setCartOpen } from "../redux/cartSlice";

// export default function Header() {
//   const [mobileMenu, setMobileMenu] =
//     useState(false);

//   const [heroFinished, setHeroFinished] =
//     useState(false);

//   const [
//     announcementHeight,
//     setAnnouncementHeight,
//   ] = useState(0);

//   const dispatch = useAppDispatch();

//   /*
//    * ==========================================
//    * CART
//    * ==========================================
//    */

//   const cartItems = useAppSelector(
//     (state) => state.cart.items
//   );

//   const cartCount = cartItems.reduce(
//     (total, item) =>
//       total + item.quantity,
//     0
//   );

//   /*
//    * ==========================================
//    * GET ANNOUNCEMENT BAR HEIGHT
//    * ==========================================
//    *
//    * Header initially stays directly below
//    * the AnnouncementBar.
//    */

//   useEffect(() => {
//     const updateAnnouncementHeight =
//       () => {
//         const announcement =
//           document.getElementById(
//             "announcement-bar"
//           );

//         if (!announcement) {
//           setAnnouncementHeight(0);
//           return;
//         }

//         const height =
//           announcement.getBoundingClientRect()
//             .height;

//         setAnnouncementHeight(height);
//       };

//     updateAnnouncementHeight();

//     window.addEventListener(
//       "resize",
//       updateAnnouncementHeight
//     );

//     return () => {
//       window.removeEventListener(
//         "resize",
//         updateAnnouncementHeight
//       );
//     };
//   }, []);

//   /*
//    * ==========================================
//    * HERO / HEADER POSITION
//    * ==========================================
//    *
//    * While hero is visible:
//    *
//    * AnnouncementBar
//    *        ↓
//    * Header
//    *        ↓
//    * Hero
//    *
//    * After hero:
//    *
//    * Header
//    *        ↓
//    * Content
//    */

//   useEffect(() => {
//     const handleScroll = () => {
//       const hero =
//         document.getElementById("hero");

//       if (!hero) return;

//       const heroRect =
//         hero.getBoundingClientRect();

//       /*
//        * Desktop header height.
//        */

//       const headerHeight =
//         window.innerWidth >= 1024
//           ? 78
//           : 70;

//       /*
//        * Hero is finished when its bottom
//        * reaches the top of the fixed header.
//        */

//       const finished =
//         heroRect.bottom <=
//         headerHeight;

//       setHeroFinished(finished);
//     };

//     handleScroll();

//     window.addEventListener(
//       "scroll",
//       handleScroll,
//       {
//         passive: true,
//       }
//     );

//     window.addEventListener(
//       "resize",
//       handleScroll
//     );

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );

//       window.removeEventListener(
//         "resize",
//         handleScroll
//       );
//     };
//   }, []);

//   /*
//    * ==========================================
//    * HEADER TOP POSITION
//    * ==========================================
//    *
//    * Before hero finishes:
//    *
//    * top = AnnouncementBar height
//    *
//    * After hero finishes:
//    *
//    * top = 0
//    */

//   const headerTop =
//     heroFinished
//       ? 0
//       : announcementHeight;

//   /*
//    * ==========================================
//    * HEADER STYLE
//    * ==========================================
//    */

//   const headerBackground =
//     heroFinished
//       ? "bg-black shadow-[0_1px_0_rgba(255,255,255,0.08)]"
//       : "bg-transparent";

//   return (
//     <>
//       {/* =================================================
//           DESKTOP HEADER
//       ================================================== */}

//       <header
//         style={{
//           top: headerTop,
//         }}
//         className={`
//           fixed
//           left-0
//           z-[40]
//           hidden
//           w-full
//           text-white
//           transition-[background-color,box-shadow,top]
//           duration-500
//           lg:block
//           ${headerBackground}
//         `}
//       >
//         <div
//           className="
//             mx-auto
//             flex
//             h-[78px]
//             max-w-[1500px]
//             items-center
//             px-8
//           "
//         >
//           {/* =================================================
//               LOGO
//           ================================================== */}

//           <a
//             href="/"
//             className="
//               font-display
//               text-[34px]
//               leading-none
//               tracking-[0.15em]
               
//             "
//           >
             
//             ZENJI
//           </a>

//           {/* =================================================
//               CENTER NAVIGATION
//           ================================================== */}

//           <nav
//             className="
//               absolute
//               left-1/2
//               flex
//               -translate-x-1/2
//               items-center
//               gap-11
//             "
//           >
//             {/* DROP */}

//             <a
//               href="#shop"
//               className="
//                 group
//                 relative
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//               "
//             >
//               Drop

//               <span
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[1px]
//                   w-0
//                   bg-white
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />
//             </a>

//             {/* COLLECTION */}

//             <a
//               href="#collection"
//               className="
//                 group
//                 relative
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//               "
//             >
//               Collection

//               <span
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[1px]
//                   w-0
//                   bg-white
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />
//             </a>

//             {/* LOOKBOOK */}

//             <a
//               href="#lookbook"
//               className="
//                 group
//                 relative
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//               "
//             >
//               Lookbook

//               <span
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[1px]
//                   w-0
//                   bg-white
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />
//             </a>

//             {/* OUR STORY */}

//             <a
//               href="#story"
//               className="
//                 group
//                 relative
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//               "
//             >
//               Our Story

//               <span
//                 className="
//                   absolute
//                   -bottom-2
//                   left-0
//                   h-[1px]
//                   w-0
//                   bg-white
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />
//             </a>

//             {/* MORE */}

//             <button
//               type="button"
//               className="
//                 flex
//                 items-center
//                 gap-1
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//               "
//             >
//               More

//               <ChevronDown
//                 size={13}
//               />
//             </button>
//           </nav>

//           {/* =================================================
//               RIGHT ACTIONS
//           ================================================== */}

//           <div
//             className="
//               ml-auto
//               flex
//               items-center
//               gap-6
//             "
//           >
//             {/* SEARCH */}

//             <button
//               type="button"
//               aria-label="Search"
//               className="
//                 transition-transform
//                 duration-200
//                 hover:scale-110
//               "
//             >
//               <Search
//                 size={20}
//                 strokeWidth={1.7}
//               />
//             </button>

//             {/* WISHLIST */}

//             <button
//               type="button"
//               aria-label="Wishlist"
//               className="
//                 relative
//                 transition-transform
//                 duration-200
//                 hover:scale-110
//               "
//             >
//               <Heart
//                 size={21}
//                 strokeWidth={1.7}
//               />
//             </button>

//             {/* CART */}

//             <button
//               type="button"
//               onClick={() =>
//                 dispatch(
//                   setCartOpen(true)
//                 )
//               }
//               aria-label="Cart"
//               className="
//                 relative
//                 transition-transform
//                 duration-200
//                 hover:scale-110
//               "
//             >
//               <ShoppingBag
//                 size={21}
//                 strokeWidth={1.7}
//               />

//               {cartCount > 0 && (
//                 <span
//                   className="
//                     absolute
//                     -right-3
//                     -top-3
//                     flex
//                     h-4
//                     min-w-4
//                     items-center
//                     justify-center
//                     bg-red-600
//                     px-1
//                     text-[8px]
//                     font-bold
//                   "
//                 >
//                   {cartCount}
//                 </span>
//               )}
//             </button>

//             {/* ACCOUNT */}

//             <button
//               type="button"
//               aria-label="Account"
//               className="
//                 transition-transform
//                 duration-200
//                 hover:scale-110
//               "
//             >
//               <UserRound
//                 size={21}
//                 strokeWidth={1.7}
//               />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* =================================================
//           MOBILE HEADER
//       ================================================== */}

//       <header
//         style={{
//           top: headerTop,
//         }}
//         className={`
//           fixed
//           left-0
//           z-[80]
//           w-full
//           text-white
//           transition-[background-color,box-shadow,top]
//           duration-500
//           lg:hidden
//           ${headerBackground}
//         `}
//       >
//         <div
//           className="
//             flex
//             h-[70px]
//             items-center
//             justify-between
//             px-5
//           "
//         >
//           {/* MENU */}

//           <button
//             type="button"
//             onClick={() =>
//               setMobileMenu(true)
//             }
//             aria-label="Open menu"
//           >
//             <Menu
//               size={24}
//               strokeWidth={1.7}
//             />
//           </button>

//           {/* LOGO */}

//           <a
//             href="/"
//             className="
//               font-display
//               text-[32px]
//               leading-none
//               tracking-[-0.08em]
//             "
//           >
//             KAGE
//           </a>

//           {/* CART */}

//           <button
//             type="button"
//             onClick={() =>
//               dispatch(
//                 setCartOpen(true)
//               )
//             }
//             className="relative"
//             aria-label="Cart"
//           >
//             <ShoppingBag
//               size={23}
//               strokeWidth={1.7}
//             />

//             {cartCount > 0 && (
//               <span
//                 className="
//                   absolute
//                   -right-2
//                   -top-2
//                   flex
//                   h-4
//                   min-w-4
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-red-600
//                   px-1
//                   text-[8px]
//                   font-bold
//                 "
//               >
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </div>
//       </header>

//       {/* =================================================
//           MOBILE MENU
//       ================================================== */}

//       <AnimatePresence>
//         {mobileMenu && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: "100%",
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             exit={{
//               opacity: 0,
//               x: "100%",
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [
//                 0.22,
//                 1,
//                 0.36,
//                 1,
//               ],
//             }}
//             className="
//               fixed
//               inset-0
//               z-[100]
//               bg-[#111]
//               text-white
//             "
//           >
//             {/* CLOSE */}

//             <button
//               type="button"
//               onClick={() =>
//                 setMobileMenu(false)
//               }
//               className="
//                 absolute
//                 right-5
//                 top-5
//               "
//               aria-label="Close menu"
//             >
//               <X size={27} />
//             </button>

//             {/* MENU CONTENT */}

//             <div
//               className="
//                 flex
//                 h-full
//                 flex-col
//                 justify-between
//                 px-6
//                 pb-8
//                 pt-28
//               "
//             >
//               <nav className="flex flex-col">
//                 {[
//                   "Drop",
//                   "Collection",
//                   "Lookbook",
//                   "Our Story",
//                   "Contact",
//                 ].map(
//                   (
//                     item,
//                     index
//                   ) => (
//                     <motion.a
//                       key={item}
//                       href={
//                         item === "Drop"
//                           ? "#shop"
//                           : item ===
//                               "Collection"
//                             ? "#collection"
//                             : item ===
//                                 "Lookbook"
//                               ? "#lookbook"
//                               : item ===
//                                   "Our Story"
//                                 ? "#story"
//                                 : "#"
//                       }
//                       onClick={() =>
//                         setMobileMenu(
//                           false
//                         )
//                       }
//                       initial={{
//                         opacity: 0,
//                         x: 30,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       transition={{
//                         delay:
//                           index *
//                           0.08,
//                       }}
//                       className="
//                         border-b
//                         border-white/10
//                         py-5
//                         font-display
//                         text-5xl
//                         uppercase
//                         tracking-[-0.04em]
//                       "
//                     >
//                       {item}
//                     </motion.a>
//                   )
//                 )}
//               </nav>

//               {/* FOOTER */}

//               <div
//                 className="
//                   border-t
//                   border-white/10
//                   pt-5
//                   text-[9px]
//                   uppercase
//                   tracking-[0.25em]
//                   text-white/50
//                 "
//               >
//                 KAGE® — ANIME STREETWEAR
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// } 



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

import {
  useAppDispatch,
  useAppSelector,
} from "../redux/hooks";

import {
  setCartOpen,
} from "../redux/cartSlice";

import CartDrawer from "./CartDrawer";


export default function Header() {
  /* =====================================================
     STATE
  ===================================================== */

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [heroFinished, setHeroFinished] =
    useState(false);

  const [
    announcementHeight,
    setAnnouncementHeight,
  ] = useState(0);

  const [moreOpen, setMoreOpen] =
    useState(false);

  const dispatch = useAppDispatch();


  /* =====================================================
     CART
  ===================================================== */

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  /* =====================================================
     ANNOUNCEMENT BAR HEIGHT
  ===================================================== */

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

    updateAnnouncementHeight();

    window.addEventListener(
      "resize",
      updateAnnouncementHeight
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateAnnouncementHeight
      );
    };
  }, []);


  /* =====================================================
     HERO / HEADER POSITION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById("hero");

      if (!hero) return;

      const heroRect =
        hero.getBoundingClientRect();

      const headerHeight =
        window.innerWidth >= 1024
          ? 78
          : 70;

      const finished =
        heroRect.bottom <=
        headerHeight;

      setHeroFinished(finished);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);


  /* =====================================================
     HEADER TOP
  ===================================================== */

  const headerTop =
    heroFinished
      ? 0
      : announcementHeight;


  /* =====================================================
     HEADER BACKGROUND
  ===================================================== */

  const headerBackground =
    heroFinished
      ? "bg-black shadow-[0_1px_0_rgba(255,255,255,0.08)]"
      : "bg-transparent";


  /* =====================================================
     CLOSE MOBILE MENU ON RESIZE
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  return (
    <>
      {/* =====================================================
          DESKTOP HEADER
      ===================================================== */}

      <header
        style={{
          top: headerTop,
        }}
        className={`
          fixed
          left-0
          z-[80]
          hidden
          w-full
          text-white
          transition-[background-color,box-shadow,top]
          duration-500
          lg:block
          ${headerBackground}
        `}
      >

        <div
          className="
            relative
            mx-auto
            flex
            h-[78px]
            max-w-[1500px]
            items-center
            px-8
            xl:px-10
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="/"
            className="
              font-display
              text-[34px]
              font-black
              leading-none
              tracking-[-0.08em]
            "
          >
            ZENJI
          </a>


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
              gap-9
              xl:gap-11
            "
          >

            {/* DROP */}

            <a
              href="#shop"
              className="
                group
                relative
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
              "
            >
              Drop

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-0
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>


            {/* COLLECTION */}

            <a
              href="#collection"
              className="
                group
                relative
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
              "
            >
              Collection

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-0
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>


            {/* LOOKBOOK */}

            <a
              href="#lookbook"
              className="
                group
                relative
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
              "
            >
              Lookbook

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-0
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>


            {/* OUR STORY */}

            <a
              href="#story"
              className="
                group
                relative
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
              "
            >
              Our Story

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[1px]
                  w-0
                  bg-white
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>


            {/* MORE */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setMoreOpen(
                    !moreOpen
                  )
                }
                className="
                  flex
                  items-center
                  gap-1
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                More

                <ChevronDown
                  size={13}
                  strokeWidth={1.7}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      moreOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>


              {/* MORE DROPDOWN */}

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-[34px]
                      w-[170px]
                      -translate-x-1/2
                      border
                      border-white/10
                      bg-black
                      p-2
                      shadow-2xl
                    "
                  >

                    <a
                      href="#faq"
                      onClick={() =>
                        setMoreOpen(false)
                      }
                      className="
                        block
                        px-3
                        py-3
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-white/70
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      FAQ
                    </a>

                    <a
                      href="#contact"
                      onClick={() =>
                        setMoreOpen(false)
                      }
                      className="
                        block
                        px-3
                        py-3
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-white/70
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      Contact
                    </a>

                    <a
                      href="#reviews"
                      onClick={() =>
                        setMoreOpen(false)
                      }
                      className="
                        block
                        px-3
                        py-3
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-white/70
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      Reviews
                    </a>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

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

            <button
              type="button"
              aria-label="Wishlist"
              className="
                transition-transform
                duration-200
                hover:scale-110
              "
            >
              <Heart
                size={21}
                strokeWidth={1.7}
              />
            </button>


            {/* CART */}

            <button
              type="button"
              onClick={() =>
                dispatch(
                  setCartOpen(true)
                )
              }
              aria-label="Open cart"
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
                    font-mono
                    text-[8px]
                    font-bold
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


      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header
        style={{
          top: headerTop,
        }}
        className={`
          fixed
          left-0
          z-[80]
          w-full
          text-white
          transition-[background-color,box-shadow,top]
          duration-500
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

          <a
            href="/"
            className="
              font-display
              text-[30px]
              font-black
              leading-none
              tracking-[-0.08em]
            "
          >
            ZENJI
          </a>


          {/* CART */}

          <button
            type="button"
            onClick={() =>
              dispatch(
                setCartOpen(true)
              )
            }
            aria-label="Open cart"
            className="
              relative
              transition-transform
              duration-200
              hover:scale-110
            "
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
                  font-mono
                  text-[8px]
                  font-bold
                "
              >
                {cartCount}
              </span>
            )}

          </button>

        </div>

      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

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
              z-[150]
              bg-black
              text-white
            "
          >

            {/* =================================================
                CLOSE
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMobileMenu(false)
              }
              aria-label="Close menu"
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                border
                border-white/15
              "
            >
              <X
                size={23}
                strokeWidth={1.5}
              />
            </button>


            {/* =================================================
                MENU CONTENT
            ================================================= */}

            <div
              className="
                flex
                h-full
                flex-col
                justify-between
                px-6
                pb-8
                pt-24
              "
            >

              {/* NAVIGATION */}

              <nav className="flex flex-col">

                {[
                  {
                    name: "Drop",
                    href: "#shop",
                  },
                  {
                    name: "Collection",
                    href: "#collection",
                  },
                  {
                    name: "Lookbook",
                    href: "#lookbook",
                  },
                  {
                    name: "Our Story",
                    href: "#story",
                  },
                  {
                    name: "Contact",
                    href: "#contact",
                  },
                ].map(
                  (item, index) => (

                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        setMobileMenu(
                          false
                        )
                      }
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.07,
                        duration: 0.35,
                      }}
                      className="
                        border-b
                        border-white/10
                        py-5
                        font-display
                        text-[43px]
                        font-black
                        uppercase
                        leading-none
                        tracking-[-0.04em]
                      "
                    >
                      {item.name}
                    </motion.a>

                  )
                )}

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
                  tracking-[0.2em]
                  text-white/40
                "
              >
                ZENJI® — ANIME STREETWEAR
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>


      {/* =====================================================
          CART DRAWER
      ===================================================== */}

      <CartDrawer />

    </>
  );
}
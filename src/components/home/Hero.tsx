 
"use client";

import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

const FRAME_COUNT = 40;

const getFrameUrl = (index: number) => {
  const frame = String(index).padStart(3, "0");

  return `https://zenji.shop/hero-stage/frames-m-v2/f-${frame}.webp`;
};

export default function Hero() {
  const heroRef =
    useRef<HTMLDivElement>(null);

  const imageRef =
    useRef<HTMLImageElement>(null);

  const framesRef =
    useRef<HTMLImageElement[]>([]);

  const currentFrameRef =
    useRef(0);

  const [loadedFrames, setLoadedFrames] =
    useState(1);

  const [currentFrame, setCurrentFrame] =
    useState(0);

  /*
   * ==========================================
   * SCROLL PROGRESS
   * ==========================================
   */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: [
      "start start",
      "end end",
    ],
  });

  /*
   * ==========================================
   * IMAGE SCALE
   * ==========================================
   */

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.005, 1.015]
  );

  /*
   * ==========================================
   * IMAGE POSITION
   * ==========================================
   */

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-0.2%", "-0.7%"]
  );

  /*
   * ==========================================
   * MAIN CONTENT OPACITY
   *
   * Content appears initially.
   *
   * 0%   → 100%
   * 18%  → 70%
   * 35%  → 0%
   *
   * IMPORTANT:
   * After 35% it NEVER comes back.
   * ==========================================
   */

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.35, 1],
    [1, 1, 0.65, 0, 0]
  );

  /*
   * ==========================================
   * MAIN CONTENT Y
   *
   * Content moves upward while disappearing.
   * ==========================================
   */

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["0%", "-45%", "-45%"]
  );

  /*
   * ==========================================
   * SHOP BUTTON
   *
   * Hidden initially.
   *
   * Appears after main content disappears.
   *
   * 0%   → hidden
   * 38%  → hidden
   * 45%  → visible
   * 100% → remains visible
   * ==========================================
   */

  const shopButtonOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.34, 0.42, 0.48, 1],
      [0, 0, 0.3, 1, 1]
    );

  const shopButtonY =
    useTransform(
      scrollYProgress,
      [0.34, 0.48, 1],
      ["20px", "0px", "0px"]
    );

  

  /*
   * ==========================================
   * PRELOAD ALL FRAMES
   * ==========================================
   */

  useEffect(() => {
    let cancelled = false;

    const images: HTMLImageElement[] =
      [];

    for (
      let i = 0;
      i < FRAME_COUNT;
      i++
    ) {
      const img = new Image();

      img.decoding = "async";

      img.src = getFrameUrl(i);

      img.onload = () => {
        if (cancelled) return;

        setLoadedFrames((previous) =>
          Math.max(
            previous,
            i + 1
          )
        );

        /*
         * If the user has already reached
         * this frame before it loaded,
         * immediately display it.
         */

        if (
          currentFrameRef.current === i &&
          imageRef.current
        ) {
          imageRef.current.src =
            img.src;
        }
      };

      images[i] = img;
    }

    framesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * ==========================================
   * SCROLL → FRAME
   *
   * f-000 → f-039
   * ==========================================
   */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      const frameIndex =
        Math.min(
          FRAME_COUNT - 1,
          Math.max(
            0,
            Math.round(
              progress *
                (FRAME_COUNT - 1)
            )
          )
        );

      if (
        frameIndex ===
        currentFrameRef.current
      ) {
        return;
      }

      currentFrameRef.current =
        frameIndex;

      setCurrentFrame(frameIndex);

      const image =
        framesRef.current[
          frameIndex
        ];

      if (
        image &&
        image.complete &&
        image.naturalWidth > 0 &&
        imageRef.current
      ) {
        imageRef.current.src =
          image.src;
      }
    }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="
        relative
        h-[400vh]
        bg-black
      "
    >
      {/* =================================================
          STICKY HERO VIEWPORT
      ================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
          bg-black
        "
      >
        {/* =================================================
            HERO IMAGE
        ================================================== */}

        <motion.img
          ref={imageRef}
          src={getFrameUrl(0)}
          alt="Anime streetwear model walking"
          draggable={false}
          style={{
            scale: imageScale,
            y: imageY,
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            select-none
            object-cover
            object-center
            will-change-transform

            sm:object-[center_42%]

            lg:object-[center_45%]
          "
        />

        {/* =================================================
            SOFT DARK OVERLAY
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/10
          "
        />

        {/* =================================================
            LEFT GRADIENT
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/15
            to-transparent
          "
        />

        {/* =================================================
            BOTTOM GRADIENT
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[50%]
            bg-gradient-to-t
            from-black/75
            via-black/20
            to-transparent
          "
        />

        {/* =================================================
            MAIN HERO CONTENT
        ================================================== */}

        <motion.div
          className="
            absolute
            inset-0
            z-10
            flex
            items-end
          "
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
        >
          <div
            className="
              w-full
              px-6
              pb-20
              sm:px-10
              sm:pb-24
              lg:px-20
              lg:pb-24
            "
          >
            {/* =============================================
                EYEBROW
            ============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-red-600
                  shadow-[0_0_12px_rgba(220,38,38,0.8)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-red-500
                  sm:text-xs
                "
              >
                THE_ORIGIN_DROP // LIVE
              </span>
            </motion.div>

            {/* =============================================
                TITLE
            ============================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                max-w-[1000px]
                font-display
                text-[10vw]
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                text-black
                sm:text-[14vw]
                lg:text-[5vw]
              "
            >
              WEAR YOUR
              <br />

              <span className="text-black">
                STORY
              </span>
            </motion.h1>

            {/* =============================================
                DESCRIPTION
            ============================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-md
                text-[10px]
                font-medium
                uppercase
                leading-5
                tracking-[0.18em]
                text-white/70
                sm:text-xs
                sm:leading-6
              "
            >
              Anime-inspired streetwear
              built for those who write
              their own path.
            </motion.p>

            {/* =============================================
                ORIGINAL RED BUTTON
            ============================================== */}

            <motion.a
              href="/drop"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-5
                bg-red-600
                px-7
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              SHOP THE DROP

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              />
            </motion.a>
          </div>
        </motion.div>

        {/* =================================================
            SECONDARY BLACK SHOP BUTTON
          
         
        ================================================== */}

        <motion.a
          href="/drop"
          style={{
            opacity: shopButtonOpacity,
            y: shopButtonY,
          }}
          className="
            group
            absolute
            bottom-20
            left-6
            z-30
            inline-flex
            items-center
            gap-5
            bg-black
            px-7
            py-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white
            shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
            transition-all
            duration-300
            hover:bg-white
            hover:text-black

            sm:left-10
            lg:left-20
            lg:bottom-24
          "
        >
          SHOP THE DROP

          <ArrowRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          />
        </motion.a>

       

       
        {/* =================================================
            LOADING STATUS
        ================================================== */}

        {loadedFrames <
          FRAME_COUNT && (
          <div
            className="
              absolute
              right-6
              top-24
              z-30
              hidden
              font-mono
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/40
              sm:block
            "
          >
            Loading sequence{" "}
            {loadedFrames}/
            {FRAME_COUNT}
          </div>
        )}
      </div>
    </section>
  );
}
 

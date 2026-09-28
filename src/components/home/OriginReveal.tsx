 
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VIDEO_URL =
  "https://res.cloudinary.com/diqbikizp/video/upload/q_auto/zenji/videos/drop-reveal.mp4";

export default function OriginReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * ==========================================
   * THE
   * Starts in the center.
   * Moves completely outside LEFT.
   * ==========================================
   */
  const theX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.35, 0.55],
    ["0vw", "-10vw", "-70vw", "-130vw"]
  );

  /*
   * ==========================================
   * ORIGIN
   * Starts in the center.
   * Moves completely outside RIGHT.
   * ==========================================
   */
  const originX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.35, 0.55],
    ["0vw", "10vw", "70vw", "130vw"]
  );

  /*
   * ==========================================
   * TEXT OPACITY
   *
   * Text remains visible initially.
   * Then completely disappears.
   * ==========================================
   */
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5, 0.6],
    [1, 1, 0.4, 0]
  );

  /*
   * ==========================================
   * VIDEO OPACITY
   *
   * Video gradually appears as text leaves.
   * ==========================================
   */
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5],
    [0, 0.2, 0.75, 1]
  );

  /*
   * Slight video scale animation.
   */
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0.96, 0.98, 1, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#030303]"
    >
      {/* ==========================================
          STICKY VIEWPORT
      ========================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#030303]">

        {/* Background */}
        <div className="absolute inset-0 bg-[#030303]" />

        {/* ==========================================
            TOP LABEL
        ========================================== */}
        <div
          className="
            absolute
            left-[6vw]
            top-[5vh]
            z-40
            flex
            items-center
            gap-3
            font-mono
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
        >
          <span className="text-red-500">
            THE DROP
          </span>

          <span className="text-white/30">
            //
          </span>

          <span className="text-white/40">
            ORIGIN COLLECTION
          </span>
        </div>

        {/* ==========================================
            VIDEO
            ALWAYS CENTER
        ========================================== */}
        <motion.div
          style={{
            opacity: videoOpacity,
          }}
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            px-[4vw]
            py-[10vh]
          "
        >
          <motion.div
            style={{
              scale: videoScale,
            }}
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
              overflow-hidden
            "
          >
            <video
              src={VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="
                h-full
                w-full
                object-contain
              "
            />
          </motion.div>
        </motion.div>

        {/* ==========================================
            HUGE TITLE LAYER
        ========================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            overflow-hidden
          "
        >
          {/* ========================================
              THE → LEFT
          ======================================== */}
          <motion.div
            style={{
              x: theX,
              opacity: textOpacity,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-full
              -translate-y-1/2
              whitespace-nowrap
            "
          >
            <h2
              className="
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.07em]
                text-white
                text-[15vw]
                sm:text-[12vw]
                md:text-[10vw]
              "
            >
              THE
            </h2>
          </motion.div>

          {/* ========================================
              ORIGIN → RIGHT
          ======================================== */}
          <motion.div
            style={{
              x: originX,
              opacity: textOpacity,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-y-1/2
              whitespace-nowrap
            "
          >
            <h2
              className="
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.07em]
                text-white
                text-[15vw]
                sm:text-[12vw]
                md:text-[10vw]
              "
            >
              ORIGIN
            </h2>
          </motion.div>
        </div>

        {/* ==========================================
            BOTTOM INFO
        ========================================== */}
        <div
          className="
            absolute
            bottom-7
            left-[6vw]
            right-[6vw]
            z-40
            flex
            items-center
            justify-between
            font-mono
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/35
          "
        >
          <span>
            SCROLL TO ENTER
          </span>

          <span>
            01 / 04
          </span>
        </div>
      </div>
    </section>
  );
}
 

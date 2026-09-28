"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import type { StaticImageData } from "next/image";

import image1 from "../../public/assest/Warrior-spirit-graphic.avif";
import image2 from "../../public/assest/Blue-flame-graphic.avif";
import image3 from "../../public/assest/Demon-blood-graphic.avif";
import image4 from "../../public/assest/Will-of-the-sun-4.avif";

/* =====================================================
   IMAGES
===================================================== */

const images: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
];

/* =====================================================
   SINGLE IMAGE
===================================================== */

interface SaleImageProps {
  image: StaticImageData;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function SaleImage({
  image,
  index,
  total,
  scrollYProgress,
}: SaleImageProps) {
  /*
   * Each image has its own scroll range.
   *
   * 4 images:
   *
   * IMAGE 1 → already visible
   * IMAGE 2 → 25%
   * IMAGE 3 → 50%
   * IMAGE 4 → 75%
   */

  const start = index / total;
  const end = (index + 1) / total;

  /* =================================================
     Y POSITION
  ================================================= */

  let y;

  if (index === 0) {
    /*
     * IMAGE 1 NEVER MOVES.
     *
     * It stays underneath all other images.
     */

    y = useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", "0%"]
    );
  } else {
    /*
     * Other images:
     *
     * Start below screen
     * ↓
     * Move to final position
     * ↓
     * STAY THERE until section ends
     */

    y = useTransform(
      scrollYProgress,
      [
        0,
        start,
        start + (end - start) * 0.75,
        1,
      ],
      [
        "115%",
        "115%",
        "0%",
        "0%",
      ]
    );
  }

  /* =================================================
     SCALE
  ================================================= */

  let scale;

  if (index === 0) {
    scale = useTransform(
      scrollYProgress,
      [0, 1],
      [1, 1]
    );
  } else {
    scale = useTransform(
      scrollYProgress,
      [
        start,
        start + (end - start) * 0.75,
        1,
      ],
      [
        0.94,
        1,
        1,
      ]
    );
  }

  /* =================================================
     ROTATION
  ================================================= */

  let rotate;

  if (index === 0) {
    rotate = useTransform(
      scrollYProgress,
      [0, 1],
      [0, 0]
    );
  } else {
    rotate = useTransform(
      scrollYProgress,
      [
        start,
        start + (end - start) * 0.75,
        1,
      ],
      [
        index % 2 === 0 ? 1.5 : -1.5,
        0,
        0,
      ]
    );
  }

  /* =================================================
     OPACITY
  ================================================= */

  let opacity;

  if (index === 0) {
    /*
     * IMAGE 1 ALWAYS VISIBLE.
     */

    opacity = useTransform(
      scrollYProgress,
      [0, 1],
      [1, 1]
    );
  } else {
    /*
     * New image fades in very quickly,
     * then stays visible until the end.
     */

    opacity = useTransform(
      scrollYProgress,
      [
        start,
        start + 0.025,
        1,
      ],
      [
        0,
        1,
        1,
      ]
    );
  }

  return (
    <motion.div
      style={{
        y,
        scale,
        rotate,
        opacity,

        /*
         * VERY IMPORTANT
         *
         * Later image = higher z-index.
         *
         * Image 4 will therefore stay
         * above Image 3, Image 2 and Image 1.
         */

        zIndex: index + 1,
      }}
      className="
        absolute
        inset-0

        overflow-hidden

        border
        border-black

        bg-white

        shadow-[0_15px_45px_rgba(0,0,0,0.10)]

        will-change-transform
      "
    >
      <Image
        src={image}
        alt={`Sale product ${index + 1}`}
        fill
        priority={index === 0}
        sizes="
          (max-width: 640px) 90vw,
          (max-width: 1024px) 70vw,
          58vw
        "
        className="object-cover"
      />
    </motion.div>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function ScrollImageStack() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    /*
     * Start animation when section reaches viewport top.
     *
     * End when the entire section has passed.
     */

    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[500vh]
        w-full
        bg-white
      "
    >
      {/* =================================================
          STICKY VIEWPORT
      ================================================= */}

      <div
        className="
          sticky
          top-0

          flex
          h-screen
          w-full

          items-start
          justify-center

          overflow-hidden

          bg-white
        "
      >

        {/* =================================================
            TOP LEFT CONTENT
        ================================================= */}

        <div
          className="
            absolute
            left-[5vw]
            top-[4vh]

            z-[100]
          "
        >

          {/* Small Label */}

          <div
            className="
              mb-3

              font-mono
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]

              text-black/45

              sm:text-[9px]
            "
          >
            LIMITED SALE

            <span className="mx-2 text-black/25">
              //
            </span>

            WHILE STOCKS LAST
          </div>


          {/* SALE */}

          <h2
            className="
              font-black
              uppercase

              leading-[0.72]

              tracking-[-0.09em]

              text-black

              text-[7vw]

              sm:text-[10vw]

              md:text-[10vw]

              lg:text-[4vw]
            "
          >
            SALE
          </h2>

        </div>


        {/* =================================================
            CENTER IMAGE STACK
        ================================================= */}

        <div
          className="
            absolute

            left-1/2
            top-[26vh]

            w-[90vw]

            max-w-[900px]

            -translate-x-1/2

            aspect-[4/3]

            sm:top-[25vh]
            sm:w-[78vw]

            md:top-[24vh]
            md:w-[65vw]

            lg:top-[23vh]
            lg:w-[58vw]

            xl:w-[54vw]
          "
        >

          {/* =================================================
              IMAGE STACK
          ================================================= */}

          <div
            className="
              relative

              h-full
              w-full
            "
          >

            {images.map((image, index) => (
              <SaleImage
                key={image.src}
                image={image}
                index={index}
                total={images.length}
                scrollYProgress={scrollYProgress}
              />
            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM INFO
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute

            bottom-6

            left-[5vw]
            right-[5vw]

            z-[100]

            flex
            items-center
            justify-between

            font-mono

            text-[8px]

            uppercase

            tracking-[0.25em]

            text-black/35

            sm:text-[9px]
          "
        >

          <span>
            SCROLL TO EXPLORE
          </span>

          <span>
            04 PRODUCTS
          </span>

        </div>

      </div>
    </section>
  );
}
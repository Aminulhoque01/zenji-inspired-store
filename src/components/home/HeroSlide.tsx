"use client";

import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

interface HeroSlideProps {
  slide: {
    id: number;
    image: string;
  };

  progress: MotionValue<number>;

  index: number;

  total: number;
}

export default function HeroSlide({
  slide,
  progress,
  index,
  total,
}: HeroSlideProps) {

  const start = index / total;

  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.08),
      start,
      end - 0.08,
      Math.min(1, end),
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [1.08, 1]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0"
    >
      <motion.img
        src={slide.image}
        alt=""
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
    </motion.div>
  );
}
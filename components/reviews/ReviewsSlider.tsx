"use client";

import { useState } from "react";
import { PanInfo } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { clientReviews } from "@/lib/reviews";

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setCurrent(
      (prev) => (prev - 1 + clientReviews.length) % clientReviews.length
    );
  };

  const handleDragEnd = (
  _: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo
) => {
  if (info.offset.x < -80) {
    nextReview();
  }

  if (info.offset.x > 80) {
    prevReview();
  }
};

  const review = clientReviews[current];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b98c]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">

        {/* Heading */}
<div
  className="
    text-center
    mb-10
    h-[170px]
    flex
    flex-col
    justify-center
  "
>          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs">
            Client Reviews
          </p>

          <h2
  className="
    mt-3
    font-[family:var(--font-heading)]
    font-semibold
    leading-tight
    text-[28px]
sm:text-[36px]
md:text-[44px]
lg:text-[52px]
xl:text-[58px]
whitespace-nowrap
  "
>
  <span className="text-white">
    What Our{" "}
  </span>

  <span className="text-[#d6b98c]">
    Clients Say
  </span>
</h2>

        </div>

        {/* Review Card */}

        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
  key={current}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={handleDragEnd}
  initial={{
    opacity: 0,
    scale: 0.98,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  exit={{
    opacity: 0,
    scale: 0.98,
  }}
  transition={{ duration: 0.45 }}
              className="
  w-full
  max-w-[900px]
  mx-auto

  h-[500px]
  sm:h-[470px]
  md:h-[440px]
  lg:h-[450px]

  rounded-[24px]
  border
  border-white/10
  bg-[#111111]

  px-5
  sm:px-8
  md:px-10

  py-8
  sm:py-9

  shadow-[0_20px_60px_rgba(0,0,0,0.35)]

  flex
  flex-col
  items-center
"
            >

             {/* Name */}

              <div className="text-center mt-6">

                <h3 className="text-white text-xl sm:text-2xl font-[family:var(--font-heading)]">

                  {review.name}

                </h3>

                <p className="mt-2 text-gray-400 text-sm sm:text-base">

                  {review.project} • {review.location}

                

                

                </p>

              </div>

              {/* Stars */}

              <div className="mt-4 text-center text-[#d6b98c] text-xl sm:text-2xl">
                {"★".repeat(review.rating)}
              </div>

              {/* Fixed Review Area */}

              <div
  className="
  mt-5
  h-[230px]
  sm:h-[210px]
  md:h-[180px]

  w-full
  max-w-[720px]

  flex
  items-start
  justify-center
  mx-auto
"
>

                <p
                  className="
  mx-auto
  text-center
  text-gray-300
  text-[15px]
  sm:text-base
  md:text-[17px]
  lg:text-lg
  leading-7
"
                >

                  {review.review}

                </p>

              </div>

              

            </motion.div>

          </AnimatePresence>

          {/* Left Arrow */}

          <button
            onClick={prevReview}
            className="
              hidden
              lg:flex
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-14
              h-10
              w-10
              rounded-full
              border
              border-[#d6b98c]/60
              text-[#d6b98c]
              items-center
              justify-center
              hover:bg-[#d6b98c]
              hover:text-black
              transition-all
            "
          >

            ←

          </button>

          {/* Right Arrow */}

          <button
            onClick={nextReview}
            className="
              hidden
              lg:flex
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-14
              h-10
              w-10
              rounded-full
              border
              border-[#d6b98c]/60
              text-[#d6b98c]
              items-center
              justify-center
              hover:bg-[#d6b98c]
              hover:text-black
              transition-all
            "
          >

            →

          </button>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-3 mt-8">

          {clientReviews.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-3 bg-[#d6b98c]"
                  : "w-3 h-3 bg-white/20"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
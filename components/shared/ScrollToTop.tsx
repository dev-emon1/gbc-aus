"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

import { AnimatePresence, motion, useScroll } from "framer-motion";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setProgress(value);

      setVisible(window.scrollY > 350);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const radius = 26;

  const circumference = 2 * Math.PI * radius;

  const dashOffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-6
            right-6
            z-[999]
            h-16
            w-16
            rounded-full
          "
        >
          {/* Progress Ring */}

          <svg
            className="-rotate-90 absolute inset-0 h-full w-full"
            viewBox="0 0 60 60"
          >
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="rgba(216,77,149,.15)"
              strokeWidth="3"
              fill="none"
            />

            <motion.circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#D84D95"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
            />
          </svg>

          {/* Button */}

          <div
            className="
              absolute
              inset-[6px]
              flex
              items-center
              justify-center
              rounded-full
              bg-[#D84D95]
              text-white
              shadow-[0_18px_45px_rgba(216,77,149,.35)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-[#c83d87]
            "
          >
            <ArrowUp className="h-5 w-5" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

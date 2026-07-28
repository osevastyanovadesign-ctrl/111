import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];


interface IntroOverlayProps {
  onComplete?: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {

  const skipIntro =
    sessionStorage.getItem("returnFromProject") === "true";

  const [visible, setVisible] = useState(!skipIntro);
  const [textVisible, setTextVisible] = useState(!skipIntro);

  useEffect(() => {

    if (skipIntro) {
      sessionStorage.removeItem("returnFromProject");
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
    };

  }, [skipIntro, onComplete]);
  useEffect(() => {

  if (skipIntro) {
    return;
  }

  const t1 = setTimeout(() => setTextVisible(true), 200);

  const t2 = setTimeout(() => {
    setVisible(false);

    setTimeout(() => {
      document.body.style.overflow = "";
      onComplete?.();
    }, 950);

  }, 2700);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };

 }, [onComplete, skipIntro]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[200] flex overflow-hidden pointer-events-none">
          {/* Left curtain */}
          <motion.div
            className="w-[51%] h-full"
            style={{ backgroundColor: "#F0EDE8" }}
            initial={{ x: 0 }}
            exit={{
              x: "-100%",
              transition: {
                duration: 0.95,
                ease: CURTAIN_EASE,
              },
            }}
          />

          {/* Right curtain */}
          <motion.div
            className="w-[51%] h-full"
            style={{ backgroundColor: "#1A1A18" }}
            initial={{ x: 0 }}
            exit={{
              x: "100%",
              transition: {
                duration: 1.25,
                ease: CURTAIN_EASE,
              },
            }}
          />

          {/* Centered text */}
          <div
            className="
            absolute inset-0
            flex flex-col
            items-center
            justify-center
            z-10
            select-none
            gap-8
          "
          >
            {/* Headline */}
            <motion.h1
              className="
                font-serif
                text-[13.5vw]
                md:text-[11vw]
                leading-[1.15]
                tracking-[-0.04em]
                whitespace-nowrap
                pb-[0.08em]
              "
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1A1A18 50%, #F0EDE8 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={textVisible ? { opacity: 1, y: 0 } : {}}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              Vladimir Sergeev
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="w-24 h-px"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1A1A18 50%, #F0EDE8 50%)",
              }}
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={
                textVisible
                  ? {
                      scaleX: 1,
                      opacity: 1,
                    }
                  : {}
              }
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            />

            {/* Subtitle */}
            <motion.p
              className="
                font-mono
                text-[0.48rem]
                md:text-base
                uppercase
                tracking-[0.28em]
              "
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1A1A18 50%, #F0EDE8 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0 }}
              animate={textVisible ? { opacity: 1 } : {}}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
            >
              Interior Design · Architecture
            </motion.p>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

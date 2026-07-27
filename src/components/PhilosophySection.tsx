import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import philosophyBg from "@assets/generated_images/philosophy-bg.jpg";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATEMENTS = [
  "Пространство начинается там,\nгде заканчивается лишнее.",
  "Воздух — не пустота, а полноценный материал.",
  "Свет, пропорция и ритм формируют основу пространства.",
  "Каждый проект — поиск точного баланса\nмежду человеком и пространством.",
];

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen parallax photo */}
      <motion.div
        className="absolute inset-[-10%] w-[120%] h-[120%]"
        style={{ y: bgY }}
      >
        <img
          src={philosophyBg}
          alt="Interior philosophy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-24 py-32">
        <motion.p
          className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Философия
        </motion.p>

        <div className="flex flex-col gap-16 md:gap-20">
          {STATEMENTS.map((text, i) => (
            <motion.div
              key={i}
              className="flex gap-8 md:gap-12 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.08 }}
            >
              {/* Index */}
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-white/25 mt-2 shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Statement */}
              <p
                className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.2] text-white/90"
                style={{ whiteSpace: "pre-line" }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

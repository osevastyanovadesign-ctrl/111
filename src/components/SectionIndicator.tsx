import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Главная", num: "01" },
  { id: "philosophy", label: "Философия", num: "02" },
  { id: "projects", label: "Живой архив", num: "03" },
  { id: "expertise", label: "Направления", num: "04" },
  { id: "testimonials", label: "Отзывы", num: "05" },
  { id: "contact", label: "Контакт", num: "06" },
];

export default function SectionIndicator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const updateActive = () => {
      const trigger = window.innerHeight * 0.35;

      let current = active;

      SECTIONS.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= trigger && rect.bottom > trigger) {
          current = idx;
        }
      });

      setActive(current);
    };

    updateActive();

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [active]);

  const current = SECTIONS[active];

  return (
    <div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Dots track */}
      <div className="relative flex flex-col items-center gap-0">
        {/* Track line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-white/20" />

        {SECTIONS.map((sec, idx) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={sec.label}
            className="relative flex items-center justify-center w-6 h-6 group"
          >
            <motion.div
              className="rounded-full bg-white"
              animate={{
                width:   idx === active ? 7 : 3,
                height:  idx === active ? 7 : 3,
                opacity: idx === active ? 1 : 0.35,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Tooltip on hover */}
            <span className="absolute left-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.15em] text-white">
              {sec.num} / {sec.label}
            </span>
          </a>
        ))}
      </div>

      {/* Current number, rotated */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <div className="w-px h-5 bg-white/20" />
        <AnimatePresence mode="wait">
          <motion.span
            key={current.num}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            {current.num}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

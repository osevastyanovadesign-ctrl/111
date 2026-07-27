import { motion } from "framer-motion";

const TEXT =
  "Vladimir Sergeev · Interior Design · Architecture · Private Residences · Moscow · Novomoskovsk · Tula · ";

export default function MarqueeTicker({ dark = false }: { dark?: boolean }) {
  const repeated = TEXT.repeat(4);

  return (
    <div
      className={`
        w-full
        overflow-hidden
        py-5
        border-y
        ${
          dark
            ? "border-white/10 bg-[#171715] text-white"
            : "border-black/10 bg-[#F5F3EF] text-black"
        }
      `}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 240, ease: "linear", repeat: Infinity }}
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] opacity-50 pr-0">
            {repeated}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] opacity-50">
            {repeated}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

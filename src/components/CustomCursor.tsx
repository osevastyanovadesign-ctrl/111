import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const cx = useSpring(mx, { stiffness: 200, damping: 28, mass: 0.5 });
  const cy = useSpring(my, { stiffness: 200, damping: 28, mass: 0.5 });

  // Dot follows faster
  const dx = useSpring(mx, { stiffness: 600, damping: 30, mass: 0.2 });
  const dy = useSpring(my, { stiffness: 600, damping: 30, mass: 0.2 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  useEffect(() => {
    const links = document.querySelectorAll("a, button, [data-cursor-hover]");
    const grow = () => document.documentElement.setAttribute("data-cursor", "hover");
    const shrink = () => document.documentElement.removeAttribute("data-cursor");
    links.forEach(el => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => links.forEach(el => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
  }, []);

  return (
    <>
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: cx, y: cy, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: dx, y: dy, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}

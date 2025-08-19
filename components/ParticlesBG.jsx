import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParticlesBG() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const count = 60; // global background: subtle and performant
    const newDrops = Array.from({ length: count }).map((_, i) => {
      const depth = Math.random(); // 0 (far) -> 1 (near)
      const size = 2 + depth * 4; // 2-6px
      // Slightly closer start range so they enter view quicker
      const startY = -10 - Math.random() * 80; // -10% to -90%
      // Prefill: ~50% start already near/inside viewport for immediate visibility
      const prefill = Math.random() < 0.5;
      const initialTop = prefill ? -5 + Math.random() * 35 : startY; // -5% to 30% or above
      return {
        id: i,
        depth,
        left: Math.random() * 100, // vw percentage
        size,
        startY,
        initialTop,
        // Reduce delay so first particles appear sooner, // 0-1.2s
        duration: 16 + (1 - depth) * 10, // 16-26s, farther = slower
        opacity: 0.2 + depth * 0.5, // .2-.7
        drift: (depth - 0.5) * 10, // -4vw .. +4vw
      };
    });
    setDrops(newDrops);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      {drops.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}vw`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            top: `${d.initialTop}%`,
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)",
            boxShadow: "0 0 8px rgba(255,255,255,0.25)",
          }}
          initial={{ top: `${d.initialTop}%`, left: `${d.left}vw` }}
          animate={{ top: "110%", left: `${d.left + d.drift}vw` }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParticlesBG() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const count = 60; // global background: subtle and performant
    const newDrops = Array.from({ length: count }).map((_, i) => {
      const depth = Math.random(); // 0 (far) -> 1 (near)
      const size = 2 + depth * 4; // 2-6px
      return {
        id: i,
        depth,
        left: Math.random() * 100, // vw percentage
        size,
        startY: -20 - Math.random() * 100, // start between -20% and -120%
        delay: Math.random() * 4, // 0-4s
        duration: 16 + (1 - depth) * 10, // 16-26s, farther = slower
        opacity: 0.2 + depth * 0.5, // .2-.7
        drift: (depth - 0.5) * 8, // -4vw .. +4vw
      };
    });
    setDrops(newDrops);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      {drops.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.left}vw`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            top: `${d.startY}%`,
            background:
              "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)",
            boxShadow: "0 0 8px rgba(255,255,255,0.25)",
          }}
          initial={{ top: `${d.startY}%`, left: `${d.left}vw` }}
          animate={{ top: "110%", left: `${d.left + d.drift}vw` }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "linear" }}
        />)
      )}
    </div>
  );
}

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const controls = useAnimation();
  const [drops, setDrops] = useState([]);
  const [hovered, setHovered] = useState(null);
  const nav = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 40, damping: 18 },
    });
  }, [controls]);

  useEffect(() => {
    const count = 50; // fewer dots (slower scene)
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
        duration: 14 + (1 - depth) * 10, // 14-24s, farther = slower
        opacity: 0.25 + depth * 0.55, // .25-.8
        drift: (depth - 0.5) * 6,
      };
    });
    setDrops(newDrops);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-screen w-screen overflow-hidden bg-[#0D0F10] text-white ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
    >
      {/* Rain particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
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
              // spherical highlight for 3D look
              background:
                "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)",
              boxShadow: "0 0 8px rgba(255,255,255,0.25)",
            }}
            initial={{ top: `${d.startY}%`, left: `${d.left}vw` }}
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

      {/* Content grid */}
      <div className="relative z-20 mx-auto max-w-6xl h-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left copy */}
        <div>
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="leading-[0.95]"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 60, damping: 14 },
                },
              }}
              className="block text-[48px] sm:text-[64px] md:text-[78px] font-extrabold  text-[#FF0000] tracking-tight"
            >
              MOBILE APP
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 60,
                    damping: 14,
                    delay: 0.05,
                  },
                },
              }}
              className="relative block text-[48px] text-[rgba(255,255,255,1)] sm:text-[64px] md:text-[78px] font-extrabold tracking-tight ml-2 sm:ml-4 md:ml-6"
            >
              DEVELOPER
            </motion.span>
          </motion.h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/70">
            Hi! I'm{" "}
            <span className="text-[#fff] font-extrabold text-[20px]">
              Elnatan
            </span>
            . A creative Mobile App Developer focused on performant, scalable
            and delightful mobile experiences.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block px-6 py-3  bg-[#FF0000] text-white font-semibold hover:brightness-95 transition"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-right rotary nav */}
      <div className="hidden md:flex flex-col gap-3 absolute right-6 bottom-6 z-20 items-stretch">
        {nav.map((item, i) => {
          const isFocus = hovered === i;
          const isDimmed = hovered !== null && hovered !== i;
          const animate = isFocus
            ? { scale: 1.08, opacity: 1, filter: "blur(0px)" }
            : isDimmed
            ? { scale: 0.9, opacity: 0.6, filter: "blur(2px)" }
            : { scale: 1, opacity: 0.85, filter: "blur(0px)" };
          return (
            <motion.a
              key={item.label}
              href={item.href}
              initial={false}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              animate={animate}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden px-5 py-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 backdrop-blur-[2px] min-w-[160px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF0000]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm tracking-wide select-none text-[#fff]">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

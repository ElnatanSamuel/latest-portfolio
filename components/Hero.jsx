import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const controls = useAnimation();
  const [drops, setDrops] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
        duration: 14 + (1 - depth) * 10, // 14-24s, farther = slower
        opacity: 0.25 + depth * 0.55, // .25-.8
        drift: (depth - 0.5) * 10,
      };
    });
    setDrops(newDrops);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-screen w-screen overflow-hidden bg-[#0D0F10] text-white ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
    >
      {/* Hamburger trigger */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
        className="absolute right-6 top-6 z-30 inline-flex h-10 w-10 items-center justify-center rounded-md  hover:bg-white/10 transition md:right-8 md:top-8"
      >
        {menuOpen ? (
          // X icon
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            className="text-white/90"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M6 6l12 12M18 6l-12 12"
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            width="30"
            height="30"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            className="text-white/90"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        )}
      </button>
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
              FULLSTACK
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
            . A creative Full Stack Developer focused on performant, scalable
            and delightful web and mobile experiences.
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

      {/* Bottom-right stats (replaces rotary nav) */}
      <div className="hidden md:flex flex-col gap-8 absolute right-6 bottom-6 z-20 items-end text-right">
        {[
          { value: "3+", label: "Years of Experience" },
          { value: "10+", label: "Completed Projects" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * i,
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
            className="flex flex-col items-end"
          >
            <span className="font-extrabold text-4xl leading-none text-[#FF0000]">
              {s.value}
            </span>
            <span className="mt-1 text-sm text-white/70">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Right-side sheet menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMenuOpen(false)}
            />
            {/* Sliding Panel */}
            <motion.aside
              key="sheet"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-50 h-full w-full sm:w-1/2 lg:w-[44vw] bg-[#141414] ring-1 ring-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#FF0000]" />
                  <h2 className="text-sm tracking-[0.18em] text-white/70">
                    QUICK NAV
                  </h2>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/5 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-white/90"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M6 6l12 12M18 6l-12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Panel Content */}
              <div className="h-full overflow-y-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Social column */}
                  <div>
                    <div className="text-xs tracking-[0.2em] text-white/50 mb-5">
                      SOCIAL
                    </div>
                    <ul className="space-y-4">
                      <li>
                        <a
                          className="hover:text-white/90 text-white/80 transition"
                          href="https://github.com/ElnatanSamuel"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-white/90 text-white/80 transition"
                          href="https://www.linkedin.com/in/elnatansamuel999/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                    <div className="mt-12 border-t border-white/10 pt-5">
                      <div className="text-xs tracking-[0.2em] text-white/50 mb-2">
                        GET IN TOUCH
                      </div>
                      <a
                        href="mailto:elnatansamuel25@gmail.com"
                        className="text-white/80 hover:text-white"
                      >
                        elnatansamuel25@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Menu column */}
                  <div>
                    <div className="text-xs tracking-[0.2em] text-white/50 mb-5">
                      MENU
                    </div>
                    <ul className="space-y-3">
                      {nav.map((item, i) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="group inline-flex items-center justify-between w-full py-2 text-white/85 hover:text-white"
                          >
                            <span className="inline-flex items-center gap-3">
                              <span
                                className={`inline-block h-2.5 w-2.5 rounded-full ${
                                  i === 0
                                    ? "bg-yellow-400"
                                    : i === 1
                                    ? "bg-blue-500"
                                    : i === 2
                                    ? "bg-teal-400"
                                    : "bg-[#FF0000]"
                                }`}
                              />
                              <span className="font-medium tracking-wide">
                                {item.label}
                              </span>
                            </span>
                            <span className="text-white/30 group-hover:text-white/60 transition">
                              →
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

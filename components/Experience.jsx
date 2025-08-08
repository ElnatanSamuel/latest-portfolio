import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const items = [
    {
      date: "2025 — Present",
      role: "Mobile App Developer",
      where: "Freelance / Remote",
      bullets: [
        "Shipping cross‑platform apps with React Native & Expo",
        "Realtime features with Firebase/Socket.io",
        "Perf audits, bundle size cuts, offline first",
      ],
    },
    {
      date: "2024",
      role: "Frontend Engineer",
      where: "Agency Y",
      bullets: [
        "Built design‑systems with Tailwind + Radix",
        "Motion-first landing pages with Framer Motion",
        "Analytics A/B experiments and tracking",
      ],
    },
    {
      date: "2023",
      role: "Mobile Engineer",
      where: "Startup X",
      bullets: [
        "Flutter rewrite with CI/CD for Android & iOS",
        "Push notifications & deep links",
        "Crash reporting + session replay",
      ],
    },
    {
      date: "2022",
      role: "Junior Developer",
      where: "Studio Z",
      bullets: [
        "React web apps and admin panels",
        "API integrations, Auth, forms & validation",
        "Unit, E2E tests and docs",
      ],
    },
  ];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [weights, setWeights] = useState([]); // 0..1 focus weight per item

  useEffect(() => {
    const onScroll = () => {
      let bestIdx = 0;
      let bestDist = Infinity;
      const mid = window.innerHeight / 2;
      const newWeights = itemRefs.current.map((el, idx) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const d = Math.abs(c - mid);
        // track best for discrete active (for focus/ARIA if needed)
        if (d < bestDist) {
          bestDist = d;
          bestIdx = idx;
        }
        // normalize distance to 0..1 over a radius (0.6 * vh)
        const radius = window.innerHeight * 0.6;
        const t = Math.min(Math.max(1 - d / radius, 0), 1); // 1 at center -> 0 far
        // smoothstep easing for warp-like feel
        const eased = t * t * (3 - 2 * t);
        return eased;
      });
      setActive(bestIdx);
      setWeights(newWeights);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getVariants = (idx) => {
    const w = weights[idx] ?? 0; // 0..1
    const scale = 0.74 + 0.26 * w; // 0.74 -> 1.0
    const opacity = 0.45 + 0.55 * w; // 0.45 -> 1.0
    const blurPx = 2 - 2 * w; // 2px -> 0px
    return { scale, opacity, filter: `blur(${blurPx}px)` };
  };

  // Child item that safely uses hooks per element
  const ExperienceItem = ({ it, idx }) => {
    const liRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: liRef,
      offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
    return (
      <motion.li
        key={it.role + idx}
        ref={(el) => {
          itemRefs.current[idx] = el;
          liRef.current = el;
        }}
        style={{ y }}
        initial={false}
        animate={getVariants(idx)}
        transition={{ type: "spring", stiffness: 65, damping: 20, mass: 0.4 }}
        className="rounded-xl border border-white/5 bg-white/[0.02] p-6 md:p-7 backdrop-blur-[1px] origin-left text-left"
      >
        <div className="text-xs font-bold uppercase tracking-wide text-[#FF0000]">
          {it.date}
        </div>
        <div className="mt-1 text-2xl md:text-3xl font-extrabold">
          {it.role}{" "}
          <span className="text-white/60 font-semibold">— {it.where}</span>
        </div>
        <ul className="mt-3 grid gap-1.5 text-sm md:text-[15px] text-white/70 list-disc ml-5">
          {it.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </motion.li>
    );
  };

  return (
    <section
      id="experience"
      className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold">Experience</h2>
        <p className="text-white/60 mt-2">
          Scroll — the focused role pops while others recede.
        </p>

        <div ref={containerRef} className="mt-10 relative max-w-2xl">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/5" />
          <ul className="space-y-6">
            {items.map((it, idx) => (
              <ExperienceItem key={it.role + idx} it={it} idx={idx} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

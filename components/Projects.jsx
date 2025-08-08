import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DATA = [
  {
    id: "next-ventures",
    title: "Next Ventures",
    desc: "A platform for early-stage entrepreneurs to pitch, browse, and engage with startup ideas.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Motion.dev",
      "Sanity CMS",
    ],
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "zenith-minds",
    title: "Zenith Minds",
    desc: "Education platform connecting students and instructors for enhanced learning experiences.",
    stack: ["Next.js", "React", "Tailwind CSS", "Zustand", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "skillsync",
    title: "SkillSync",
    desc: "AI learning tracker for personalized upskilling.",
    stack: ["React", "Node", "Auth.js"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // subtle vertical parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <div ref={ref} className="h-screen flex items-center justify-center">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="h-[80vh] w-[86vw] md:w-[60vw] object-cover  shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
      />
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const all = useMemo(() => DATA, []);

  useEffect(() => {
    // Only run sticky observer on large screens
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;
    itemRefs.current = itemRefs.current.slice(0, all.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(idx);
          }
        });
      },
      { threshold: [0.6] }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [all.length]);

  return (
    <section
      id="projects"
      className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-24">
        {/* Desktop/Large layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: scrolling images taking full viewport */}
          <div className="relative">
            <div>
              {all.map((p, i) => (
                <div
                  key={p.id}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-index={i}
                  className="relative"
                >
                  <ParallaxImage src={p.image} alt={p.title} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky description */}
          <div className="lg:h-[100vh] lg:sticky lg:top-0 flex items-center">
            <div className="w-full max-w-md lg:max-w-none">
              <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-3">
                Selected Work
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {all[active]?.title}
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                {all[active]?.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {all[active]?.stack?.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1  bg-white/5 ring-1 ring-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#FF0000] to-transparent" />
              <div className="mt-6 text-xs text-white/50">
                Scroll to explore →
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout: stacked image + description per project */}
        <div className="lg:hidden space-y-14">
          {all.map((p) => (
            <div key={p.id}>
              <div className="mb-4">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-[56vh] w-full object-cover  shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
                />
              </div>
              <div>
                <div className="text-[#FF0000] uppercase tracking-wider text-xs mb-2">
                  Selected Work
                </div>
                <h3 className="text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-white/5 ring-1 ring-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

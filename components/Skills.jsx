import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiStyledcomponents,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
  SiNextdotjs,
  SiReactnative,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { useRef } from "react";

const GROUPS = [
  {
    title: "FRONTEND",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Firebase", icon: SiFirebase },
      { name: "Postgres", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: SiVisualstudiocode },
    ],
  },
];

function FallbackIcon({ label }) {
  const letter = (label || "?").charAt(0).toUpperCase();
  return (
    <div className="w-[26px] h-[26px]  grid place-items-center bg-white/10 text-white/80 text-[13px] font-bold">
      {letter}
    </div>
  );
}

function SectionBlock({ title, items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]); // parallax
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.15, 0.5, 1, 0.7, 0.35]
  );
  const blur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["6px", "0px", "6px"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, filter: blur, opacity }}
      className="py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Left huge label */}
        <div className="md:col-span-2">
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white/90">
            {title}
          </h3>
        </div>
        {/* Right icons */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.25, once: false }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-center gap-3 p-3  bg-white/5 hover:bg-white/7 ring-1 ring-white/10"
            >
              {s.icon ? <s.icon size={26} /> : <FallbackIcon label={s.name} />}
              <span className="text-sm md:text-base text-white/80">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold">Skills</h2>
        <div className="mt-6">
          {GROUPS.map((g) => (
            <SectionBlock key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

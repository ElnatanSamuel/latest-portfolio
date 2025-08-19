import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Contact() {
  const socials = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/elnatansamuel999/",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "elnatansamuel25@gmail.com", label: "Email" },
    {
      icon: FaGithub,
      href: "https://github.com/ElnatanSamuel",
      label: "GitHub",
    },
  ];

  // Mouse-follow parallax (smooth, springy) — desktop only
  const wrapRef = useRef(null);
  const mx = useMotionValue(0); // -1 .. 1
  const my = useMotionValue(0); // -1 .. 1
  const sx = useSpring(mx, { stiffness: 60, damping: 16, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 16, mass: 0.4 });

  const [isFinePointer, setIsFinePointer] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsFinePointer(mq.matches);
    update();
    mq.addEventListener
      ? mq.addEventListener("change", update)
      : mq.addListener(update);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", update)
        : mq.removeListener(update);
    };
  }, []);

  const onMove = useCallback(
    (e) => {
      if (!isFinePointer) return;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width; // 0..1
      const ny = (e.clientY - rect.top) / rect.height; // 0..1
      mx.set(nx * 2 - 1); // -1..1
      my.set(ny * 2 - 1); // -1..1
    },
    [isFinePointer, mx, my]
  );
  const onLeave = useCallback(() => {
    if (!isFinePointer) return;
    mx.set(0);
    my.set(0);
  }, [isFinePointer, mx, my]);

  // Depth layers for each icon
  const depths = [14, 10, 12]; // px amplitudes for x/y per icon

  return (
    <section
      id="contact"
      className="relative w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] text-white py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div
          ref={wrapRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className=" border border-white/5 bg-white/[0.02] backdrop-blur-[1px] px-6 md:px-12 py-10 md:py-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">
                Let’s build something
              </h2>
              <p className="mt-3 text-white/70">
                Ping me on any platform — I’ll get back fast.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full md:w-auto">
              {socials.map((s, i) => (
                <IconLink
                  key={s.label}
                  icon={s.icon}
                  href={s.href}
                  label={s.label}
                  depth={depths[i]}
                  sx={sx}
                  sy={sy}
                  isInteractive={isFinePointer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ icon: Icon, href, label, depth, sx, sy, isInteractive }) {
  // Derive per-item transforms here (valid hooks usage inside a component)
  const dx = useTransform(sx, (v) => v * depth);
  const dy = useTransform(sy, (v) => v * depth);
  const rotate = useTransform(sx, (v) => v * 3);
  const glow = useTransform(sx, (v) => Math.abs(v) * 0.25 + 0.05);

  return (
    <motion.a
      href={href}
      aria-label={label}
      style={isInteractive ? { x: dx, y: dy, rotate } : undefined}
      whileHover={isInteractive ? { scale: 1.08, y: -3 } : { scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden  ring-1 ring-white/10 bg-white/5 hover:bg-white/10 px-5 py-4 flex items-center gap-3 w-full"
    >
      <Icon size={26} className="transition-transform group-hover:scale-110" />
      <span className="text-sm md:text-base text-white/85 font-medium">
        {label}
      </span>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
        style={isInteractive ? { opacity: glow } : {}}
      />
    </motion.a>
  );
}

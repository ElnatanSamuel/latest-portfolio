import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// One-time splash screen: a red square gets "sliced" then morphs into a triangle
// Plays once per session (sessionStorage), then fades out and unmounts.
export default function Splash() {
  // Start as false on server to avoid hydration mismatch; decide on client
  const [show, setShow] = useState(false);

  // Total duration of the sequence (ms)
  const totalDuration = 2200;

  // Always show once on initial mount (every full page load)
  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    // Prevent background scroll during splash
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = prevOverflow;
    }, totalDuration);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [show]);

  const lineVariants = useMemo(
    () => ({
      initial: { scaleX: 0, opacity: 0 },
      animate: (i) => ({
        scaleX: 1,
        opacity: 1,
        transition: { delay: 0.25 + i * 0.08, duration: 0.5, ease: "easeOut" },
      }),
    }),
    []
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0D0F10]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <div className="relative w-[160px] h-[160px]">
            {/* Slicing lines (decorative) */}
            <motion.span
              className="absolute left-0 top-1/2 h-[2px] w-full origin-left bg-[#FF0000]/80"
              variants={lineVariants}
              initial="initial"
              animate="animate"
              custom={0}
            />
            <motion.span
              className="absolute left-0 top-1/3 h-[2px] w-full origin-left bg-[#FF0000]/60"
              variants={lineVariants}
              initial="initial"
              animate="animate"
              custom={1}
            />
            <motion.span
              className="absolute left-0 top-2/3 h-[2px] w-full origin-left bg-[#FF0000]/60"
              variants={lineVariants}
              initial="initial"
              animate="animate"
              custom={2}
            />

            {/* Shape: square -> triangle via clip-path */}
            <motion.div
              className="absolute inset-0 m-auto w-[120px] h-[120px]"
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: [0.9, 1, 1, 0.9], rotate: [0, 0, 20, 25] }}
              transition={{
                times: [0, 0.3, 0.75, 1],
                duration: totalDuration / 1000,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-[#FF0000] ring-1 ring-white/10 shadow-[0_10px_40px_rgba(255,0,0,0.25)] splash-shape" />
                {/* subtle inner cut highlights */}
                <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>
          </div>

          {/* Local CSS for clip-path morph */}
          <style jsx global>{`
            @keyframes squareToTriangle {
              0% {
                clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
                -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
              }
              60% {
                /* start slicing feel */
                clip-path: polygon(6% 6%, 94% 6%, 94% 94%, 6% 94%);
                -webkit-clip-path: polygon(6% 6%, 94% 6%, 94% 94%, 6% 94%);
              }
              100% {
                /* triangle with duplicated point to keep 4 vertices */
                clip-path: polygon(50% 0%, 100% 100%, 0% 100%, 50% 0%);
                -webkit-clip-path: polygon(50% 0%, 100% 100%, 0% 100%, 50% 0%);
              }
            }
            .splash-shape {
              animation: squareToTriangle 0.95s ease-in-out 0.5s forwards;
              will-change: clip-path, transform;
              border-radius: 10px;
            }
            @media (prefers-reduced-motion: reduce) {
              .splash-shape {
                animation: none !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

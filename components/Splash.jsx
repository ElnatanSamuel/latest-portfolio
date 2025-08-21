import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// One-time splash screen: a red square gets "sliced" then morphs into a triangle
// Plays once per session (sessionStorage), then fades out and unmounts.
export default function Splash() {
  // Start as false on server to avoid hydration mismatch; decide on client
  const [show, setShow] = useState(true);

  // Name reveal (letter-by-letter) config
  const nameText = "ELNATAN";
  const letters = useMemo(() => nameText.split(""), []);
  const nameStagger = 0.06;
  const nameContainer = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: nameStagger, delayChildren: 0.05 },
      },
      exit: { opacity: 0 },
    }),
    [nameStagger]
  );
  const letter = useMemo(
    () => ({
      hidden: { opacity: 0, y: 8 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    []
  );
  const nameRevealTime = letters.length * nameStagger + 0.45; // seconds
  const holdAfterName = 0.15; // seconds to hold before panels drop
  const baseDelay = nameRevealTime + holdAfterName;
  // Four columns (left -> right) timings
  const panelDurations = [0.9, 1.05, 0.95, 1.1];
  const panelDelays = [baseDelay, baseDelay + 0.18, baseDelay + 0.36, baseDelay + 0.54];
  const nameFadeDelay = panelDelays[1]; // fade name after second column begins
  // Total duration (ms): when to unmount splash
  const totalDuration = Math.ceil((panelDelays[3] + panelDurations[3] + 0.25) * 1000);

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

  // panel timings prepared above to start after name reveal

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        >
          {/* Solid base fill to avoid initial flash; fades as first slice begins */}
          <motion.div
            className="absolute inset-0 bg-black z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: Math.max(0, baseDelay - 0.05),
              duration: 0.4,
              ease: "easeOut",
            }}
          />
          {/* Centered Name */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: nameFadeDelay, duration: 0.45, ease: "easeOut" }}>
              <motion.h1
                variants={nameContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-white font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px]"
              >
                {letters.map((ch, i) => (
                  <motion.span key={i} variants={letter} className="inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
          </div>

          {/* Four vertical columns (left -> right) drop to reveal the page */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-black z-20"
            style={{ width: "25%" }}
            initial={{ y: 0 }}
            animate={{ y: "100vh" }}
            transition={{ delay: panelDelays[0], duration: panelDurations[0], ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-0 bottom-0 bg-black z-20"
            style={{ left: "25%", width: "25%" }}
            initial={{ y: 0 }}
            animate={{ y: "100vh" }}
            transition={{ delay: panelDelays[1], duration: panelDurations[1], ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-0 bottom-0 bg-black z-20"
            style={{ left: "50%", width: "25%" }}
            initial={{ y: 0 }}
            animate={{ y: "100vh" }}
            transition={{ delay: panelDelays[2], duration: panelDurations[2], ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-0 bottom-0 bg-black z-20"
            style={{ left: "75%", width: "25%" }}
            initial={{ y: 0 }}
            animate={{ y: "100vh" }}
            transition={{ delay: panelDelays[3], duration: panelDurations[3], ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

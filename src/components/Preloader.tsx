import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);

  const systemLines = [
    "Initializing system...",
    "Loading neural modules...",
    "Connecting to data network...",
    "Training AI models...",
    "Optimizing portfolio experience...",
    "Access Granted",
  ];

  useEffect(() => {
    // 1. Text Cycle Logic - Fast reading speed
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < systemLines.length - 1) return prev + 1;
        clearInterval(textInterval);
        return prev;
      });
    }, 200); // 200ms * 6 lines = ~1.2s

    // 2. Progress Bar Logic - Fast loading (2 seconds total)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return 100;
      });
    }, 20); // 20ms * 100 = 2s

    // 3. Name Reveal - delayed start
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 1000); // Show name after 1 second

    // 4. Completion/Exit Trigger
    const exitTimer = setTimeout(() => {
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for exit animation to finish
    }, 3500); // Total duration ~3.5s to include exit animation

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: easeInOut }
    },
  };

  const centerDotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 15],
      opacity: [0, 1, 0],
      transition: { duration: 1.5, times: [0, 0.2, 1] }
    }
  };

  const ringVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: { duration: 4, repeat: Infinity }
    }
  };

  const reverseRingVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: -360,
      transition: { duration: 5, repeat: Infinity }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center overflow-hidden font-mono"
    >
      {/* Background Grid/Particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(37, 99, 235, 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(37, 99, 235, 0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">

        {/* Central HUD / Reactor Core */}
        <div className="relative w-96 h-96 mb-8 flex items-center justify-center">

            {/* Core Glow */}
            <motion.div
               className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
               variants={centerDotVariants}
               initial="initial"
               animate="animate"
            />

            {/* Central Image */}
             <motion.div
              className="absolute w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(37, 99, 235, 0.4)] z-20 bg-slate-800"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent opacity-30"></div>
            </motion.div>

            {/* Spinning Rings */}
            <motion.div
              className="absolute w-64 h-64 border-2 border-blue-500/30 rounded-full border-t-blue-500"
              variants={ringVariants}
              initial="initial"
              animate="animate"
            />
            <motion.div
              className="absolute w-72 h-72 border border-slate-500/20 rounded-full border-b-slate-500 dashed"
              variants={reverseRingVariants}
              initial="initial"
              animate="animate"
            />
             <motion.div
              className="absolute w-80 h-80 border border-dashed border-blue-500/10 rounded-full opacity-50"
              animate={{ rotate: 180 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

             {/* Scanning Radar */}
             <motion.div
               className="absolute w-full h-full rounded-full bg-gradient-to-t from-transparent via-blue-500/10 to-transparent opacity-30"
               animate={{ rotate: 360 }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />

             {/* Particles Orbiting - Simulated with divs */}
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                >
                    <div className="w-2 h-2 bg-slate-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#94a3b8]"></div>
                </motion.div>
             ))}
        </div>

        {/* System Text */}
        <div className="h-8 mb-4">
             <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-blue-400 text-sm tracking-widest uppercase font-bold"
             >
                {">"} {systemLines[textIndex]}
             </motion.p>
        </div>

        {/* Name Reveal with Glitch Effect */}
        <div className="h-16 flex items-center justify-center mb-8 relative">
          <AnimatePresence>
            {showName && (
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-blue-600 tracking-wider relative z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Soniya
                {/* Glitch Overlay */}
                <span className="absolute inset-0 text-slate-300 opacity-30 translate-x-[2px] animate-pulse pointer-events-none">Soniya</span>
                <div className="absolute inset-0 bg-blue-400/20 blur-xl -z-10 opacity-50"></div>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Loading Bar */}
        <div className="w-64 md:w-96 h-1 bg-slate-700 rounded-full overflow-hidden relative border border-slate-600">
            <motion.div
               className="h-full bg-blue-500 shadow-[0_0_15px_rgba(37, 99, 235, 0.8)]"
               initial={{ width: "0%" }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "linear", duration: 0.1 }}
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
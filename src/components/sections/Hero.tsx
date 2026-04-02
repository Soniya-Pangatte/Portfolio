import { motion } from "framer-motion";
import { Download, ChevronRight, User } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Profile Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 p-1 bg-gradient-to-tr from-primary to-accent">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                {/* Replace the icon with <img src="/your-photo.jpg" alt="Soniya" className="w-full h-full object-cover" /> */}
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
          >
            Hello, I'm <br />
            <span className="text-gradient">SONIYA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light"
          >
            Computer Science Student <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Beginner Web Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ChevronRight className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
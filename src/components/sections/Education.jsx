import { motion } from "framer-motion";
import { BookOpen, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-4xl font-display font-bold">Education <span className="text-blue-500">Journey</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0"
        >
          {/* Vertical Line for timeline feel */}
          <div className="absolute left-[39px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />

          <div className="relative flex flex-col md:flex-row justify-between items-center w-full group">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 transition-transform duration-300" />

            <div className="w-full md:w-5/12 ml-6 md:ml-0 md:text-right pr-0 md:pr-10 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-primary font-medium text-lg mb-4">
                Computer Science and Engineering
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground glass-card px-4 py-2 rounded-full md:ml-auto">
                <Calendar className="w-4 h-4" />
                <span>Currently Pursuing</span>
              </div>
            </div>

            <div className="w-full md:w-5/12 ml-6 md:ml-0 md:pl-10">
              <div className="glass-card p-8 rounded-3xl border border-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300">
                <h4 className="text-xl font-bold text-foreground mb-3">PCET's NMIET</h4>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Talegaon, Pune</span>
                </div>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Focusing on core computer science concepts, programming languages, and practical software development methodologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
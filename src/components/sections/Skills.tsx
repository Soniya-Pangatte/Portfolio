import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js",
  "C Programming", "Git & GitHub", "Problem Solving",
  "Research", "Responsive Design"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
            <Cpu className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and concepts I'm currently working with and continuously improving.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full glass-card hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="font-medium text-foreground tracking-wide">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
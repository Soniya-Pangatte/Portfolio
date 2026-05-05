import { motion } from "framer-motion";
import { FolderGit2, CheckCircle2, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Snake Game",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Score tracking", "Food generation", "Collision detection", "Restart button"],
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 2,
    title: "Portfolio Website",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    features: ["Responsive design", "Navigation menu", "Contact form", "Animations"],
    color: "from-primary to-violet-400"
  },
  {
    id: 3,
    title: "Travel Guide Website",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Tourist locations", "Navigation pages", "Responsive layout", "Interactive maps"],
    color: "from-accent to-blue-400"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
            <FolderGit2 className="w-6 h-6 text-pink-500" />
          </div>
          <h2 className="text-4xl font-display font-bold">Featured <span className="text-pink-500">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:border-white/20 transition-colors duration-500"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-3">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4 opacity-70">Key Features</h4>
                  {project.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
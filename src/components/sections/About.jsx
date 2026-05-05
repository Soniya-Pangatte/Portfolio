import { motion } from "framer-motion";
import { User2, GraduationCap, Code, Rocket } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Student",
      desc: "CSE at PCET's NMIET, Talegaon Pune."
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Developer",
      desc: "Passionate about web development."
    },
    {
      icon: <Rocket className="w-6 h-6 text-pink-500" />,
      title: "Learner",
      desc: "Exploring React, Node.js and modern tech."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
            <User2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-display font-bold">About <span className="text-primary">Me</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
          >
            <p>
              Hi! I’m <span className="text-foreground font-medium">Soniya</span>, a Computer Science and Engineering student at PCET's NMIET, Talegaon Pune.
            </p>
            <p>
              I am passionate about web development and enjoy creating responsive and user-friendly websites. The process of turning ideas into functional, beautiful interfaces is what drives me.
            </p>
            <p>
              Currently, I am solidifying my foundation in HTML, CSS, and JavaScript, while actively exploring modern frameworks like <span className="text-accent font-medium">React</span> and backend technologies like <span className="text-green-500 font-medium">Node.js</span>.
            </p>
            <p>
              I love solving problems, learning new technologies, and building creative projects that challenge my abilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
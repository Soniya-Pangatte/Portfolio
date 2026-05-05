import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, Zap, ExternalLink, Github, Send, Mail, Linkedin, Briefcase, GraduationCap } from 'lucide-react';
import { useSubmitContact } from "@/hooks/use-contact";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const { mutate, isPending } = useSubmitContact();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => setFormData({ name: "", email: "", message: "" })
    });
  };

  useGSAP(() => {
    // Hero Animation
    gsap.from('.hero-elem', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2
    });

    // Bento Grid Animation
    const sections = gsap.utils.toArray('.bento-section');
    sections.forEach((section) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Trigger when the top of the element hits 85% of viewport
          once: true // Only play once
        }
      });
    });

    // Project Cards Stagger
    gsap.fromTo('.project-card', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#projects',
          start: "top 80%",
          once: true // Only play once
        }
      }
    );

  }, { scope: container });

  const skills = [
    { category: 'Programming', items: ['C', 'JavaScript', 'Python', 'TypeScript', 'Java'] },
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'React.js', 'TailwindCSS', 'Framer Motion'] },
    { category: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] }
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'Modern, responsive personal portfolio built with React and TailwindCSS featuring a premium light bento-box theme.',
      tech: ['React', 'Tailwind', 'GSAP'],
      github: 'https://github.com/Soniya-Pangatte/portfolio',
      demo: '#'
    },
    {
      title: 'Snake Game',
      desc: 'Interactive classic game with score tracking, smooth gameplay, and increasing difficulty levels.',
      tech: ['HTML5', 'CSS3', 'JS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Travel Guide App',
      desc: 'Tourist location guide with interactive maps, location information, and a beautiful UI.',
      tech: ['React', 'Tailwind', 'Mapbox'],
      github: '#',
      demo: '#'
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      desc: "1st place at university ed-tech hackathon.",
      icon: <Trophy className="text-blue-500" size={24} />,
      date: "2023"
    },
    {
      title: "Full Stack Certified",
      desc: "6-month web dev bootcamp graduate.",
      icon: <Star className="text-indigo-500" size={24} />,
      date: "2023"
    },
    {
      title: "Open Source",
      desc: "Merged 10+ PRs in popular repositories.",
      icon: <Code className="text-violet-500" size={24} />,
      date: "2024"
    }
  ];

  return (
    <main ref={container} className="bg-mesh min-h-screen text-slate-900 overflow-hidden font-sans pb-24">

      {/* 1. HERO SECTION */}
      {/* Added mb-24 to fix the overlap with the grid below */}
      <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-6 mb-16 md:mb-24">

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 rounded-b-[3rem] md:rounded-b-[5rem]">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2 }}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter blur-[2px]"
          >
            <source src="/bg-portfolio.mp4" type="video/mp4" />
          </motion.video>
          {/* Light Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-slate-50/40 to-slate-50"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 z-10 relative">
          <div className="hero-elem inline-block px-4 py-1.5 rounded-full glass-card text-sm font-semibold text-blue-600 mb-6 shadow-sm">
            Available for new opportunities
          </div>

          <h1 className="hero-elem text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Hi, I'm <span className="text-gradient">Soniya</span>
          </h1>

          <p className="hero-elem text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A passionate <strong className="text-slate-900">Full Stack Developer</strong> crafting clean, modern, and engaging web experiences.
          </p>

          <div className="hero-elem pt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-sm"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* BENTO BOX GRID CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 md:space-y-12">

        {/* ROW 1: About & Photo */}
        <section id="about" className="bento-section grid lg:grid-cols-3 gap-6 scroll-mt-24">
          <div className="lg:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">Turning logic into beautiful interfaces.</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I am a Computer Science student at PCET's NMIET, Talegaon Pune. I specialize in building responsive, full-stack web applications with modern technologies like React, Node.js, and Tailwind CSS.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <GraduationCap className="text-blue-600" size={20} />
                  Education
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">B.E. Computer Science<br />Expected 2028</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Briefcase className="text-blue-600" size={20} />
                  Availability
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">Open for internships<br />& freelance projects</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-0 bg-blue-50/50 -z-10 group-hover:bg-blue-100/50 transition-colors" />
            <img
              src="/main.jpeg"
              alt="Soniya"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600">2+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Coding</div>
            </div>
          </div>
        </section>

        {/* ROW 2: Skills & Achievements */}
        <div className="bento-section grid lg:grid-cols-12 gap-6">
          <section id="skills" className="lg:col-span-8 grid sm:grid-cols-2 gap-6 scroll-mt-24">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                whileHover={{ y: -5 }}
                className="glass-card rounded-3xl p-8 transition-transform"
              >
                <h4 className="text-lg font-bold mb-4 text-slate-900 flex items-center gap-2">
                  <Zap size={18} className="text-blue-500" />
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200/50 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          <section id="achievements" className="lg:col-span-4 flex flex-col gap-6 scroll-mt-24">
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 5 }}
                className="glass-card rounded-3xl p-6 flex items-start gap-4 flex-1 transition-transform cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 mb-2">{item.desc}</p>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </section>
        </div>

        {/* ROW 3: Projects */}
        <section id="projects" className="bento-section grid md:grid-cols-3 gap-6 scroll-mt-24 pt-8">
          <div className="md:col-span-3 mb-2">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-2 pl-2">Portfolio</h2>
            <h3 className="text-3xl font-bold text-slate-900 pl-2">Featured Works</h3>
          </div>
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card glass-card rounded-3xl p-6 flex flex-col group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-slate-200/50 relative">
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-slate-400 font-bold text-xl group-hover:scale-110 group-hover:text-blue-600 transition-all duration-500">
                  {project.title}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
              <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-slate-100 pt-4 mt-auto">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* ROW 4: Contact */}
        <section id="contact" className="bento-section glass-card rounded-3xl p-8 md:p-12 scroll-mt-24 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Let's work together.
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex items-center gap-4">
                <a href="mailto:soniya@example.com" className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/Soniya-Pangatte/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/soniya-pangatte-2b1008331" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 pl-1">Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 pl-1">Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 pl-1">Message</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none shadow-sm"
                    placeholder="Hi Soniya, I'd like to talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                >
                  {isPending ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 py-12 font-medium">
          <p>© {new Date().getFullYear()} Soniya Pangatte. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, Zap } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';

const roles = [
  "Full Stack Developer",

  "UI/UX Designer",
  "Problem Solver",
];

export default function Home() {
  const [text, setText] = React.useState("");
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);


  React.useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 300) {
          // setActiveNav(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect
  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const typing = setTimeout(() => {
      if (charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 60);
    return () => clearTimeout(typing);
  }, [charIndex, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // setActiveNav(id);
    }
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          paddingTop: '70px',
          position: 'relative',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div style={{
          width: '80%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            flex: '1',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '300px',
              margin: '0 auto'
            }}>

              <img src="/main.jpeg" alt="Soniya" style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #2563eb',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '10'
              }} />

              {/* Floating Cards */}
              <FloatingCard
                icon={<Trophy size={18} />}
                title="Projects"
                subtitle="5+ Live"
                className="-top-4 left-0 z-20"
                delay={0}
              />
              <FloatingCard
                icon={<Star size={18} />}
                title="Skills"
                subtitle="Full Stack"
                className="top-10 -right-8 z-20"
                delay={1}
              />
              <FloatingCard
                icon={<Code size={18} />}
                title="Experience"
                subtitle="0 Year"
                className="bottom-10 -left-6 z-20"
                delay={2}
              />
              <FloatingCard
                icon={<Zap size={18} />}
                title="Degree"
                subtitle="B.E. CS"
                className="-bottom-6 right-0 z-20"
                delay={1.5}
              />
            </div>
          </div>
          <motion.div
            style={{
              flex: '2'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-1px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello, I'm Soniya
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: '#cbd5e1'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Computer Science Student & {text}
              <motion.span
                className="animate-pulse text-blue-500 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.p>

            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginBottom: '2rem'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#334155',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: '#94a3b8' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  5+
                </motion.div>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Projects</div>
              </motion.div>

              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#334155',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: '#94a3b8' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  3+
                </motion.div>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Skills</div>
              </motion.div>

              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#334155',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: '#94a3b8' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  0
                </motion.div>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Year Experience</div>
              </motion.div>

              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: '#1e293b',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#334155',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  style={{ fontSize: '2rem', fontWeight: 'bold', color: '#94a3b8' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  B.E.
                </motion.div>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Computer Science</div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <a href="https://github.com/Soniya-Pangatte/" target="_blank" style={{
                  color: '#94a3b8',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                   onMouseOut={(e) => (e.target as HTMLElement).style.color = '#94a3b8'}>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" target="_blank" style={{
                  color: '#94a3b8',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                   onMouseOut={(e) => (e.target as HTMLElement).style.color = '#94a3b8'}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" target="_blank" style={{
                  color: '#94a3b8',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                   onMouseOut={(e) => (e.target as HTMLElement).style.color = '#94a3b8'}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/soniya-pangatte-2b1008331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style={{
                  color: '#94a3b8',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                   onMouseOut={(e) => (e.target as HTMLElement).style.color = '#94a3b8'}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{
                padding: '12px 28px',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = '#e2e8f0')}
                onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = '#ffffff')}
              >
                Download CV
              </button>
              <button style={{
                padding: '12px 28px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #475569',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onClick={() => scrollToSection('contact')}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#1e293b';
                  (e.target as HTMLElement).style.borderColor = '#64748b';
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  (e.target as HTMLElement).style.borderColor = '#475569';
                }}
              >
                Contact Me
              </button>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#0f0f0f' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', color: '#ffffff', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p
              style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I'm a <motion.strong
                style={{ color: '#2563eb' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Computer Science student
              </motion.strong> at PCET's NMIET, Talegaon Pune, with a passion for web development and technology innovation.
            </motion.p>

            <motion.p
              style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              I specialize in building responsive, scalable web applications using modern technologies. I'm constantly learning and exploring new frameworks and best practices to create exceptional user experiences.
            </motion.p>

            <motion.p
              style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#cbd5e1' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              With a strong foundation in HTML, CSS, JavaScript, and React, I'm committed to writing clean, maintainable code and delivering high-quality solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              style={{ marginTop: '2rem' }}
            >
              <motion.button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(45deg, #2563eb, #06b6d4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        style={{ padding: '5rem 2rem', backgroundColor: '#0a0a0a' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', textAlign: 'center', color: '#ffffff' }}>Technical Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { category: 'Programming', skills: ['C', 'JavaScript', 'Python'] },
              { category: 'Web Development', skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'TailwindCSS'] },
              { category: 'Databases & Tools', skills: ['MongoDB', 'Git', 'GitHub', 'VS Code'] }
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: '#1e293b',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  border: '1px solid #334155'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#2563eb' }}>{group.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#0f172a',
                        color: '#cbd5e1',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid #334155',
                        cursor: 'default'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#0f0f0f' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', color: '#ffffff', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Featured <motion.span
            style={{ background: 'linear-gradient(45deg, #2563eb, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Projects
          </motion.span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Portfolio Website', desc: 'Modern, responsive personal portfolio built with React and TailwindCSS', tech: ['React', 'TailwindCSS', 'JavaScript'], color: '#2563eb', github: 'https://github.com/Soniya-Pangatte/portfolio', demo: '#' },
            { title: 'Snake Game', desc: 'Interactive game with score tracking and smooth gameplay', tech: ['HTML5', 'CSS3', 'JavaScript'], color: '#059669', github: '#', demo: '#' },
            { title: 'Travel Guide App', desc: 'Tourist location guide with interactive maps and information', tech: ['HTML', 'CSS', 'JavaScript'], color: '#dc2626', github: '#', demo: '#' }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}
              style={{
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                border: '1px solid #334155'
              }}
            >
              <motion.div
                style={{ backgroundColor: project.color, height: '4px' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />

              <div style={{ padding: '2rem' }}>
                <motion.h3
                  style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.6' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.desc}
                </motion.p>

                <motion.div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.tech.map((t, techIndex) => (
                    <motion.span
                      key={t}
                      style={{
                        fontSize: '0.8rem',
                        padding: '4px 12px',
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                        borderRadius: '6px',
                        fontWeight: '500'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: project.color,
                        color: 'white'
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  style={{ display: 'flex', gap: '1rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#2563eb',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#1d4ed8',
                      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    style={{
                      padding: '8px 16px',
                      backgroundColor: 'transparent',
                      color: '#2563eb',
                      textDecoration: 'none',
                      border: '1px solid #2563eb',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#2563eb',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Education Section */}
      <motion.section
        id="education"
        style={{ padding: '5rem 2rem', backgroundColor: '#0a0a0a' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', textAlign: 'center', color: '#ffffff' }}>Education</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              backgroundColor: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              borderLeft: '4px solid #2563eb',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>B.E. Computer Science</h3>
              <p style={{ fontSize: '1.1rem', color: '#2563eb', marginBottom: '1rem' }}>PCET's NMIET, Talegaon Pune</p>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '1rem' }}>Expected Graduation: 2028</p>
              <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                Currently pursuing my Bachelor's in Computer Science with a focus on full-stack development, algorithms, and software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section
        id="milestones"
        style={{ padding: '5rem 2rem', backgroundColor: '#0f0f0f' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#2563eb',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              display: 'block'
            }}>
              Achievements
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Key Milestones
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
              borderRadius: '2px',
              margin: '0 auto'
            }}></div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '🏆',
                title: 'Projects Completed',
                value: '5+',
                description: 'Successfully delivered full-stack web applications and interactive experiences'
              },
              {
                icon: '🎓',
                title: 'Computer Science Degree',
                value: 'B.E.',
                description: 'Currently pursuing Bachelor\'s in Computer Science with focus on modern technologies'
              },
              {
                icon: '💻',
                title: 'Technologies Mastered',
                value: '5+',
                description: 'Proficient in React, Node.js, Python, databases, and cloud technologies'
              },
              {
                icon: '🚀',
                title: 'Learning Journey',
                value: '1+ Years',
                description: 'Continuous learning and improvement in software development and AI'
              },
              {
                icon: '🤝',
                title: 'Collaborations',
                value: '2+',
                description: 'Worked with teams and clients on various projects and initiatives'
              },
              {
                icon: '🎯',
                title: 'Problem Solving',
                value: '30+',
                description: 'Solved complex coding challenges and algorithmic problems'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)'
                }}
                style={{
                  backgroundColor: '#1e293b',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid #334155',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background gradient effect */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                  borderRadius: '16px 16px 0 0'
                }}></div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}
                >
                  {milestone.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {milestone.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginBottom: '1rem'
                  }}
                >
                  {milestone.value}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '0.95rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6'
                  }}
                >
                  {milestone.description}
                </motion.p>

                {/* Floating particles effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.8 + i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                    viewport={{ once: true }}
                    style={{
                      position: 'absolute',
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#2563eb',
                      borderRadius: '50%',
                      top: `${20 + i * 30}%`,
                      right: `${10 + i * 15}%`,
                      zIndex: 1
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              marginTop: '4rem',
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              padding: '3rem 2rem',
              border: '1px solid #334155'
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              🏆 Achievement Highlights
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Successfully built and deployed 5+ full-stack web applications",
                "Mastered modern web technologies including React, Node.js, and cloud services",
                "Developed strong problem-solving skills through algorithmic challenges",
                "Collaborated on team projects and delivered quality solutions",
                "Continuous learning in AI, machine learning, and emerging technologies"
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#0f172a',
                    borderRadius: '8px',
                    border: '1px solid #334155'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#2563eb',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}
                  />
                  <span style={{
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        style={{ padding: '5rem 2rem', backgroundColor: '#1a1a1a', color: 'white' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.9 }}>
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="mailto:soniya@example.com" style={{
              padding: '14px 32px',
              fontSize: '1rem',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.3s'
            }}
              onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = '#1d4ed8')}
              onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = '#2563eb')}
            >
              📧 Send Email
            </a>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <a href="#" style={{ color: '#2563eb', fontSize: '0.95rem', textDecoration: 'none' }}>LinkedIn</a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#" style={{ color: '#2563eb', fontSize: '0.95rem', textDecoration: 'none' }}>GitHub</a>
              <span style={{ opacity: 0.5 }}>•</span>
              <a href="#" style={{ color: '#2563eb', fontSize: '0.95rem', textDecoration: 'none' }}>Twitter</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ padding: '2rem', backgroundColor: '#0a0a0a', color: '#cbd5e1', textAlign: 'center', fontSize: '0.9rem', borderTop: '1px solid #334155' }}
      >
        <p>Made with ❤️ by Soniya • © 2026 All rights reserved</p>
      </motion.footer>
    </div>
  );
}
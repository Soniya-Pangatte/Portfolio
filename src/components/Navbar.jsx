import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingRef.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      // Update state and prevent observer from overwriting it during scroll
      setActiveSection(sectionId);
      isClickingRef.current = true;
      setTimeout(() => { isClickingRef.current = false; }, 1000);

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xl">S</span>
            Soniya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-1 py-2 text-sm font-bold transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-[26px] left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60"
        >
          <div className="py-4 px-4 space-y-2">
            {navLinks.map((link, index) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-bold ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
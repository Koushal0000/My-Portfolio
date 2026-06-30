import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const ROLES = ['Java Developer', 'MERN Stack Developer', 'Problem Solver', 'Continuous Learner'];

export default function Hero() {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: number;
    const fullText = ROLES[currentRoleIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at the end of typing
      timer = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIdx((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => 
          isDeleting 
            ? fullText.substring(0, prev.length - 1) 
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1020] glow-container"
      role="banner"
    >
      {/* Background radial-gradient mesh and interactive particles */}
      <div className="gradient-mesh" />
      <ParticlesBackground />
      <div className="glow-overlay" />

      {/* Main Content Card Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center select-none">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/80 border border-blue-glow/10 text-xs font-semibold text-cyan-accent mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for Internships
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-extrabold font-heading text-slate-100 tracking-tight mb-4"
        >
          P Koushal
        </motion.h1>

        {/* Rotating Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-8 sm:h-10 text-lg sm:text-2xl font-semibold text-cyan-accent mb-6 font-heading flex justify-center items-center"
        >
          <span>{currentText}</span>
          <span className="ml-1 w-[2px] h-6 bg-cyan-accent animate-pulse"></span>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Passionate about building scalable web applications, solving real-world problems, and continuously learning modern technologies.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button
            onClick={() => scrollToSection('project')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-glow hover:bg-blue-600 text-slate-100 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            View Project
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="/resume/resumekoushal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg glass-button text-cyan-accent font-semibold flex items-center justify-center gap-2 hover:text-slate-100 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg glass-button text-slate-300 hover:text-slate-100 font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0B1020] to-transparent pointer-events-none" />
    </section>
  );
}

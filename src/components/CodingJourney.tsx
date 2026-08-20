import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Code2, Award } from 'lucide-react';
import { Github } from './TechIcons';

interface CountUpProps {
  target: number;
  duration?: number;
}

function CountUp({ target, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(target);
      return;
    }

    let start = 0;
    const end = target;
    if (start === end) return;

    const stepTime = Math.max(Math.floor(duration / end), 12);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function CodingJourney() {
  return (
    <section 
      id="coding-journey" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="coding-journey-title"
    >
      {/* Header */}
      <div className="mb-12 text-center md:text-left select-none">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          04 / JOURNEY
        </span>
        <h2 id="coding-journey-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Coding Profiles & Journey
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl p-6 glass-card border border-blue-glow/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6 select-none">
              <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono">LeetCode</span>
            </div>
            
            {/* Count-Up Problems Solved */}
            <div className="mb-4 select-none">
              <div className="text-4xl font-black text-slate-100 font-heading">
                <CountUp target={130} />+
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
                Problems Solved
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Regular Weekly Contest Participant focusing on improving logical thinking and mastering Data Structures & Algorithms.
            </p>
          </div>

          <a
            href="https://leetcode.com/u/pkoushal920/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent hover:text-slate-100 transition-colors mt-4 self-start focus:outline-none focus:ring-1 focus:ring-blue-glow"
          >
            View LeetCode Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* GeeksforGeeks Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl p-6 glass-card border border-blue-glow/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6 select-none">
              <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono">GeeksforGeeks</span>
            </div>

            <div className="mb-4 select-none">
              <div className="text-4xl font-black text-slate-100 font-heading">
                DSA
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
                Active Learner
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Consistently practicing and solving algorithm challenges, focusing on core computer science foundations and interview preparations.
            </p>
          </div>

          <a
            href="https://www.geeksforgeeks.org/profile/koushal2b6y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent hover:text-slate-100 transition-colors mt-4 self-start focus:outline-none focus:ring-1 focus:ring-blue-glow"
          >
            View GFG Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl p-6 glass-card border border-blue-glow/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6 select-none">
              <div className="p-2.5 rounded-lg bg-blue-glow/10 border border-blue-glow/20 text-cyan-accent">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 font-mono">GitHub</span>
            </div>

            <div className="mb-4 select-none">
              <div className="text-4xl font-black text-slate-100 font-heading">
                MERN
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
                Repositories & Apps
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Building and maintaining full-stack MERN applications, open-source projects, and showcasing version-controlled collaboration.
            </p>
          </div>

          <a
            href="https://github.com/Koushal0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent hover:text-slate-100 transition-colors mt-4 self-start focus:outline-none focus:ring-1 focus:ring-blue-glow"
          >
            View GitHub Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

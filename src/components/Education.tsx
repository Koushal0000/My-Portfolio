import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="education-title"
    >
      {/* Title */}
      <div className="mb-12 text-center md:text-left select-none">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          07 / EDUCATION
        </span>
        <h2 id="education-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Education
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass-card border border-blue-glow/5 overflow-hidden p-6 lg:p-8 relative group"
        >
          {/* Subtle Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-glow to-cyan-accent rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left: Info */}
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-blue-glow/10 border border-blue-glow/20 text-cyan-accent shrink-0 select-none">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-1">
                  Mohan Babu University
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-cyan-accent font-heading mb-3">
                  B.Tech – Artificial Intelligence & Machine Learning
                </h4>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 select-none">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-accent" />
                    2023 – 2027
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
                    Tirupati, AP, India
                  </span>
                </div>
              </div>
            </div>

            {/* Right: CGPA highlight */}
            <div className="w-full md:w-auto p-4 rounded-xl bg-navy-950/80 border border-blue-glow/5 flex flex-col items-center md:items-end justify-center select-none shrink-0 min-w-[150px] shadow-sm">
              <div className="flex items-center gap-1.5 text-xs text-cyan-accent font-semibold mb-1">
                <Award className="w-4 h-4" />
                Academic Standing
              </div>
              <div className="text-3xl font-black text-slate-100 font-heading">
                9.2 <span className="text-sm font-semibold text-slate-500">/ 10</span>
              </div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">
                Cumulative CGPA
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

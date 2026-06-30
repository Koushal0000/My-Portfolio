import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

export default function Hackathons() {
  return (
    <section 
      id="hackathon" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="hackathons-title"
    >
      {/* Title */}
      <div className="mb-12 text-center md:text-left select-none">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          06 / HACKATHONS
        </span>
        <h2 id="hackathons-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Competitions & Hackathons
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass-card border border-blue-glow/5 overflow-hidden flex flex-col md:flex-row gap-6 p-6 lg:p-8 relative"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-glow/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left Column: Certificate Badge Visual */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-6 bg-navy-950/40 rounded-xl border border-blue-glow/5 select-none text-center">
            <div className="w-16 h-16 rounded-full bg-cyan-accent/5 border border-cyan-accent/15 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(96,165,250,0.1)]">
              <Award className="w-8 h-8 text-cyan-accent" />
            </div>
            <h4 className="text-slate-100 font-bold font-heading text-base mb-1">
              Vibe With India 2.0
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-cyan-accent font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              2025/2026
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              Verified Certificate
            </span>
          </div>

          {/* Right Column: Hackathon Details */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-100 mb-2">
                Vibe With India 2.0 Hackathon
              </h3>
              
              <div className="text-xs font-semibold text-cyan-accent mb-4 uppercase tracking-wider">
                Innovation & Development Challenge
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Participated in a competitive innovation environment, collaborating with peers under tight deadlines. Strengthened technical architecture design, teamwork under pressure, rapid prototyping, and software problem-solving skills.
              </p>

              {/* Takeaway Badges */}
              <div className="flex flex-wrap gap-2 mb-6 select-none">
                <span className="skill-chip px-2.5 py-1 rounded-md text-xs font-medium text-slate-300">
                  Rapid Prototyping
                </span>
                <span className="skill-chip px-2.5 py-1 rounded-md text-xs font-medium text-slate-300">
                  Team Collaboration
                </span>
                <span className="skill-chip px-2.5 py-1 rounded-md text-xs font-medium text-slate-300">
                  Agile Problem Solving
                </span>
              </div>
            </div>

            {/* Action button */}
            <a
              href="/certificates/Hackathon participant.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg glass-button text-cyan-accent font-semibold flex items-center justify-center gap-2 hover:text-slate-100 self-start cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              View Participant Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

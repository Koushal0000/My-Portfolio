import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'internship' | 'certification';
  pdfPath: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    title: 'ServiceNow Virtual Internship Certificate',
    subtitle: 'ServiceNow University | AICTE | SmartBridge',
    date: 'May - June 2026',
    description: 'Hands-on training in ServiceNow application development, automating business workflows, scripting, and configuring service portals.',
    type: 'internship',
    pdfPath: '/certificates/Servicenow.pdf',
  },
  {
    title: 'Programming Using Java',
    subtitle: 'Infosys Springboard Certificate',
    date: 'April 2026',
    description: 'In-depth mastery of Object-Oriented Programming (OOP) concepts, collection frameworks, exception handling, and multi-threading in Java.',
    type: 'certification',
    pdfPath: '/certificates/Java Completion.pdf',
  },
  {
    title: 'Generative AI Basics & Cloud',
    subtitle: 'Google Cloud | Infosys Springboard',
    date: 'Dec 2025',
    description: 'Learned the foundational concepts of Generative AI, Large Language Models (LLMs), prompt engineering, and utilizing Google Cloud vertex tools.',
    type: 'certification',
    pdfPath: '/certificates/google certificate.pdf',
  },
  {
    title: 'Database Management Systems (DBMS)',
    subtitle: 'Infosys Springboard',
    date: 'April 2026',
    description: 'Comprehensive study of SQL query optimization, database design, normalization, transactions, and relational database systems.',
    type: 'certification',
    pdfPath: '/certificates/DBMS certificate.pdf',
  },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center md:justify-between w-full mb-12 last:mb-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Spacer or Card Container */}
      <div className="w-full md:w-[45%] hidden md:block" />

      {/* Timeline Node Point */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-navy-900 border-2 border-blue-glow flex items-center justify-center z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
        {item.type === 'internship' ? (
          <Briefcase className="w-3.5 h-3.5 text-cyan-accent" />
        ) : (
          <Award className="w-3.5 h-3.5 text-cyan-accent" />
        )}
      </div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="w-full md:w-[45%] pl-12 md:pl-0"
      >
        <div className="glass-card p-6 rounded-xl border border-blue-glow/5 relative hover:border-blue-glow/20">
          {/* Card Accent Glow Indicator */}
          <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-xl bg-gradient-to-b from-cyan-accent to-blue-glow" />

          {/* Date Label */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-accent mb-2">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </div>

          {/* Title / Subtitle */}
          <h3 className="text-lg font-bold font-heading text-slate-100 mb-1">
            {item.title}
          </h3>
          <h4 className="text-xs font-semibold text-slate-400 mb-4 tracking-wider uppercase">
            {item.subtitle}
          </h4>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Action Link to Certificate PDF */}
          <a
            href={item.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-accent hover:text-slate-100 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-glow cursor-pointer"
          >
            Verify Certificate
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="certifications" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="certifications-title"
    >
      {/* Title */}
      <div className="mb-16 text-center select-none">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          05 / TIMELINE
        </span>
        <h2 id="certifications-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Certifications & Internships
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
        {/* Central Vertical Track Line */}
        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-glow/30 via-cyan-accent/20 to-blue-glow/10" />

        {/* Timeline List */}
        <div className="flex flex-col w-full relative">
          {TIMELINE_DATA.map((item, idx) => (
            <TimelineCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

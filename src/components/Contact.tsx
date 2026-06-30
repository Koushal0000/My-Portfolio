import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Code2, 
  Award, 
  Copy, 
  Check, 
  FileText, 
  Send 
} from 'lucide-react';
import { Github, Linkedin } from './TechIcons';

const SOCIALS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/koushal-p-2440413a1/',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Koushal0000',
    icon: <Github className="w-5 h-5" />,
    color: 'hover:text-slate-100 hover:border-slate-100/30 hover:bg-slate-100/5',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/pkoushal920/',
    icon: <Code2 className="w-5 h-5" />,
    color: 'hover:text-[#FFA116] hover:border-[#FFA116]/30 hover:bg-[#FFA116]/5',
  },
  {
    name: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/koushal2b6y',
    icon: <Award className="w-5 h-5" />,
    color: 'hover:text-[#2F8D46] hover:border-[#2F8D46]/30 hover:bg-[#2F8D46]/5',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pkoushal920@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="contact-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Left Column: Info & Resume Download */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
              08 / CONTACT
            </span>
            <h2 id="contact-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mb-6">
              Let's Build Together
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I am actively looking for software engineering internship opportunities. If you have an opening, want to collaborate on a MERN/Java project, or just talk algorithms, drop me an email or connect with me on socials!
            </p>
          </div>

          {/* Secondary Resume Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start select-none">
            <a
              href="/resume/resumekoushal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg glass-button text-cyan-accent font-semibold flex items-center justify-center gap-2 hover:text-slate-100 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            
            <a
              href="mailto:pkoushal920@gmail.com"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-glow hover:bg-blue-600 text-slate-100 font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Email
            </a>
          </div>
        </div>

        {/* Right Column: Interaction Cards */}
        <div className="flex flex-col gap-4">
          {/* Email Copy Card */}
          <div 
            onClick={copyEmail}
            className="rounded-xl p-5 glass-card border border-blue-glow/5 flex items-center justify-between cursor-pointer group/email"
            role="button"
            tabIndex={0}
            aria-label="Copy pkoushal920@gmail.com to clipboard"
            onKeyDown={(e) => e.key === 'Enter' && copyEmail()}
          >
            <div className="flex items-center gap-4 select-none">
              <div className="p-3 rounded-xl bg-cyan-accent/5 border border-cyan-accent/10 text-cyan-accent group-hover/email:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-1">
                  Email Address
                </h4>
                <p className="text-slate-200 font-semibold font-heading text-sm sm:text-base">
                  pkoushal920@gmail.com
                </p>
              </div>
            </div>

            {/* Copy Icon Feedback */}
            <div className="p-2 rounded-lg bg-navy-950/60 border border-blue-glow/10 text-cyan-accent group-hover/email:text-slate-100 transition-colors">
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 font-mono text-xs font-bold select-none">
                  <Check className="w-4 h-4 animate-bounce" />
                  Copied!
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* Social Links Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {SOCIALS.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-5 glass-card border border-blue-glow/5 flex flex-col justify-between items-start gap-4 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-glow cursor-pointer ${soc.color}`}
                aria-label={`Visit P Koushal's ${soc.name} profile in a new tab`}
              >
                <div className="p-2.5 rounded-lg bg-navy-950/80 border border-blue-glow/5">
                  {soc.icon}
                </div>
                <div className="w-full flex items-center justify-between">
                  <span className="text-slate-200 text-sm font-bold font-heading">
                    {soc.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Follow
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

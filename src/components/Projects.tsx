import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ChevronRight, 
  Target, 
  Map, 
  TrendingUp, 
  LayoutDashboard, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  Database,
  Server,
  Monitor,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Github } from './TechIcons';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const GRINDPATH_SERVICES: FeatureCard[] = [
  {
    title: 'Goal Management',
    description: 'Enables learners to set daily targets and log active study hours to prevent consistency drop-offs.',
    icon: <Target className="w-5 h-5 text-cyan-accent" />,
  },
  {
    title: 'Personalized Roadmaps',
    description: 'Generates structured step-by-step topic timelines based on subject difficulty and user schedules.',
    icon: <Map className="w-5 h-5 text-cyan-accent" />,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitors task completion rates and calculates weekly target achievements with visual feedback.',
    icon: <TrendingUp className="w-5 h-5 text-cyan-accent" />,
  },
  {
    title: 'Dashboard Analytics',
    description: 'Aggregates learning metrics into a unified view for a high-level consistency summary.',
    icon: <LayoutDashboard className="w-5 h-5 text-cyan-accent" />,
  },
  {
    title: 'JWT Authentication',
    description: 'Secures user state and session tokens using secure HttpOnly browser cookies and payload validation.',
    icon: <ShieldCheck className="w-5 h-5 text-cyan-accent" />,
  },
  {
    title: 'Secure REST APIs',
    description: 'Modular routing endpoints utilizing Express router, controller isolation patterns, and CORS rules.',
    icon: <Cpu className="w-5 h-5 text-cyan-accent" />,
  },
];

export default function Projects() {
  return (
    <section 
      id="project" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="projects-title"
    >
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left select-none">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          03 / PROJECTS
        </span>
        <h2 id="projects-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {/* Project 1: GrindPath (Featured Project) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl glass-card border border-blue-glow/5 overflow-hidden flex flex-col lg:flex-row gap-8 p-6 lg:p-8"
        >
          {/* Left Column: MERN System Architecture & Service Cards */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            {/* MERN Architecture flow chart */}
            <div className="glass-card p-5 rounded-xl border border-blue-glow/5 bg-navy-950/20 select-none">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                System Architecture Flow (MERN)
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-navy-950/60 border border-blue-glow/5">
                {/* Frontend Node */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-blue-glow/10 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Monitor className="w-5 h-5 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">React client</span>
                  <span className="text-[8px] font-mono text-slate-500">Vite SPA</span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />
                
                {/* Security Middleware Node */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-[#E63946]/20 bg-navy-900/80 w-full sm:w-32 text-center relative">
                  <ShieldCheck className="w-5 h-5 text-[#E63946]" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">JWT Middleware</span>
                  <span className="text-[8px] font-mono text-slate-500">Bearer validation</span>
                </div>

                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />

                {/* Express Server Node */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-blue-glow/10 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Server className="w-5 h-5 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">Node API</span>
                  <span className="text-[8px] font-mono text-slate-500">Express router</span>
                </div>

                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />

                {/* Database Node */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-[#47A248]/20 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Database className="w-5 h-5 text-[#47A248]" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">MongoDB</span>
                  <span className="text-[8px] font-mono text-slate-500">Mongoose ODM</span>
                </div>
              </div>
            </div>

            {/* Grid of Core Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GRINDPATH_SERVICES.map((serv) => (
                <div
                  key={serv.title}
                  className="p-4 rounded-xl border border-blue-glow/5 bg-navy-950/20 flex gap-3 hover:border-blue-glow/10 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10 shrink-0 self-start">
                    {serv.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-bold text-xs font-heading mb-1">
                      {serv.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Project Details & Action Buttons */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div>
              {/* Title / Badge */}
              <div className="flex items-center gap-3 mb-2 flex-wrap select-none">
                <h3 className="text-2xl font-bold font-heading text-slate-100">
                  GrindPath
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-glow/10 border border-blue-glow/20 text-xs font-semibold text-cyan-accent">
                  Featured Product
                </span>
              </div>

              {/* Tagline */}
              <h4 className="text-sm font-semibold text-cyan-accent/80 font-heading mb-4 select-none">
                Personalized Learning & Productivity Platform
              </h4>

              {/* Overview */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                GrindPath is a production-ready, full-stack MERN application designed to help self-learners stay consistent, log targets, generate custom roadmaps, and monitor study progress through an analytics-driven interface.
              </p>

              {/* Architectural Highlights */}
              <div className="mb-6" role="list">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 select-none">
                  Core Highlights
                </h5>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <ChevronRight className="w-4 h-4 text-cyan-accent" />
                    <span>Interactive and responsive user interface</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <ChevronRight className="w-4 h-4 text-cyan-accent" />
                    <span>State synchronization with MongoDB Atlas</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <ChevronRight className="w-4 h-4 text-cyan-accent" />
                    <span>Structured controller-route-model architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <ChevronRight className="w-4 h-4 text-cyan-accent" />
                    <span>Secure environment configurations</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mb-8">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 select-none">
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT'].map((tech) => (
                    <span
                      key={tech}
                      className="skill-chip px-2.5 py-1 rounded-md text-xs font-medium text-slate-200 select-none hover:-translate-y-0.5 border border-blue-glow/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://grind-path.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-glow hover:bg-blue-600 text-slate-100 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href="https://github.com/Koushal0000/GrindPath"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg glass-button text-cyan-accent font-semibold flex items-center justify-center gap-2 hover:text-slate-100 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2: FarmVerse (Infosys Springboard Project) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl glass-card border border-blue-glow/5 overflow-hidden flex flex-col lg:flex-row-reverse gap-8 p-6 lg:p-8"
        >
          {/* Left Column (Right visual position due to flex-row-reverse): Java Backend Flow Chart */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            {/* System Flow Diagram */}
            <div className="glass-card p-5 rounded-xl border border-blue-glow/5 bg-navy-950/20 select-none">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                System Architecture Flow (Java Spring Boot)
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-navy-950/60 border border-blue-glow/5">
                {/* React Client */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-blue-glow/10 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Monitor className="w-5 h-5 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">React Frontend</span>
                  <span className="text-[8px] font-mono text-slate-500">Tailwind UX</span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />
                
                {/* Controller Gateway */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-blue-glow/10 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Server className="w-5 h-5 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">Spring REST</span>
                  <span className="text-[8px] font-mono text-slate-500">Controllers</span>
                </div>

                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />

                {/* Service Layer */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-cyan-accent/15 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Cpu className="w-5 h-5 text-cyan-accent" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">Spring Service</span>
                  <span className="text-[8px] font-mono text-slate-500">Business Logic</span>
                </div>

                <ArrowRight className="w-4 h-4 text-cyan-accent/40 hidden sm:block rotate-90 sm:rotate-0" />

                {/* Database (MySQL) */}
                <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-[#00758F]/20 bg-navy-900/80 w-full sm:w-28 text-center">
                  <Database className="w-5 h-5 text-[#00758F]" />
                  <span className="text-[10px] font-mono text-slate-300 font-bold">MySQL DB</span>
                  <span className="text-[8px] font-mono text-slate-500">Hibernate JPA</span>
                </div>
              </div>
            </div>

            {/* Core Modules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-blue-glow/5 bg-navy-950/20 flex gap-3">
                <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10 shrink-0 self-start">
                  <Target className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-xs font-heading mb-1">Precision Agriculture</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Helps farmers manage crop health records, fertilizer requirements, and custom harvesting timelines.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-blue-glow/5 bg-navy-950/20 flex gap-3">
                <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10 shrink-0 self-start">
                  <Map className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-xs font-heading mb-1">Irrigation Schedules</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Automates irrigation event planning based on crop parameters and database entries.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-blue-glow/5 bg-navy-950/20 flex gap-3">
                <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10 shrink-0 self-start">
                  <ShieldCheck className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-xs font-heading mb-1">Role-Based Access</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Protects REST endpoints using token-based Spring Security configurations for administrative functions.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-blue-glow/5 bg-navy-950/20 flex gap-3">
                <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10 shrink-0 self-start">
                  <Users className="w-5 h-5 text-cyan-accent" />
                </div>
                <div>
                  <h4 className="text-slate-200 font-bold text-xs font-heading mb-1">Team Development</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Built collaboratively using Git branches, code reviews, and structured Scrum schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Left visual position): Project Details */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <div>
              {/* Title / Badge */}
              <div className="flex items-center gap-3 mb-2 flex-wrap select-none">
                <h3 className="text-2xl font-bold font-heading text-slate-100">
                  FarmVerse
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-glow/10 border border-blue-glow/20 text-xs font-semibold text-cyan-accent flex items-center gap-1">
                  <Users className="w-3 h-3" /> Team Project
                </span>
              </div>

              {/* Tagline */}
              <h4 className="text-sm font-semibold text-cyan-accent/80 font-heading mb-4 select-none">
                Precision Agriculture Management Platform
              </h4>

              {/* Overview */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                FarmVerse is a full-stack web application designed for farmers to manage crops, schedule irrigation tasks, log fertilizing events, and secure dashboard endpoints through a Spring-based backend services architecture.
              </p>

              {/* Key Features List */}
              <div className="mb-6" role="list">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 select-none">
                  Core Highlights
                </h5>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                    <span>Developed under Infosys Springboard Internship</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                    <span>Multi-module crop and irrigation scheduler</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                    <span>Spring Security with JWT role verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-xs" role="listitem">
                    <CheckCircle2 className="w-4 h-4 text-cyan-accent" />
                    <span>Relational modeling with MySQL & Hibernate JPA</span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mb-8">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 select-none">
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT'].map((tech) => (
                    <span
                      key={tech}
                      className="skill-chip px-2.5 py-1 rounded-md text-xs font-medium text-slate-200 select-none hover:-translate-y-0.5 border border-blue-glow/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 select-none">
                Developed as a team project for Infosys Springboard.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  BrainCircuit,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';
import {
  JavaIcon,
  JavaScriptIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  MySqlIcon,
  GitIcon,
  VsCodeIcon,
  PostmanIcon,
  Github
} from './TechIcons';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'Java', icon: <JavaIcon size={16} /> },
        { name: 'JavaScript', icon: <JavaScriptIcon size={16} /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'HTML5', icon: <HtmlIcon size={16} /> },
        { name: 'CSS3', icon: <CssIcon size={16} /> },
        { name: 'React.js', icon: <ReactIcon size={16} /> },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'Node.js', icon: <NodeIcon size={16} /> },
        { name: 'Express.js', icon: <ExpressIcon size={16} /> },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'MongoDB', icon: <MongoIcon size={16} /> },
        { name: 'MySQL', icon: <MySqlIcon size={16} /> },
      ],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'Git', icon: <GitIcon size={16} /> },
        { name: 'GitHub', icon: <Github className="w-4 h-4 text-slate-300" /> },
        { name: 'VS Code', icon: <VsCodeIcon size={16} /> },
        { name: 'Postman', icon: <PostmanIcon size={16} /> },
        { name: 'Thunder Client', icon: <Globe className="w-4 h-4 text-[#7B2CBF]" /> },
        { name: 'Eclipse', icon: <JavaIcon size={16} /> },
        { name: 'MongoDB Atlas', icon: <MongoIcon size={16} /> },
      ],
    },
    {
      title: 'Core Concepts',
      icon: <BrainCircuit className="w-5 h-5 text-cyan-accent" />,
      skills: [
        { name: 'OOP', icon: <Cpu className="w-4 h-4 text-[#E76F51]" /> },
        { name: 'DSA', icon: <BrainCircuit className="w-4 h-4 text-[#457B9D]" /> },
        { name: 'REST APIs', icon: <Globe className="w-4 h-4 text-blue-glow" /> },
        { name: 'Authentication', icon: <Lock className="w-4 h-4 text-[#E63946]" /> },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="skills-title"
    >
      {/* Title */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
          02 / SKILLS
        </span>
        <h2 id="skills-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Technical Expertise
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-xl p-6 glass-card border border-blue-glow/5 relative flex flex-col justify-start"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 select-none">
              <div className="p-2 rounded-lg bg-blue-glow/5 border border-blue-glow/10">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-100">
                {category.title}
              </h3>
            </div>

            {/* Chips Container */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-chip flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-200 select-none focus:outline-none focus:ring-1 focus:ring-blue-glow"
                  role="listitem"
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

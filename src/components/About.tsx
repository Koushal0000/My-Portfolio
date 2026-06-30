import { motion } from 'framer-motion';

export default function About() {
  const codeContent = `{
  "developer": {
    "name": "P Koushal",
    "role": "Software Engineering Aspirant",
    "passion": "Building Scalable Web Apps",
    "currentFocus": [
      "Data Structures & Algorithms",
      "MERN Stack",
      "Generative AI"
    ],
    "dailyCommitment": "Problem Solving & Consistency",
    "currentCGPA": "9.2 / 10"
  }
}`;

  return (
    <section 
      id="about" 
      className="py-24 px-6 max-w-6xl mx-auto border-t border-navy-800 bg-[#0B1020]"
      aria-labelledby="about-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Bio text */}
        <div>
          <span className="text-xs uppercase tracking-widest text-cyan-accent font-semibold mb-2 block font-heading">
            01 / ABOUT ME
          </span>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mb-6">
            Transforming Ideas Into Scalable Solutions
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            I'm a Software Engineering enthusiast passionate about building impactful web applications and solving real-world problems through technology. My primary focus lies in Java development, full-stack web development, and Data Structures & Algorithms.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I enjoy transforming ideas into scalable software solutions while continuously exploring modern technologies and improving my problem-solving abilities.
          </p>
        </div>

        {/* Right Side: Code Card */}
        <div className="relative group">
          {/* Card Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-glow to-cyan-accent rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300" />
          
          <div className="relative w-full rounded-xl glass-card overflow-hidden">
            {/* Editor Top Bar */}
            <div className="bg-navy-950/80 px-4 py-3 flex items-center justify-between border-b border-blue-glow/5 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-slate-500 text-xs font-mono">focus.json</span>
              <div className="w-12" /> {/* Spacer */}
            </div>
            
            {/* Code Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0E162A]/30">
              <pre className="text-slate-300">
                {codeContent.split('\n').map((line, idx) => {
                  // Basic syntax highlighting rendering logic
                  let renderedLine = <span>{line}</span>;
                  
                  if (line.includes(':')) {
                    const parts = line.split(':');
                    const key = parts[0];
                    const val = parts.slice(1).join(':');
                    
                    renderedLine = (
                      <span>
                        <span className="text-cyan-accent">{key}</span>:
                        <span className="text-blue-300">{val}</span>
                      </span>
                    );
                  }

                  return (
                    <div key={idx} className="flex">
                      <span className="text-slate-600 w-8 select-none text-right pr-4 text-xs">{idx + 1}</span>
                      {renderedLine}
                    </div>
                  );
                })}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

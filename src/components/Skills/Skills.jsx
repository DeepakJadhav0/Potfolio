import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", info: "UI Library", color: "#61DAFB", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "MongoDB", info: "NoSQL DB", color: "#47A248", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Express", info: "Node Framework", color: "#ffffff", logo: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "Node.js", info: "Runtime", color: "#339933", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "TypeScript", info: "Typed JS", color: "#3178C6", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", info: "Core Language", color: "#F7DF1E", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Python", info: "General Purpose", color: "#3776AB", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "SQL", info: "Structured Data", color: "#CC6699", logo: "https://cdn.simpleicons.org/mysql/CC6699" },
  { name: "Docker", info: "Containerization", color: "#2496ED", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Postman", info: "API Testing", color: "#FF6C37", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "GitHub", info: "Version Control", color: "#ffffff", logo: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "Tailwind", info: "Utility CSS", color: "#06B6D4", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

const SkillCard = ({ skill, index }) => {
  // UseMemo to prevent re-calculating styles on every render
  const glowStyle = useMemo(() => ({
    background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
  }), [skill.color]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 overflow-hidden transform-gpu"
    >
      {/* 1. Static Ambient Glow (Visible but subtle) */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
        style={glowStyle}
      />

      {/* 2. Logo Container */}
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Soft Halo */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-10 group-hover:opacity-30 animate-pulse"
          style={{ backgroundColor: skill.color }}
        />
        <img 
          src={skill.logo} 
          alt={skill.name} 
          loading="lazy" 
          className="w-10 h-10 relative z-10 filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300" 
        />
      </div>

      {/* 3. Text Section */}
      <div className="text-center z-10">
        <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-1">
          {skill.name}
        </h3>
        {/* Info is now slightly visible by default for better UX */}
        <p className="text-slate-500 text-[10px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
          {skill.info}
        </p>
      </div>

      {/* 4. Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
      />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-12 px-6 bg-[#030303] overflow-hidden">
      {/* Background Decor - Blue/Yellow Nebula matching your Hero */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 text-[10px] font-bold tracking-[0.5em] uppercase block mb-4"
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Skills</span>
          </h2>
          <div className="h-0.5 w-16 bg-yellow-500 mx-auto mt-6" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
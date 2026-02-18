import React from 'react';
import { GraduationCap, School, BookOpen, Terminal } from 'lucide-react';

const educationData = [
  {
    type: "Certification",
    title: "Full Stack Web Development",
    institution: "Naresh i Technologies",
    date: "2025 - Present",
    status: "Ongoing",
    desc: "Intensive training on MERN stack, Java, and modern web architectures.",
    icon: <Terminal className="text-yellow-400" size={20} />
  },
  {
    type: "Degree",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Sant Gajanan Maharaj College of Engineering",
    date: "2021 - 2025",
    status: "Completed",
    desc: "Focused on Software Engineering, Data Structures, and Database Management.",
    icon: <GraduationCap className="text-yellow-400" size={20} />
  },
  {
    type: "Higher Secondary",
    title: "12th Grade (HSC)",
    institution: "Junior College, Gadhinglaj",
    date: "2019 - 2021",
    status: "Completed",
    desc: "Science Stream with a focus on Mathematics and Computer Science.",
    icon: <School className="text-yellow-400" size={20} />
  },
  {
    type: "Secondary",
    title: "10th Grade (SSC)",
    institution: "High School, Gadhinglaj",
    date: "2018 - 2019",
    status: "Completed",
    desc: "General secondary education with a strong foundation in Science.",
    icon: <BookOpen className="text-yellow-400" size={20} />
  }
];

export default function EducationJourney() {
  return (
    <section id="education" className="py-16 md:py-24 bg-[#030303] px-4 sm:px-6">
      <div className="max-w-4xl mx-auto"> {/* Changed mx-20 to mx-auto */}
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-yellow-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4">
            Academic Background
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
            Education
          </h1>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 md:space-y-8 relative">
          {/* Vertical Track - Adjusted for mobile position */}
          <div className="absolute left-[20px] md:left-[26px] top-2 bottom-2 w-[1px] bg-white/10" />

          {educationData.map((edu, idx) => (
            <div key={idx} className="relative pl-12 md:pl-16 group">
              
              {/* Timeline Icon Node - Scaled for mobile */}
              <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 bg-[#0a0a0a] border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center z-10 group-hover:border-yellow-400/50 transition-colors shadow-xl">
                <div className="scale-75 md:scale-100">
                  {edu.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-[#0a0a0a] border border-white/5 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-white/20 transition-all duration-500 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-2">
                  <div>
                    <span className="text-yellow-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest block mb-1">
                      {edu.type} • {edu.date}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight">
                      {edu.title}
                    </h3>
                  </div>
                  
                  {edu.status === "Ongoing" && (
                    <span className="px-2 py-0.5 md:px-3 md:py-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[9px] md:text-[10px] font-bold rounded-full animate-pulse w-fit">
                      {edu.status}
                    </span>
                  )}
                </div>

                <p className="text-white/60 font-medium text-xs md:text-base mb-2">
                  {edu.institution}
                </p>
                <p className="text-white/30 text-[11px] md:text-sm leading-relaxed max-w-2xl italic">
                  "{edu.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
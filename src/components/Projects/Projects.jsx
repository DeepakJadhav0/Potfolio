import React, { useEffect, useRef, useState, memo } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Task Manager App",
    role: "Full Stack Project",
    date: "July 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771318817/VID_20260217_124828_pyxk5f.webm",
    desc: "A modern MERN-stack task manager for productivity and workflow management.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/DeepakJadhav0/TaskManager",
    live: ""
  },
  {
    title: "PokeDex",
    role: "React and Axios Project",
    date: "Aug 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771321039/VID_20260217_124841_j7acjg.webm",
    desc: "A web project displaying Pokémon information by fetching data from the PokéAPI.",
    tech: ["React", "Axios", "JavaScript"],
    github: "https://github.com/DeepakJadhav0/PokeDex",
    live: ""
  },
  {
    title: "Recipe Book",
    role: "React Project",
    date: "Sept 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771318820/VID_20260217_124836_uy5q9h.webm",
    desc: "A simple web app that displays recipes information by fetching data from an online API.",
    tech: ["React", "Axios", "JavaScript"],
    github: "https://github.com/DeepakJadhav0/RecipeBook",
    live: ""
  },
  {
    title: "Shopyee",
    role: "Full Stack Project",
    date: "Oct 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771318820/VID_20260217_124853_xtfcmj.webm",
    desc: "A shopping platform featuring product listings and dynamic data fetching.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/DeepakJadhav0/Shopyee",
    live: ""
  },
  {
    title: "ShopCart",
    role: "Full Stack Project",
    date: "Dec 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771318820/VID_20260217_124848_ogudnz.webm",
    desc: "A full-stack e-commerce platform with a self-developed shopping API.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/DeepakJadhav0/ShopCart",
    live: ""
  },
  {
    title: "E-Waste Locator",
    role: "Full Stack Project",
    date: "Jan 2025",
    video: "https://res.cloudinary.com/ddfvm5qgv/video/upload/v1771323144/VID_20260217_124900_cvsdst.webm",
    desc: "A MERN application helping users locate e-waste recycling centers nearby.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/DeepakJadhav0/Elocator",
    live: ""
  }
];


const ProjectItem = memo(({ proj, idx }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    }, { threshold: 0.2 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = idx % 2 === 0;

  return (
    <div 
      ref={domRef}
      className={`relative flex items-center transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:translate-y-16'
      }`}
    >
      {/* Glow Timeline Dot */}
      <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-20 border-4 border-[#030303] bg-yellow-400 shadow-[0_0_20px_#eab308] transition-transform duration-700 delay-500 ${
        isVisible ? 'scale-100' : 'scale-0'
      }`} />

      {/* Content Card */}
      <div className={`w-full ml-12 md:ml-0 md:w-[46%] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
        <div className="relative h-[280px] md:h-[320px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/20 group hover:border-yellow-400/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-[#111]">
          
          {/* Background Video - Increased Opacity */}
          <video 
            ref={videoRef}
            muted loop playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-50 group-hover:opacity-70 transition-opacity duration-700"
          >
            <source src={proj.video} type={proj.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
          </video>

          {/* Brighter Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-0 p-5 md:p-8 w-full z-10">
            <div className={`flex justify-between items-start mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <div className={isEven ? 'md:pl-4' : 'pr-4'}>
                <span className="text-[9px] md:text-[10px] font-mono text-yellow-400 font-bold uppercase tracking-[0.2em]">{proj.date}</span>
                <h3 className="text-lg md:text-2xl font-black text-white tracking-tighter uppercase leading-tight shadow-black drop-shadow-md">{proj.title}</h3>
              </div>
              
              <div className="flex gap-2 md:gap-3 shrink-0">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-yellow-400 hover:text-black transition-all active:scale-90 shadow-xl">
                  <Github size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-yellow-400 hover:text-black transition-all active:scale-90 shadow-xl">
                    <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-yellow-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">{proj.role}</h4>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4 md:mb-6 font-medium">"{proj.desc}"</p>
            
            <div className={`flex flex-wrap gap-1.5 md:gap-2 ${isEven ? 'md:justify-end' : ''}`}>
              {proj.tech.map(t => (
                <span key={t} className="text-[8px] md:text-[9px] font-bold font-mono text-white bg-white/10 px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function OptimizedVideoJourney() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#030303] px-4 md:px-6 selection:bg-yellow-400/30 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-yellow-400 font-mono text-xs md:text-sm uppercase tracking-[0.5em] mb-4 text-center md:text-left">Work & Build</h2>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none text-center md:text-left">
            PROJECTS
          </h1>
        </div>

        {/* The HIGH VISIBILITY Neon Line */}
        <div className="absolute left-4 md:left-1/2 top-[180px] bottom-0 w-[2px]">
          <div className="h-full w-full bg-yellow-400 shadow-[0_0_20px_#eab308,0_0_40px_#eab308] opacity-80" />
          <div className="absolute inset-0 w-full h-full bg-yellow-500 blur-lg opacity-40 animate-pulse" />
        </div>

        {/* Reduced spacing between cards */}
        <div className="space-y-16 md:space-y-28">
          {projects.map((proj, idx) => (
            <ProjectItem key={proj.title} proj={proj} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
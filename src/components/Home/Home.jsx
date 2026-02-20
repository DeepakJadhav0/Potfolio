import React from 'react';
import Navbar from '../navbar/Navbar';
import mypic from "../../assets/mypic-removebg-preview.webp";

// --- 1. BACKGROUND ELEMENT ---
const NebulaBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-[130px]"></div>
  </div>
);

// --- 2. IMAGE SECTION ---
const HeroImage = ({ src }) => (
  <div className="relative flex-shrink-0 group scale-75 md:scale-90 lg:scale-100 transition-transform duration-500">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[380px] md:h-[380px] rounded-full bg-yellow-400/10 blur-[60px] pointer-events-none"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[360px] md:h-[360px] border-[2px] border-yellow-400/30 rounded-full animate-[spin_40s_linear_infinite]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[360px] md:h-[360px] border-t-[5px] border-r-[5px] border-yellow-400 rounded-full animate-[spin_25s_linear_infinite] 
                    shadow-[0_0_40px_rgba(250,204,21,0.6),inset_0_0_20px_rgba(250,204,21,0.2)]"></div>

    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-end justify-center">
      <div className="absolute bottom-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-zinc-800 to-black rounded-full border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(250,204,21,0.2),transparent)] rounded-full"></div>
      </div>
      <div className="absolute bottom-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10">
        <img 
          src={src} 
          alt="Deepak Jadhav" loading="eager" 
          
  fetchpriority="high"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] max-w-none grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 w-64 h-80 md:w-80 md:h-[450px] pointer-events-none z-20">
        <img 
          src={src} 
          alt="" 
          loading="eager" 
  fetchpriority="high"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] max-w-none grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} 
        />
      </div>
      <div className="absolute bottom-4 w-40 h-8 bg-black/90 blur-2xl rounded-full z-0 mx-auto"></div>
    </div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-black/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
       <p className="text-[9px] text-white font-mono tracking-[0.2em] uppercase flex items-center gap-1.5 whitespace-nowrap">
         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Hyderabad, India
       </p>
    </div>
  </div>
);

// --- 3. TEXT CONTENT SECTION ---
const HeroContent = () => (
  <div className="flex-1 text-center lg:text-left px-4 md:px-0">
    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
      Full Stack Developer
    </div>

    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-2">
      <span className="relative inline-block">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500">
         It's Deepak Jadhav
        </span>
        <span className="absolute inset-0 skeleton-glow text-transparent">
         Its Deepak Jadhav
        </span>
        <span className="absolute inset-0 blur-2xl bg-yellow-400/10 -z-10 animate-pulse"></span>
      </span>
    </h1>
    
    <h4 className="text-lg  md:text-xl lg:text-2xl text-slate-400 font-medium mb-10">
      MERN Stack Specialist <span className="text-white/20 mx-1">|</span> B.Tech CSE Student
    </h4>

    <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mb-12 italic border-l-4 border-yellow-400/30 pl-6 mx-auto lg:mx-0 text-left">
      "I craft responsive, cutting-edge web applications that combine clean design with intuitive UX, backed by deep expertise in Node.js, MongoDB, SQL, REST APIs, LLM integration, and end-to-end deployment.”
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
      <button  className="w-full sm:w-auto px-10 py-4 bg-yellow-400 text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(234,179,8,0.2)]">
       <a href="./DeepakJadhav_MERN.pdf" download>
        Download Resume
       </a>
      </button>
      <a href="#projects" className="text-white hover:text-yellow-400 font-bold text-sm tracking-widest uppercase transition-colors py-2">
        View Projects —
      </a>
    </div>
  </div>
);


// --- MAIN HOME COMPONENT ---
export default function Home() {
  return (
    <div id='home' className="relative w-full min-h-screen bg-[#030303] overflow-x-hidden font-sans selection:bg-yellow-400/30">
      <Navbar />
      <NebulaBackground />
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 lg:pt-48 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        <HeroImage src={mypic} />
        <HeroContent />
      </main>
    </div>
  );
}
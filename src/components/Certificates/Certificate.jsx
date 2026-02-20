import React from 'react';
import { ExternalLink } from 'lucide-react';

const certificates = [
  { id: 1, name: "C++", issuer: "W3Schools", date: "2024", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771604092/1771600964880_bs2aoi.png" },
  { id: 2, name: "HTML & CSS", issuer: "SimplyLearn", date: "2024", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603701/Picsart_26-02-20_21-31-03-822_k1ieji.jpg" },
  { id: 3, name: "JavaScript junior developer", issuer: "Certificates.dev", date: "2024", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603700/Picsart_26-02-20_21-33-28-365_uvtcp1.jpg" },
  { id: 4, name: "JavaScript Algorithms", issuer: "freeCodeCamp", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603669/1771603101594_ki02ot.png" },
  { id: 5, name: "React Basics", issuer: "W3Schools", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603669/1771603120546_iuvnt5.png" },
  { id: 6, name: "React Junior Developer", issuer: "Certificates.dev", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603700/Picsart_26-02-20_21-34-10-427_ee6h07.jpg" },
  { id: 7, name: "React Mid-Level", issuer: "Certificates.dev", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603701/Picsart_26-02-20_21-34-48-197_uve7us.jpg" },
  { id: 8, name: "Node.js", issuer: "SimplyLearn", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603702/Picsart_26-02-20_21-35-53-838_xc9w2c.jpg" },
  { id: 9, name: "MongoDB", issuer: "W3Schools", date: "2025", image: "https://res.cloudinary.com/ddfvm5qgv/image/upload/v1771603669/1771603123420_czug4d.png" },
];

const CertCard = ({ cert }) => (
  <div className="flex-shrink-0 w-[240px] md:w-[350px] group cursor-pointer">
    {/* Frame */}
    <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 transition-all duration-700 group-hover:border-yellow-400/30 shadow-2xl">
      <img 
        src={cert.image} 
        alt={cert.name} 
        loading="lazy"
        className="w-full h-full object-contain p-3 md:p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      
      {/* Overlay - Touch friendly for mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
         <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-yellow-400 font-mono text-[8px] md:text-[10px] uppercase tracking-widest mb-1">{cert.issuer}</p>
            <h4 className="text-white font-bold text-sm md:text-lg leading-tight mb-2 md:mb-4">{cert.name}</h4>
            <div className="flex justify-between items-center border-t border-white/10 pt-3 md:pt-4">
               <span className="text-white/40 text-[8px] md:text-[10px] font-mono">{cert.date}</span>
            </div>
         </div>
      </div>
    </div>
    
    {/* Caption */}
    <div className="mt-3 md:mt-4 px-1 transition-opacity duration-500 group-hover:opacity-20">
      <h4 className="text-white/90 text-[10px] md:text-[11px] font-bold truncate uppercase tracking-[0.1em]">{cert.name}</h4>
      <p className="text-white/30 text-[8px] md:text-[9px] font-mono mt-0.5">{cert.issuer}</p>
    </div>
  </div>
);

const CertificateGrid = () => {
  const row1 = [...certificates.slice(0, 5), ...certificates.slice(0, 5)];
  const row2 = [...certificates.slice(5, 9), ...certificates.slice(5, 9)];

  return (
    <section id='certificates' className="py-16 md:py-32 bg-[#030303] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-12 md:mb-20 text-center md:text-left">
        <h2 className="text-yellow-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-3 md:mb-4">Credentials</h2>
        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
          Certificates
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-yellow-500/20 via-transparent to-transparent mt-6 md:mt-8" />
      </div>

      <div className="relative space-y-8 md:space-y-16 mask-fade-edges">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left gap-6 md:gap-10 py-2">
            {row1.map((cert, i) => <CertCard key={`r1-${i}`} cert={cert} />)}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-right gap-6 md:gap-10 py-2">
            {row2.map((cert, i) => <CertCard key={`r2-${i}`} cert={cert} />)}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.25rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1.25rem)); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left { 
          animation: scroll-left 40s linear infinite; 
          will-change: transform;
        }
        .animate-scroll-right { 
          animation: scroll-right 35s linear infinite; 
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .animate-scroll-left { animation-duration: 25s; }
          .animate-scroll-right { animation-duration: 20s; }
        }

        .animate-scroll-left:hover, .animate-scroll-right:hover { 
          animation-play-state: paused; 
        }
      `}} />
    </section>
  );
};

export default CertificateGrid;
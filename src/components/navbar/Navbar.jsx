import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ['Home', 'Skills', 'Projects', 'Contact','Education'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="group cursor-pointer">
          <h1 className="text-white text-2xl font-black tracking-tighter transition-all group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Deepak <span className="text-yellow-400">J.</span>
          </h1>
          <div className="h-0.5 w-0 bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full shadow-2xl">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all rounded-full hover:bg-white/10"
            >
              {item}
            </a>
          ))}

          <button onClick={() => window.location.href = '#certificates'} className="ml-2 px-6 py-2 text-xs font-black uppercase tracking-widest bg-white text-black rounded-full hover:bg-yellow-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Certificates
          </button>
        </div>


        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 flex flex-col gap-1.5 p-2 focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 h-screen bg-[#030303]/98 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center gap-8 z-40 transition-all duration-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white hover:text-yellow-400 transition-colors tracking-tighter"
            >
              {item}
            </a>
          ))}

          <button className="px-10 py-4 bg-yellow-400 text-black font-black rounded-full text-lg shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
            Certificates
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

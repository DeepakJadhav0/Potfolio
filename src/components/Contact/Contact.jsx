import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Copy, Check } from 'lucide-react';

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = "deepakjadhav0@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#030303] px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <h2 className="text-yellow-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em]">
              Get In Touch
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9] md:leading-none">
              Let's Build <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                Something Great
              </span>
            </h1>
            <p className="text-white/50 text-sm md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              I'm currently looking for new opportunities in MERN Stack development. 
              Drop a message if you'd like to collaborate!
            </p>
          </div>

          {/* Right Side: Interactive Card */}
          <div className="relative group w-full max-w-[450px] mx-auto lg:max-w-none">
            {/* Animated Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-[2rem] md:rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000" />
            
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
              
              {/* Email Slot */}
              <div className="mb-8 md:mb-10">
                <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4">
                  Direct Mail
                </p>
                <div 
                  onClick={copyToClipboard}
                  className="flex items-center justify-between bg-white/5 border border-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer hover:bg-white/10 hover:border-yellow-400/30 transition-all group/mail active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                    <div className="p-2 md:p-3 bg-yellow-400/10 rounded-lg md:rounded-xl text-yellow-400 shrink-0">
                      <Mail size={18} className="md:w-5 md:h-5" />
                    </div>
                    <span className="text-white font-medium text-xs md:text-base truncate">
                      {email}
                    </span>
                  </div>
                  <div className="text-white/30 group-hover/mail:text-yellow-400 transition-colors shrink-0 ml-2">
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4">
                Social Profiles
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <a 
                  href="https://linkedin.com/in/deepak-jadhav-53b475255" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-white/5 border border-white/5 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all text-white group active:scale-95"
                >
                  <Linkedin size={18} className="md:w-5 md:h-5 group-hover:text-[#0077b5]" />
                  <span className="text-xs md:text-sm font-bold">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/DeepakJadhav0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-white/5 border border-white/5 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-yellow-400/50 transition-all text-white group active:scale-95"
                >
                  <Github size={18} className="md:w-5 md:h-5 group-hover:text-yellow-400" />
                  <span className="text-xs md:text-sm font-bold">GitHub</span>
                </a>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/918626023303" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 md:gap-3 bg-yellow-400 py-3 md:py-4 rounded-xl md:rounded-2xl text-[#030303] font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-lg active:scale-95"
              >
                <MessageSquare size={16} className="md:w-[18px] md:h-[18px]" />
                Start Chatting
              </a>

            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Text */}
      <div className="mt-20 md:mt-32 text-center border-t border-white/5 pt-8 md:pt-12">
        <p className="text-white/20 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.3em] md:tracking-[0.5em]">
          Designed & Built by Deepak Jadhav © 2026
        </p>
      </div>
    </section>
  );
}
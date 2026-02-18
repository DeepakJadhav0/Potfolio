import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaChevronRight, FaDownload } from "react-icons/fa";

const PortfolioClone = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">Deepak J.</a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            {['Home', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar Profile */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full rounded-2xl bg-blue-100 flex items-center justify-center overflow-hidden">
                <div className="text-blue-600 font-bold text-3xl">DJ</div>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Deepak Jadhav</h2>
              <div className="flex items-center justify-center text-gray-500 text-sm gap-1">
                <FaMapMarkerAlt size={14} /> Gadhinglaj / Hyderabad, India
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-50">
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                <FaRegCalendarAlt size={18} /> Let's Connect <FaChevronRight size={18} />
              </button>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-50 rounded-lg hover:text-blue-600 transition">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <section className="lg:col-span-8 space-y-20">
          
          {/* Hero Content */}
          <div id="home" className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Hi, I'm Deepak. <br />
              <span className="text-blue-600 text-4xl">MERN Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A passionate Full-Stack Developer with a B.Tech in CSE. I build robust 
              web applications using MongoDB, Express, React, and Node.js, focusing 
              on clean architecture and seamless user experiences.
            </p>
            <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition">
              Download Resume <FaDownload size={18} />
            </button>
          </div>

          {/* Skills Section */}
          <div id="skills" className="space-y-8">
            <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Frontend', list: 'React, Redux, Tailwind CSS, JavaScript' },
                { title: 'Backend', list: 'Node.js, Express.js, JWT, REST APIs' },
                { title: 'Database', list: 'MongoDB, SQL, Mongoose' },
                { title: 'Tools', list: 'Git, VS Code, Postman' }
              ].map((skill) => (
                <div key={skill.title} className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-blue-600 mb-2">{skill.title}</h4>
                  <p className="text-gray-600 text-sm">{skill.list}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="space-y-8">
            <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Featured Projects</h3>
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  name: 'ELocate: E-Waste Locator',
                  desc: 'A full-stack MERN platform for locating e-waste facilities with interactive maps.',
                  tech: ['React', 'Node.js', 'MongoDB', 'Leaflet']
                },
                {
                  name: 'Student Management System',
                  desc: 'Comprehensive dashboard for academic tracking and administrative operations.',
                  tech: ['MERN', 'JWT Auth', 'Tailwind']
                }
              ].map((proj) => (
                <div key={proj.name} className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-lg transition">
                  <div className="h-48 bg-slate-100"></div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-2">{proj.name}</h4>
                    <p className="text-gray-600 mb-6 text-sm">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tech.map(t => <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">{t}</span>)}
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600">
                      View Source Code <FaChevronRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education" className="space-y-8">
            <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Education</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold">B.Tech - Computer Science & Engineering</h4>
                  <p className="text-gray-500 text-sm">Sant Gajanan Maharaj College of Engineering</p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">2021 - 2025</span>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-500 text-sm">
        <p>© 2026 Deepak Jadhav. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioClone;

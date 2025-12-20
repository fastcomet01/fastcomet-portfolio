
import React, { useState } from 'react';
import { PROJECTS, FAQ_ITEMS, SERVICES, TECHNICAL_SKILLS } from '../constants';
import LiquidBackground from '../components/LiquidBackground';

const Home: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
      <LiquidBackground />

      {/* Persistent UI Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Frame lines */}
        <div className="absolute top-12 left-12 bottom-12 border-l border-white/5 w-1"></div>
        <div className="absolute top-12 right-12 bottom-12 border-r border-white/5 w-1"></div>
        <div className="absolute top-12 left-12 right-12 border-t border-white/5 h-1"></div>
        <div className="absolute bottom-12 left-12 right-12 border-b border-white/5 h-1"></div>
      </div>

      {/* Top Navigation */}
      <div className="absolute top-8 left-6 right-6 md:left-12 md:right-12 flex justify-between items-center z-30">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center text-xs font-serif font-bold bg-black/40 backdrop-blur-md text-white">FC</div>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] text-white font-bold uppercase mb-1.5">fastcomet</span>
            <div className="flex items-center gap-4 pointer-events-auto">
              <a 
                href="mailto:nme3015@gmail.com" 
                className="text-white/30 hover:text-neon-cyan transition-all duration-300 hover:scale-110" 
                title="Gmail"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a 
                href="https://github.com/fastcomet01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-neon-pink transition-all duration-300 hover:scale-110" 
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/ivansmirnov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/30 hover:text-neon-cyan transition-all duration-300 hover:scale-110" 
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-8 pointer-events-auto items-center">
          <button 
            onClick={() => setShowAbout(!showAbout)}
            className={`text-lg md:text-xl tracking-[0.3em] md:tracking-[0.4em] font-bold transition-all border-b-2 border-transparent hover:border-white ${showAbout ? 'text-neon-pink border-neon-pink' : 'text-white/60 hover:text-white'}`}
          >
            {showAbout ? 'CLOSE' : 'ABOUT'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-6"
           style={{ opacity: showAbout ? 0.05 : 1, transform: showAbout ? 'scale(0.92)' : 'scale(1)' }}>
        <div className="animate-float flex flex-col items-center text-center">
          <div className="mb-4 md:mb-6 px-4 py-1.5 glass-panel rounded-full border border-neon-cyan/30 text-[8px] md:text-[9px] tracking-[0.5em] text-neon-cyan font-bold uppercase backdrop-blur-xl">
            AI Engineer + UI/UX Designer
          </div>
          <h1 className="text-5xl md:text-[110px] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-6 md:mb-8 neon-text-glow uppercase">
            Ivan <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink">Smirnov</span>
          </h1>
          <p className="text-base md:text-xl font-sans text-secondary-text max-w-xl mx-auto leading-relaxed font-light mb-12">
            Building autonomous systems and high-fidelity interfaces that bridge logic and intuition.
          </p>
        </div>
      </div>

      {/* About Overlay */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/95 backdrop-blur-3xl animate-fade-in overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl w-full glass-panel relative overflow-hidden bg-black/80 rounded-xl md:rounded-3xl border border-white/10 flex flex-col h-auto max-h-full shadow-[0_0_100px_rgba(0,245,212,0.1),0_0_100px_rgba(255,46,110,0.1)]">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-cyan via-white to-neon-pink"></div>
             
             {/* Header with Stylish Minimalist Back Arrow */}
             <div className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl p-6 md:px-12 md:py-8 border-b border-white/5 flex justify-between items-center">
                <button 
                  onClick={() => setShowAbout(false)}
                  className="flex items-center gap-6 group text-white hover:text-neon-cyan transition-all"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    {/* Futuristic HUD Ticks */}
                    <div className="absolute -inset-1 border border-white/5 opacity-20 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/40 group-hover:bg-neon-cyan"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/40 group-hover:bg-neon-cyan"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/40 group-hover:bg-neon-pink"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/40 group-hover:bg-neon-pink"></div>
                    </div>

                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transform group-hover:-translate-x-2 transition-transform duration-500">
                      <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"/>
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-bold text-white/40 group-hover:text-white transition-colors">Back to Portfolio</span>
                </button>
                <div className="hidden md:flex flex-col items-end">
                  <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-widest">Profile_Registry</h2>
                  <p className="text-neon-pink text-[9px] tracking-[0.4em] font-mono uppercase">Version 2.5 // CORE_OS</p>
                </div>
             </div>

             {/* Scrollable Content */}
             <div className="p-6 md:p-12 overflow-y-auto space-y-16 md:space-y-24 scroll-smooth">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  {/* Left Column: Essential Info */}
                  <div className="lg:col-span-5 space-y-12">
                    <section className="space-y-6">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-neon-cyan font-bold border-b border-neon-cyan/10 pb-4">Contact_Nodes</h3>
                      <div className="grid gap-3">
                        {[
                          { label: 'E-MAIL', val: 'nme3015@gmail.com', link: 'mailto:nme3015@gmail.com', color: 'neon-cyan' },
                          { label: 'TEL', val: '+44 7311 609905', link: 'tel:+447311609905', color: 'neon-pink' },
                          { label: 'LINKEDIN', val: 'ivansmirnov', link: 'https://linkedin.com/in/ivansmirnov', color: 'neon-cyan' },
                          { label: 'GITHUB', val: 'fastcomet01', link: 'https://github.com/fastcomet01', color: 'neon-pink' }
                        ].map((item) => (
                          <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group overflow-hidden relative">
                            <div className={`absolute top-0 left-0 w-[2px] h-full ${item.color === 'neon-cyan' ? 'bg-neon-cyan' : 'bg-neon-pink'} opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 block mb-1">{item.label}</span>
                            <span className="text-sm md:text-base text-white font-medium block group-hover:translate-x-1 transition-transform truncate">{item.val}</span>
                          </a>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-neon-pink font-bold border-b border-neon-pink/10 pb-4">Operational_Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {SERVICES.map((s) => (
                          <div key={s.name} className="flex items-center justify-between py-3 border-b border-white/[0.03] group px-2 hover:bg-white/[0.02] transition-colors">
                            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">{s.name}</span>
                            <span className="text-neon-cyan group-hover:rotate-90 transition-transform duration-500">✦</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-neon-cyan font-bold border-b border-neon-cyan/10 pb-4">Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {TECHNICAL_SKILLS.map((skill, idx) => (
                          <span key={skill} className={`px-4 py-2 bg-white/[0.03] border border-white/10 text-[9px] md:text-[10px] uppercase tracking-widest font-mono transition-all hover:scale-105 ${idx % 2 === 0 ? 'text-neon-cyan border-neon-cyan/20' : 'text-neon-pink border-neon-pink/20'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:col-span-7 space-y-16 md:space-y-24">
                    <section className="space-y-10 pt-6">
                      <div className="text-lg md:text-xl text-white/60 leading-[1.8] font-light space-y-8">
                        <p className="border-l-2 border-neon-cyan/30 pl-8 hover:border-neon-cyan transition-colors">
                          I'm currently a university student pursuing <span className="text-white font-medium">Computer Systems Engineering</span>, where my journey began with coding in Python, focusing on algorithms and data structures.
                        </p>
                        <p className="border-l-2 border-neon-pink/30 pl-8 hover:border-neon-pink transition-colors">
                          During my internships I picked up practical knowledge of system design, cloud architecture, and the use of different development frameworks, which gave me a broader perspective on building <span className="text-white">scalable and efficient solutions</span>.
                        </p>
                        <p className="border-l-2 border-neon-cyan/30 pl-8 hover:border-neon-cyan transition-colors">
                          I also grew curious about <span className="text-white">UI/UX design and startups</span>, interested by how functionality and simplicity can be combined to create meaningful user experiences while also proving ideas in the real market.
                        </p>
                        <p className="border-l-2 border-neon-pink/30 pl-8 hover:border-neon-pink transition-colors">
                          With a focus on <span className="text-neon-pink font-bold">AI and machine learning</span>, I explore how autonomous tools can reshape our interaction with digital environments.
                        </p>
                      </div>
                    </section>

                    <section className="space-y-10">
                      <h3 className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold border-b border-white/5 pb-4">FAQ</h3>
                      <div className="space-y-12">
                        {FAQ_ITEMS.map((item, idx) => (
                          <div key={idx} className="space-y-4 group">
                            <div className="flex items-center gap-4">
                              <span className={`w-1.5 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-neon-cyan shadow-[0_0_8px_#00F5D4]' : 'bg-neon-pink shadow-[0_0_8px_#FF2E6E]'}`}></span>
                              <h4 className="text-white font-bold tracking-tight text-xl group-hover:text-neon-cyan transition-colors">{item.question}</h4>
                            </div>
                            <p className="text-sm md:text-base text-white/40 leading-[1.7] font-light pl-6 border-l border-white/5">
                              {item.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                {/* Footer Section in Overlay */}
                <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
                  <div className="flex gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon-cyan rounded-full"></span>
                      LOC // LON_GMT
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-neon-pink rounded-full"></span>
                      COORD // 51.5074° N
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] italic">
                    PRODUCED_BY_FASTCOMET_STUDIOS // 2024
                  </span>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Bottom Horizontal Scroller (Project Dock) */}
      <div className="absolute bottom-16 md:bottom-20 left-6 right-6 md:left-12 md:right-12 z-30 pointer-events-none">
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-[8px] md:text-[9px] tracking-[0.5em] text-white/40 uppercase">Selected Projects // 01-06</span>
          <div className="flex gap-1.5 md:gap-2">
            {PROJECTS.map((_, i) => (
              <div key={i} className={`h-[1px] transition-all duration-500 ${activeProject === i ? 'bg-neon-cyan w-10 md:w-16' : 'bg-white/10 w-4 md:w-8'}`}></div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 md:gap-4 pointer-events-auto overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
          {PROJECTS.map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target={project.link.startsWith('http') ? "_blank" : "_self"}
              onMouseEnter={() => setActiveProject(idx)}
              className={`flex-shrink-0 w-56 md:w-64 p-5 md:p-6 glass-panel text-left transition-all duration-500 border-t-2 ${
                activeProject === idx 
                ? 'border-neon-cyan scale-100 opacity-100 shadow-[0_-10px_30px_rgba(0,245,212,0.15)]' 
                : 'border-transparent scale-95 opacity-30 grayscale hover:opacity-60'
              }`}
            >
              <span className="text-[9px] md:text-[10px] font-mono text-neon-cyan/60 block mb-2">{project.index}</span>
              <h3 className="text-base md:text-lg font-serif font-bold text-white mb-1 uppercase tracking-tight">{project.name}</h3>
              <p className="text-[9px] md:text-[10px] text-secondary-text uppercase tracking-widest truncate">{project.subtitle}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30">
        <span className="text-[7px] md:text-[8px] tracking-[0.4em] text-white/10 uppercase">System Active // London GMT // FC OS</span>
      </div>
    </div>
  );
};

export default Home;

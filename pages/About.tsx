
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS, SERVICES, TECHNICAL_SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-32 pb-20 relative overflow-x-hidden">
      {/* Enhanced Futuristic HUD Back Button - Minimalist (No Circle/Hex) */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 md:left-12 flex items-center gap-6 group z-50 transition-all"
        aria-label="Back to Portfolio"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Exterior HUD Ticks / Crosshair - Kept for futuristic feel */}
          <div className="absolute -inset-1 border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/20 group-hover:bg-neon-cyan"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/20 group-hover:bg-neon-cyan"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/20 group-hover:bg-neon-pink"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/20 group-hover:bg-neon-pink"></div>
          </div>

          {/* Minimalist Tech Accents */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-neon-cyan/40 opacity-0 group-hover:opacity-100"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-neon-pink/40 opacity-0 group-hover:opacity-100"></div>

          {/* Main Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transform group-hover:-translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <path d="M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-white group-hover:text-neon-cyan transition-colors"/>
            <path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" className="text-white/40 group-hover:text-neon-cyan transition-colors"/>
          </svg>

          {/* Micro Data Labels */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1 text-[5px] font-mono tracking-tighter text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
            NAV.BACK_v02
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 group-hover:text-white transition-colors">TERMINATE_SESSION</span>
            <div className="w-2 h-2 rounded-full border border-neon-pink/50 animate-ping group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </div>
          <span className="text-[7px] font-mono text-white/10 group-hover:text-neon-cyan/40 transition-colors uppercase tracking-[0.3em] mt-0.5">AUTH_LEVEL: CORE_ADMIN</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 relative">
          <div className="absolute -top-10 left-0 text-neon-cyan text-[10px] font-mono tracking-[0.5em] uppercase">SYSTEM.Lx7 // PROFILE</div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-none max-w-5xl tracking-tighter">
            Digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink uppercase">make an impact</span>
          </h1>
          <div className="w-40 h-[1px] bg-gradient-to-r from-neon-cyan to-transparent mt-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-16">
            <div className="p-10 border border-hairline bg-surface-dark/50 space-y-8 relative overflow-hidden group">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-secondary-text mb-4">Location</p>
                <p className="text-2xl font-serif text-white">London, UK</p>
                <p className="text-sm text-secondary-text mt-1">GMT Timezone</p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_100px_#00F5D4]"></span>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">AVAILABLE FOR PROJECTS</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-secondary-text font-bold flex items-center gap-4">
                CHANNELS <span className="h-[1px] flex-grow bg-hairline"></span>
              </h3>
              
              <div className="grid gap-2">
                {[
                  { label: 'EMAIL', val: 'nme3015@gmail.com', link: 'mailto:nme3015@gmail.com', color: 'neon-cyan' },
                  { label: 'PHONE', val: '+44 7311 609905', link: 'tel:+447311609905', color: 'neon-pink' },
                  { label: 'LINKEDIN', val: 'ivansmirnov', link: 'https://linkedin.com/in/ivansmirnov', color: 'neon-cyan' },
                  { label: 'GITHUB', val: 'fastcomet01', link: 'https://github.com/fastcomet01', color: 'neon-pink' }
                ].map((item) => (
                  <a key={item.label} href={item.link} className="flex items-center justify-between p-6 bg-surface-dark border border-hairline hover:border-white transition-all group">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-secondary-text block mb-1">{item.label}</span>
                      <span className={`text-white font-medium group-hover:text-${item.color} transition-colors tracking-tight`}>{item.val}</span>
                    </div>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Toolkit Section */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-secondary-text font-bold flex items-center gap-4">
                TOOLKIT <span className="h-[1px] flex-grow bg-hairline"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECHNICAL_SKILLS.map((skill, idx) => (
                  <span key={skill} className={`px-4 py-2 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold ${idx % 2 === 0 ? 'text-neon-cyan' : 'text-neon-pink'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-32">
            <section className="space-y-8">
              <div className="space-y-8 text-xl text-secondary-text leading-relaxed font-light">
                <p className="border-l-2 border-neon-cyan/20 pl-8">
                  I'm currently a university student pursuing <span className="text-white font-medium">Computer Systems Engineering</span>, focusing on the intersection of deep logic and fluid aesthetics.
                </p>
                <p className="border-l-2 border-neon-pink/20 pl-8">
                  My methodology is rooted in the belief that high performance and visual excellence are not mutually exclusive—they are the two hemispheres of successful product synthesis.
                </p>
                <p className="border-l-2 border-neon-cyan/20 pl-8">
                  Specializing in <span className="text-neon-pink font-bold">AI and machine learning</span> integration for modern web applications and autonomous toolsets.
                </p>
              </div>
            </section>

            <section className="space-y-12">
               <div className="flex items-center gap-6">
                <h3 className="text-3xl font-serif text-white">Capabilities</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-hairline to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <div key={s.name} className="flex items-center gap-6 p-8 border border-hairline hover:bg-white/5 transition-all group relative overflow-hidden">
                    <span className="text-neon-pink text-xl font-bold">{s.icon}</span>
                    <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">{s.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-12">
               <div className="flex items-center gap-6">
                <h3 className="text-3xl font-serif text-white">FAQ</h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-hairline to-transparent"></div>
              </div>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <div key={idx} className="border border-hairline bg-surface-dark group">
                    <div className="w-full text-left p-8 flex justify-between items-center bg-bg-dark transition-colors">
                      <span className="font-bold text-white tracking-tight text-lg group-hover:text-neon-cyan transition-colors">{item.question}</span>
                    </div>
                    <div className="p-8 pt-0 text-secondary-text leading-relaxed bg-bg-dark/50">
                      <span className="text-neon-cyan font-mono mr-4">RE:</span> {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Program Analyst',
      company: 'PSG HOSPITAL',
      location: 'Coimbatore',
      period: 'Aug-2025 - Present',
      description: 'Contributing to the development of responsive and user-friendly healthcare web applications. Involved in building UI components, integrating APIs, and supporting real-time hospital management systems (Room Allotment System, CPR Record Management, Patient Reports Management, Cardiology Management System).',
      technologies: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Oracle Database']
    },
    {
      role: 'Associate Cloud Consultant Intern',
      company: 'CLOUDVICE',
      location: 'Kochi',
      period: 'Past',
      description: 'Gained hands-on exposure to cloud-based enterprise solutions and supported implementation tasks in real-time environments.',
      technologies: ['Oracle Integration Cloud (OIC)', 'Oracle Visual Builder Cloud Service (VBCS)', 'Oracle Database']
    },
    {
      role: 'Software Developer Intern',
      company: 'AJ TECH RESEARCH LAB',
      location: 'Coimbatore',
      period: 'Past',
      description: 'Worked on front-end development, specifically in translating UI/UX designs into responsive web pages.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      role: 'Student Trainee',
      company: 'CHETTINAD CEMENT',
      location: 'Karur',
      period: 'Past',
      description: 'Industrial training focused on software lifecycle and corporate environments.',
      technologies: ['Networking', 'IT Support', 'Hardware']
    }
  ];

  return (
    <section id="experience" className="bg-transparent backdrop-blur-md text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-pink-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-widest uppercase italic">
            CAREER_<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse">PATH</span>
          </h2>
          <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto font-mono text-sm tracking-[0.3em] uppercase">
            // Professional Vector Log
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Neon Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full"
              >
                {/* Glowing Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full md:-translate-x-1/2 z-20 shadow-[0_0_15px_#22d3ee] transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400"></div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] ml-16 md:ml-0 relative">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] group-hover:-translate-y-2 overflow-hidden">
                    {/* Retro background texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase py-1 px-3 border border-cyan-400/30 bg-cyan-400/5">
                          {exp.period}
                        </span>
                        <div className="text-white/20 text-[8px] font-mono tracking-tighter">TIMESTAMP_LOG: {1024 + index}</div>
                      </div>

                      <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-gray-400 text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="text-pink-500">@</span> {exp.company}
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-500" /> {exp.location}</span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed font-mono mb-8 border-l border-white/10 pl-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-[9px] font-bold text-white/60 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all uppercase tracking-tighter bg-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative pointer line for desktop */}
                  <div className={`hidden md:block absolute top-1/2 w-8 h-[1px] bg-cyan-500/50 ${index % 2 === 0 ? 'right-full' : 'left-full'} -translate-y-1/2`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

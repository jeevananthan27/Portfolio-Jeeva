import React, { useState, useEffect } from 'react';
import { ExternalLink, FolderGit2, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: 'Room Allotment System',
      description: 'Developed a web-based room allotment system for PSG Hospital that allows hospital staff to allocate rooms for patients through an internal portal, while patients can choose rooms through the room allotment office.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap'],
      teamSize: 4,
      image: '/assets/p3.png',
      story: 'The hospital faced challenges in efficiently tracking and allocating rooms to patients, leading to delays and administrative overhead. This system was designed to bridge the gap between the room allotment office and the ward staff, ensuring real-time synchronization of bed availability.',
      process: 'We began with a comprehensive requirement gathering phase involving hospital administrators. The architecture was designed using a React frontend for its dynamic rendering capabilities, paired with a robust Node.js and MySQL backend to handle concurrent transactions safely. Throughout the development, we focused on user-friendly interfaces to ensure minimal training was required for the hospital staff.'
    },
    {
      title: 'Patient Reports & Cardiology Management',
      description: 'Redesigned the patient application into a responsive web platform using TypeScript and Tailwind CSS. Enabled mobile-friendly access for patients to view prescriptions and lab reports.',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: '/assets/p4.jpg',
      story: 'Patients previously had to rely on physical copies or clunky legacy systems to view their medical reports. This project aimed to digitalize the patient experience by providing a seamless, mobile-first web application where patients could securely access their health records, specifically focusing on the cardiology department.',
      process: 'The migration involved rewriting legacy code into a modern TypeScript stack to ensure type safety and maintainability. We utilized Tailwind CSS to rapidly prototype and implement a clean, accessible UI. Extensive testing was done to ensure medical data was displayed accurately and securely across all devices.'
    },
    {
      title: 'Non-Invasive Blood Glucose Meter',
      description: 'Developed a Machine Learning application to detect the glucose level and set parameters to detect the glucose level, train the dataset, and prioritize the accuracy percentage.',
      tags: ['Machine Learning', 'Linear Regression', 'SVM', 'IoT'],
      image: '/assets/p1.jpg',
      story: 'Traditional blood glucose testing requires painful pricks, which can be discouraging for diabetic patients needing frequent monitoring. This innovative project explored a non-invasive approach utilizing IoT breath sensors and machine learning to predict glucose levels without breaking the skin.',
      process: 'The project started with setting up IoT sensors to collect breath data. We then structured and cleaned the dataset before training several ML models, including Linear Regression and Support Vector Machines (SVM). By prioritizing feature engineering and hyperparameter tuning, we aimed to maximize the prediction accuracy against standard invasive meter readings.'
    },
    {
      title: 'Alternate Method for OTP Authentication',
      description: 'A website where users can generate their OTP through scanning QR in Offline mode for weak signal areas. Worked as Team Lead for a team of 6.',
      tags: ['HTML', 'CSS', 'MySQL', 'Frontend', 'Backend'],
      teamSize: 6,
      image: '/assets/p2.jpg',
      story: 'In rural or highly congested areas, cellular network signals can be too weak to receive SMS OTPs, locking users out of essential services. This project introduced an offline QR-code based alternative for generating time-based one-time passwords securely.',
      process: 'As the Team Lead, I coordinated the efforts of 6 developers. We designed a dual-system approach: a backend that registers a shared secret, and an offline frontend that generates the OTP locally by scanning a QR code. We utilized standard web technologies (HTML, CSS) and built a custom algorithm synchronized by time, storing necessary metadata securely in MySQL.'
    }
  ];

  return (
    <section id="projects" className="hud-bg bg-[#020813] text-[#00f3ff] font-mono py-24 border-t border-[#00f3ff]/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwgMjQzLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="hud-border bg-transparent text-[#00f3ff] text-[10px] font-bold px-3 py-1 tracking-widest hud-pulse">DEPLOYMENT_LOG</span>
            <div className="w-12 h-[1px] bg-[#00f3ff]/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-widest uppercase">
            PROJECT_ARCHIVE
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#00ff66]"></div>
            <div className="w-2 h-2 bg-[#00f3ff]/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer hud-border flex flex-col relative overflow-hidden transition-all hover:bg-[#00f3ff]/5"
            >
              <div className="hud-scanline opacity-20"></div>
              
              {/* Project Image Preview */}
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-2 right-2 z-20 text-[8px] font-bold text-[#00ff66] bg-black/80 px-1 border border-[#00ff66]/50 opacity-0 group-hover:opacity-100 hud-pulse">TARGET_LOCKED</div>
              </div>

              <div className="p-6 flex flex-col flex-1 relative z-20">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#00f3ff]/40 text-[10px] font-bold tracking-widest">
                    SEQ_ID: 0{index + 1}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <a href="https://github.com/jeevananthan27" className="text-[#00f3ff]/40 hover:text-[#00f3ff] transition-colors">
                      <FaGithub size={18} />
                    </a>
                    <a href="https://github.com/jeevananthan27" className="text-[#00f3ff]/40 hover:text-[#00f3ff] transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-widest uppercase group-hover:text-[#00ff66] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#00f3ff]/60 text-xs mb-6 line-clamp-2 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-0.5 text-[9px] font-bold text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/20 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#020813]/90 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative hud-border bg-[#020813] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,243,255,0.2)] flex flex-col animate-in fade-in zoom-in duration-300">
            <div className="hud-scanline"></div>
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black border border-[#00f3ff]/30 text-[#00f3ff] hover:text-[#00ff66] hover:border-[#00ff66] transition-all z-50"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-80 relative shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020813] to-transparent"></div>
              <div className="absolute top-4 left-4 text-[10px] font-bold text-[#00f3ff]/60 bg-black/80 px-2 py-1 border border-[#00f3ff]/20 tracking-widest uppercase">
                ENCRYPTED_MEDIA_STREAM
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-8 sm:p-12 -mt-10 relative z-10 bg-[#020813] rounded-t-3xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[1px] bg-[#00ff66]"></div>
                <span className="text-[#00ff66] text-[10px] font-bold tracking-widest uppercase">FILE_METADATA</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-widest uppercase">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 text-[10px] font-bold text-[#00f3ff] border border-[#00f3ff]/30 bg-[#00f3ff]/5 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-10">
                <div className="border-l-2 border-[#00f3ff]/20 pl-6">
                  <h4 className="text-[#00f3ff] text-xs font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
                    <span className="text-[#00ff66]">{">"}</span> THE_STORY
                  </h4>
                  <p className="text-[#00f3ff]/70 text-sm leading-relaxed font-mono">
                    {selectedProject.story}
                  </p>
                </div>

                <div className="border-l-2 border-[#00f3ff]/20 pl-6">
                  <h4 className="text-[#00f3ff] text-xs font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
                    <span className="text-[#00ff66]">{">"}</span> CORE_PROCESS
                  </h4>
                  <p className="text-[#00f3ff]/70 text-sm leading-relaxed font-mono">
                    {selectedProject.process}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#00f3ff]/10 flex flex-wrap gap-4">
                  <a href="https://github.com/jeevananthan27" className="hud-border px-6 py-3 text-white text-xs font-bold tracking-widest hover:bg-[#00f3ff]/10 transition-all flex items-center gap-2">
                    <ExternalLink size={16} className="text-[#00ff66]" /> LIVE_PREVIEW
                  </a>
                  <a href="https://github.com/jeevananthan27" className="hud-border px-6 py-3 text-white text-xs font-bold tracking-widest hover:bg-[#00f3ff]/10 transition-all flex items-center gap-2">
                    <FaGithub size={16} className="text-[#00f3ff]" /> SOURCE_CODE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

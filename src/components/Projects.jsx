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
    <section id="projects" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Project Image Preview */}
              <div className="w-full h-45 sm:h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-500/20 group-hover:bg-transparent transition-colors z-5"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-500/10 text-brand-500 rounded-lg">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <a href="https://github.com/jeevananthan27" className="text-gray-400 hover:text-brand-500 transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://github.com/jeevananthan27" className="text-gray-400 hover:text-brand-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {project.teamSize && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 font-coder">
                    Team Size: {project.teamSize}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-coder text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-full"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative glass rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300 border-white/20">
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-3 glass hover:bg-black/80 text-white rounded-full transition-colors z-20"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-96 relative shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
            </div>

            {/* Modal Details */}
            <div className="p-8 sm:p-12 -mt-20 relative z-10 shrink-0 bg-gradient-to-t from-white via-white to-transparent dark:from-[#050505] dark:via-[#050505] dark:to-transparent pt-24 rounded-b-3xl">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tighter">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-4 py-2 text-sm font-medium text-brand-600 dark:text-brand-400 glass rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
                    The Story
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.story}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
                    Working Process
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.process}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex gap-4">
                  <a href="https://github.com/jeevananthan27" className="px-6 py-3 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors flex items-center gap-2">
                    <ExternalLink size={20} /> Live Preview
                  </a>
                  <a href="https://github.com/jeevananthan27" className="px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-medium hover:border-brand-500 hover:text-brand-500 dark:hover:border-brand-500 dark:hover:text-brand-400 transition-colors flex items-center gap-2">
                    <FaGithub size={20} /> Source Code
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

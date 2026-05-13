import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:to-accent/10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full"
            >
              <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-white dark:ring-black -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 transition-transform duration-500 group-hover:scale-125"></div>
              
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl group-hover:border-brand-500/30">
                <span className="text-sm font-medium text-brand-500 dark:text-brand-400 mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{exp.role}</h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2 font-medium">
                  <Briefcase size={16} className="text-brand-500" />
                  {exp.company} • {exp.location}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 text-xs font-medium text-brand-600 dark:text-brand-400 glass rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

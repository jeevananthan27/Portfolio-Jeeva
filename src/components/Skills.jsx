import React from 'react';
import { Code2, Database, Layout, Terminal, Server, Laptop } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    {
      name: 'React.js',
      icon: <Layout className="w-8 h-8" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      name: 'Node.js',
      icon: <Server className="w-8 h-8" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      name: 'Java Programming',
      icon: <Code2 className="w-8 h-8" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      name: 'C Programming',
      icon: <Terminal className="w-8 h-8" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      name: 'SQL Database',
      icon: <Database className="w-8 h-8" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      name: 'Web Development',
      icon: <Laptop className="w-8 h-8" />,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      name: 'Git & GitHub',
      icon: <FaGithub className="w-8 h-8" />,
      color: 'text-gray-800 dark:text-white',
      bgColor: 'bg-gray-800/10 dark:bg-white/10',
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`p-4 glass ${skill.color} rounded-2xl shadow-sm`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

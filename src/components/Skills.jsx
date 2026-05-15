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
    <section id="skills" className="bg-transparent backdrop-blur-md text-slate-900 dark:text-white py-24 relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase italic">
            TECH_<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">DNA</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-mono text-sm tracking-widest uppercase">
            // Core System Modules & Architecture
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            // Map skill colors to neon variants
            const neonColors = {
              'text-blue-500': 'shadow-blue-500/40 border-blue-500/50 text-blue-400',
              'text-green-500': 'shadow-green-500/40 border-green-500/50 text-green-400',
              'text-orange-500': 'shadow-orange-500/40 border-orange-500/50 text-orange-400',
              'text-purple-500': 'shadow-purple-500/40 border-purple-500/50 text-purple-400',
              'text-blue-400': 'shadow-cyan-500/40 border-cyan-500/50 text-cyan-400',
              'text-pink-500': 'shadow-pink-500/40 border-pink-500/50 text-pink-400',
              'text-gray-800 dark:text-white': 'shadow-white/20 border-slate-900/30 dark:border-white/30 text-slate-900 dark:text-white'
            };
            const neonStyle = neonColors[skill.color] || 'shadow-purple-500/40 border-purple-500/50 text-purple-400';

            return (
              <div 
                key={index} 
                className={`relative group bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm border-2 ${neonStyle} rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(var(--neon-rgb),0.4)] overflow-hidden`}
              >
                {/* Background scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
                
                <div className={`relative z-10 transition-transform duration-500 group-hover:scale-110 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-700 dark:text-gray-300 tracking-[0.2em] uppercase text-center relative z-10 group-hover:text-slate-900 dark:text-white transition-colors">
                  {skill.name}
                </h3>
                
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${neonStyle.split(' ')[1]}`}></div>
                <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${neonStyle.split(' ')[1]}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

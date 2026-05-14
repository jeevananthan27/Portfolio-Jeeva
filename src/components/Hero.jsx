import React from 'react';
import { Download, Mail, Phone, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 w-full max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-brand-500 font-medium text-sm mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight min-h-[140px] md:min-h-[120px] lg:min-h-[200px]">
              Crafting <br />
              <span className="text-gradient">
                <TypeAnimation
                  sequence={[
                    'Digital Experiences',
                    2500,
                    'Modern Web Apps',
                    2500,
                    'Beautiful Interfaces',
                    2500,
                    'Creative Solutions',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
              Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Jeevananthan</span>. A passionate Computer Science Engineer dedicated to creating innovative solutions and building responsive, elegant web applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="group px-8 py-4 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full glass font-medium hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-gray-900 dark:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/jeevananthan27" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jeevananthan-a-420848266/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/jeevananthan_27?igsh=MTJxYzV6NW9zbzdzZQ==" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:jeevakowshick2127@gmail.com" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+916380303160" className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Image & Code Window area */}
          <div className="flex-1 w-full relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
            
            {/* Profile Image - Glass Card */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-[400px] lg:h-[500px] glass-card rounded-3xl p-3 z-20 group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/assets/Jeevananthan_A.jpeg" 
                  alt="Jeevananthan A" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Code Window - Floating */}
            <div className="w-full max-w-sm glass rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-2 duration-500 absolute -bottom-10 -left-10 z-30 hidden md:block border-t border-l border-white/20">
              <div className="flex items-center px-4 py-3 border-b border-gray-200/20 dark:border-white/10 bg-white/10 dark:bg-black/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="mx-auto text-xs text-gray-500 dark:text-gray-400 font-coder tracking-wider">developer.js</div>
              </div>
              <div className="p-5 text-xs font-coder text-gray-700 dark:text-gray-300 leading-relaxed overflow-x-auto bg-white/5 dark:bg-black/10">
                <p><span className="text-brand-600 dark:text-brand-400">const</span> <span className="text-accent">dev</span> = {'{'}</p>
                <p className="ml-4"><span className="text-gray-900 dark:text-white">name</span>: <span className="text-emerald-600 dark:text-emerald-400">'Jeevananthan A'</span>,</p>
                <p className="ml-4"><span className="text-gray-900 dark:text-white">role</span>: <span className="text-emerald-600 dark:text-emerald-400">'Program Analyst'</span>,</p>
                <p className="ml-4"><span className="text-gray-900 dark:text-white">skills</span>: [<span className="text-emerald-600 dark:text-emerald-400">'React'</span>, <span className="text-emerald-600 dark:text-emerald-400">'Node'</span>, <span className="text-emerald-600 dark:text-emerald-400">'Java'</span>],</p>
                <p>{'};'}</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

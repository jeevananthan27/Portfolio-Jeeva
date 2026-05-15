import React from 'react';
import { Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-900 dark:text-white border-t-8 border-slate-900 dark:border-white relative z-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/assets/logo_JN.png" 
                alt="Logo" 
                className="w-16 h-16 object-contain grayscale brightness-200 border-2 border-slate-900 dark:border-white p-1" 
              />
              <span className="text-4xl font-black tracking-tighter uppercase leading-none">
                JEEVANANTHAN<br/><span className="text-[#ff5722]">_A</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase">
              // ARCHITECTING_FUTURE_SYSTEMS
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>
            <p className="text-slate-900 dark:text-white font-black text-xs tracking-widest uppercase">
              © {currentYear} DATA_PROTOCOL. ALL_RIGHTS_RESERVED.
            </p>
            <div className="w-full h-[1px] bg-white/20 mt-6"></div>
          </div>

          <div className="md:col-span-4 flex justify-end gap-2">
            {[
              { icon: <FaGithub size={20} />, link: "https://github.com/jeevananthan27" },
              { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/jeevananthan-a-420848266/" },
              { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/jeevananthan_27" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.link} 
                className="w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-[#ff5722] dark:hover:bg-[#ff5722] hover:text-white dark:hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Brutalist Background Text */}
      <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-slate-900/5 dark:text-white/5 pointer-events-none select-none uppercase tracking-tighter">
        FUTURISM
      </div>
    </footer>
  );
}

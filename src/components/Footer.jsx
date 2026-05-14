import React from 'react';
import { Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/10 glass relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 group">
            <img 
              src="/assets/logo_JN.jpg" 
              alt="Logo" 
              className="w-12 h-12 object-contain rounded-xl shadow-lg group-hover:shadow-brand-500/30 transition-all duration-300" 
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight hidden sm:block">
              Jeevananthan<span className="text-brand-500">_A</span>
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Jeevananthan A. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/jeevananthan27" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-500 transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jeevananthan-a-420848266/" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-500 transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.instagram.com/jeevananthan_27?igsh=MTJxYzV6NW9zbzdzZQ==" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-500 transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

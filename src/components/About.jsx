import React from 'react';
import { Download, Calendar, MapPin, Mail, Phone, User, Eye } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
            Get to know <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                  Who am I?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  I am an inquisitive and sincere individual, always eager to expand my skills and knowledge. As a driven computer science engineer, I am dedicated to utilizing my technical expertise to drive innovation and make meaningful contributions to impactful projects.
                </p>
              </div>
              <div className="shrink-0 w-40 h-40 sm:w-52 sm:h-52 relative group">
                <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform opacity-20"></div>
                <img 
                  src="/assets/IMG_20240721_170132304.jpg" 
                  alt="Jeevananthan A" 
                  className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-brand-500/20 relative z-10"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <User className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">Name:</strong> Jeevananthan A</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">Email:</strong> jeevakowshick2127@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Phone className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">Phone:</strong> +91 6380303160</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">Location:</strong> Coimbatore, TN</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Calendar className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">DOB:</strong> 27/03/2003</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaInstagram className="text-brand-500" size={20} />
                <span><strong className="text-gray-900 dark:text-white">Instagram:</strong> <a href="https://www.instagram.com/jeevananthan_27?igsh=MTJxYzV6NW9zbzdzZQ==" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors">@jeevananthan_27</a></span>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a 
                href="/assets/JEEVANANTHAN A_RESUME (1).pdf" 
                download 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:-translate-y-1"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href="/assets/JEEVANANTHAN A_RESUME (1).pdf" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-medium hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10"
              >
                <Eye size={20} />
                View Resume
              </a>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 relative">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight flex items-center gap-3">
              <div className="p-2 bg-brand-500/10 rounded-lg text-brand-500"><Calendar size={24} /></div>
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:to-purple-500">
              
              {/* Timeline Item 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:w-1/2 md:pr-8 md:ml-auto md:pl-8">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-brand-500 dark:bg-brand-400 ring-4 ring-white dark:ring-black -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                  <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-sm font-medium text-brand-500 dark:text-brand-400 mb-2 block">2021 - 2025</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">B.E. Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">Bannari Amman Institute of Technology, Erode</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold">
                      CGPA: 7.52
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:w-1/2 md:pr-8">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 ring-4 ring-white dark:ring-black -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                  <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-sm font-medium text-purple-500 dark:text-purple-400 mb-2 block">2020 - 2021</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">HSC (12th)</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">SRT Universal Matric Higher Secondary School</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold">
                      85.27%
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:w-1/2 md:pr-8 md:ml-auto md:pl-8">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-black -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-2 block">2018 - 2019</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">SSLC (10th)</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">SRT Universal Matric Higher Secondary School</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                      81.4%
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

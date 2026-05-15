import React from 'react';
import { Download, Calendar, MapPin, Mail, Phone, User, Eye } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="hud-bg bg-[#020813] text-[#00f3ff] font-mono py-24 border-t border-[#00f3ff]/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDAsIDI0MywgMjU1LCAwLjQpIi8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="hud-border bg-transparent text-[#00f3ff] text-[10px] font-bold px-3 py-1 tracking-widest hud-pulse">ID_RECOGNITION</span>
            <div className="w-12 h-[1px] bg-[#00f3ff]/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-widest uppercase">
            SUBJECT_BIODATA
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#00ff66]"></div>
            <div className="w-2 h-2 bg-[#00f3ff]/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start gap-10">
              <div className="flex-1 order-2 sm:order-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span className="text-[#00ff66]">{">"}</span> INTRO_STRING
                </h3>
                <p className="text-sm text-[#00f3ff]/70 leading-relaxed font-mono tracking-tight bg-slate-200/20 dark:bg-black/20 p-4 border-l-2 border-[#00ff66]">
                  I am an inquisitive and sincere individual, dedicated to utilizing technical expertise to drive innovation. Driven computer science engineer focused on impactful contributions and system architecture.
                </p>
              </div>
              <div className="shrink-0 w-48 h-48 relative group order-1 sm:order-2 mx-auto sm:mx-0">
                <div className="hud-border absolute inset-0 bg-[#00f3ff]/5 z-0"></div>
                <div className="hud-scanline"></div>
                <img 
                  src="/assets/IMG_20240721_170132304.jpg" 
                  alt="Jeevananthan A" 
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-500 relative z-10 p-2"
                />
                <div className="absolute -bottom-2 -right-2 text-[8px] font-bold text-[#00ff66] bg-slate-200/80 dark:bg-black/80 px-1 hud-pulse">FACIAL_RECOG_STABLE</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#00f3ff]/10">
              {[
                { icon: <User size={16} />, label: "NAME", val: "Jeevananthan A" },
                { icon: <Mail size={16} />, label: "EMAIL", val: "jeevakowshick2127@gmail.com" },
                { icon: <Phone size={16} />, label: "PHONE", val: "+91 6380303160" },
                { icon: <MapPin size={16} />, label: "LOC", val: "Coimbatore, TN" },
                { icon: <Calendar size={16} />, label: "DOB", val: "27/03/2003" },
                { icon: <FaInstagram size={16} />, label: "IG", val: "@jeevananthan_27" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#00f3ff]/60 group">
                  <div className="text-[#00ff66] group-hover:hud-pulse">{item.icon}</div>
                  <div className="text-[10px] tracking-tighter">
                    <span className="text-[#00f3ff]/40 font-bold mr-2">{item.label}:</span>
                    <span className="text-slate-900 dark:text-white font-bold group-hover:text-[#00f3ff] transition-colors">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a 
                href="/assets/JEEVANANTHAN A_RESUME (1).pdf" 
                download 
                className="hud-border inline-flex items-center gap-2 px-8 py-3 bg-transparent text-slate-900 dark:text-white text-xs font-bold tracking-widest hover:bg-[#00f3ff]/10 transition-all"
              >
                <Download size={16} className="text-[#00ff66]" />
                PULL_RESUME.pdf
              </a>
              <a 
                href="/assets/JEEVANANTHAN A_RESUME (1).pdf" 
                target="_blank"
                rel="noreferrer"
                className="hud-border inline-flex items-center gap-2 px-8 py-3 bg-transparent text-slate-900 dark:text-white text-xs font-bold tracking-widest hover:bg-[#00f3ff]/10 transition-all"
              >
                <Eye size={16} className="text-[#00f3ff]" />
                READ_STREAM
              </a>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="hud-border p-8 relative overflow-hidden">
            <div className="hud-scanline opacity-20"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 tracking-widest flex items-center gap-3 uppercase">
              <span className="text-[#00ff66]">{">"}</span> CHRONOLOGY_LOG
            </h3>

            <div className="space-y-10 relative before:absolute before:inset-0 before:left-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-[#00ff66] before:to-transparent">
              
              {[
                { date: "2021 - 2025", title: "B.E. Computer Science", sub: "Bannari Amman Institute of Technology", metric: "CGPA: 7.52", color: "#00f3ff" },
                { date: "2020 - 2021", title: "HSC (12th)", sub: "SRT Universal Matric Higher Sec School", metric: "85.27%", color: "#00ff66" },
                { date: "2018 - 2019", title: "SSLC (10th)", sub: "SRT Universal Matric Higher Sec School", metric: "81.4%", color: "#0088ff" }
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-[-4.5px] top-2 w-2 h-2 bg-white ring-4 ring-black"></div>
                  <div className="hud-border p-5 group hover:bg-[#00f3ff]/5 transition-all">
                    <span className="text-[10px] font-bold text-[#00ff66] mb-1 block tracking-widest">{item.date}</span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight uppercase group-hover:text-[#00f3ff] transition-colors">{item.title}</h4>
                    <p className="text-[#00f3ff]/50 text-[11px] mt-1 uppercase tracking-tight">{item.sub}</p>
                    <div className="mt-3 inline-block px-3 py-1 bg-slate-200/40 dark:bg-black/40 border border-[#00f3ff]/20 text-[#00f3ff] text-[9px] font-bold tracking-widest">
                      DATA_VAL: {item.metric}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

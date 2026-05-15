import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link with the form data
    const mailtoLink = `mailto:jeevakowshick2127@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
    
    // Reset the form fields after sending
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="bg-transparent backdrop-blur-xl text-slate-900 dark:text-white py-24 relative overflow-hidden font-mono border-y border-slate-900/20 dark:border-white/20">
      {/* Techwear Hazard Tape Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#facc15,#facc15_10px,#000_10px,#000_20px)] opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(-45deg,#facc15,#facc15_10px,#000_10px,#000_20px)] opacity-50 z-0"></div>
      
      {/* Tactical Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-slate-900/20 dark:border-white/20 pb-4">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-black uppercase tracking-widest">
                REQ_COMM
              </span>
              <span className="text-slate-900/50 dark:text-white/50 text-xs font-bold tracking-[0.2em]">
                // SECURE_CHANNEL
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              ESTABLISH_LINK
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <div className="font-bold text-xl tracking-[0.3em] opacity-30">||||||||| ||| ||</div>
            <p className="text-[10px] text-yellow-400 font-bold tracking-widest mt-1">SYS.OP.99.1</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 relative group">
              {/* Strap Element */}
              <div className="absolute -top-3 left-8 w-16 h-6 bg-yellow-400 z-20 flex items-center justify-center">
                <span className="text-black text-[10px] font-black uppercase">DATA_NODE</span>
              </div>
              
              <div className="h-full bg-slate-200/60 dark:bg-black/60 border border-slate-900/20 dark:border-white/20 p-8 pt-12 relative overflow-hidden backdrop-blur-md">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400"></div>

                <div className="space-y-8">
                  {[
                    { icon: <MapPin size={20} />, label: "LOC_COORD", val: "Coimbatore, TN", spec: "LAT:11.01 LONG:76.95" },
                    { icon: <Mail size={20} />, label: "NET_MAIL", val: "jeevakowshick2127@gmail.com", spec: "ENCRYPTED_256" },
                    { icon: <Phone size={20} />, label: "VOICE_LINK", val: "+91 6380303160", spec: "SECURE_LINE" },
                    { icon: <FaInstagram size={20} />, label: "SOCIAL_FEED", val: "@jeevananthan_27", link: "https://www.instagram.com/jeevananthan_27", spec: "EXT_LINK" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/5 border border-slate-900/20 dark:border-white/20 flex items-center justify-center text-slate-900/70 dark:text-white/70">
                        {item.icon}
                      </div>
                      <div className="flex-1 border-b border-slate-900/10 dark:border-white/10 pb-2">
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">{item.label}</span>
                          <span className="text-[8px] text-slate-900/30 dark:text-white/30 uppercase tracking-widest">{item.spec}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.link ? (
                            <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                              {item.val}
                            </a>
                          ) : item.val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tactical Footer */}
                <div className="mt-12 bg-white/5 p-4 border-l-2 border-yellow-400 flex justify-between items-center">
                  <div className="text-[10px] text-slate-900/50 dark:text-white/50 leading-tight">
                    WARNING: ALL TRANSMISSIONS LOGGED.<br/>
                    UNAUTHORIZED ACCESS PROHIBITED.
                  </div>
                  <div className="w-8 h-8 flex flex-col justify-between">
                    <div className="h-1 w-full bg-white/30"></div>
                    <div className="h-1 w-full bg-white/30"></div>
                    <div className="h-1 w-full bg-white/30"></div>
                    <div className="h-1 w-full bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 relative">
              {/* Strap Element */}
              <div className="absolute -top-3 right-8 w-24 h-6 bg-yellow-400 z-20 flex items-center justify-center">
                <span className="text-black text-[10px] font-black uppercase">INPUT_MATRIX</span>
              </div>

              <div className="h-full bg-slate-200/60 dark:bg-black/60 border border-slate-900/20 dark:border-white/20 p-8 pt-12 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] text-slate-900/50 dark:text-white/50 uppercase tracking-widest flex justify-between">
                        <span>[01] ID_TAG</span>
                        <span className="text-yellow-400">*</span>
                      </label>
                      <input 
                        type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full bg-white/5 border border-slate-900/20 dark:border-white/20 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-400/5 transition-all text-sm"
                        placeholder="ENTER IDENTIFIER"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] text-slate-900/50 dark:text-white/50 uppercase tracking-widest flex justify-between">
                        <span>[02] NET_ADDRESS</span>
                        <span className="text-yellow-400">*</span>
                      </label>
                      <input 
                        type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full bg-white/5 border border-slate-900/20 dark:border-white/20 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-400/5 transition-all text-sm"
                        placeholder="USER@HOST.NODE"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] text-slate-900/50 dark:text-white/50 uppercase tracking-widest flex justify-between">
                      <span>[03] TRANSMISSION_HEADER</span>
                      <span className="text-yellow-400">*</span>
                    </label>
                    <input 
                      type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full bg-white/5 border border-slate-900/20 dark:border-white/20 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-400/5 transition-all text-sm"
                      placeholder="CLASSIFICATION / SUBJECT"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] text-slate-900/50 dark:text-white/50 uppercase tracking-widest flex justify-between">
                      <span>[04] PAYLOAD_DATA</span>
                      <span className="text-yellow-400">*</span>
                    </label>
                    <textarea 
                      id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"
                      className="w-full bg-white/5 border border-slate-900/20 dark:border-white/20 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-400/5 transition-all text-sm resize-none"
                      placeholder="INITIALIZE DATA STREAM..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-yellow-400 text-black px-6 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-between group"
                  >
                    <span>TRANSMIT_PACKET</span>
                    <div className="flex items-center gap-2">
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      <span className="text-[10px] opacity-50 block ml-2">EXEC //</span>
                    </div>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function SpotifySection() {
  // You can easily add more playlist IDs to this array
  const playlists = [
    "05r8VJMtbvxnXDIt6WbKGl",
    "37i9dQZF1DXcBWIGoYBM5M" // The one you provided
    // "another_playlist_id_here",
  ];

  return (
    <section className="bg-transparent backdrop-blur-md font-mono py-24 border-t border-slate-900/10 dark:border-white/10 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="border border-slate-900 dark:border-white text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1 tracking-widest">AUDIO_LOGS</span>
            <div className="w-12 h-[1px] bg-slate-900/30 dark:bg-white/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-widest uppercase">
            VIBE_FREQUENCIES
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-slate-900 dark:bg-white"></div>
            <div className="w-2 h-2 bg-slate-900/50 dark:bg-white/50"></div>
            <div className="w-2 h-2 bg-slate-900/20 dark:bg-white/20"></div>
          </div>
        </div>

        {/* Spotify Playlist Embeds */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {playlists.map((id, index) => (
            <div key={index} className="border-2 border-slate-900 dark:border-white p-3 relative group overflow-hidden bg-white/10 dark:bg-black/40">
              <div className="absolute top-2 right-4 text-slate-900/40 dark:text-white/40 text-[9px] tracking-widest font-bold">MODULE_0{index + 1}</div>
              <div className="relative rounded-xl overflow-hidden mt-6 bg-slate-200/40 dark:bg-black/40">
                <iframe 
                  style={{ borderRadius: '0px' }} 
                  src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`} 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title={`Spotify Playlist ${index + 1}`}
                  className="opacity-90 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                ></iframe>
              </div>
              <div className="mt-3 flex justify-between items-center text-[10px] tracking-tighter text-slate-900/50 dark:text-white/50 px-2 font-bold uppercase">
                <span>BITRATE: 320KBPS</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

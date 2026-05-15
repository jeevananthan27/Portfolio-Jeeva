import React from 'react';

export default function SpotifySection() {
  // You can easily add more playlist IDs to this array
  const playlists = [
    "05r8VJMtbvxnXDIt6WbKGl",
    "37i9dQZF1DXcBWIGoYBM5M" // The one you provided
    // "another_playlist_id_here",
  ];

  return (
    <section className="hud-bg bg-[#020813] text-[#00f3ff] font-mono py-24 border-t border-[#00f3ff]/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLCAyNDMsIDI1NSwgMC4yKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="hud-border bg-transparent text-[#00f3ff] text-[10px] font-bold px-3 py-1 tracking-widest hud-pulse">SONIC_ANALYSIS</span>
            <div className="w-12 h-[1px] bg-[#00f3ff]/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-widest uppercase">
            VIBE_FREQUENCIES
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-[#00ff66]"></div>
            <div className="w-2 h-2 bg-[#00f3ff]/30"></div>
            <div className="w-2 h-2 bg-[#00f3ff]/10"></div>
          </div>
        </div>

        {/* Spotify Playlist Embeds */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {playlists.map((id, index) => (
            <div key={index} className="hud-border p-3 relative group overflow-hidden">
              <div className="hud-scanline"></div>
              <div className="absolute top-2 right-4 text-[#00f3ff]/40 text-[9px] tracking-widest font-bold">MODULE_0{index + 1}</div>
              <div className="relative rounded-xl overflow-hidden bg-black/40">
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
                  className="opacity-90 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
              <div className="mt-3 flex justify-between items-center text-[10px] tracking-tighter text-[#00f3ff]/50 px-2 font-bold uppercase">
                <span>BITRATE: 320KBPS</span>
                <span className="hud-pulse">SIGNAL_STRENGTH: OPTIMAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

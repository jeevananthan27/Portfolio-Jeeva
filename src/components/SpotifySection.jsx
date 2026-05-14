import React from 'react';

export default function SpotifySection() {
  // You can easily add more playlist IDs to this array
  const playlists = [
    "05r8VJMtbvxnXDIt6WbKGl",
    "37i9dQZF1DXcBWIGoYBM5M" // The one you provided
    // "another_playlist_id_here",
  ];

  return (
    <section className="pt-24 pb-8 relative overflow-hidden grayscale">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
            My Vibe
          </h2>
          <div className="w-16 h-1.5 bg-gray-800 dark:bg-gray-200 mx-auto rounded-full"></div>
        </div>

        {/* Spotify Playlist Embeds */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {playlists.map((id, index) => (
            <div key={index} className="glass-card rounded-3xl overflow-hidden shadow-lg p-2 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50">
              <iframe 
                style={{ borderRadius: '12px' }} 
                src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`} 
                width="100%" 
                height="400" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title={`Spotify Playlist ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

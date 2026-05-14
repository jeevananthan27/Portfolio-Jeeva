import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SpotifySection from './components/SpotifySection';
import Contact from './components/Contact';
import CyberDashboard from './components/CyberDashboard';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimeMascot from './components/AnimeMascot';
import ThemeAudioPlayer from './components/ThemeAudioPlayer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 flex flex-col cursor-none">
        <ThemeAudioPlayer />
        <CustomCursor />
        <AnimeMascot />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <SpotifySection />
          <Contact />
        </main>
        <CyberDashboard />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

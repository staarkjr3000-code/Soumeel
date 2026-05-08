import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import Loader from './components/Loader';
import RobotBackground from './components/RobotBackground';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import TransitionSection from './components/TransitionSection';
import { Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnter = () => {
    setLoading(false);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  return (
    <div className="relative bg-black text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden min-h-screen">
      <audio ref={audioRef} src="/music.mp3" loop />
      
      <AnimatePresence>
        {loading && (
          <Loader onComplete={handleEnter} />
        )}
      </AnimatePresence>

      <Navigation />

      {/* Music Toggle */}
      {!loading && (
        <button 
          onClick={toggleMusic}
          className="fixed top-8 right-8 z-[100] p-4 glass-panel rounded-full hover:bg-white/5 transition-all text-white/50 hover:text-cyan-400 group"
        >
           <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity" />
           {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      )}

      {/* --- LAYER 0: Background Cinematic Layer --- */}
      <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover grayscale brightness-[0.3]"
        >
          <source src="/loading_video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* --- LAYER 2: Hero Text (BEHIND ROBOT) --- */}
      <section id="hero" className="fixed inset-0 z-[15] pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-7xl px-12 md:px-24 flex justify-between items-center">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] text-white/95">
              SOUMEEL
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2, duration: 2 }}
              className="text-[10px] tracking-[0.6em] text-cyan-400 uppercase font-light pl-2"
            >
              I build intelligent systems
            </motion.p>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[0.25em] text-cyan-400 text-glow">
              MALLICK
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- LAYER 3: Spline Robot (Z-index 20) --- */}
      <RobotBackground />

      {/* --- LAYER 4: UI Indicators (TOP/SIDES) --- */}
      <div className="fixed inset-0 z-[40] pointer-events-none flex flex-col justify-between p-10 md:p-16">
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-[9px] md:text-[10px] tracking-[0.8em] uppercase text-white font-light"
          >
            STAARK SYSTEM • INTERFACE ACTIVE
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-10 md:left-14 -translate-y-1/2 flex items-center gap-6 opacity-30">
          <div className="h-16 w-[1px] bg-cyan-400" />
          <div className="text-[9px] md:text-[10px] leading-[2.5] tracking-[0.5em] uppercase text-white font-light">
            SYSTEM<br />CONTROL<br />AI MODULE
          </div>
        </div>

        <div className="absolute top-1/2 right-10 md:right-14 -translate-y-1/2 text-right flex items-center justify-end gap-6 opacity-30">
          <div className="text-[9px] md:text-[10px] leading-[2.5] tracking-[0.5em] uppercase text-white font-light">
            AVAILABLE<br />FOR WORK<br />2026
          </div>
          <div className="h-16 w-[1px] bg-cyan-400" />
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 3, duration: 2 }}
            className="text-[8px] tracking-[0.6em] uppercase text-white/50 flex flex-col items-center gap-6"
          >
             <span className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
             SCROLL TO INITIALIZE
          </motion.div>
        </div>
      </div>

      {/* --- MAIN SCROLLABLE CONTENT --- */}
      <main className="relative z-[50]">
        <div className="h-screen" /> {/* Hero Spacer */}
        <AboutSection />
        <TransitionSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 z-[2000] pointer-events-none noise-bg opacity-[0.02]" />
    </div>
  );
}

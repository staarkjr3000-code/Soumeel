import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale brightness-[0.4]"
      >
        <source src="/loading_video.webm" type="video/webm" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_black_90%] opacity-80" />
      <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]" />

      <div className="relative z-20 flex flex-col items-center gap-16">
        {/* Central Pulse System */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-cyan-500/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-cyan-500/20 rounded-full border-t-transparent"
          />
          <motion.div 
            animate={{ rotate: 180 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border border-white/5 rounded-full border-b-transparent"
          />
          
          <div className="relative flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_30px_#00e5ff]"
            />
            <div className="mt-4 text-[10px] tracking-[0.5em] text-white/40 font-light">
              {progress === 100 ? "READY" : `${progress}%`}
            </div>
          </div>
        </div>

        {/* Enter Button */}
        <AnimatePresence>
          {progress === 100 && (
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onComplete}
              className="px-16 py-5 rounded-full glass-panel border border-white/10 text-[11px] tracking-[0.5em] text-white/80 hover:text-white hover:border-cyan-500/50 hover:accent-glow transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">ENTER EXPERIENCE</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status Layout */}
      <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 space-y-4">
        <div className="text-[9px] tracking-[0.4em] text-white/30 uppercase font-light">
          CORE: 0X882A_INIT
          <div className="w-12 h-[1px] bg-white/10 mt-2" />
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 text-right space-y-4">
        <div className="text-[9px] tracking-[0.4em] text-white/30 uppercase font-light">
          LAT: 12MS // SCT: 4
          <div className="w-12 h-[1px] bg-white/10 mt-2 ml-auto" />
        </div>
      </div>
    </motion.div>
  );
}

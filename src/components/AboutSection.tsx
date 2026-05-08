import { motion } from 'motion/react';
import { Cpu, Zap, Activity } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative z-[60] flex items-center justify-center p-8 md:p-24 overflow-hidden bg-black">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_black_90%] opacity-60" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "fit-content" }}
              className="overflow-hidden"
            >
              <span className="text-cyan-400 font-mono text-[9px] tracking-[0.6em] uppercase whitespace-nowrap block mb-4">
                01 // Technical Profile
              </span>
            </motion.div>
            
            <p className="text-xl md:text-3xl leading-[1.6] text-white/90 font-light tracking-wide max-w-xl">
              Blending the logic of high-performance engineering with the art of cinematic storytelling. I develop autonomous interfaces and immersive ecosystems.
            </p>
          </div>

          {/* Quote Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group max-w-lg"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_20px_#00e5ff]" />
            <p className="text-[14px] md:text-[16px] tracking-[0.15em] leading-relaxed text-white/50 uppercase font-light">
              "&gt; *CURIOSITY IS NO LONGER A PLAYGROUND FOR THE YOUNG"
            </p>
            <div className="absolute right-0 bottom-0 p-4 opacity-5">
              <Cpu size={120} className="text-cyan-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Blend (Placeholder or contact.png) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl hidden lg:block"
        >
          <img 
            src="/contact.png" 
            alt="Soumeel Mallick" 
            className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[1.1] mix-blend-screen"
          />
          {/* Atmosphere Grains */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_black_100%] opacity-80" />
          <div className="absolute inset-0 bg-cyan-400/5 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function TransitionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="h-[200vh] relative z-40 bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Transition Video */}
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover grayscale brightness-[0.5]"
          >
            <source src="/transition_video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        {/* Center Text */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl font-display tracking-[0.1em] text-white/90 italic font-light drop-shadow-2xl">
            We bleed in the shadows.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

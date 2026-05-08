import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function RobotBackground() {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center"
      >
        {/* Main Spline Viewer */}
        {!hasError && (
          <spline-viewer 
            url="https://prod.spline.design/l0sV9-3pP7caLVwL/scene.splinecode"
            className={`w-full h-full transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setLoading(false)}
            onError={() => setHasError(true)}
          />
        )}

        {/* Video Fallback */}
        {(hasError || loading) && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen brightness-[1.2] contrast-[1.1]"
          >
            <source src="/backup_robo.webm" type="video/webm" />
          </video>
        )}

        {/* Cinematic Haze/Glow */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_black_90%] opacity-40 pointer-events-none" />
      </motion.div>

      {/* Extreme Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_20%,_black_95%] opacity-70 pointer-events-none" />
    </div>
  );
}

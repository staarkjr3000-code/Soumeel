import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Kairo Workspace",
    tag: "Neural Interaction",
    desc: "Neural Workspace for specialized LLM agents.",
    link: "https://ais-pre-b3fpebacxgqowxd4czfehu-291322332896.asia-southeast1.run.app",
    status: "SYSTEM_STABLE",
    image: "/kairo-logo.png"
  },
  {
    title: "Starnex",
    tag: "3D Environments",
    desc: "Modular 3D documentation system & system architecture.",
    link: "https://staarkdev.vercel.app",
    status: "ACTIVE_LINK",
    image: "/starnex-logo.png"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen relative z-[70] px-8 py-32 overflow-hidden bg-black">
      {/* Background with warm cinematic feel */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-30 grayscale sepia brightness-[0.6]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10 flex flex-col items-center">
        <div className="text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans tracking-tight font-light leading-tight text-white/90"
          >
            Experimental<br /><span className="text-cyan-400 font-bold">Deploys</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
          {projects.map((project, idx) => (
            <motion.a 
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              <div className="glass-panel h-full rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col hover:border-cyan-400/30 transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,242,255,0.05)]">
                 {/* Project Preview */}
                 <div className="aspect-video relative overflow-hidden bg-black/40 m-4 rounded-[1.8rem]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.visibility = 'hidden';
                        (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-[10px] tracking-widest text-white/20 uppercase font-mono">${project.title}_STATIC</span>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 </div>
                 
                 <div className="p-10 pt-4 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-400/60 uppercase">{project.tag}</span>
                      <h3 className="text-3xl font-sans font-light tracking-wide text-white/90">{project.title}</h3>
                      <p className="text-white/40 text-[15px] leading-relaxed font-light">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-[9px] font-mono tracking-widest text-cyan-400/40 uppercase bg-cyan-400/5 px-3 py-1.5 rounded-full border border-cyan-400/10">
                        {project.status}
                      </span>
                      <ExternalLink size={18} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                 </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';

const socials = [
  { 
    icon: Instagram, 
    label: "Instagram", 
    username: "@mr_starborn",
    desc: "Visual narrative & behind-the-scenes system updates.",
    link: "https://www.instagram.com/mr_starborn",
    status: "STATUS: ONLINE"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    username: "Soumeel Mallick",
    desc: "Professional network & technical architecture discussions.",
    link: "https://www.linkedin.com/in/soumeel-mallick-a981503bb",
    status: "LINK: ESTABLISHED"
  },
  { 
    icon: Send, 
    label: "Telegram", 
    username: "@Staark3000",
    desc: "Direct priority uplink for rapid response.",
    link: "https://t.me/Staark3000",
    status: "SIGNAL: SECURE"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen relative z-[80] flex items-center justify-center p-8 md:p-24 overflow-hidden bg-black pb-40">
      {/* Background with cinematic feel */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-20 grayscale brightness-[0.5]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl w-full relative z-10 space-y-24 flex flex-col items-center">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-mono text-[9px] tracking-[0.8em] uppercase"
          >
            03 // Neural Link
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-sans font-light tracking-tight text-white/90"
          >
            Communication <span className="font-bold">Channels</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Ready to collaborate on the next digital frontier? High-bandwidth communication channels are open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {socials.map((social, idx) => (
            <motion.a 
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="glass-panel p-10 rounded-[2rem] border border-white/5 hover:border-cyan-400/30 transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,242,255,0.05)] group relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/5 transition-all duration-500">
                    <social.icon size={22} className="text-white/40 group-hover:text-cyan-400" />
                  </div>
                  <span className="text-[8px] font-mono tracking-widest text-cyan-400/40 uppercase whitespace-nowrap">{social.status}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-sans font-light text-white/90">{social.label}</h3>
                  <p className="text-white/30 text-sm font-light leading-relaxed">
                    {social.desc}
                  </p>
                </div>
              </div>
              <div className="mt-12 text-[10px] tracking-[0.3em] font-mono text-cyan-400/60 uppercase group-hover:text-cyan-400 transition-colors">
                {social.username}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Long Email Card */}
        <motion.a 
          href="mailto:soumeel3000@gmail.com"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel w-full p-10 md:p-14 rounded-[2.5rem] border border-white/5 hover:border-cyan-400/30 transition-all duration-700 group relative flex flex-col md:flex-row md:items-center justify-between"
        >
          <div className="flex items-center gap-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/5 transition-all duration-500">
              <Mail size={32} className="text-white/40 group-hover:text-cyan-400" />
            </div>
            <div className="space-y-3">
              <div className="text-[8px] font-mono tracking-widest text-cyan-400/40 uppercase">UPLINK: ACTIVE</div>
              <h3 className="text-3xl md:text-4xl font-sans font-light text-white/90">Email / Gmail</h3>
              <p className="text-white/30 text-sm md:text-base font-light">Official colabs & enterprise solutions.</p>
            </div>
          </div>
          <div className="mt-8 md:mt-0 text-[12px] md:text-[14px] tracking-[0.4em] font-mono text-cyan-400/60 uppercase group-hover:text-cyan-400 transition-colors">
            soumeel3000@gmail.com
          </div>
        </motion.a>

        <footer className="pt-32 text-center text-[9px] tracking-[0.6em] text-white/20 uppercase font-light">
          STARBORN | SOUMEEL | STAARK • ALL RIGHTS RESERVED
        </footer>
      </div>
    </section>
  );
}

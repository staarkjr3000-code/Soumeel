import { motion } from 'motion/react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { icon: Home, href: '#hero', label: 'Home' },
    { icon: User, href: '#about', label: 'About' },
    { icon: Briefcase, href: '#projects', label: 'Projects' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-6">
      <div className="glass-panel p-2 rounded-full flex flex-col gap-4 border border-white/10">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full text-white/40 hover:text-cyan-400 transition-colors relative group"
          >
            <item.icon size={18} />
            <span className="absolute right-full mr-4 px-3 py-1 rounded bg-black/80 border border-white/10 text-[10px] tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

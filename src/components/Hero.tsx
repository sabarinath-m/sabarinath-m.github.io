import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { RotatingRole } from './RotatingRole';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { ContactModal } from './ContactModal';

export function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* subtle ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent-soft blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] w-[360px] h-[360px] rounded-full bg-rn-soft blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-5xl mx-auto w-full relative">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium text-ink-soft tracking-tight"
        >
          <RotatingRole roles={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper text-sm font-medium px-5 py-3 hover:bg-accent transition-colors cursor-pointer"
          >
            <Mail size={16} /> Get in touch
          </button>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-medium px-5 py-3 hover:border-ink transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line text-ink text-sm font-medium px-5 py-3 hover:border-ink transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold text-ink tracking-tight">{stat.value}</div>
              <div className="text-xs text-ink-faint mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-ink transition-colors cursor-pointer"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={20} />
      </motion.button>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}

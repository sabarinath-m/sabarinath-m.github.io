import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectTracks } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const COLOR_STYLES: Record<string, { pill: string; activePill: string; bar: string }> = {
  accent: {
    pill: 'text-ink-soft hover:text-ink',
    activePill: 'bg-accent text-white',
    bar: 'bg-accent',
  },
  rn: {
    pill: 'text-ink-soft hover:text-ink',
    activePill: 'bg-rn text-white',
    bar: 'bg-rn',
  },
  go: {
    pill: 'text-ink-soft hover:text-ink',
    activePill: 'bg-go text-white',
    bar: 'bg-go',
  },
  flutter: {
    pill: 'text-ink-soft hover:text-ink',
    activePill: 'bg-flutter text-white',
    bar: 'bg-flutter',
  },
};

export function Projects() {
  const [activeKey, setActiveKey] = useState(projectTracks[1].key); // default to React Native
  const track = projectTracks.find((t) => t.key === activeKey)!;

  return (
    <section id="projects" className="px-6 py-24 border-t border-line bg-paper-raised/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Personal Projects"
          title="Things I've built outside of work"
          description="Grouped by stack, whichever team you're hiring for, there's real, shipped work here to look at."
        />

        <Reveal className="flex flex-wrap gap-2 mb-4">
          {projectTracks.map((t) => {
            const style = COLOR_STYLES[t.color];
            const isActive = t.key === activeKey;
            return (
              <button
                key={t.key}
                onClick={() => setActiveKey(t.key)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? '' : style.pill
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-tab-bg"
                    className={`absolute inset-0 rounded-full ${style.activePill}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-white' : ''}`}>
                  {t.label}
                  <span className="ml-1.5 opacity-70">({t.projects.length})</span>
                </span>
              </button>
            );
          })}
        </Reveal>

        <p className="text-sm text-ink-faint mb-8 max-w-xl">{track.blurb}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {track.projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-full rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-ink/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 flex flex-col"
              >
                <div
                  className={`absolute top-0 left-6 -translate-y-1/2 h-1 w-10 rounded-full ${COLOR_STYLES[track.color].bar}`}
                />
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="font-semibold text-ink text-lg">{project.name}</h4>
                  {project.stat && (
                    <span className="text-xs font-medium text-ink-faint whitespace-nowrap bg-paper-raised px-2 py-1 rounded-full border border-line">
                      {project.stat}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-ink-soft mb-3">{project.tagline}</p>
                <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-paper-raised text-ink-soft border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent transition-colors"
                  >
                    {project.urlLabel} <ArrowUpRight size={14} />
                  </a>
                  {project.secondaryUrl && (
                    <a
                      href={project.secondaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-faint hover:text-ink transition-colors"
                    >
                      {project.secondaryLabel} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { skillGroups } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Skills" title="What I reach for" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-paper-raised p-5 h-full">
                <h4 className="text-sm font-semibold text-ink-faint uppercase tracking-wide mb-3">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-paper border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

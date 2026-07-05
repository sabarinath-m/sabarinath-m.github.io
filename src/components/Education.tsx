import { Award, GraduationCap } from 'lucide-react';
import { education } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" className="px-6 py-24 border-t border-line bg-paper-raised/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Education" title="Where it started" />

        <div className="grid sm:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-paper p-6 flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center">
                <GraduationCap size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-ink">{education.degree}</h4>
                <p className="text-sm text-ink-soft mt-1">{education.institution}</p>
                <p className="text-sm text-ink-faint mt-1">
                  {education.period} · {education.detail}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-line bg-paper p-6 flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-flutter-soft text-flutter flex items-center justify-center">
                <Award size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-ink">{education.achievement.title}</h4>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                  {education.achievement.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

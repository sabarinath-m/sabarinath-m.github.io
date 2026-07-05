import { CheckCircle2, MapPin } from 'lucide-react';
import { caseStudies, experience } from '../data/profile';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Six years of full product ownership"
          description="One company, four-plus products, and a role that kept expanding — from React, into React Native, into the Go services behind both."
        />

        <Reveal className="grid md:grid-cols-[220px_1fr] gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-ink">{experience.company}</h3>
            <p className="text-accent font-medium mt-1">{experience.role}</p>
            <p className="text-sm text-ink-faint mt-2">{experience.period}</p>
            <p className="text-sm text-ink-faint mt-1 flex items-center gap-1">
              <MapPin size={13} /> {experience.location}
            </p>
          </div>
          <div>
            <p className="text-ink-soft leading-relaxed mb-6">{experience.summary}</p>
            <ul className="space-y-3">
              {experience.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.05} y={12}>
                  <li className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-lg font-semibold text-ink mb-1">Products I've shipped</h3>
          <p className="text-sm text-ink-faint mb-6">
            Case studies from the products above — each spans web, mobile, or both.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-paper-raised p-6 transition-all duration-300 hover:border-ink/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-semibold text-ink">{cs.name}</h4>
                  <span className="text-xs font-medium text-ink-faint whitespace-nowrap bg-paper px-2 py-1 rounded-full border border-line">
                    {cs.scale}
                  </span>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">{cs.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-paper text-ink-soft border border-line"
                    >
                      {tech}
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

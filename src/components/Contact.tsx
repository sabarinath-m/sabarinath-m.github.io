import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from './Reveal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 border-t border-line">
      <Reveal className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-medium text-accent tracking-wide uppercase">Contact</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
          Building something? Let's talk.
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed max-w-xl mx-auto">
          Whether it's a React frontend, a React Native app, or the Go service behind either one — I'm
          happy to talk through it.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper text-sm font-medium px-5 py-3 hover:bg-accent transition-colors"
          >
            <Mail size={16} /> {profile.email}
          </a>
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
        </div>
      </Reveal>

      <div className="mt-20 pt-8 border-t border-line max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, TypeScript & Tailwind</span>
      </div>
    </section>
  );
}

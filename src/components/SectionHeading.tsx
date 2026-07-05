import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <span className="text-sm font-medium text-accent tracking-wide uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-ink tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-ink-soft leading-relaxed">{description}</p>}
    </Reveal>
  );
}

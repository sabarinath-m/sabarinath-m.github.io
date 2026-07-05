import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      // Near the bottom of the page the last section's offsetTop can sit
      // past the max scrollable position, so the offset-based scan below
      // would never select it — treat "scrolled to the bottom" as a
      // special case and just pick the last id.
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const scrollPos = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);

  return active;
}

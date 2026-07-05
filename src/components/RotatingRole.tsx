import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function RotatingRole({ roles, interval = 2400 }: { roles: readonly string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => clearInterval(id);
  }, [roles.length, interval]);

  return (
    <span className="relative inline-flex h-[1.5em] overflow-hidden align-bottom min-w-[1px] items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent whitespace-nowrap leading-[1.5em]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

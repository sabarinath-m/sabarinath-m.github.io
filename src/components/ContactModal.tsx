import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone, X } from 'lucide-react';
import { profile } from '../data/profile';

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Contact details"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm rounded-2xl bg-paper-raised border border-line p-6 shadow-[0_20px_60px_rgb(0,0,0,0.15)]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink-faint hover:text-ink transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg font-semibold text-ink pr-6">Let's talk</h3>
            <p className="text-sm text-ink-soft mt-1 mb-5">Reach out directly, whichever's easier.</p>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 hover:border-accent hover:bg-accent-soft transition-colors group"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail size={16} />
                </span>
                <span className="text-left">
                  <span className="block text-xs text-ink-faint">Email</span>
                  <span className="block text-sm font-medium text-ink">{profile.email}</span>
                </span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 hover:border-accent hover:bg-accent-soft transition-colors group"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-left">
                  <span className="block text-xs text-ink-faint">Phone</span>
                  <span className="block text-sm font-medium text-ink">{profile.phone}</span>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

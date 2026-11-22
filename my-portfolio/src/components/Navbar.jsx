import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Projects', href: '#projects' },
  { label: 'Algorithms', href: '#algorithms' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCv }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print fixed top-3 right-0 left-0 z-40 px-3 sm:top-4 sm:px-6">
      <div className="mx-auto max-w-[1160px] rounded-xl border border-white/10 bg-[#0B0F17]/80 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-3.5 py-2 sm:px-5">
          {/* Brand */}
          <a
            href="#top"
            className="group flex min-h-[44px] items-center gap-3 rounded-md pr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-cyan-400/35 bg-[#101622] font-mono text-xs font-semibold tracking-wider text-cyan-300 transition-colors group-hover:border-cyan-400/70">
              KD
            </span>
            <span className="flex flex-col text-left">
              <span className="font-display text-sm font-semibold tracking-tight text-white">
                Trần Khánh Duy
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                DS &amp; AI · DUT
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-[44px] items-center rounded-md px-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Prominent Download CV Button + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={onOpenCv}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="neon-cta-btn inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <Download className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
              <span>Download CV</span>
            </motion.button>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex min-h-[42px] min-w-[42px] items-center justify-center rounded-lg border border-white/12 bg-[#101622] text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden border-t border-white/10 px-3 py-2.5 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="row-interactive flex min-h-[44px] items-center justify-between px-4 font-mono text-xs uppercase tracking-[0.14em] text-slate-200"
                    >
                      <span>{item.label}</span>
                      <span className="text-cyan-400">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

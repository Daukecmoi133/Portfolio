import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Globe, Terminal } from 'lucide-react';
import { CODE_PROFILE_TABS } from '../data/portfolio';
import ParticleGlobe from './ParticleGlobe';

export default function InteractiveCodeProfile() {
  const [activeTabId, setActiveTabId] = useState(CODE_PROFILE_TABS[0].id);
  const [copied, setCopied] = useState(false);

  const activeTab =
    CODE_PROFILE_TABS.find((t) => t.id === activeTabId) || CODE_PROFILE_TABS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for restricted clipboard contexts
      setCopied(false);
    }
  };

  return (
    <div className="framed-shell flex h-full w-full max-w-full flex-col overflow-hidden">
      <div className="framed-shell-inner flex min-w-0 max-w-full flex-col overflow-hidden">
        {/* Top Interactive 3D Particle Globe Stage */}
        <div className="w-full max-w-full border-b border-white/10 bg-[#07090E]/70">
          <div className="flex items-center justify-between gap-2 border-b border-white/8 px-3.5 py-2 sm:px-4 sm:py-2.5">
            <div className="flex min-w-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 sm:text-[11px] sm:tracking-[0.16em]">
              <Globe className="h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
              <span className="truncate">NODE TELEMETRY // 3D SPHERE</span>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-cyan-300/80">INTERACTIVE</span>
          </div>
          <ParticleGlobe />
        </div>

        {/* Interactive Code Profile Tabs */}
        <div className="flex min-w-0 max-w-full flex-1 flex-col bg-[#0B0F17]">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#0E1420] px-2.5 py-2 sm:px-3">
            <div
              className="flex min-w-0 items-center gap-1 overflow-x-auto"
              role="tablist"
              aria-label="Profile source files"
            >
              {CODE_PROFILE_TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveTabId(tab.id);
                      setCopied(false);
                    }}
                    className={`relative shrink-0 cursor-pointer whitespace-nowrap rounded-md px-2 py-1.5 font-mono text-[11px] transition-colors sm:px-2.5 focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                      isActive ? 'text-cyan-200' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCodeTab"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-md border border-cyan-400/35 bg-cyan-400/10"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={handleCopy}
              aria-label={`Copy ${activeTab.label}`}
              className="inline-flex min-h-[32px] shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-md border border-white/10 bg-[#101622] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-cyan-400" aria-hidden="true" />
                  <span className="text-cyan-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Code Viewport */}
          <div className="relative min-w-0 max-w-full flex-1 overflow-x-auto p-3.5 sm:p-4">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="w-full max-w-full font-mono text-[11px] leading-relaxed text-slate-300 sm:text-[12px]"
              >
                <code>{activeTab.code}</code>
              </motion.pre>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between border-t border-white/8 px-4 py-2 font-mono text-[10px] text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Terminal className="h-3 w-3 text-cyan-400/80" aria-hidden="true" />
              <span>{activeTab.language}</span>
            </span>
            <span>UTF-8 · VERIFIED PROFILE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Terminal } from 'lucide-react';

const STATUS_STYLES = {
  active: 'border-cyan-400/35 bg-cyan-400/10 text-cyan-200',
  muted: 'border-white/15 bg-white/5 text-slate-300',
  planned: 'border-amber-300/25 bg-amber-300/5 text-amber-200/90',
};

export default function ProjectCard({ project, index = 0 }) {
  const badgeClass = STATUS_STYLES[project.statusTone] || STATUS_STYLES.muted;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`beam-card flex h-full flex-col justify-between p-5 sm:p-6 ${project.bentoSpan || ''}`}
    >
      <div className="relative z-10">
        {/* Top Utility Rail */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/8 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-300/90">
              {project.code}
            </span>
            {project.featured && (
              <span className="rounded border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-200">
                Flagship
              </span>
            )}
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${badgeClass}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.statusTone === 'active'
                  ? 'bg-cyan-400'
                  : project.statusTone === 'planned'
                    ? 'bg-amber-300'
                    : 'bg-slate-400'
              }`}
              aria-hidden="true"
            />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-white/10 bg-[#101622] px-2.5 py-1 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Case Study Flow: Problem → Architecture → Outcome */}
        <dl className="mt-5 space-y-3 border-t border-white/8 pt-4 text-sm">
          <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
              Problem
            </dt>
            <dd className="leading-relaxed text-slate-300">{project.problem}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-300/90">
              Architecture
            </dt>
            <dd className="leading-relaxed text-slate-200">{project.architecture}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-3">
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
              Outcome
            </dt>
            <dd className="leading-relaxed text-slate-300">{project.outcome}</dd>
          </div>
        </dl>
      </div>

      {/* Footer / Repository Action */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4">
        {project.repoUrl ? (
          <motion.a
            whileTap={{ scale: 0.97 }}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-mono text-xs font-medium text-cyan-100 transition-colors hover:border-cyan-400 hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            <span>Inspect Repository</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </motion.a>
        ) : (
          <span className="inline-flex min-h-[36px] items-center gap-2 rounded-md border border-white/10 bg-[#0E131D] px-3 py-1.5 font-mono text-[11px] text-slate-400">
            <Terminal className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
            <span>{project.repoLabel}</span>
          </span>
        )}
      </div>
    </motion.article>
  );
}

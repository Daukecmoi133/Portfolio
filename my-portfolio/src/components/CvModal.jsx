import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Printer, X } from 'lucide-react';
import {
  ACHIEVEMENTS,
  ACTIVITIES,
  CP_PROFILES,
  CP_TOPICS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from '../data/portfolio';

function generateStandaloneCvHtml() {
  const completedProjects = PROJECTS.filter((p) => p.statusTone !== 'planned');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CV — ${PROFILE.name}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #111827; max-width: 820px; margin: 36px auto; padding: 0 24px; line-height: 1.5; font-size: 14px; }
    h1 { font-size: 24px; margin: 0 0 4px; }
    .subtitle { color: #4b5563; font-size: 14px; margin-bottom: 12px; }
    .meta { font-size: 12px; color: #374151; border-bottom: 1px solid #d1d5db; padding-bottom: 12px; margin-bottom: 18px; }
    h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin: 18px 0 10px; color: #111827; }
    h3 { font-size: 14px; margin: 0; }
    .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .muted { color: #6b7280; font-size: 12px; }
    ul { margin: 6px 0 12px 18px; padding: 0; }
    li { margin-bottom: 4px; }
  </style>
</head>
<body>
  <h1>${PROFILE.name}</h1>
  <div class="subtitle">${PROFILE.title} · ${PROFILE.subtitle}</div>
  <div class="meta">
    ${PROFILE.location} · ${PROFILE.university} · GPA: ${PROFILE.gpa}<br/>
    ${SOCIAL_LINKS.map((s) => `${s.name}: ${s.url}`).join(' · ')}
  </div>

  <h2>Education</h2>
  <div class="row"><strong>${PROFILE.university}</strong><span class="muted">${PROFILE.studyPeriod}</span></div>
  <div>B.S. in ${PROFILE.major} (${PROFILE.academicStatus}) — GPA: <strong>${PROFILE.gpa}</strong></div>

  <h2>Technical Skills</h2>
  <ul>
    ${SKILL_GROUPS.map((g) => `<li><strong>${g.category}:</strong> ${g.items.join(', ')}</li>`).join('')}
  </ul>

  <h2>Projects</h2>
  ${completedProjects
    .map(
      (p) => `
    <div style="margin-bottom: 12px;">
      <div class="row"><h3>${p.title}</h3><span class="muted">${p.stack.join(' · ')}</span></div>
      <div class="muted">${p.status}${p.repoUrl ? ` · ${p.repoUrl}` : ''}</div>
      <ul>
        <li><strong>Problem:</strong> ${p.problem}</li>
        <li><strong>Architecture:</strong> ${p.architecture}</li>
        <li><strong>Outcome:</strong> ${p.outcome}</li>
      </ul>
    </div>`
    )
    .join('')}

  <h2>Competitive Programming &amp; Achievements</h2>
  <ul>
    ${ACHIEVEMENTS.map((a) => `<li><strong>${a.title}:</strong> ${a.detail}</li>`).join('')}
    ${CP_PROFILES.map((c) => `<li><strong>${c.platform} (${c.handle}):</strong> ${c.metric} — ${c.url}</li>`).join('')}
    <li><strong>Algorithms:</strong> ${CP_TOPICS.map((t) => `${t.category} (${t.topics.join(', ')})`).join('; ')}</li>
  </ul>

  <h2>Activities</h2>
  <ul>
    ${ACTIVITIES.map((act) => `<li><strong>${act.org}</strong> (${act.role}, ${act.period}): ${act.description}</li>`).join('')}
  </ul>
</body>
</html>`;
}

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleDownloadHtml = () => {
    const html = generateStandaloneCvHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Tran_Khanh_Duy_CV.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="framed-shell max-h-[90vh] w-full max-w-3xl overflow-hidden"
          >
            <div className="framed-shell-inner flex max-h-[90vh] flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0E1420] px-5 py-3.5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300/90">
                    CURRICULUM VITAE // VERIFIED RECORD
                  </p>
                  <h2 id="cv-modal-title" className="font-display text-base font-semibold text-white">
                    {PROFILE.name} — Resume Preview
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 bg-[#101622] px-3 py-2 font-mono text-xs text-white transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Print / PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadHtml}
                    className="neon-cta-btn inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-2 font-mono text-xs font-semibold text-cyan-100"
                  >
                    <Download className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                    <span>Download CV</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close CV preview"
                    className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg border border-white/15 text-slate-400 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Printable CV Sheet */}
              <div className="overflow-y-auto bg-white p-6 text-slate-900 sm:p-8">
                <div className="border-b border-slate-300 pb-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950">
                    {PROFILE.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {PROFILE.title} · {PROFILE.subtitle}
                  </p>
                  <p className="mt-2 font-mono text-xs text-slate-600">
                    {PROFILE.location} · {PROFILE.university} · GPA: {PROFILE.gpa}
                  </p>
                  <p className="mt-1 font-mono text-xs text-slate-600">
                    {SOCIAL_LINKS.map((s) => `${s.name}: ${s.handle}`).join(' · ')}
                  </p>
                </div>

                <div className="mt-5 grid gap-5">
                  <section>
                    <h4 className="border-b border-slate-200 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Education
                    </h4>
                    <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm">
                      <strong className="text-slate-950">{PROFILE.university}</strong>
                      <span className="font-mono text-xs text-slate-600">{PROFILE.studyPeriod}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-slate-700">
                      Major: {PROFILE.major} ({PROFILE.academicStatus}) — GPA:{' '}
                      <strong>{PROFILE.gpa}</strong>
                    </p>
                  </section>

                  <section>
                    <h4 className="border-b border-slate-200 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Technical Skills
                    </h4>
                    <div className="mt-2 space-y-1.5 text-sm text-slate-800">
                      {SKILL_GROUPS.map((g) => (
                        <p key={g.code}>
                          <strong className="text-slate-950">{g.category}:</strong>{' '}
                          {g.items.join(', ')}
                        </p>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="border-b border-slate-200 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Selected Projects
                    </h4>
                    <div className="mt-2 space-y-3">
                      {PROJECTS.filter((p) => p.statusTone !== 'planned').map((p) => (
                        <div key={p.id}>
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <strong className="text-sm text-slate-950">{p.title}</strong>
                            <span className="font-mono text-xs text-slate-600">
                              {p.stack.join(' · ')}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">
                            {p.status}
                            {p.repoUrl ? ` · ${p.repoUrl}` : ''}
                          </p>
                          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-slate-800">
                            <li>
                              <strong>Problem:</strong> {p.problem}
                            </li>
                            <li>
                              <strong>Architecture:</strong> {p.architecture}
                            </li>
                            <li>
                              <strong>Outcome:</strong> {p.outcome}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="border-b border-slate-200 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Competitive Programming &amp; Achievements
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-800">
                      {ACHIEVEMENTS.map((a) => (
                        <li key={a.title}>
                          <strong>{a.title}:</strong> {a.detail}
                        </li>
                      ))}
                      {CP_PROFILES.map((cp) => (
                        <li key={cp.platform}>
                          <strong>
                            {cp.platform} ({cp.handle}):
                          </strong>{' '}
                          {cp.metric}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="border-b border-slate-200 pb-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Activities
                    </h4>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-800">
                      {ACTIVITIES.map((act) => (
                        <li key={act.org}>
                          <strong>{act.org}</strong> ({act.role} · {act.period}): {act.description}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

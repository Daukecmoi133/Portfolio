import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  Trophy,
} from 'lucide-react';
import CvModal from './components/CvModal';
import InteractiveCodeProfile from './components/InteractiveCodeProfile';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import {
  ACHIEVEMENTS,
  ACTIVITIES,
  ARSENAL_CATEGORIES,
  CP_PROFILES,
  CP_TOPICS,
  PROFILE,
  PROJECTS,
  SOCIAL_LINKS,
  TECHNICAL_ARSENAL,
  TELEMETRY_METRICS,
} from './data/portfolio';

const LEVEL_STYLES = {
  Core: 'border-cyan-400/40 bg-cyan-400/12 text-cyan-200',
  Proficient: 'border-white/20 bg-white/8 text-slate-100',
  Working: 'border-white/12 bg-white/[0.04] text-slate-300',
  Exploring: 'border-amber-300/25 bg-amber-300/5 text-amber-200/90',
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeader({ code, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/90">{code}</p>
        <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="max-w-md font-mono text-xs leading-relaxed text-slate-400 sm:text-right">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);
  const [arsenalFilter, setArsenalFilter] = useState('all');

  const visibleArsenal =
    arsenalFilter === 'all'
      ? TECHNICAL_ARSENAL
      : TECHNICAL_ARSENAL.filter((item) => item.category === arsenalFilter);

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="tech-grid-bg min-h-screen bg-[#07090E] text-[#E6EDF3]">
        {/* Subtle top atmospheric cyan glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(34,211,238,0.11),transparent)]"
        />

        {/* Keyboard Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:border focus:border-cyan-400 focus:bg-[#07090E] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-cyan-200"
        >
          Skip to main content
        </a>

        <Navbar onOpenCv={() => setCvOpen(true)} />

        {/* Master Framed Shell */}
        <main
          id="main-content"
          className="no-print relative mx-auto max-w-[1160px] border-x border-white/[0.07] px-4 pt-24 pb-16 sm:px-6 sm:pt-28"
        >
          {/* ================================================================
              01 // HERO SECTION (SPLIT LAYOUT)
              ================================================================ */}
          <section
            aria-label="Introduction"
            className="grid gap-6 border-b border-white/10 pb-14 lg:grid-cols-12 lg:items-stretch lg:pb-16"
          >
            {/* Left Positioning & Telemetry (7 cols) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="framed-shell lg:col-span-7"
            >
              <div className="framed-shell-inner flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <motion.div
                    variants={staggerItem}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      01 // PROFILE · {PROFILE.location}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                        aria-hidden="true"
                      />
                      Open to Internships
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={staggerItem}
                    className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.04]"
                  >
                    {PROFILE.heroHeadline}
                  </motion.h1>

                  <motion.p
                    variants={staggerItem}
                    className="mt-3 font-mono text-sm font-medium tracking-tight text-cyan-300 sm:text-base"
                  >
                    {PROFILE.heroRole}
                  </motion.p>

                  <motion.p
                    variants={staggerItem}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300"
                  >
                    {PROFILE.heroSummary}
                  </motion.p>

                  {/* Hero CTAs */}
                  <motion.div
                    variants={staggerItem}
                    className="mt-7 flex flex-wrap items-center gap-3"
                  >
                    <motion.a
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      href="#projects"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#07090E] transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      <span>Explore Projects</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </motion.a>

                    <motion.button
                      type="button"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setCvOpen(true)}
                      className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-[#101622] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-slate-100 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      <Download className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                      <span>Download CV</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Verified Telemetry Strip */}
                <motion.div
                  variants={staggerItem}
                  className="mt-8 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-6 sm:grid-cols-4"
                >
                  {TELEMETRY_METRICS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/8 bg-[#101622]/70 px-3 py-2.5"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 font-display text-base font-bold text-white">
                        {item.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-slate-500">{item.meta}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Interactive 3D Particle Globe + Code Profile (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <InteractiveCodeProfile />
            </motion.div>
          </section>

          {/* ================================================================
              02 // TECHNICAL ARSENAL (INTERACTIVE FILTER + PROFICIENCY BADGES)
              ================================================================ */}
          <section id="arsenal" className="border-b border-white/10 py-14 sm:py-16">
            <SectionHeader
              code="02 // TECHNICAL ARSENAL"
              title="Stack & Engineering Depth"
              subtitle="Filter by engineering domain. Every skill is tied to verifiable coursework or builds."
            />

            {/* Filter Tabs with sliding cyan indicator */}
            <div
              className="mb-6 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter technical arsenal"
            >
              {ARSENAL_CATEGORIES.map((tab) => {
                const isActive = arsenalFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setArsenalFilter(tab.id)}
                    className={`relative min-h-[42px] cursor-pointer rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                      isActive ? 'font-semibold text-[#07090E]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="arsenalTabPill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-cyan-400"
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg border border-white/12 bg-[#0B0F17]" />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Filtered Skills Grid */}
            <motion.div
              layout
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {visibleArsenal.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="row-interactive flex flex-col justify-between p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-semibold text-white">
                        {skill.name}
                      </h3>
                      <span
                        className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                          LEVEL_STYLES[skill.level] || LEVEL_STYLES.Working
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                      {skill.evidence}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* ================================================================
              03 // FEATURED PROJECTS (ASYMMETRICAL BENTO GRID + BEAM GLOW)
              ================================================================ */}
          <section id="projects" className="border-b border-white/10 py-14 sm:py-16">
            <SectionHeader
              code="03 // FEATURED PROJECTS"
              title="Engineering Case Studies"
              subtitle="Structured as Problem → Architecture → Outcome. Hover any card for beam glow."
            />

            <div className="grid gap-5 lg:grid-cols-12">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </section>

          {/* ================================================================
              04 // ALGORITHMS & ACHIEVEMENTS
              ================================================================ */}
          <section id="algorithms" className="border-b border-white/10 py-14 sm:py-16">
            <SectionHeader
              code="04 // ALGORITHMS & HONORS"
              title="Competitive Programming & Credentials"
              subtitle="Verified Olympiad history, ICPC Central Vietnam Regional 2026, and academic standing."
            />

            <div className="grid gap-6 lg:grid-cols-12">
              {/* Online Judges & DSA Topics (6 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="framed-shell lg:col-span-6"
              >
                <div className="framed-shell-inner p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                      Online Judge Profiles
                    </h3>
                    <Code2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {CP_PROFILES.map((cp) => (
                      <a
                        key={cp.platform}
                        href={cp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="row-interactive flex min-h-[52px] items-center justify-between px-4 py-3 focus-visible:outline-2 focus-visible:outline-cyan-400"
                      >
                        <div>
                          <p className="font-display text-sm font-semibold text-white">
                            {cp.platform}
                          </p>
                          <p className="font-mono text-xs text-slate-400">@{cp.handle}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-cyan-200">{cp.metric}</span>
                          <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                      Core Algorithmic Toolkit
                    </h3>
                    <div className="mt-4 space-y-3">
                      {CP_TOPICS.map((group) => (
                        <div
                          key={group.category}
                          className="border-b border-white/8 pb-3 last:border-b-0"
                        >
                          <p className="font-mono text-xs font-medium text-white">
                            {group.category}
                          </p>
                          <p className="mt-1 font-mono text-xs text-slate-400">
                            {group.topics.join(' · ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Achievements & Credentials (6 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="framed-shell lg:col-span-6"
              >
                <div className="framed-shell-inner p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                      Achievements &amp; Certifications
                    </h3>
                    <Trophy className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {ACHIEVEMENTS.map((ach) => (
                      <li
                        key={ach.title}
                        className="row-interactive flex items-start justify-between gap-4 px-4 py-3.5"
                      >
                        <div className="flex items-start gap-3">
                          <Award
                            className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/80"
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-display text-sm font-semibold text-white">
                              {ach.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              {ach.detail}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 rounded border border-white/12 bg-[#101622] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
                          {ach.year}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ================================================================
              05 // EDUCATION & COMMUNITY EXPERIENCE
              ================================================================ */}
          <section id="experience" className="border-b border-white/10 py-14 sm:py-16">
            <SectionHeader
              code="05 // EDUCATION & COMMUNITY"
              title="Academic Standing & Activities"
              subtitle="University foundation at DUT alongside active developer and AI communities."
            />

            <div className="grid gap-6 lg:grid-cols-12">
              {/* Education Panel (5 cols) */}
              <div className="framed-shell lg:col-span-5">
                <div className="framed-shell-inner flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
                        Education
                      </span>
                      <GraduationCap className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">
                      {PROFILE.university}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-cyan-300">
                      {PROFILE.major} · {PROFILE.studyPeriod}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {PROFILE.aboutParagraphs[1]}
                    </p>
                  </div>

                  <dl className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs">
                    <div className="flex justify-between">
                      <dt className="font-mono text-slate-400">Academic Status</dt>
                      <dd className="text-slate-200">{PROFILE.academicStatus}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-mono text-slate-400">Cumulative GPA</dt>
                      <dd className="font-mono font-semibold text-cyan-300">{PROFILE.gpa}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Activities (7 cols) */}
              <div className="space-y-3 lg:col-span-7">
                {ACTIVITIES.map((act) => (
                  <div key={act.org} className="row-interactive p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-white">{act.org}</h3>
                      <span className="font-mono text-xs text-cyan-300/90">
                        {act.role} · {act.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{act.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================
              06 // CONTACT & FOOTER
              ================================================================ */}
          <section id="contact" className="pt-14 sm:pt-16">
            <div className="framed-shell">
              <div className="framed-shell-inner p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300/90">
                      06 // CONTACT &amp; LINKS
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Let&apos;s Connect
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                      Open to software engineering, data science, or AI internship opportunities,
                      technical collaborations, and competitive programming discussions.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <MapPin className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                        {PROFILE.location}
                      </span>
                      <button
                        type="button"
                        onClick={() => setCvOpen(true)}
                        className="inline-flex min-h-[42px] cursor-pointer items-center gap-1.5 font-mono text-cyan-300 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-200 hover:decoration-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-400"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Preview or Download CV</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2.5 lg:col-span-5">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="row-interactive flex min-h-[52px] items-center justify-between px-4 py-3 focus-visible:outline-2 focus-visible:outline-cyan-400"
                      >
                        <div>
                          <p className="font-display text-sm font-semibold text-white">
                            {social.name}
                          </p>
                          <p className="font-mono text-xs text-slate-400">@{social.handle}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-cyan-400/80" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-slate-500 sm:flex-row">
              <p>© 2026 Trần Khánh Duy · React, Tailwind CSS, Framer Motion &amp; Vite</p>
              <p>DUT · Data Science &amp; Artificial Intelligence</p>
            </footer>
          </section>
        </main>

        <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      </div>
    </MotionConfig>
  );
}

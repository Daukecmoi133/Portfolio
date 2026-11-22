export const PROFILE = {
  name: 'Trần Khánh Duy',
  shortName: 'Khánh Duy',
  handle: 'bkdn25.emy',
  title: 'Data Science & AI Undergraduate',
  subtitle: 'Systems & Algorithms',
  university: 'The University of Danang — University of Science and Technology (DUT)',
  universityShort: 'DUT · Da Nang',
  major: 'Data Science and Artificial Intelligence',
  studyPeriod: 'September 2025 – Present',
  academicStatus: 'Second-year undergraduate',
  gpa: '3.63 / 4.00',
  location: 'Da Nang, Vietnam',
  heroHeadline: 'Trần Khánh Duy',
  heroRole: 'Data Science & AI Undergraduate · Systems & Algorithms',
  heroSummary:
    'Second-year Data Science & AI student at DUT. I build layered C++17 & Python software systems, engineer RESTful backends, and compete in algorithmic problem solving (ICPC Joint Silver · Codeforces 1405).',
  tags: ['AI & Data Science', 'Core Systems C++', 'Competitive Programming'],
  aboutParagraphs: [
    "I'm a second-year undergraduate majoring in Data Science and Artificial Intelligence at the University of Science and Technology — The University of Danang (DUT), maintaining a 3.63/4.00 GPA.",
    'Through university engineering projects and three years of competitive programming, I have built a strong foundation in C/C++, custom data structures, object-oriented architecture, and backend API design.',
    'My goal is to bridge algorithmic rigor with practical software engineering — building reliable, data-driven applications backed by verifiable code.',
  ],
};

export const TELEMETRY_METRICS = [
  { label: 'GPA (DUT)', value: '3.63 / 4.00', meta: 'Year 2 · DS & AI' },
  { label: 'ICPC Central 2026', value: 'Joint Silver', meta: '5/14 Solved · Top 5 Univ' },
  { label: 'Codeforces', value: '1405', meta: 'bkdn25.emy' },
  { label: 'English (VSTEP)', value: 'B2', meta: 'Verified Academic' },
];

export const CODE_PROFILE_TABS = [
  {
    id: 'profile.py',
    label: 'profile.py',
    language: 'Python',
    code: `from dataclasses import dataclass

@dataclass(frozen=True)
class EngineerProfile:
    name: str = "Trần Khánh Duy"
    university: str = "DUT (Da Nang, VN)"
    major: str = "Data Science & AI"
    gpa: str = "3.63 / 4.00"
    focus: tuple[str, ...] = (
        "Systems Engineering (C++17)",
        "Algorithmic Problem Solving",
        "AI & Data Workflows",
    )
    status: str = "Open to Internships"`,
  },
  {
    id: 'metrics.json',
    label: 'metrics.json',
    language: 'JSON',
    code: `{
  "academic": {
    "institution": "DUT — The University of Danang",
    "standing": "Second-year undergraduate",
    "gpa": 3.63,
    "scale": 4.0
  },
  "competitive_programming": {
    "icpc_central_2026": "Joint Silver (5/14 solved, Top 5 Univ)",
    "codeforces": { "handle": "bkdn25.emy", "rating": 1405 },
    "leetcode": { "handle": "Khanhduy2511", "count": "520 (to confirm)" }
  },
  "certifications": ["VSTEP B2", "GitHub Student Pack (2028)"]
}`,
  },
  {
    id: 'achievements.md',
    label: 'achievements.md',
    language: 'Markdown',
    code: `# Verified Milestones — Trần Khánh Duy

- **ICPC Central Vietnam Regional 2026**
  Joint Silver · 5/14 problems solved · Reported Top 5 university teams
- **Provincial Informatics Competitions**
  3 years of Olympiad-level algorithmic training
- **Community & Leadership Support**
  - GDG on Campus DUT — Member (2026 – Present)
  - DUT AI — Member (2026 – Present)
  - PBL2 Team Project & K25 Admission Support`,
  },
];

export const ARSENAL_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ai-data', label: 'AI & Data' },
  { id: 'core-cpp', label: 'Core Systems C++' },
  { id: 'web-tooling', label: 'Web & Tooling' },
];

export const TECHNICAL_ARSENAL = [
  {
    name: 'C++ / C++17',
    category: 'core-cpp',
    level: 'Core',
    evidence: 'PBL2 GTK4 desktop app, custom STL-like containers, ICPC & Codeforces',
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'core-cpp',
    level: 'Core',
    evidence: 'Segment Tree, Fenwick Tree, DSU, Dijkstra, LCA, DP (ICPC Joint Silver)',
  },
  {
    name: 'OOP & Layered Architecture',
    category: 'core-cpp',
    level: 'Core',
    evidence: 'UI → Controller → Service → Repository pattern in PBL2',
  },
  {
    name: 'C',
    category: 'core-cpp',
    level: 'Proficient',
    evidence: 'Low-level memory & procedural CS coursework at DUT',
  },
  {
    name: 'Python',
    category: 'ai-data',
    level: 'Core',
    evidence: 'CP Problem Archiver CLI, scripting, and Data Science stack',
  },
  {
    name: 'NumPy & Pandas',
    category: 'ai-data',
    level: 'Working',
    evidence: 'Data manipulation, preprocessing & tabular EDA coursework',
  },
  {
    name: 'Scikit-learn & EDA',
    category: 'ai-data',
    level: 'Exploring',
    evidence: 'Supervised ML fundamentals & feature engineering track',
  },
  {
    name: 'SQL (PostgreSQL / MySQL / SQL Server)',
    category: 'ai-data',
    level: 'Proficient',
    evidence: 'Relational schema design, queries & NestJS/TypeORM integration',
  },
  {
    name: 'NestJS & TypeORM',
    category: 'web-tooling',
    level: 'Working',
    evidence: 'REST API development, CRUD endpoints & Dockerized PostgreSQL',
  },
  {
    name: 'React, HTML & CSS',
    category: 'web-tooling',
    level: 'Working',
    evidence: 'Responsive component-driven frontend interfaces',
  },
  {
    name: 'Git & GitHub',
    category: 'web-tooling',
    level: 'Proficient',
    evidence: 'Version control, team collaboration on PBL2 & portfolio deployment',
  },
  {
    name: 'Docker & Linux (Ubuntu)',
    category: 'web-tooling',
    level: 'Working',
    evidence: 'Docker Compose database environments & CLI workflows',
  },
];

export const SKILL_GROUPS = [
  {
    code: '01',
    category: 'Programming Languages',
    items: ['C++', 'C', 'Python', 'SQL', 'HTML'],
  },
  {
    code: '02',
    category: 'CS Fundamentals',
    items: ['OOP', 'Data Structures & Algorithms', 'Competitive Programming', 'Modular Design'],
  },
  {
    code: '03',
    category: 'AI & Data Science',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Data Analysis', 'EDA'],
  },
  {
    code: '04',
    category: 'Backend & Databases',
    items: ['NestJS', 'TypeORM', 'REST API', 'PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    code: '05',
    category: 'Frontend & Tooling',
    items: ['React', 'HTML', 'CSS', 'Git & GitHub', 'Docker', 'Linux / Ubuntu'],
  },
];

export const PROJECTS = [
  {
    id: 'pbl2-phone-store',
    code: 'CASE-01',
    featured: true,
    bentoSpan: 'lg:col-span-7',
    title: 'Phone Store Management System (PBL2)',
    status: 'Completed · Flagship Desktop App',
    statusTone: 'active',
    stack: ['C++17', 'GTK4', 'Custom Data Structures', 'OOP'],
    repoUrl: 'https://github.com/Daukecmoi133/PBL2-Moble-phone-store-manager',
    repoLabel: 'github.com/Daukecmoi133/PBL2-Moble-phone-store-manager',
    problem:
      'Phone retail workflows require fast inventory lookup, multi-role access control, and reliable persistence without relying on heavy external database engines.',
    architecture:
      'Engineered a 4-layer architecture (UI → Controller → Service → Repository) in C++17 & GTK4, backed by custom-built Vector, Linked List, Queue, Stack, Hash Table, and Binary Search Tree structures.',
    outcome:
      'Delivered a modular desktop system supporting Admin, Sales, Warehouse, and Customer roles with file-based persistence and clean separation of concerns.',
  },
  {
    id: 'cp-archiver',
    code: 'CASE-02',
    featured: false,
    bentoSpan: 'lg:col-span-5',
    title: 'CP Problem Archiver & Workspace Generator',
    status: 'Working CLI Tool',
    statusTone: 'active',
    stack: ['Python', 'Requests', 'BeautifulSoup4', 'JSON/CSV'],
    repoUrl: null,
    repoLabel: 'Local CLI · Repo pending cleanup',
    problem:
      'Manually copying problem statements, constraints, and sample test cases across VNOJ, LQDOJ, and Codeforces slowed down daily contest practice.',
    architecture:
      'Built a Python scraping pipeline using Requests & BeautifulSoup4 to parse HTML statements, extract constraints/tags/samples, and scaffold Markdown briefs + C++ templates.',
    outcome:
      'Automates structured local workspace creation with .txt test files and structured CSV/JSON metadata export for rapid contest review.',
  },
  {
    id: 'nestjs-backend',
    code: 'CASE-03',
    featured: false,
    bentoSpan: 'lg:col-span-6',
    title: 'Backend REST API Architecture',
    status: 'Coursework · Active Practice',
    statusTone: 'muted',
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Docker'],
    repoUrl: null,
    repoLabel: 'Practice workspace · Private',
    problem:
      'Needed hands-on experience structuring maintainable server-side APIs with typed ORM persistence and reproducible local database environments.',
    architecture:
      'Configured a NestJS modular backend integrated with PostgreSQL via TypeORM entities/repositories, running inside a Docker Compose stack.',
    outcome:
      'Implemented validated CRUD endpoints and end-to-end API testing workflows; refining codebase before public repository release.',
  },
  {
    id: 'ds-ml-pipeline',
    code: 'CASE-04',
    featured: false,
    bentoSpan: 'lg:col-span-6',
    title: 'Data Analysis & Machine Learning Pipeline',
    status: 'Planned · Next Milestone',
    statusTone: 'planned',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    repoUrl: null,
    repoLabel: 'Roadmap · In preparation',
    problem:
      'Demonstrating end-to-end Data Science rigor requires reproducible datasets, transparent preprocessing, and honest model evaluation.',
    architecture:
      'Scoped two upcoming studies: (1) an end-to-end Exploratory Data Analysis notebook and (2) a supervised ML pipeline with feature engineering and cross-validated metrics.',
    outcome:
      'Explicitly tracked as upcoming work — not presented as completed output until code, evaluation metrics, and limitations are published.',
  },
];

export const CP_PROFILES = [
  {
    platform: 'Codeforces',
    handle: 'bkdn25.emy',
    metric: 'Rating: 1405',
    url: 'https://codeforces.com/profile/bkdn25.emy',
  },
  {
    platform: 'LeetCode',
    handle: 'Khanhduy2511',
    metric: '520 (metric to confirm)',
    url: 'https://leetcode.com/u/Khanhduy2511/',
  },
];

export const CP_TOPICS = [
  { category: 'Graph', topics: ['DFS', 'BFS', 'DSU', 'Dijkstra', 'LCA', 'Floyd–Warshall'] },
  { category: 'Data Structures', topics: ['Fenwick Tree', 'Segment Tree'] },
  { category: 'Dynamic Programming', topics: ['Basic DP'] },
  { category: 'Problem Solving', topics: ['Binary Search', 'Greedy', 'Two Pointers'] },
];

export const ACHIEVEMENTS = [
  {
    title: 'ICPC Central Vietnam Regional 2026',
    detail: 'Joint Silver · 5/14 problems solved · Reported Top 5 university teams',
    year: '2026',
  },
  {
    title: 'Provincial Informatics Competitions',
    detail: 'Three years of competitive programming experience at provincial level',
    year: '3 Yrs',
  },
  {
    title: 'University Academic Standing',
    detail: 'GPA 3.63 / 4.00 — Data Science & Artificial Intelligence (DUT)',
    year: '2025–Now',
  },
  {
    title: 'VSTEP English Proficiency',
    detail: 'Level B2 certified',
    year: 'B2',
  },
  {
    title: 'GitHub Student Developer Pack',
    detail: 'Verified student status · Valid through April 2028',
    year: '2028',
  },
];

export const ACTIVITIES = [
  {
    org: 'GDG on Campus DUT',
    role: 'Member',
    period: '2026 – Present',
    description:
      'Participating in a developer community focused on software engineering, technical workshops, and collaborative learning.',
  },
  {
    org: 'DUT AI',
    role: 'Member',
    period: '2026 – Present',
    description:
      'Engaging in AI-related learning sessions, peer research discussions, and technical growth within DUT.',
  },
  {
    org: 'Campus & Project Contributions',
    role: 'Contributor',
    period: '2025 – Present',
    description:
      'PBL2 team project (Phone Store Management System) and K25 freshman admission support activities.',
  },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', handle: 'Daukecmoi133', url: 'https://github.com/Daukecmoi133' },
  { name: 'Codeforces', handle: 'bkdn25.emy', url: 'https://codeforces.com/profile/bkdn25.emy' },
  { name: 'LeetCode', handle: 'Khanhduy2511', url: 'https://leetcode.com/u/Khanhduy2511/' },
];

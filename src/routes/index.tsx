import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabiya Bushra M | Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Rabiya Bushra M, a Computer Science undergraduate building full-stack, cloud, and machine learning solutions.",
      },
      { property: "og:title", content: "Rabiya Bushra M | Full-Stack Developer" },
      {
        property: "og:description",
        content: "Explore Rabiya's full-stack, AWS, and machine learning projects and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Leadership", "leadership"],
  ["Contact", "contact"],
];

const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "Spring Boot", "Python", "C", "SQL"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "Bootstrap"] },
  { title: "Machine Learning", items: ["Pandas", "Scikit-Learn", "XGBoost", "SHAP", "Random Forest"] },
  { title: "Cloud", items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Maven", "Postman", "Power BI"] },
];

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Web Stack Academy",
    date: "Sep 2025 — Nov 2025",
    points: [
      "Developed MERN stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built REST APIs, CRUD modules, and backend database integrations.",
      "Followed structured SDLC practices with Git and GitHub.",
    ],
  },
  {
    role: "Data Science & Analytics Intern",
    company: "Future Interns",
    date: "Dec 2025 — Jan 2026",
    points: [
      "Built interactive Power BI dashboards for clear data visualization and reporting.",
      "Performed data cleaning, exploratory data analysis, and sentiment analysis using Python.",
    ],
  },
];

type Project = {
  title: string;
  tech: string[];
  problem: string;
  approach: string;
  outcome: string;
  github?: string;
  profileLink?: boolean;
  badge?: string;
};

const featuredProjects: Project[] = [
  {
    title: "BarrierLens",
    tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "SHAP", "Machine Learning"],
    problem: "Millions of women in India face healthcare access barriers, yet traditional analysis struggles to reveal complex causes across large populations.",
    approach: "Developed an ML system using NFHS-5 survey data to identify household, logistic, and facility-level barriers through classification and SHAP explainability.",
    outcome: "Identified wealth, education, and rural residence as key predictors, producing actionable insights for policymakers.",
    badge: "Research paper submitted",
  },
  {
    title: "Serverless URL Shortener",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch"],
    problem: "Traditional URL shorteners require continuous server maintenance, increasing cost and infrastructure complexity.",
    approach: "Built a fully serverless application with Lambda functions triggered through API Gateway, DynamoDB storage, S3 hosting, and CloudWatch monitoring.",
    outcome: "Delivered a scalable, cost-efficient shortener capable of handling requests with minimal infrastructure overhead.",
    github: "https://github.com/rabiyabushra/serverless-url-shortener",
  },
  {
    title: "Question Paper Delivery System",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem: "Institutions need a secure workflow for question paper creation, verification, approval, and storage.",
    approach: "Built role-based faculty, reviewer, and administrator workflows with REST APIs, secure authentication, and MongoDB integration.",
    outcome: "Created a secure, auditable system with controlled access at every stage of question paper handling.",
    github: "https://github.com/pbcs2025/QPDS_Project",
  },
  {
    title: "Smart Energy ML",
    tech: ["Python", "Random Forest", "Machine Learning", "Data Analysis"],
    problem: "Energy consumption often goes unmanaged because appliance usage patterns lack predictive insights.",
    approach: "Used simulated consumption data and Random Forest models to predict usage patterns and identify optimization opportunities.",
    outcome: "Generated actionable efficiency insights, demonstrating how ML can support smarter energy management.",
    github: "https://github.com/rabiyabushra/Smart-Energy-ML",
  },
  {
    title: "Homely Hub",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem: "Users need one convenient place to discover properties, view details, and manage bookings.",
    approach: "Developed a MERN platform with property listings, detailed pages, booking flows, and backend database integration.",
    outcome: "Delivered a responsive, database-driven booking application demonstrating practical full-stack development.",
    github: "https://github.com/rabiyabushra/HomelyHub",
  },
];

const moreProjects: Project[] = [
  {
    title: "ChromaFind — Spot the Shade",
    tech: ["Java 17", "Spring Boot", "React.js"],
    problem: "Interactive games need efficient backend processing and session-aware gameplay.",
    approach: "Built a Spring Boot backend with Java Collections, Stream API, and session management.",
    outcome: "An engaging game with clean frontend-backend integration.",
    github: "https://github.com/rabiyabushra/chromafind",
  },
  {
    title: "Spot The Difference Game",
    tech: ["Java"],
    problem: "Visual puzzles need image comparison logic and engaging interaction mechanics.",
    approach: "Developed a Java game with comparison logic, scoring, and user interaction features.",
    outcome: "An interactive desktop game that builds problem-solving skills.",
    github: "https://github.com/rabiyabushra/SpotTheDifferenceGame",
  },
  {
    title: "Library Management System",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    problem: "Manual library operations are inefficient and prone to tracking errors.",
    approach: "Built secure authentication, role access, book management, and transaction tracking.",
    outcome: "A scalable REST API for core library operations.",
    github: "https://github.com/rabiyabushra/Library-Project",
  },
  {
    title: "Secure KYC Search",
    tech: ["Java", "Encryption Techniques"],
    problem: "Financial institutions need to search KYC records without exposing sensitive data.",
    approach: "Implemented encrypted keyword-based search while preserving record confidentiality.",
    outcome: "Demonstrated secure retrieval from encrypted datasets with reduced privacy risk.",
    github: "https://github.com/rabiyabushra/PRSP_INNOVATOR",
  },
  {
    title: "Money Tracker",
    tech: ["React.js", "JavaScript", "MongoDB"],
    problem: "Personal income and expenses need simple, secure tracking.",
    approach: "Built reusable React components, user authentication, and persistent MongoDB storage.",
    outcome: "A functional tracker with a clean, component-based interface.",
    github: "https://github.com/rabiyabushra",
    profileLink: true,
  },
  {
    title: "Restaurant Menu Website",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem: "Restaurant visitors need an easy way to browse a menu on any device.",
    approach: "Implemented search and category filtering in a cross-browser responsive design.",
    outcome: "A polished restaurant website with fast menu discovery.",
    github: "https://github.com/rabiyabushra",
    profileLink: true,
  },
];

function SectionHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">{index} /</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">{title}</h2>
      </div>
      {intro && <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-right">{intro}</p>}
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.github) {
    return (
      <span className="inline-flex items-center gap-2 border border-primary/30 bg-accent px-3 py-2 font-mono text-xs text-accent-foreground">
        <CheckCircle2 size={14} aria-hidden="true" /> {project.badge}
      </span>
    );
  }
  return (
    <a className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary" href={project.github} target="_blank" rel="noreferrer">
      <Github size={16} aria-hidden="true" /> {project.profileLink ? "View GitHub profile" : "View on GitHub"} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" className="shrink-0 font-mono text-sm font-bold text-foreground" aria-label="Rabiya Bushra, back to top">
            RB<span className="text-primary">.</span>
          </a>
          <nav className="ml-auto flex items-center gap-5 overflow-x-auto" aria-label="Portfolio sections">
            {navItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} className="shrink-0 font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="portfolio-grid relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center border-b border-border px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl" data-reveal>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" /> Bengaluru, India · Available for opportunities
            </div>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-normal text-foreground sm:text-7xl lg:text-[6.6rem]">
              Rabiya Bushra M
            </h1>
            <p className="mt-7 text-xl font-medium text-foreground/90 sm:text-2xl">Computer Science Undergraduate <span className="text-primary">|</span> Full-Stack Developer</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Building scalable, secure full-stack applications with the MERN stack, Spring Boot, AWS, and Machine Learning.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                View Projects <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex h-12 items-center gap-2 border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Contact Me <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-border pt-6">
              <a href="https://github.com/rabiyabushra" target="_blank" rel="noreferrer" className="social-link"><Github size={17} /> GitHub</a>
              <a href="https://linkedin.com/in/rabiya-bushra" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:rabiyabushram1ga23cs130@gmail.com" className="social-link"><Mail size={17} /> Email</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="01" title="About me" />
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.75fr]">
            <p className="max-w-4xl text-xl leading-9 text-foreground/90 sm:text-2xl sm:leading-10">
              Computer Science undergraduate graduating in 2027 at Global Academy of Technology, Bengaluru (VTU), currently in my 7th semester. I focus on full-stack development, backend engineering, and applying machine learning to real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-px border border-border bg-border">
              <div className="bg-card p-5"><p className="font-mono text-xs text-muted-foreground">CGPA</p><p className="mt-2 text-3xl font-semibold text-primary">9.48</p></div>
              <div className="bg-card p-5"><p className="font-mono text-xs text-muted-foreground">GRADUATING</p><p className="mt-2 text-3xl font-semibold">2027</p></div>
              <div className="col-span-2 bg-card p-5"><p className="font-mono text-xs text-muted-foreground">FOCUS</p><p className="mt-2 text-sm leading-6">Full-stack · Backend · ML · Cloud</p></div>
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-base leading-8 text-muted-foreground">
            My experience spans REST APIs, authentication, database design, cloud development on AWS, and data analytics with Power BI and Python. I am also a co-author of research on data-driven approaches to healthcare accessibility.
          </p>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="02" title="Technical toolkit" intro="A practical stack for building products from data and APIs through to reliable user experiences." />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => (
              <article key={group.title} className={`bg-card p-6 ${index === 4 ? "lg:col-span-2" : ""}`}>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-primary">{group.title}</p>
                <TechList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="03" title="Experience" />
          <div className="border-t border-border">
            {experiences.map((item, index) => (
              <article key={item.company} className="grid gap-6 border-b border-border py-9 md:grid-cols-[3rem_1fr_1.4fr] md:gap-8">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <div><h3 className="text-xl font-semibold">{item.role}</h3><p className="mt-2 text-sm text-primary">{item.company}</p><p className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground"><CalendarDays size={14} /> {item.date}</p></div>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  {item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 bg-primary" />{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 border-b border-border bg-surface px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal><SectionHeading index="04" title="Featured projects" intro="Selected work across healthcare research, secure systems, cloud infrastructure, and end-to-end product development." /></div>
          <div className="space-y-5">
            {featuredProjects.map((project, index) => (
              <article key={project.title} data-reveal className="group grid gap-8 border border-border bg-card p-6 transition-colors hover:border-primary/45 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:p-10">
                <div className="flex flex-col justify-between gap-8 border-b border-border pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                  <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Featured · 0{index + 1}</p><h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{project.title}</h3><div className="mt-6"><TechList items={project.tech} /></div></div>
                  <ProjectLink project={project} />
                </div>
                <div className="grid gap-7 md:grid-cols-3">
                  {[['Problem', project.problem], ['Approach', project.approach], ['Outcome', project.outcome]].map(([label, text]) => (
                    <div key={label}><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{label}</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mb-8 mt-24 flex items-end justify-between" data-reveal>
            <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Archive</p><h3 className="mt-3 text-2xl font-semibold sm:text-3xl">More projects</h3></div>
            <span className="font-mono text-xs text-muted-foreground">06 PROJECTS</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project) => (
              <article key={project.title} data-reveal className="flex min-h-[31rem] flex-col border border-border bg-card p-6 transition-colors hover:border-primary/45">
                <div className="mb-5 flex items-start justify-between gap-4"><h4 className="text-xl font-semibold leading-7">{project.title}</h4><ArrowUpRight className="shrink-0 text-primary" size={18} /></div>
                <TechList items={project.tech} />
                <div className="mt-7 space-y-5 text-sm leading-6 text-muted-foreground">
                  <p><strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Problem</strong>{project.problem}</p>
                  <p><strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Approach</strong>{project.approach}</p>
                  <p><strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Outcome</strong>{project.outcome}</p>
                </div>
                <div className="mt-auto border-t border-border pt-5"><ProjectLink project={project} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="05" title="Achievements" />
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {[
              ["Winner", "DBMS Hackathon 2025", "Global Academy of Technology"],
              ["Shortlisted", "Smart India Hackathon 2025", "Gamified Sustainable Farming Platform"],
              ["Participant", "HAL Hackathon 2025", "Privacy-Preserving Searchable Encryption for Secure KYC Systems"],
              ["Participant", "WWT All India Women-Only Hackathon", "National-level hackathon"],
            ].map(([badge, title, detail], index) => (
              <article key={title} className="flex gap-5 bg-card p-6 sm:p-8"><Award className="mt-1 shrink-0 text-primary" size={22} /><div><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{badge} · 0{index + 1}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="06" title="Leadership & activities" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [Users, "Research Group Head", "Network & Security", "ACM Student Chapter, Global Academy of Technology"],
              [Sparkles, "Organizer", "Prompt Battle", "ACM Student Chapter"],
              [GraduationCap, "Community Member", "ACM Community Club", "Global Academy of Technology"],
            ].map(([Icon, role, area, org]) => {
              const LeadershipIcon = Icon as typeof Users;
              return <article key={role as string} className="border-l-2 border-primary bg-card p-7"><LeadershipIcon className="text-primary" size={22} /><p className="mt-8 font-mono text-xs uppercase text-primary">{role as string}</p><h3 className="mt-2 text-xl font-semibold">{area as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{org as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-grid scroll-mt-16 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading index="07" title="Let’s build something useful." />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Open to full-stack development, machine learning, and research opportunities.</p><a href="mailto:rabiyabushram1ga23cs130@gmail.com" className="mt-8 inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"><Mail size={17} /> Start a conversation</a></div>
            <div className="border-t border-border">
              {[
                [Mail, "Email", "rabiyabushram1ga23cs130@gmail.com", "mailto:rabiyabushram1ga23cs130@gmail.com"],
                [Phone, "Phone", "8431445615", "tel:+918431445615"],
                [Linkedin, "LinkedIn", "linkedin.com/in/rabiya-bushra", "https://linkedin.com/in/rabiya-bushra"],
                [Github, "GitHub", "github.com/rabiyabushra", "https://github.com/rabiyabushra"],
              ].map(([Icon, label, value, href]) => {
                const ContactIcon = Icon as typeof Mail;
                return <a key={label as string} href={href as string} target={(href as string).startsWith("http") ? "_blank" : undefined} rel={(href as string).startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4 border-b border-border py-5"><ContactIcon size={18} className="shrink-0 text-primary" /><span className="w-20 font-mono text-[11px] uppercase text-muted-foreground">{label as string}</span><span className="min-w-0 flex-1 truncate text-sm text-foreground group-hover:text-primary">{value as string}</span><ArrowUpRight size={15} className="text-muted-foreground" /></a>;
              })}
            </div>
          </div>
          <footer className="mt-24 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Rabiya Bushra M</span><span className="inline-flex items-center gap-2"><MapPin size={13} /> Bengaluru, India</span></footer>
        </div>
      </section>
    </main>
  );
}
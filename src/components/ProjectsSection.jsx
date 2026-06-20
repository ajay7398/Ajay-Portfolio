const PROJECTS = [
   {
    title: "AI Code Review Platform",
    subtitle: "MERN Stack · Groq AI · Socket.io · Monaco Editor",
    period: "Jun 2025 – Jun 2025",
    description:
      "Full-stack AI-powered code review platform where users paste code and receive instant feedback using Groq LLaMA 3.3 70B model via structured prompt engineering. AI returns a quality score (0–100), severity-ranked issues (critical/high/medium/low), and actionable fix suggestions across 10+ programming languages. Implemented secure cookie-based JWT authentication with httpOnly cookies, Monaco Editor for VS Code-like experience, and deployed frontend on Netlify with proxy configuration and backend on Render with MongoDB Atlas.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Groq AI",
      "LLaMA 3.3 70B",
      "JWT",
      "Monaco Editor",
      "Tailwind CSS",
      "REST API",
      "Prompt Engineering",
      "Netlify",
      "Render",
    ],
    github: "https://github.com/ajay7398/Ai-Code-Review-Plateform",
    live: "https://codelens-app.netlify.app/",
    color: "#6c63ff",
    icon: "◎",
  },
  {
  title: "JobBoard Platform",
  subtitle: "MERN Stack · JWT · Cloudinary · Tailwind CSS",
  period: "Jul 2025 – Aug 2025",
  description:
    "Full-stack job portal platform with separate employer and candidate workflows. Employers can create, edit, and manage job postings while candidates can browse jobs and apply using resume uploads. Implemented JWT authentication with role-based authorization, Cloudinary PDF resume storage, email notifications, protected routes, advanced job filtering, and responsive dashboards. Built RESTful APIs with MongoDB and deployed frontend/backend separately using Netlify and Render.",
  tags: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JWT",
    "Cloudinary",
    "Tailwind CSS",
    "REST API",
    "Multer",
    "Nodemailer",
    "Role-Based Auth",
    "Netlify",
    "Render"
  ],
  github: "https://github.com/ajay7398/CODESOFT/tree/main/JobBoard",
  live: "https://jobtation.netlify.app/",
  color: "#7209b7",
  icon: "⚡",
},
{
    title: "QuizMaker Platform",
    subtitle: "React.js · Context API · Tailwind CSS · Netlify",
    period: "May 2026 – May 2026",
    description:
      "Interactive quiz creation and participation platform with dynamic question management, score tracking, and responsive UI. Built reusable React components with Context API for global state management and React Router for smooth navigation. Integrated real-time quiz result calculation with visually appealing analytics and progress indicators.",
    tags: [
      "React.js",
      "Context API",
      "Tailwind CSS",
      "React Router",
      "JavaScript",
      "Quiz App",
      "Responsive Design",
      "Netlify",
    ],
    github: "https://github.com/ajay7398/CODESOFT/tree/main/QuizMaker",
    live: "https://quizsetter.netlify.app/",
    color: "#4361ee",
    icon: "❖",
  },
  {
    title: "AI-Powered Blogging Platform",
    subtitle: "Full Stack · MERN · JWT · Tailwind CSS",
    period: "Feb 2024 – Mar 2024",
    description:
      "Full-stack blogging platform with AI-assisted content generation and an admin dashboard. JWT-based RBAC securing admin/user workflows end-to-end. RESTful APIs with MongoDB supporting 100+ dynamic content entries. Deployed on Vercel with an optimized Vite build pipeline.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Tailwind CSS", "Vercel", "Vite"],
    github: "https://github.com/ajay7398",
    live: "https://ajay-blog.vercel.app",
    color: "#00f5d4",
    icon: "✦",
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "React.js · Vite · Tailwind CSS · EmailJS",
    period: "Jun 2024 – Jul 2024",
    description:
      "Fully responsive portfolio with smooth animations and reusable component architecture optimized for fast load times via Vite bundling. EmailJS for serverless contact form — no backend needed. React Router for seamless client-side navigation across 5+ sections.",
    tags: ["React.js", "Vite", "Tailwind CSS", "EmailJS", "React Router", "Responsive Design"],
    github: "https://github.com/ajay7398",
    live: "https://ajaykumar.vercel.app",
    color: "#f72585",
    icon: "◈",
  },
  
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-[#030f1a] relative">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#f72585] font-mono text-sm tracking-widest uppercase mb-3">
            03. Work
          </p>
          <h2 className="text-5xl font-black text-white">Projects</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#f72585] to-[#7b2fff] rounded-full" />
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={i} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = proj.color + "40";
    e.currentTarget.style.boxShadow = `0 20px 60px ${proj.color}18`;
    e.currentTarget.style.transform = "translateY(-8px)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = "transparent";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-[#0a1628] border transition-all duration-500 cursor-default"
      style={{ borderColor: "transparent" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top accent */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${proj.color}, #7b2fff)` }}
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-mono text-gray-500 mb-1">{proj.period}</p>
            <h3 className="text-2xl font-black text-white leading-tight">{proj.title}</h3>
            <p className="text-sm font-semibold mt-1" style={{ color: proj.color }}>
              {proj.subtitle}
            </p>
          </div>
          <span className="text-5xl opacity-10 text-white">{proj.icon}</span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{proj.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {proj.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-bold border"
              style={{
                color: proj.color,
                borderColor: proj.color + "30",
                backgroundColor: proj.color + "10",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-2 border-t border-gray-800">
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors mt-4"
          >
            <span>⌥</span> GitHub
          </a>
          <a
            href={proj.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold transition-colors mt-4"
            style={{ color: proj.color }}
          >
            <span>↗</span> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

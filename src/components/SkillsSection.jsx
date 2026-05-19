const SKILLS = {
  Frontend: [
    "React.js", "Redux Toolkit", "JavaScript ES6+",
    "Tailwind CSS", "HTML5", "CSS3", "Vite", "Responsive Design",
  ],
  Backend: [
    "Node.js", "Express.js", "REST APIs",
    "JWT Auth", "Bcrypt.js", "MVC Architecture", "Middleware",
  ],
  Database: ["MongoDB", "Mongoose ODM", "SQL"],
  "Tools & DevOps": [
    "Git", "GitHub", "Postman",
    "Vercel", "Render", "Netlify", "VS Code", "Axios",
  ],
  "CS Foundations": ["Java", "Data Structures", "Algorithms", "OOP"],
};

const COLORS = ["#00f5d4", "#f72585", "#7b2fff", "#ffb703", "#06d6a0"];

const CERTS = [
  "Software Engineering Simulation — NY Jobs CEO Council × Forage (Jan 2025)",
  "Full Stack Web Dev Internship — YHills / Corevo Pvt. Ltd. (Mar 2024)",
  "Zero to Prototype with Node.js — Parul Institute of Engineering (2024)",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-[#020c14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5d4]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#7b2fff] font-mono text-sm tracking-widest uppercase mb-3">
            04. Stack
          </p>
          <h2 className="text-5xl font-black text-white">Skills</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#7b2fff] to-[#00f5d4] rounded-full" />
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([cat, skills], ci) => (
            <SkillCard key={cat} category={cat} skills={skills} color={COLORS[ci % COLORS.length]} />
          ))}

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00f5d4]/10 to-[#7b2fff]/10 border border-[#00f5d4]/20 flex flex-col justify-between">
            <div>
              <p className="text-[#00f5d4] text-xs font-bold tracking-widest uppercase mb-2">
                Education
              </p>
              <h3 className="text-white font-black text-lg">B.Tech — CSE</h3>
              <p className="text-gray-400 text-sm mt-1">Parul University, Gujarat</p>
              <p className="text-gray-500 text-xs mt-1">Graduated 2024</p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-gray-500 text-xs mb-1">CGPA</p>
                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#7b2fff]">
                  7.4
                </p>
              </div>
              <span className="text-5xl opacity-10">🎓</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-5">
            ✦ Certifications
          </h3>
          <div className="flex flex-wrap gap-4">
            {CERTS.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0a1628] border border-gray-800 hover:border-gray-700 transition-colors text-sm text-gray-400"
              >
                <span className="text-[#00f5d4] shrink-0">✦</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, skills, color }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = color + "40";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = "";
  };

  return (
    <div
      className="p-6 rounded-2xl bg-[#0a1628]/80 border border-gray-800 transition-all duration-300 backdrop-blur-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-6 rounded-full" style={{ background: color }} />
        <h3 className="text-sm font-black tracking-widest uppercase text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((sk) => (
          <span
            key={sk}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-900/80 text-gray-300 border border-gray-700/60 hover:text-white hover:border-gray-500 transition-colors cursor-default"
          >
            {sk}
          </span>
        ))}
      </div>
    </div>
  );
}

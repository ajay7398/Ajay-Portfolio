const EXPERIENCES = [
  {
    role: "Full Stack Web Development Intern",
    company: "YHills × Corevo Pvt. Ltd.",
    period: "Nov 2023 – Feb 2024",
    type: "Remote",
    points: [
      "Built production web application modules using the MERN stack across a 4-month structured internship.",
      "Developed React.js frontend components and Node.js/Express.js backend services, improving module delivery time.",
      "Designed and integrated RESTful APIs with MongoDB for data persistence across multiple project modules.",
      "Implemented JWT-based authentication and MVC architecture; maintained version control using Git and GitHub.",
    ],
  },
  {
    role: "Software Engineering Job Simulation",
    company: "New York Jobs CEO Council × Forage",
    period: "Jan 2025",
    type: "Remote",
    points: [
      "Completed an industry-grade software engineering simulation following professional development workflows.",
      "Identified and resolved a critical production bug by tracing root cause, writing a patch, and verifying fix.",
      "Implemented a new feature end-to-end adhering to code review, documentation, and CI/CD standards.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-[#020c14] relative">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,212,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,212,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#00f5d4] font-mono text-sm tracking-widest uppercase mb-3">
            02. Work
          </p>
          <h2 className="text-5xl font-black text-white">Experience</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#00f5d4] to-[#7b2fff] rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5d4]/40 via-[#7b2fff]/30 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-3 w-5 h-5 rounded-full border-2 border-[#00f5d4] bg-[#020c14] group-hover:bg-[#00f5d4] transition-colors duration-300 shadow-lg shadow-[#00f5d4]/30" />

                <div className="relative p-8 rounded-2xl bg-[#0a1628]/60 border border-gray-800 hover:border-[#00f5d4]/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-[#00f5d4]/10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-white">{exp.role}</h3>
                      <p className="text-[#00f5d4] font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#00f5d4]/10 text-[#00f5d4] text-xs font-bold tracking-wider border border-[#00f5d4]/20">
                        {exp.period}
                      </span>
                      <p className="text-gray-500 text-xs mt-1 font-mono">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="text-[#00f5d4] mt-1 text-xs shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

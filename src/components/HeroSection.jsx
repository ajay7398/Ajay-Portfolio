import Typewriter from "typewriter-effect";
import ParticlesBg from "./Particles";

export default function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-[#020c14]">
      <ParticlesBg />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f5d4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#f72585]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-[#7b2fff]/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00f5d4]/10 border border-[#00f5d4]/20">
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
            <span className="text-[#00f5d4] text-sm font-semibold tracking-widest uppercase">Available for Work</span>
          </div>

          <div>
            <p className="text-gray-500 font-mono text-lg tracking-widest mb-2">Hello, I'm</p>
            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight">
              AJAY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#7b2fff]">KUMAR</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <span className="text-gray-500 font-mono">&lt;</span>
            <span className="text-[#00f5d4] font-mono min-w-[260px]">
              <Typewriter
                options={{
                  strings: ["MERN Stack Dev","React.js Expert","Node.js Builder","Full Stack Dev","Problem Solver"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
            <span className="text-gray-500 font-mono">/&gt;</span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Entry-level Full Stack Developer crafting{" "}
            <span className="text-white font-semibold">secure, scalable</span> web apps with the MERN stack. Strong in{" "}
            <span className="text-white font-semibold">JWT auth, RESTful APIs, Redux</span>, and clean architecture.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#7b2fff] text-black font-black text-sm tracking-widest uppercase hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00f5d4]/30"
            >
              View Projects →
            </button>
            <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full border-2 border-[#f72585]/60 text-[#f72585] font-black text-sm tracking-widest uppercase hover:bg-[#f72585]/10 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { label: "GitHub", href: "https://github.com/ajay7398", icon: "⌥" },
              { label: "LinkedIn", href: "https://linkedin.com/in/ajay-kumar-a64716242", icon: "in" },
              { label: "+91-7398420730", href: "tel:+917398420730", icon: "☏" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="group flex items-center gap-2 text-gray-500 hover:text-[#00f5d4] transition-colors text-sm font-semibold">
                <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#00f5d4] transition-colors text-xs">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Code Card */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#00f5d4]/30 to-[#7b2fff]/30 blur-lg" />
            <div className="relative rounded-2xl bg-[#0a1628] border border-[#00f5d4]/20 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#061020] border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#f72585]" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-[#00f5d4]" />
                <span className="ml-4 text-gray-500 text-xs font-mono">ajay.js</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p><span className="text-[#7b2fff]">const</span> <span className="text-[#00f5d4]">developer</span> <span className="text-white">=</span> {"{"}</p>
                <p className="pl-6"><span className="text-[#f72585]">name</span>: <span className="text-yellow-300">"Ajay Kumar"</span>,</p>
                <p className="pl-6"><span className="text-[#f72585]">role</span>: <span className="text-yellow-300">"Full Stack Dev"</span>,</p>
                <p className="pl-6"><span className="text-[#f72585]">stack</span>: [</p>
                <p className="pl-12 text-yellow-300">"MongoDB", "Express",</p>
                <p className="pl-12 text-yellow-300">"React", "Node.js"</p>
                <p className="pl-6">],</p>
                <p className="pl-6"><span className="text-[#f72585]">education</span>: <span className="text-yellow-300">"B.Tech CSE"</span>,</p>
                <p className="pl-6"><span className="text-[#f72585]">cgpa</span>: <span className="text-green-400">7.4</span>,</p>
                <p className="pl-6"><span className="text-[#f72585]">openToWork</span>: <span className="text-orange-400">true</span>,</p>
                <p className="pl-6"><span className="text-[#f72585]">passion</span>: <span className="text-yellow-300">"Clean Code ✦"</span></p>
                <p>{"}"}</p>
                <p className="mt-4 text-gray-600">{"// Let's build something great"}</p>
                <p><span className="text-[#7b2fff]">export default</span> <span className="text-[#00f5d4]">developer</span>;</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 backdrop-blur-sm">
              <p className="text-[#00f5d4] text-xs font-bold">MERN Stack</p>
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-[#f72585]/10 border border-[#f72585]/30 backdrop-blur-sm">
              <p className="text-[#f72585] text-xs font-bold">Open to Work 🚀</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5d4]/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

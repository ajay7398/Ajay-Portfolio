export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#030f1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f5d4]/3 to-transparent pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#7b2fff]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-[#f72585]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#00f5d4] font-mono text-sm tracking-widest uppercase mb-4">
          05. Let's Talk
        </p>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
          Get In
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] via-[#7b2fff] to-[#f72585]">
            Touch
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          I'm actively seeking{" "}
          <span className="text-white font-semibold">Software Engineering</span> or{" "}
          <span className="text-white font-semibold">Full Stack Developer</span> roles. If you have
          an opportunity or just want to connect — my inbox is always open.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a
            href="mailto:ajaykumar895377@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#7b2fff] text-black font-black text-sm tracking-wider hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00f5d4]/30"
          >
            ✉ Say Hello
          </a>
          <a
            href="https://linkedin.com/in/ajay-kumar-a64716242"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#f72585]/60 text-[#f72585] font-black text-sm tracking-wider hover:bg-[#f72585]/10 hover:scale-105 transition-all duration-300"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/ajay7398"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-700 text-gray-400 font-black text-sm tracking-wider hover:border-gray-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            GitHub ↗
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              label: "Email",
              value: "ajaykumar895377@gmail.com",
              href: "mailto:ajaykumar895377@gmail.com",
              color: "#00f5d4",
            },
            {
              label: "Phone",
              value: "+91-7398420730",
              href: "tel:+917398420730",
              color: "#f72585",
            },
            {
              label: "Location",
              value: "India · Remote Ready",
              href: null,
              color: "#7b2fff",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="p-5 rounded-xl bg-[#0a1628] border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: c.color }}
              >
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="text-gray-300 text-sm font-semibold hover:text-white transition-colors break-all"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm font-semibold">{c.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020c14] border-t border-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm font-mono">
          Designed & Built by{" "}
          <span className="text-[#00f5d4] font-bold">Ajay Kumar</span> · 2024
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/ajay7398" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ajay-kumar-a64716242" },
            { label: "Email", href: "mailto:ajaykumar895377@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 text-xs font-semibold hover:text-[#00f5d4] transition-colors tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

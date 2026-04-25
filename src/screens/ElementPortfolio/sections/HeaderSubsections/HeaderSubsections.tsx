export const HeaderSubsection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full px-6 pt-[140px] pb-[100px]"
      style={{
        background: "transparent",
        minHeight: "90vh",
      }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--green-primary)] opacity-[0.07] blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center gap-7 max-w-[860px] text-center">
        {/* Badge */}
        <div className="tag-chip flex items-center gap-2" style={{ color: "var(--green-accent)" }}>
          <span className="w-2 h-2 rounded-full pulse-dot" style={{ background: "var(--green-primary)", boxShadow: "0 0 8px var(--green-primary)" }} />
          Available for opportunities
        </div>

        {/* Main heading */}
        <h1
          className="font-extrabold leading-[1.1]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(56px, 8vw, 100px)",
            letterSpacing: "-0.03em",
            color: "#f1f5f9",
          }}
        >
          Jaimin <span className="gradient-text">Patel</span>
        </h1>

        {/* Role chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {["Flutter Developer", "Mobile Engineer", "Meta Developer"].map((role) => (
            <span
              key={role}
              className="tag-chip px-5 py-2 text-[14px]"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className="max-w-[700px] mt-2 text-[17px] leading-[1.8]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
          }}
        >
          Results-driven Flutter Developer shipping live apps to global markets and driving growth through Meta platforms.
          Currently leading Android development for <span style={{ color: "var(--green-primary)", fontWeight: 600 }}>CitiCare</span> — a multi-city utility platform.
          Government-recognized innovator with an approved <span style={{ color: "var(--green-accent)", fontWeight: 600 }}>IPR patent</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-6">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/jaimin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View LinkedIn
          </a>
        </div>

        {/* Contact info row */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8" style={{ borderTop: "1px solid var(--border-subtle)", width: "100%", maxWidth: "600px" }}>
          {[
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
              text: "+91 84699 08896",
              href: "tel:+918469908896",
              color: "#d946ef" // pink
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
              text: "pateljaimin325@outlook.com",
              href: "mailto:pateljaimin325@outlook.com",
              color: "#a78bfa" // purple
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
              text: "Valsad, Gujarat, India",
              href: undefined,
              color: "#fb7185" // rose
            },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[14px] font-medium transition-colors hover:text-[#f1f5f9]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-[14px] font-medium" style={{ color: "var(--text-muted)" }}>
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

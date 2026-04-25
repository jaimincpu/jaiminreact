export const FooterSubsection = (): JSX.Element => {
  return (
    <footer id="contact" className="flex flex-col items-center w-full px-6 pt-[120px] pb-8 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-glow" />

      {/* Main Container */}
      <div className="flex flex-col items-center gap-16 w-full max-w-[1000px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="section-label">Contact</span>
          <h2
            className="font-extrabold"
            style={{ fontFamily: "var(--font-heading)", fontSize: "44px", letterSpacing: "-0.03em" }}
          >
            Let&#39;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="max-w-[500px] text-[15px] leading-[1.7]" style={{ color: "var(--text-muted)" }}>
            Open to full-time roles, freelance projects, and collaborations in Flutter, mobile engineering, and Meta growth platforms.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid md:grid-cols-2 gap-12 w-full items-start">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-8">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#f43f5e" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
                label: "Phone",
                value: "+91 84699 08896",
                href: "tel:+918469908896",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#f1f5f9" }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
                label: "Email",
                value: "pateljaimin325@outlook.com",
                href: "mailto:pateljaimin325@outlook.com",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#94a3b8" }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
                label: "LinkedIn",
                value: "linkedin.com/in/jaimin",
                href: "https://linkedin.com/in/jaimin",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fb7185" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
                label: "Location",
                value: "Valsad, Gujarat, India",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-5">
                <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-subtle)] flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-[15px] font-semibold hover:text-[var(--green-accent)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-semibold">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Form */}
          <form className="flex flex-col gap-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-4">
              <input type="text" placeholder="Your Name" className="form-input w-1/2" />
              <input type="email" placeholder="Your Email" className="form-input w-1/2" />
            </div>
            <textarea 
              placeholder="Tell me about your project..." 
              className="form-input resize-none h-[140px]"
            />
            <button type="submit" className="btn-primary w-full mt-2" style={{ padding: "15px", fontSize: "16px" }}>
              Send Message ✦
            </button>
          </form>
        </div>

        {/* Bottom Copyright Row */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-8 mt-10 border-t border-[var(--border-subtle)]">
          <span className="font-extrabold text-[20px]" style={{ fontFamily: "var(--font-heading)" }}>
            JP<span className="gradient-text">.</span>
          </span>
          <span className="text-[13px] font-medium" style={{ color: "var(--text-muted)" }}>
            © 2026 Jaimin Patel. Built with passion ✦
          </span>
        </div>
      </div>
    </footer>
  );
};
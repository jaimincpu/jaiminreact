const projects = [
  {
    title: "BNF Bills",
    stack: "Flutter · Supabase · 2025 - Present",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#94a3b8" }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
    description: "Invoice management app — store & generate invoices using a direct schema, convert quotations into bills.",
    badgeText: "Live",
    badgeClass: "badge-live",
    accent: "var(--green-accent)",
  },
  {
    title: "CitiCare",
    stack: "Flutter · Firebase · 2025 - Present",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#38bdf8" }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    ),
    description: "Multi-city utility platform live in Vapi, expanding to Umargam & Sachin with end-to-end product ownership.",
    badgeText: "Live",
    badgeClass: "badge-live",
    accent: "var(--green-accent)",
  },
  {
    title: "Permissify",
    stack: "Flutter · 2023 - 2024",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fbbf24" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    ),
    description: "Leave management system for students & faculty. Received official IPR Patent from Govt. of India.",
    badgeText: "Patented",
    badgeClass: "badge-patented",
    accent: "#fbbf24",
  },
  {
    title: "Slas Jobs",
    stack: "Flutter · 2024",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#f43f5e" }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    ),
    description: "Full-featured recruitment platform connecting employers with job seekers, workforce data & listings.",
    badgeText: "Shipped",
    badgeClass: "badge-shipped",
    accent: "#94a3b8",
  },
  {
    title: "Task Manager",
    stack: "Flutter · Firebase · 2024",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#22c55e" }}><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
    ),
    description: "Real-time collaborative task app with live assignment updates and in-app communication.",
    badgeText: "Shipped",
    badgeClass: "badge-shipped",
    accent: "#94a3b8",
  },
  {
    title: "E-Agro",
    stack: "WordPress · 2021 - 2022",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#84cc16" }}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
    description: "Web platform supporting farmers with agricultural insights, product discovery, and sustainability guidance.",
    badgeText: "Shipped",
    badgeClass: "badge-shipped",
    accent: "#94a3b8",
  },
];

export const LatestWorkSectionSubsection = (): JSX.Element => {
  return (
    <section id="work" className="flex flex-col items-center gap-14 px-6 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="section-label">Portfolio</span>
        <h2
          className="font-extrabold text-center"
          style={{ fontFamily: "var(--font-heading)", fontSize: "40px", letterSpacing: "-0.02em" }}
        >
          Key <span className="gradient-text">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 w-full max-w-[1100px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {projects.map((project) => (
          <div key={project.title} className="card flex flex-col p-8 relative overflow-hidden group">
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5">
                {project.icon}
              </div>
              <span className={`tag-chip text-[11px] px-3 font-bold ${project.badgeClass}`}>
                {project.badgeText}
              </span>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3
                className="font-bold text-[22px]"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
              >
                {project.title}
              </h3>
              <p className="text-[13px] font-medium mt-1" style={{ color: "var(--green-accent)" }}>
                {project.stack}
              </p>
            </div>

            <p className="text-[15px] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>

            {/* Bottom accent glow inside card */}
            <div 
              className="absolute bottom-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

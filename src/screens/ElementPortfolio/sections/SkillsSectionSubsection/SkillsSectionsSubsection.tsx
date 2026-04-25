const skillsData = [
  {
    title: "Mobile Development",
    tags: ["Flutter", "Dart", "Riverpod", "GetX", "Firebase"],
    description: "Cross-platform Android & iOS apps from architecture to production release.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    ),
    iconBg: "linear-gradient(135deg, #22c55e, #10b981)",
  },
  {
    title: "Backend & Database",
    tags: ["Python", "SQL", "REST APIs", "Firestore", "Auth"],
    description: "Connecting apps with real-time scalable backends and solid data layers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    iconBg: "linear-gradient(135deg, #14b8a6, #0ea5e9)",
  },
  {
    title: "Meta & Growth Tech",
    tags: ["Meta Ads", "WhatsApp API", "Facebook SDK", "Firebase Analytics"],
    description: "User engagement and growth through Meta platforms and analytics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    ),
    iconBg: "linear-gradient(135deg, #f97316, #fb923c)",
  },
];

export const SkillsSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-14 px-6 py-[120px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="section-label">What I Do</span>
        <h2
          className="font-extrabold text-center"
          style={{ fontFamily: "var(--font-heading)", fontSize: "40px", letterSpacing: "-0.02em" }}
        >
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 w-full max-w-[1100px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {skillsData.map((skill, index) => (
          <div key={index} className="card flex flex-col gap-6 p-8">
            {/* Icon */}
            <div
              className="w-[52px] h-[52px] rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: skill.iconBg }}
            >
              {skill.icon}
            </div>

            {/* Title */}
            <h3
              className="font-bold text-[22px]"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
            >
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
              {skill.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {skill.tags.map((tag) => (
                <span key={tag} className="tag-chip px-3 py-1 text-[13px] bg-white/5 border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

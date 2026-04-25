const educationData = [
  {
    id: 1,
    degree: "B.E. in Information Technology",
    institution: "Uka Tarsadia University – CGPIT",
    period: "2022 – 2025",
    score: "CGPA: 7.40 / 10",
  },
  {
    id: 2,
    degree: "Diploma in Information Technology",
    institution: "Gujarat Technological University – RCTI",
    period: "2019 – 2022",
    score: "CGPA: 8.50 / 10",
  },
];

export const EducationSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-14 px-6 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="section-label">Academic</span>
        <h2
          className="font-extrabold text-center"
          style={{ fontFamily: "var(--font-heading)", fontSize: "40px", letterSpacing: "-0.02em" }}
        >
          Education <span className="gradient-text">Background</span>
        </h2>
      </div>

      {/* Grid / List */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-[900px]">
        {educationData.map((edu) => (
          <div key={edu.id} className="card flex flex-col p-8 relative overflow-hidden group">
            {/* Top accent glow inside card */}
            <div 
              className="absolute top-0 left-8 right-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, var(--green-primary), transparent)` }}
            />

            <div className="flex flex-col w-full">
              {/* Header row */}
              <div className="flex flex-col mb-4">
                <h3
                  className="font-bold text-[22px] leading-tight"
                  style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
                >
                  {edu.degree}
                </h3>
                <p className="text-[15px] font-semibold mt-2" style={{ color: "var(--green-accent)" }}>
                  {edu.institution}
                </p>
              </div>

              {/* Bottom details */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[13px] font-medium" style={{ color: "var(--text-muted)" }}>
                  {edu.period}
                </span>
                <span className="tag-chip px-3 py-1 text-[13px] bg-white/5 border-white/10 font-bold" style={{ color: "var(--text-primary)" }}>
                  {edu.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const experiences = [
  {
    id: 1,
    role: "Flutter & Meta Developer",
    company: "Symbiosis Systems and Services Pvt. Ltd.",
    period: "Sept 2025 – Present",
    location: "Vapi, India",
    current: true,
    highlights: [
      "Leading Android dev for CitiCare — live in Vapi, expanding to Umargam & Sachin",
      "End-to-end feature delivery, architecture decisions to production releases",
      "Built backend services using SQL, integrated Meta Ads Manager & WhatsApp Business API",
      "Deeply integrated Firebase (Analytics, Firestore, Auth) & Facebook SDK",
    ],
  },
  {
    id: 2,
    role: "Senior Flutter Intern",
    company: "CODING BEE",
    period: "Dec 2024 – 2025",
    location: "Surat, India",
    current: false,
    highlights: [
      "Led a team of junior interns — task assignment, PR reviews, quality standards",
      "Delivered 4 production-ready Flutter apps for clients in the US, France & Saudi Arabia",
      "Implemented advanced state management using Riverpod and GetX across all projects",
      "Established QA testing workflows, reducing the bug escape rate across releases",
    ],
  },
  {
    id: 3,
    role: "Flutter Intern",
    company: "SCRIPT INDIA",
    period: "May 2024 – Jul 2024",
    location: "Vapi, India",
    current: false,
    highlights: [
      "Developed Flutter-based mobile application features during a 2-month internship",
      "Gained hands-on experience with Flutter UI components, navigation, and local state handling",
    ],
  },
];

export const ClientSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-14 px-6 py-[100px] w-full">
      {/* Header */}
      <div className="flex flex-col items-center gap-3">
        <span className="section-label">Career</span>
        <h2
          className="font-extrabold text-center"
          style={{ fontFamily: "var(--font-heading)", fontSize: "40px", letterSpacing: "-0.02em" }}
        >
          Work <span className="gradient-text">Experience</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-6 w-full max-w-[900px]">
        {experiences.map((exp) => (
          <div key={exp.id} className="card flex relative overflow-hidden group p-8">
            {/* Left green accent border line */}
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[var(--green-primary)] opacity-80" />

            <div className="flex flex-col w-full pl-4">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3
                    className="font-bold text-[22px] leading-tight"
                    style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-[15px] font-semibold mt-1" style={{ color: "var(--green-accent)" }}>
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-1.5">
                  {exp.current && (
                    <span className="tag-chip px-3 py-[2px] text-[11px] font-bold badge-current flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-primary)]" />
                      Current
                    </span>
                  )}
                  <span className="text-[13px] font-medium" style={{ color: "var(--text-muted)" }}>
                    {exp.period} · {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-3 m-0 pl-0 list-none">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.6]" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0 bg-[var(--green-primary)] opacity-80" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

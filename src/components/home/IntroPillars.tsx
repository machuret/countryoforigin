const PILLARS = [
  {
    title: "Nutritional Superiority",
    body:
      "Australian seafood is harvested from pristine waters, resulting in higher omega-3 levels, less mercury exposure, and superior freshness compared to imported alternatives.",
    icon: (
      <>
        <path
          d="M4 18c4-7 11-10 17-10 5 0 9 3 11 6l-4 4 4 4c-2 3-6 6-11 6-6 0-13-3-17-10z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="22" cy="16" r="1.4" fill="currentColor" />
        <path
          d="M9 18c2-2 4-3 6-3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Environmental Leadership",
    body:
      "Australia enforces some of the world's strictest fisheries regulations, ensuring sustainable practices that protect marine ecosystems for future generations.",
    icon: (
      <path
        d="M3 14c3-3 6-3 9 0s6 3 9 0 6-3 9 0M3 22c3-3 6-3 9 0s6 3 9 0 6-3 9 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Economic Impact",
    body:
      "Every dollar spent on Australian seafood directly supports coastal fishing communities, creates local jobs, and keeps money circulating in the Australian economy.",
    icon: (
      <>
        <path
          d="M18 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 28h14M13 32h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export function IntroPillars() {
  return (
    <div className="intro-strip">
      <div className="intro-inner">
        {PILLARS.map((p) => (
          <div className="intro-pillar" key={p.title}>
            <span className="intro-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                {p.icon}
              </svg>
            </span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

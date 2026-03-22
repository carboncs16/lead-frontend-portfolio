import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Role {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

const roles: Role[] = [
  {
    title: "AVP, Software Development",
    company: "Edelweiss Global Markets",
    period: "Dec 2022 — Present",
    bullets: [
      "Architected two real-time algo trading platforms using React, AG Grid, and micro-frontend architecture",
      "Designed low-code framework enabling traders to build strategies without coding, cutting development effort by 40%",
      "Led migration from legacy systems to React + TypeScript stack, improving load times by 70%",
      "Implemented WebSocket-driven real-time order management with sub-second update latency",
      "Mentored team of 5 frontend engineers and established coding standards and review processes",
    ],
    tags: ["React", "TypeScript", "AG Grid", "Micro-Frontends", "WebSocket", "Redux"],
  },
  {
    title: "Senior Software Engineer",
    company: "Mindfire Solutions",
    period: "Jun 2020 — Dec 2022",
    bullets: [
      "Developed SaaS platforms for US-based clients focusing on healthcare and logistics domains",
      "Built real-time dashboards and complex form systems using React and Node.js",
      "Introduced component-driven architecture with Storybook, improving UI consistency across teams",
      "Integrated REST and GraphQL APIs with optimized caching strategies",
    ],
    tags: ["React", "Node.js", "GraphQL", "Storybook", "Material UI"],
  },
  {
    title: "Systems Engineer",
    company: "Infosys Ltd.",
    period: "Jan 2018 — Jun 2020",
    bullets: [
      "Developed enterprise web applications for banking and insurance clients",
      "Built responsive UIs with Angular and React, handling complex business workflows",
      "Collaborated in Agile teams, participating in sprint planning and code reviews",
    ],
    tags: ["Angular", "React", "JavaScript", "Agile", "Enterprise Apps"],
  },
];

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// experience"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Where I've Worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {roles.map((role, i) => (
              <div key={i} className="reveal relative sm:pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden sm:block" />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <p className="font-mono text-sm text-primary">{role.company}</p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0">
                      {role.period}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {role.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary/50 before:text-xs"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-primary/80 bg-primary/8 border border-primary/15 rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

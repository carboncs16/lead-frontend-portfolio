import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3",
      "Redux", "Zustand", "AG Grid", "Tailwind CSS", "Material UI",
      "Storybook", "Micro-Frontends",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Nginx"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    title: "Architecture",
    skills: [
      "Micro-Frontend", "Event-Driven", "CI/CD Pipelines",
      "WebSocket", "Performance Optimization",
    ],
  },
];

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// skills"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal bg-card border border-border rounded-lg p-5 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-secondary-foreground bg-secondary rounded px-2.5 py-1 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

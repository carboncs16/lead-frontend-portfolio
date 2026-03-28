import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, BarChart3, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "7+", label: "Years Experience" },
  { icon: BarChart3, value: "2", label: "Trading Platforms Built" },
  { icon: Users, value: "Lead", label: "Team Leadership" },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// about me"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight">
          Engineering at the Intersection of
          <br className="hidden sm:block" /> Finance & Frontend
        </h2>

        <div className="reveal max-w-2xl text-muted-foreground leading-relaxed space-y-4 mb-14">
          <p>
            Senior UI Developer and Tech Lead with extensive experience in building
            high-performance, real-time trading platforms and scalable web
            applications. Specialized in frontend architecture, micro-frontend
            systems, and low-latency UI design for fintech domains.
          </p>
          <p>
            Proven track record of leading frontend teams, driving performance
            optimizations (reducing load times by up to 70%), and implementing
            modern architectures including event-driven systems and CI/CD pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal group relative bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              <s.icon
                size={20}
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200"
              />
              <p className="font-mono text-3xl font-bold text-foreground mb-1">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

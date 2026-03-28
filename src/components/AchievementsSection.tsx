import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Layers, RefreshCw } from "lucide-react";

const achievements = [
  {
    icon: Zap,
    title: "Algo Trading Platforms",
    desc: "Architected two real-time algorithmic trading platforms from scratch, handling thousands of concurrent orders with sub-second WebSocket latency.",
  },
  {
    icon: Layers,
    title: "Low-Code Strategy Framework",
    desc: "Designed a no-code/low-code system enabling traders to configure algo strategies visually — reducing dev effort by 40% and empowering non-technical users.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Migration & 70% Faster Load",
    desc: "Led migration from legacy .NET systems to a modern React + TypeScript stack with micro-frontend architecture, cutting page load times by 70%.",
  },
];

export default function AchievementsSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// key achievements"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Things I'm Proud Of
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="reveal group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <a.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

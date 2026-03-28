import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-24 sm:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// education"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Academic Background
        </h2>

        <div className="reveal bg-card border border-border rounded-lg p-6 sm:p-8 max-w-xl hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                B.Tech in Applied Electronics and Instrumentation Engineering
              </h3>
              <p className="font-mono text-sm text-primary mb-2">
                Silicon Institute of Technology, Bhubaneswar
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>2014 — 2018</span>
                <span className="w-px h-3 bg-border" />
                <span>CGPA: 8.31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

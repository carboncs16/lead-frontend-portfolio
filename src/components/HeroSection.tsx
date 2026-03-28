import { useEffect, useState } from "react";
import { MapPin, ArrowDown } from "lucide-react";

const tagline =
  "Building high-performance trading platforms & scalable front-end architectures with 7+ years of experience.";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= tagline.length) {
        setDisplayed(tagline.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_55%/0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-primary mb-4 tracking-wider">
          {"// hello world"}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-foreground mb-3">
          Punya Purba Pattnaik
        </h1>

        <p className="font-mono text-lg sm:text-xl text-primary/90 font-medium mb-6">
          Senior UI Developer & Tech Lead
        </p>

        <div className="max-w-xl mx-auto mb-8">
          <p className="font-mono text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
            <span className="text-primary/60">{">"} </span>
            {displayed}
            <span className={`inline-block w-2 h-4 bg-primary ml-0.5 align-middle ${showCursor ? "animate-blink" : ""}`} />
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
          <MapPin size={14} className="text-primary/60" />
          <span>Mumbai, India</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 glow cursor-pointer"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border border-primary/20 text-foreground font-medium text-sm rounded-md hover:border-primary hover:bg-primary/5 active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            Learn More
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-block text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useScrollReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// contact"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Let's Connect
        </h2>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, interesting
              projects, or just connecting over tech. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:punyapurba16@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                punyapurba16@gmail.com
              </a>

              <a
                href="tel:+918763932785"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                +91 8763932785
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 glow disabled:opacity-50"
              disabled={sent}
            >
              {sent ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

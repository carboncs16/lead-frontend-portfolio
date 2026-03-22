export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Punya Purba Pattnaik
        </p>
        <p className="font-mono text-xs text-muted-foreground/50">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}

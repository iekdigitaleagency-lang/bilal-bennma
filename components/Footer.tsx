import { footer, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-xs text-paper/40 sm:flex-row sm:text-left">
        <span className="font-serif tracking-wide text-paper/60">
          {site.project}
        </span>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}

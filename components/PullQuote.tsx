type PullQuoteProps = {
  children: string;
  className?: string;
};

export function PullQuote({ children, className = "" }: PullQuoteProps) {
  return (
    <blockquote
      className={`border-l-2 border-accent pl-6 font-serif text-2xl italic leading-snug text-paper md:text-3xl ${className}`}
    >
      &ldquo;{children}&rdquo;
    </blockquote>
  );
}

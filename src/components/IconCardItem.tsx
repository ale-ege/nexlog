import type { LucideIcon } from "lucide-react";

interface IconCardItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

export function IconCardItem({
  icon: Icon,
  title,
  description,
  variant = "light",
}: IconCardItemProps) {
  const isDark = variant === "dark";

  return (
    <article className={`group nx-card ${isDark ? "nx-card--dark" : ""}`}>
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
          isDark
            ? "bg-accent-400/10 text-accent-300 ring-1 ring-inset ring-accent-400/30"
            : "bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100"
        } group-hover:bg-accent-500/15 group-hover:text-accent-500`}
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3
        className={`text-pretty font-display text-lg font-semibold leading-snug ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-2 text-sm leading-relaxed ${
          isDark ? "text-graphite-200" : "text-graphite-600"
        }`}
      >
        {description}
      </p>

      {/* Acento sutil ao passar o mouse */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </article>
  );
}

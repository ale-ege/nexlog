interface SectionHeaderProps {
  /** Id do `<h2>` — use o mesmo no `aria-labelledby` da `<section>`. */
  titleId?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
}

export function SectionHeader({
  titleId,
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "light",
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isDark = variant === "dark";

  return (
    <header
      className={`flex flex-col ${
        isCentered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className={`nx-eyebrow ${isDark ? "nx-eyebrow--light" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        id={titleId}
        className={`mt-5 nx-section-title ${
          isDark ? "nx-section-title--light" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`nx-section-subtitle ${
            isDark ? "nx-section-subtitle--light" : ""
          } ${isCentered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

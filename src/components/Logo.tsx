import { useId } from "react";

interface LogoProps {
  /** Se true, usa cor branca para fundos escuros. */
  light?: boolean;
  /** Tamanho do símbolo em pixels. */
  size?: number;
  /** Esconde o wordmark "NEXLOG", deixando apenas o símbolo. */
  iconOnly?: boolean;
  className?: string;
}

/**
 * Logo institucional da NEXLOG.
 *
 * Símbolo abstrato representando rota logística (linhas conectando pontos)
 * + wordmark corporativo em fonte display com tracking refinado.
 */
export function Logo({
  light = false,
  size = 36,
  iconOnly = false,
  className = "",
}: LogoProps) {
  return (
    <span
      className={`inline-flex select-none items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label="NEXLOG — operação logística regional no Rio Grande do Sul"
      role="img"
    >
      <LogoMark size={size} />
      {!iconOnly && (
        <span className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display text-[19px] font-extrabold tracking-[0.14em] sm:text-[22px] ${
              light
                ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                : "text-navy-900"
            }`}
          >
            NEXLOG
          </span>
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              light ? "bg-accent-300" : "bg-accent-500"
            }`}
          />
        </span>
      )}
    </span>
  );
}

function LogoMark({ size }: { size: number }) {
  // useId garante IDs únicos quando há múltiplas instâncias (Navbar + Footer).
  const rawId = useId();
  const gradId = `nx-mark-grad-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0F2A60" />
          <stop offset="1" stopColor="#07173A" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradId})`} />
      <path
        d="M16 44 L28 22 L36 36 L48 20"
        stroke="#22D3EE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="48" cy="20" r="3.5" fill="#22D3EE" />
      <circle cx="16" cy="44" r="2.5" fill="#ffffff" fillOpacity="0.9" />
    </svg>
  );
}

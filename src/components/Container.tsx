import type { ReactNode } from "react";

type ContainerSize = "default" | "narrow" | "wide";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const SIZE_CLASSES: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </div>
  );
}

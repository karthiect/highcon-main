import type { ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
  columns?: "1" | "2" | "3" | "4";
  gap?: string;
  className?: string;
}

export function ProductGrid({
  children,
  columns = "2",
  gap = "gap-8 lg:gap-12",
  className = "",
}: ProductGridProps) {
  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gap} ${className}`}>
      {children}
    </div>
  );
}

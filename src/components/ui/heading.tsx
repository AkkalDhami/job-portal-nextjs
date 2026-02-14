import { cn } from "@/lib/utils";
import React from "react";

export function Heading({
  children,
  as = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = as || "h2";
  return (
    <Tag className={cn("text-3xl sm:text-4xl mb-3 font-semibold", className)}>
      {children}
    </Tag>
  );
}

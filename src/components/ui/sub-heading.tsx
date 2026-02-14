import { cn } from "@/lib/utils";
import React from "react";

export function SubHeading({
  children,
  as = "p",
  className,
}: {
  children: React.ReactNode;
  as?: "h3" | "p";
  className?: string;
}) {
  const Tag = as || "hp";
  return (
    <Tag
      className={cn(
        "text-muted-secondary text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed",
        className
      )}>
      {children}
    </Tag>
  );
}

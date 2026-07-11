import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children?: ReactNode;
}

export default function Badge({
  className,
  variant = "secondary",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3.5 py-1 rounded-full text-[13px] font-sans font-medium border select-none";

  const variants = {
    primary:
      "bg-accent-primary border-transparent text-bg-base",
    secondary:
      "bg-bg-surface-hover border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-subtle-hover transition-premium",
    outline:
      "bg-transparent border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-subtle-hover transition-premium",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

export { Badge };

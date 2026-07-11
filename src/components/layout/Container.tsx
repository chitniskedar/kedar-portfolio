import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "default" | "wide";
  className?: string;
  children?: ReactNode;
}

export default function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-2xl",
    default: "max-w-4xl",
    wide: "max-w-6xl",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-6 sm:px-8 md:px-12",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

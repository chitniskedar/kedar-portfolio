import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: ReactNode;
}

export default function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        "bg-border-subtle shrink-0",
        orientation === "horizontal" ? "h-[1px] w-full my-6" : "w-[1px] h-full mx-4",
        className
      )}
      {...props}
    />
  );
}

export { Divider };

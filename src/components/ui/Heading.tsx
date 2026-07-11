import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, children, ...props }, ref) => {
    const Tag = `h${level}` as any;

    const baseStyles = "font-sans font-semibold text-text-primary tracking-tight";

    const levels = {
      1: "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight",
      2: "text-2xl sm:text-3xl leading-tight",
      3: "text-lg sm:text-xl font-medium leading-snug",
      4: "text-base font-medium leading-relaxed",
    };

    return (
      <Tag
        ref={ref as any}
        className={cn(baseStyles, levels[level], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
export { Heading };

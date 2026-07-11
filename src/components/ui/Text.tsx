import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "base" | "lg";
  as?: "p" | "span" | "div";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "secondary", size = "base", as = "p", children, ...props }, ref) => {
    const Tag = as;

    const baseStyles = "font-sans font-normal antialiased";

    const variants = {
      primary: "text-text-primary",
      secondary: "text-text-secondary leading-relaxed",
      tertiary: "text-text-tertiary font-medium",
    };

    const sizes = {
      xs: "text-xs tracking-normal",
      sm: "text-sm tracking-wide",
      base: "text-base tracking-wide",
      lg: "text-lg tracking-wide",
    };

    return (
      <Tag
        ref={ref as any}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";

export default Text;
export { Text };

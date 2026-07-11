import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "accent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium rounded-full transition-premium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-secondary disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-accent-primary text-bg-base hover:bg-white active:scale-[0.98]",
      secondary:
        "bg-bg-surface text-text-primary border border-border-subtle hover:bg-bg-surface-hover hover:border-border-subtle-hover active:scale-[0.98]",
      outline:
        "bg-transparent text-text-primary border border-border-subtle hover:bg-bg-surface hover:border-border-subtle-hover active:scale-[0.98]",
      accent:
        "bg-transparent text-text-primary border-white/25 hover:border-white/50 hover:bg-white/5 active:scale-[0.98] shadow-premium-sm",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface active:scale-[0.98]",
      link: "bg-transparent text-text-secondary hover:text-text-primary underline-offset-4 hover:underline p-0",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 h-8 gap-1.5",
      md: "text-sm px-4 py-2 h-10 gap-2",
      lg: "text-base px-6 py-3 h-12 gap-2.5",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={variant !== "link" ? { y: -1 } : undefined}
        whileTap={variant !== "link" ? { scale: 0.98 } : undefined}
        {...(props as any)}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { Button };

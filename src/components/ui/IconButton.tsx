import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "secondary",
      size = "md",
      rounded = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-secondary disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden relative group";

    const variants = {
      primary: "bg-accent-primary text-bg-base hover:bg-white border border-transparent",
      secondary:
        "bg-bg-surface text-text-primary border border-border-subtle hover:bg-bg-surface-hover hover:border-border-subtle-hover",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-transparent",
      outline:
        "bg-transparent text-text-primary border border-border-subtle hover:bg-bg-surface hover:border-border-subtle-hover",
      accent:
        "bg-transparent text-text-secondary border border-border-subtle hover:text-text-primary hover:border-white/30 hover:bg-white/[0.02]",
    };

    const sizes = {
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          rounded ? "rounded-full" : "rounded-md",
          className
        )}
        // Highly refined spring transitions
        whileHover={{ 
          y: -1.5,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        {...(props as any)}
      >
        {/* Soft background glow overlay */}
        <span className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <span className="flex items-center justify-center relative z-10 transition-transform duration-200 group-active:scale-95">
          {children}
        </span>
      </motion.button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
export { IconButton };

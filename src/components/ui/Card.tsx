import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-bg-surface border border-border-subtle rounded-lg p-6 shadow-premium-sm transition-premium",
          hoverEffect &&
            "hover:border-border-subtle-hover hover:shadow-premium-md hover:-translate-y-[2px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
export { Card };

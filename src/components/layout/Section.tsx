import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  alternate?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, id, alternate = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 sm:py-16 md:py-8 w-full transition-premium scroll-mt-20",
          alternate && "bg-bg-surface border-y border-border-subtle",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
export { Section };

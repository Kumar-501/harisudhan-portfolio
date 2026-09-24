import { cn } from "../../utils/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleId,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden="true" className="h-px w-6 bg-brand-500" />
          {eyebrow}
        </p>
      )}
      <h2 id={titleId} className="h2 mt-4">
        {title}
      </h2>
      {subtitle && <p className="lead mt-4">{subtitle}</p>}
    </Reveal>
  );
}

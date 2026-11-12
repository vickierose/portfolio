import NextLink from "next/link";
import type { ComponentProps } from "react";

const variants = {
  navigation: "text-xs md:text-sm",
  social: "text-xs md:text-sm",
  cta: "inline-flex items-center gap-2 border-b-4 border-accent pb-1 text-lg hover:bg-accent hover:no-underline md:text-xl",
};

type LinkProps = ComponentProps<typeof NextLink> & {
  variant?: keyof typeof variants;
  arrow?: boolean;
  compact?: boolean;
};

export default function Link({
  variant = "navigation",
  arrow = variant !== "navigation",
  compact = false,
  className = "",
  children,
  ...props
}: LinkProps) {
  const style =
    variant === "cta" && compact
      ? "inline-flex items-center gap-2 border-b-4 border-accent pb-1 text-base hover:border-foreground hover:no-underline md:text-lg"
      : variants[variant];

  return (
    <NextLink
      className={`font-mono font-medium whitespace-nowrap uppercase ${style} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <>
          {" "}
          <span aria-hidden="true">{"\u2197"}</span>
        </>
      )}
    </NextLink>
  );
}

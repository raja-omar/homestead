export const button = {
  base: "group inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.2rem] border border-transparent px-5 text-[0.9375rem] font-medium leading-none no-underline transition-colors duration-200",
  primary: "bg-teal text-ivory hover:bg-teal-deep",
  secondary:
    "border-stone bg-transparent text-charcoal hover:border-teal hover:text-teal",
  inverse: "bg-ivory text-teal hover:bg-white",
  ghost: "border-ivory/40 text-ivory hover:border-ivory",
  small: "min-h-10 px-3.5 text-[0.875rem]",
} as const;

export const eyebrow =
  "text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted";

export const sectionTitle =
  "text-[clamp(2.15rem,3.6vw,3.05rem)] leading-[1.12] tracking-[-0.028em]";

export const textLink =
  "group inline-flex w-fit items-center gap-1.5 text-[0.9375rem] font-medium leading-snug text-teal no-underline transition-colors duration-200 hover:text-teal-deep";

export const valueLink =
  "underline decoration-teal/35 underline-offset-[0.2em] transition-colors duration-200 hover:text-teal hover:decoration-current";

export const factValue =
  "font-serif text-[clamp(1.2rem,1.6vw,1.45rem)] leading-snug tracking-[-0.02em]";

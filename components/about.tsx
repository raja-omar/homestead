import { cn } from "@/lib/cn";
import { eyebrow, sectionTitle } from "@/components/styles";
import { clinic, isPlaceholder } from "@/lib/clinic";

export function About() {
  const placeholder = isPlaceholder(clinic.about.body);

  return (
    <section className="bg-sage py-14 lg:py-20" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className={eyebrow}>{clinic.about.eyebrow}</p>
          <h2 id="about-title" className={`mt-3 ${sectionTitle}`}>
            {clinic.about.title}
          </h2>
          <p
            className={cn(
              placeholder
                ? "is-placeholder mt-6 text-[1.0625rem] leading-relaxed"
                : "mt-8 max-w-[20em] font-serif text-[clamp(1.55rem,2.2vw,1.9rem)] leading-[1.35] tracking-[-0.02em]",
            )}
          >
            {clinic.about.body}
          </p>
        </div>
      </div>
    </section>
  );
}

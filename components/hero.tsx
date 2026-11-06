import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { SmartLink } from "@/components/smart-link";
import { button, eyebrow, textLink } from "@/components/styles";
import { cn } from "@/lib/cn";
import { clinic, directionsTarget, heroEyebrow, isPlaceholder } from "@/lib/clinic";

export function Hero() {
  const directions = directionsTarget();
  const availability = clinic.availabilityNote.trim();
  const showAvailability = availability.length > 0 && !isPlaceholder(availability);

  return (
    <section
      className="pt-8 pb-16 lg:pt-12 lg:pb-24"
      aria-labelledby="hero-title"
    >
      <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,34rem)_minmax(16rem,1fr)] lg:gap-x-16 lg:pt-2">
        <div className="rise">
          <p className={eyebrow}>{heroEyebrow()}</p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-[clamp(2.75rem,5.4vw,4.15rem)] leading-[1.05] tracking-[-0.03em]"
          >
            <span className="block">{clinic.hero.titleLead}</span>
            <span className="block italic">{clinic.hero.titleEmphasis}</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted">
            {clinic.hero.summary}
          </p>
          {showAvailability ? (
            <p className="mt-4 flex items-center gap-2.5 text-[0.9375rem] font-medium text-charcoal">
              <span className="size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
              {availability}
            </p>
          ) : null}
          <div className="no-print mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <SmartLink href="#services" className={cn(button.base, button.primary)}>
              {clinic.actions.services}
            </SmartLink>
            <SmartLink
              href={directions.href}
              external={directions.external}
              className={textLink}
            >
              {clinic.actions.directions}
              <Arrow external={directions.external} />
            </SmartLink>
          </div>
        </div>

        <figure className="rise-late m-0">
          <div className="relative aspect-[5/3] overflow-hidden bg-sage lg:aspect-[3/2]">
            <Image
              src={clinic.hero.image}
              alt={clinic.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-2.5 text-[0.75rem] leading-normal tracking-wide text-muted">
            {clinic.hero.imageCaption}
            <span aria-hidden="true"> · </span>
            <SmartLink
              href={clinic.hero.imageCreditUrl}
              external
              className="underline decoration-stone underline-offset-[0.22em] transition-colors duration-200 hover:text-charcoal hover:decoration-current"
            >
              {clinic.hero.imageCredit}
            </SmartLink>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

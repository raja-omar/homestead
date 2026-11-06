import { SmartLink } from "@/components/smart-link";
import { button } from "@/components/styles";
import { cn } from "@/lib/cn";
import { clinic, directionsTarget } from "@/lib/clinic";

export function Closing() {
  const directions = directionsTarget();

  return (
    <section
      className="closing bg-teal text-ivory"
      aria-labelledby="closing-title"
    >
      <div className="wrap grid items-end gap-8 py-16 lg:grid-cols-[minmax(0,36rem)_auto] lg:gap-x-16 lg:py-24">
        <div>
          <h2
            id="closing-title"
            className="max-w-[10em] text-[clamp(2.35rem,4.2vw,3.45rem)] leading-[1.08] tracking-[-0.03em] text-ivory"
          >
            {clinic.closing.title}
          </h2>
          <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ivory/75">
            {clinic.closing.text}
          </p>
        </div>
        <div className="no-print flex flex-wrap items-center gap-x-6 gap-y-3">
          <SmartLink
            href={directions.href}
            external={directions.external}
            className={cn(button.base, button.inverse)}
          >
            {clinic.actions.directions}
          </SmartLink>
          <SmartLink
            href="#visit"
            className="text-[0.9375rem] font-medium text-ivory underline decoration-ivory/35 underline-offset-[0.22em] transition-colors duration-200 hover:decoration-ivory"
          >
            {clinic.actions.contact}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}

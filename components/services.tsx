import { Arrow } from "@/components/arrow";
import { SmartLink } from "@/components/smart-link";
import { eyebrow, sectionTitle, textLink } from "@/components/styles";
import { clinic } from "@/lib/clinic";

export function Services() {
  const first = clinic.services[0];
  const sharedLink =
    !!first &&
    clinic.services.every(
      (service) => service.href === first.href && service.linkLabel === first.linkLabel,
    );

  return (
    <section className="py-14 lg:py-20" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <header className="max-w-2xl">
          <p className={eyebrow}>{clinic.servicesIntro.eyebrow}</p>
          <h2 id="services-title" className={`mt-3 ${sectionTitle}`}>
            {clinic.servicesIntro.title}
          </h2>
          <p className="mt-4 max-w-[36ch] text-[1.0625rem] leading-relaxed text-muted">
            {clinic.servicesIntro.intro}
          </p>
        </header>

        <ol className="m-0 mt-10 list-none border-t border-stone p-0 lg:mt-14">
          {clinic.services.map((service) => (
            <li
              key={service.title}
              className="grid gap-3 border-b border-stone py-7 md:grid-cols-[minmax(11rem,0.72fr)_minmax(0,1.28fr)] md:items-baseline md:gap-x-12 md:py-8"
            >
              <h3 className="font-serif text-[clamp(1.45rem,2vw,1.75rem)] leading-snug tracking-[-0.02em]">
                {service.title}
              </h3>
              <div>
                <p className="max-w-[48ch] text-muted">{service.description}</p>
                {sharedLink ? null : (
                  <SmartLink href={service.href} className={`${textLink} mt-3`}>
                    {service.linkLabel}
                    <Arrow />
                  </SmartLink>
                )}
              </div>
            </li>
          ))}
        </ol>

        {sharedLink ? (
          <SmartLink href={first.href} className={`${textLink} mt-5`}>
            {first.linkLabel}
            <Arrow />
          </SmartLink>
        ) : null}
      </div>
    </section>
  );
}

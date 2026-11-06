import { HoursList } from "@/components/hours-list";
import { SmartLink } from "@/components/smart-link";
import { cn } from "@/lib/cn";
import {
  addressLines,
  clinic,
  isPlaceholder,
  mailHref,
  placeholderClass,
  primaryNav,
  telHref,
} from "@/lib/clinic";
import { copyrightYear } from "@/lib/year";

export async function Footer() {
  const year = await copyrightYear();
  const lines = addressLines();
  const phoneHref = telHref(clinic.phone);
  const emailHref = mailHref(clinic.email);
  const privacy = clinic.privacyUrl.trim();
  const showPrivacy = privacy.length > 0 && !isPlaceholder(privacy);
  const privacyExternal = /^https?:/i.test(privacy);

  return (
    <footer className="border-t border-stone py-14 lg:py-16">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_max-content_max-content] lg:gap-x-20">
        <div>
          <p className="mb-3 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">
            {clinic.name}
          </p>
          <address className="grid gap-1 text-[0.9375rem] leading-relaxed text-muted">
            {lines.map((line, index) => (
              <span key={`${line}-${index}`} className={cn("block", placeholderClass(line))}>
                {line}
              </span>
            ))}
            {phoneHref ? (
              <SmartLink href={phoneHref} className="w-fit text-charcoal underline decoration-teal/40 underline-offset-[0.18em] transition-colors hover:text-teal">
                {clinic.phone}
              </SmartLink>
            ) : (
              <span className={placeholderClass(clinic.phone)}>{clinic.phone}</span>
            )}
            {emailHref ? (
              <SmartLink href={emailHref} className="w-fit text-charcoal underline decoration-teal/40 underline-offset-[0.18em] transition-colors hover:text-teal">
                {clinic.email}
              </SmartLink>
            ) : (
              <span className={placeholderClass(clinic.email)}>{clinic.email}</span>
            )}
          </address>
        </div>

        <nav className="grid content-start gap-1" aria-label="Footer">
          {primaryNav().map((item) => (
            <SmartLink
              key={item.href}
              href={item.href}
              className="w-fit py-1 text-[0.9375rem] font-medium text-charcoal no-underline transition-colors duration-200 hover:text-teal"
            >
              {item.label}
            </SmartLink>
          ))}
          {showPrivacy ? (
            <SmartLink
              href={privacy}
              external={privacyExternal}
              className="w-fit py-1 text-[0.9375rem] font-medium text-charcoal no-underline transition-colors duration-200 hover:text-teal"
            >
              Privacy
            </SmartLink>
          ) : null}
        </nav>

        <div>
          <p className="mb-2.5 text-sm font-medium text-muted">{clinic.footer.hoursLabel}</p>
          <HoursList hours={clinic.hours} className="text-[0.9375rem] leading-snug text-charcoal" />
          {clinic.serviceHours.length > 0 ? (
            <>
              <p className="mt-5 mb-2.5 text-sm font-medium text-muted">{clinic.serviceHoursLabel}</p>
              <HoursList
                hours={clinic.serviceHours}
                className="text-[0.9375rem] leading-snug text-charcoal"
              />
            </>
          ) : null}
        </div>
      </div>

      <div className="wrap mt-12 space-y-2 border-t border-stone pt-5 text-[0.8125rem] leading-relaxed text-muted">
        <p>© {year} {clinic.name}</p>
        <p className="max-w-xl">{clinic.footer.notice}</p>
      </div>
    </footer>
  );
}

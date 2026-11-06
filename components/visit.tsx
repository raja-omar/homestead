import type { ReactNode } from "react";
import { Arrow } from "@/components/arrow";
import { HoursList } from "@/components/hours-list";
import { SmartLink } from "@/components/smart-link";
import { eyebrow, factValue, sectionTitle, textLink, valueLink } from "@/components/styles";
import { cn } from "@/lib/cn";
import {
  addressLines,
  clinic,
  directionsTarget,
  isPlaceholder,
  mailHref,
  placeholderClass,
  telHref,
  type HoursEntry,
} from "@/lib/clinic";

export function Visit() {
  const lines = addressLines();
  const phoneHref = telHref(clinic.phone);
  const emailHref = mailHref(clinic.email);
  const directions = directionsTarget();
  const booking = clinic.bookingUrl.trim();
  const hasBooking = booking.length > 0 && !isPlaceholder(booking);

  return (
    <section className="py-14 lg:py-20" id="visit" aria-labelledby="visit-title">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:gap-x-16">
        <header className="lg:sticky lg:top-28">
          <p className={eyebrow}>{clinic.visit.eyebrow}</p>
          <h2 id="visit-title" className={`mt-3 ${sectionTitle}`}>
            {clinic.visit.title}
          </h2>
          <p className="mt-4 max-w-[28ch] text-[1.0625rem] leading-relaxed text-muted">
            {clinic.visit.intro}
          </p>
        </header>

        <dl className="m-0 border-b border-stone">
          <Row label="Address">
            <address>
              {lines.map((line, index) => (
                <span
                  key={`${line}-${index}`}
                  className={cn("block", placeholderClass(line) ?? factValue)}
                >
                  {line}
                </span>
              ))}
            </address>
          </Row>

          <Row label="Opening hours">
            <div className={hoursClass(clinic.hours)}>
              <HoursList hours={clinic.hours} />
            </div>
          </Row>

          {clinic.serviceHours.length > 0 ? (
            <Row label={clinic.serviceHoursLabel}>
              <div className={hoursClass(clinic.serviceHours)}>
                <HoursList hours={clinic.serviceHours} />
              </div>
            </Row>
          ) : null}

          <Row label="Phone">
            {phoneHref ? (
              <SmartLink href={phoneHref} className={cn(factValue, valueLink)}>
                {clinic.phone}
              </SmartLink>
            ) : (
              <span className={placeholderClass(clinic.phone)}>{clinic.phone}</span>
            )}
          </Row>

          <Row label="Email">
            {emailHref ? (
              <SmartLink href={emailHref} className={cn(factValue, valueLink)}>
                {clinic.email}
              </SmartLink>
            ) : (
              <span className={placeholderClass(clinic.email)}>{clinic.email}</span>
            )}
          </Row>

          <Row label="Directions" id="directions">
            {directions.external ? (
              <SmartLink href={directions.href} external className={textLink}>
                {clinic.visit.directionsLabel}
                <Arrow external />
              </SmartLink>
            ) : (
              <p className="max-w-[36ch] text-[1.0625rem] leading-relaxed text-muted">
                {clinic.visit.directionsNote}
              </p>
            )}
          </Row>

          <Row label="Walk-ins and appointments">
            <p className={cn("max-w-[40ch] leading-relaxed", placeholderClass(clinic.walkInInstructions))}>
              {clinic.walkInInstructions}
            </p>
            {hasBooking ? (
              <SmartLink href={booking} external className={`${textLink} mt-3`}>
                {clinic.bookingLabel}
                <Arrow external />
              </SmartLink>
            ) : null}
          </Row>
        </dl>
      </div>
    </section>
  );
}

function hoursClass(hours: HoursEntry[]) {
  const confirmed = hours.some(
    (row) => !isPlaceholder(row.days) || !isPlaceholder(row.hours),
  );
  return confirmed ? factValue : undefined;
}

function Row({
  label,
  children,
  id,
}: {
  label: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="grid gap-1.5 border-t border-stone py-5 md:grid-cols-[11.75rem_minmax(0,1fr)] md:items-baseline md:gap-x-8 md:py-6"
    >
      <dt className="text-[0.8125rem] font-medium text-muted md:whitespace-nowrap">{label}</dt>
      <dd className="m-0">{children}</dd>
    </div>
  );
}

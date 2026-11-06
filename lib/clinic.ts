/**
 * Clinic content
 * --------------
 * Edit this file to update the website. Components read from here so ordinary
 * content changes do not require layout edits.
 *
 * Until a detail is confirmed, keep the value in square brackets, for example
 * `[Clinic Name]`. Bracketed text is shown as unconfirmed and is excluded from
 * search structured data.
 *
 * Do not add credentials, insurance, prices, awards, or medical claims unless
 * the clinic has approved them. Physician names and qualifications stay in
 * brackets until then. Add eyewear, contact lenses, or other services only
 * after the clinic confirms they are offered.
 *
 * Brand colours are applied as CSS variables on <html>. `--grey` is the
 * specified warm grey. `--muted` is slightly deeper so secondary text meets
 * WCAG AA on ivory and sage.
 *
 * Hero photograph: replace `public/images/hero.jpg`, then update `hero.imageAlt`,
 * `hero.imageCaption`, `hero.imageCredit`, and `hero.ogImageAlt` so the picture
 * is not presented as the clinic until it is.
 */

export type HoursEntry = {
  /** Visible day label, e.g. "Monday – Friday". */
  days: string;
  /** Visible hours, e.g. "8:00 – 17:00". */
  hours: string;
  /**
   * Schema.org day names ("Monday", "Tuesday", …) for structured data.
   * Leave empty until the hours are confirmed.
   */
  dayOfWeek?: string[];
};

export type Service = {
  title: string;
  description: string;
  /** In-page hash or absolute URL. */
  href: string;
  linkLabel: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Physician = {
  name: string;
  /** Clinical role, e.g. "Family physician" or "Optometrist". */
  role: string;
  /** Degrees, licences, and certifications the clinic has confirmed. */
  qualifications: string[];
  /** Short factual note. Keep it bracketed until the clinic approves it. */
  note: string;
};

export const brandColors = {
  ivory: "#FAF9F6",
  white: "#FFFFFF",
  teal: "#174D46",
  "teal-deep": "#123E38",
  sage: "#DCE7DF",
  charcoal: "#252B29",
  grey: "#777D78",
  muted: "#606762",
  stone: "#E9E7E1",
} as const;

export const clinic = {
  name: "[Clinic Name]",
  /**
   * Public site origin without a trailing slash, e.g. "https://example.com".
   * Leave empty until the real domain is known. Used for the canonical URL
   * and absolute social-image address.
   */
  siteUrl: "",
  location: "",
  /**
   * Short status such as "Walk-ins welcome today · 8:00–18:00".
   * Leave empty until hours and walk-in availability are confirmed.
   */
  availabilityNote: "",
  phone: "[Phone number]",
  email: "[Email address]",
  address: {
    street: "[Clinic Address]",
    locality: "",
    region: "",
    postalCode: "",
    country: "",
  },
  /** Map URL, e.g. a Google Maps or Apple Maps link. Empty until the address is confirmed. */
  directionsUrl: "",
  /** Existing booking page. Empty hides the booking link. */
  bookingUrl: "",
  bookingLabel: "Book an appointment",
  /** Real privacy policy URL. Empty hides the link — do not point this at an empty page. */
  privacyUrl: "",
  hours: [{ days: "[Days]", hours: "[Hours]" }] as HoursEntry[],
  /** Use when one department, such as optometry, keeps different hours. */
  serviceHoursLabel: "Service hours",
  serviceHours: [] as HoursEntry[],
  walkInInstructions: "[Walk-in and appointment instructions]",
  meta: {
    description:
      "Walk-in medical care and optometry. Services, physicians, qualifications, hours, and contact details. Information in brackets is still to be confirmed.",
  },
  actions: {
    services: "Our services",
    directions: "Get directions",
    contact: "Contact us",
  },
  nav: [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Physicians", href: "#physicians" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#visit" },
  ] as NavItem[],
  hero: {
    eyebrow: "Walk-in medical care and optometry",
    titleLead: "Thoughtful care,",
    titleEmphasis: "within reach.",
    summary:
      "Medical care without an appointment, and eye examinations. Hours and how to reach the clinic are below.",
    image: "/images/hero.jpg",
    imageAlt:
      "Sunlight through the leaves of a small tree. Stand-in photograph, not this clinic.",
    imageCaption: "Stand-in photograph",
    imageCredit: "Amy Vosters, Unsplash",
    imageCreditUrl:
      "https://unsplash.com/photos/modern-waiting-room-with-chairs-and-inspirational-sign-pxOQ-P97sA8",
    ogImageAlt:
      "Sunlit olive branches. Stand-in photograph, not the clinic.",
  },
  servicesIntro: {
    eyebrow: "Services",
    title: "What you can come in for.",
    intro: "Medical care without an appointment, and optometry.",
  },
  services: [
    {
      title: "Walk-in medical care",
      description:
        "Medical care for people who arrive without a booked appointment. The clinic confirms which concerns are seen this way, and during which hours.",
      href: "#visit",
      linkLabel: "Hours and location",
    },
    {
      title: "Optometry",
      description:
        "Eye examinations and vision care. The clinic can confirm which exams are offered, and whether glasses or contact lenses are available.",
      href: "#visit",
      linkLabel: "Hours and location",
    },
  ] as Service[],
  /**
   * One object per physician. Replace every bracketed value with approved
   * wording. Delete an entry rather than leaving it blank, and add another
   * object for each additional physician.
   */
  physiciansIntro: {
    eyebrow: "Physicians",
    title: "Who you may see.",
    intro: "The clinicians who see patients here, with the qualifications confirmed for each.",
    qualificationsLabel: "Qualifications",
    placeholderLabel: "To be confirmed",
  },
  physicians: [
    {
      name: "[Physician name]",
      role: "[Role, such as family physician]",
      qualifications: ["[Degree, licence, or certification]"],
      note: "[What this physician sees patients for.]",
    },
    {
      name: "[Physician name]",
      role: "[Role, such as optometrist]",
      qualifications: ["[Degree, licence, or certification]"],
      note: "[What this physician sees patients for.]",
    },
  ] as Physician[],
  about: {
    eyebrow: "About",
    title: "In the clinic’s own words.",
    body: "[How this clinic welcomes and cares for patients.]",
    placeholderLabel: "To be confirmed",
  },
  visit: {
    eyebrow: "Visit",
    title: "Find the clinic.",
    intro: "Address, hours, and ways to get in touch.",
    directionsNote:
      "A map link will appear here once the clinic address is confirmed.",
    directionsLabel: "Open directions",
  },
  closing: {
    title: "Whenever you are ready.",
    text: "Hours, location, and contact details are just above.",
  },
  footer: {
    hoursLabel: "Opening hours",
    notice:
      "This website shares clinic information and does not give medical advice. For emergency care, contact your local emergency services.",
  },
};

export function isPlaceholder(value: string): boolean {
  return /\[[^\]\n]+\]/.test(value);
}

export function placeholderClass(value: string): "is-placeholder" | undefined {
  return isPlaceholder(value) ? "is-placeholder" : undefined;
}

export function primaryNav(): NavItem[] {
  return clinic.nav.filter(
    (item) => item.href !== "#physicians" || clinic.physicians.length > 0,
  );
}

export function physicianNeedsConfirmation(person: Physician): boolean {
  return (
    isPlaceholder(person.name) ||
    isPlaceholder(person.role) ||
    isPlaceholder(person.note) ||
    person.qualifications.length === 0 ||
    person.qualifications.some((item) => isPlaceholder(item))
  );
}

export function pageTitle(): string {
  return `${clinic.name} — Walk-in medical care and optometry`;
}

export function heroEyebrow(): string {
  const location = clinic.location.trim();
  if (location && !isPlaceholder(location)) {
    return `${clinic.hero.eyebrow} · ${location}`;
  }
  return clinic.hero.eyebrow;
}

export function addressLines(): string[] {
  const { street, locality, region, postalCode, country } = clinic.address;
  const lines: string[] = [];
  if (street.trim()) lines.push(street.trim());
  const city = [locality, region]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
  const cityLine = [city, postalCode.trim()].filter(Boolean).join("  ");
  if (cityLine) lines.push(cityLine);
  const countryLine = country.trim();
  if (countryLine) lines.push(countryLine);
  return lines;
}

export function telHref(phone: string): string | null {
  if (!phone.trim() || isPlaceholder(phone)) return null;
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : null;
}

export function mailHref(email: string): string | null {
  const value = email.trim();
  if (!value || isPlaceholder(value)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return null;
  return `mailto:${value}`;
}

export function directionsTarget(): { href: string; external: boolean } {
  const url = clinic.directionsUrl.trim();
  if (url && !isPlaceholder(url)) {
    return { href: url, external: true };
  }
  return { href: "#directions", external: false };
}

export function siteOrigin(): URL | undefined {
  const value = clinic.siteUrl.trim().replace(/\/$/, "");
  if (!value || isPlaceholder(value)) return undefined;
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
}

export function clinicJsonLd(): Record<string, unknown> | null {
  if (
    isPlaceholder(clinic.name) ||
    isPlaceholder(clinic.address.street) ||
    isPlaceholder(clinic.phone)
  ) {
    return null;
  }

  const address: Record<string, string> = {
    "@type": "PostalAddress",
    streetAddress: clinic.address.street.trim(),
  };
  const locality = clinic.address.locality.trim();
  const region = clinic.address.region.trim();
  const postalCode = clinic.address.postalCode.trim();
  const country = clinic.address.country.trim();
  if (locality && !isPlaceholder(locality)) address.addressLocality = locality;
  if (region && !isPlaceholder(region)) address.addressRegion = region;
  if (postalCode && !isPlaceholder(postalCode)) address.postalCode = postalCode;
  if (country && !isPlaceholder(country)) address.addressCountry = country;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name.trim(),
    telephone: clinic.phone.trim(),
    address,
  };

  if (mailHref(clinic.email)) data.email = clinic.email.trim();

  const origin = siteOrigin();
  if (origin) data.url = origin.origin;

  const specs = clinic.hours.flatMap((entry) => {
    if (isPlaceholder(entry.days) || isPlaceholder(entry.hours)) return [];
    if (!entry.dayOfWeek?.length) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: entry.dayOfWeek.map((day) =>
          /^https?:/i.test(day) ? day : `https://schema.org/${day.trim()}`,
        ),
        opens: entry.hours,
        description: `${entry.days}: ${entry.hours}`,
      },
    ];
  });

  if (specs.length) data.openingHoursSpecification = specs;

  const physicians = clinic.physicians.flatMap((person) => {
    if (isPlaceholder(person.name)) return [];

    const entry: Record<string, unknown> = {
      "@type": "Physician",
      name: person.name.trim(),
    };
    const role = person.role.trim();
    if (role && !isPlaceholder(role)) entry.jobTitle = role;

    const note = person.note.trim();
    if (note && !isPlaceholder(note)) entry.description = note;

    const qualifications = person.qualifications
      .map((item) => item.trim())
      .filter((item) => item && !isPlaceholder(item));
    if (qualifications.length) {
      entry.hasCredential = qualifications.map((name) => ({
        "@type": "EducationalOccupationalCredential",
        name,
      }));
    }

    return [entry];
  });

  if (physicians.length) data.employee = physicians;

  return data;
}

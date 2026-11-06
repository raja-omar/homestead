import { cn } from "@/lib/cn";
import { eyebrow, sectionTitle } from "@/components/styles";
import {
  clinic,
  isPlaceholder,
  physicianNeedsConfirmation,
  placeholderClass,
  type Physician,
} from "@/lib/clinic";

export function Physicians() {
  if (clinic.physicians.length === 0) return null;

  const allUnconfirmed = clinic.physicians.every(physicianNeedsConfirmation);

  return (
    <section className="py-14 lg:py-20" id="physicians" aria-labelledby="physicians-title">
      <div className="wrap">
        <header className="max-w-2xl">
          <p className={eyebrow}>{clinic.physiciansIntro.eyebrow}</p>
          <h2 id="physicians-title" className={`mt-3 ${sectionTitle}`}>
            {clinic.physiciansIntro.title}
          </h2>
          <p className="mt-4 max-w-[40ch] text-[1.0625rem] leading-relaxed text-muted">
            {clinic.physiciansIntro.intro}
          </p>
          {allUnconfirmed ? (
            <p className="mt-3 text-[0.8125rem] tracking-wide text-muted">
              {clinic.physiciansIntro.placeholderLabel}
            </p>
          ) : null}
        </header>

        <ol className="m-0 mt-10 list-none border-t border-stone p-0 lg:mt-14">
          {clinic.physicians.map((person, index) => (
            <PhysicianProfile
              key={`${person.name}-${person.role}-${index}`}
              person={person}
              showLabel={!allUnconfirmed && physicianNeedsConfirmation(person)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function PhysicianProfile({
  person,
  showLabel,
}: {
  person: Physician;
  showLabel: boolean;
}) {
  const qualifications = person.qualifications.map((item) => item.trim()).filter(Boolean);
  const named = !isPlaceholder(person.name);

  return (
    <li className="max-w-2xl border-b border-stone py-6 lg:py-8">
      {showLabel ? (
        <p className="mb-3 text-[0.8125rem] tracking-wide text-muted">
          {clinic.physiciansIntro.placeholderLabel}
        </p>
      ) : null}
      <h3
        className={cn(
          named
            ? "font-serif text-[clamp(1.6rem,2.2vw,2rem)] leading-tight tracking-[-0.02em]"
            : "is-placeholder text-[1.0625rem]",
        )}
      >
        {person.name}
      </h3>
      <p className={cn(named ? "mt-2" : "mt-1", placeholderClass(person.role) ?? "text-muted")}>
        {person.role}
      </p>
      <p
        className={cn(
          "max-w-[46ch] leading-relaxed",
          named ? "mt-4" : "mt-1",
          placeholderClass(person.note),
        )}
      >
        {person.note}
      </p>

      {qualifications.length > 0 ? (
        <div className={named ? "mt-5" : "mt-4"}>
          <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
            {clinic.physiciansIntro.qualificationsLabel}
          </h4>
          <ul className="mt-2.5 flex list-none flex-col gap-1.5 p-0">
            {qualifications.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className={cn(
                  isPlaceholder(item)
                    ? "is-placeholder"
                    : "font-serif text-[1.2rem] leading-snug tracking-[-0.02em]",
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

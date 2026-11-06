import { cn } from "@/lib/cn";
import { isPlaceholder, type HoursEntry } from "@/lib/clinic";

export function HoursList({
  hours,
  className,
}: {
  hours: HoursEntry[];
  className?: string;
}) {
  return (
    <ul className={cn("m-0 flex w-fit max-w-full list-none flex-col gap-1.5 p-0", className)}>
      {hours.map((row, index) => (
        <li
          key={`${row.days}-${row.hours}-${index}`}
          className="flex items-baseline justify-between gap-8"
        >
          <span className={cn(isPlaceholder(row.days) && "is-placeholder")}>{row.days}</span>
          <span
            className={cn("text-right tabular-nums", isPlaceholder(row.hours) && "is-placeholder")}
          >
            {row.hours}
          </span>
        </li>
      ))}
    </ul>
  );
}

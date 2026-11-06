export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg
      className="size-[1.125rem] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      {external ? (
        <path
          d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3.5 10h13M12 5.5 16.5 10 12 14.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function SmartLink({
  href,
  external = false,
  className,
  children,
  onClick,
}: SmartLinkProps) {
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

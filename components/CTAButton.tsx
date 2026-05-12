import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  return (
    <Link href={href} className={`cta-button ${variant}`}>
      {children}
      <ArrowRight size={17} aria-hidden />
    </Link>
  );
}

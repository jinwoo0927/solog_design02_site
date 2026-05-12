import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
  meta?: string;
  soft?: boolean;
};

export function InfoCard({ icon: Icon, title, text, href, meta, soft }: InfoCardProps) {
  return (
    <article className={`info-card ${soft ? "soft" : ""}`}>
      <div className="icon-bubble"><Icon size={36} /></div>
      <div>
        <h3>{title}</h3>
        {meta ? <strong>{meta}</strong> : null}
        <p>{text}</p>
        {href ? (
          <Link href={href} className="text-link">
            자세히 보기 <ArrowRight size={15} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

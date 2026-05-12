import type { LucideIcon } from "lucide-react";
import { MapPin } from "lucide-react";

type ScheduleCardProps = {
  icon: LucideIcon;
  title: string;
  time: string;
  place: string;
  text?: string;
};

export function ScheduleCard({ icon: Icon, title, time, place, text }: ScheduleCardProps) {
  return (
    <article className="schedule-card">
      <div className="icon-bubble"><Icon size={34} /></div>
      <h3>{title}</h3>
      <strong>{time}</strong>
      <span><MapPin size={15} /> {place}</span>
      {text ? <p>{text}</p> : null}
    </article>
  );
}

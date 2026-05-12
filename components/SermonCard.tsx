import { Play, UserRound, CalendarDays } from "lucide-react";
import { VisualImage } from "./VisualImage";

type SermonCardProps = {
  sermon: {
    title: string;
    verse: string;
    date: string;
    category: string;
    tone: string;
  };
  featured?: boolean;
};

export function SermonCard({ sermon, featured }: SermonCardProps) {
  return (
    <article className={`sermon-card ${featured ? "featured" : ""}`}>
      <VisualImage tone={sermon.tone} label={`${sermon.title} 설교 이미지`}>
        <Play className="play-icon" size={featured ? 28 : 22} fill="currentColor" />
      </VisualImage>
      <div className="sermon-body">
        <span>{sermon.category}</span>
        <h3>{sermon.title}</h3>
        <p>{sermon.verse}</p>
        <small><UserRound size={14} /> 김요한 담임목사</small>
        <small><CalendarDays size={14} /> {sermon.date}</small>
      </div>
    </article>
  );
}

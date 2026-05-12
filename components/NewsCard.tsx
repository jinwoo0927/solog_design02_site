import { VisualImage } from "./VisualImage";

type NewsCardProps = {
  item: {
    title: string;
    category: string;
    date: string;
    text: string;
    tone: string;
  };
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="news-card">
      <VisualImage tone={item.tone} label={`${item.title} 소식 이미지`} />
      <div>
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <time>{item.date}</time>
      </div>
    </article>
  );
}

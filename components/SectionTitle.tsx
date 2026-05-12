type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
};

export function SectionTitle({ eyebrow, title, action }: SectionTitleProps) {
  return (
    <div className="section-title">
      <div>
        {eyebrow ? <span>{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

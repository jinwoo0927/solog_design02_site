type FeatureBandProps = {
  title: string;
  text: string;
  children?: React.ReactNode;
  tone?: "light" | "blue";
};

export function FeatureBand({ title, text, children, tone = "light" }: FeatureBandProps) {
  return (
    <section className={`feature-band ${tone}`}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {children ? <div className="feature-actions">{children}</div> : null}
    </section>
  );
}

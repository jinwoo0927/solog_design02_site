type PageHeroProps = {
  title: string;
  subtitle: string;
  tone?: string;
  crumb?: string;
};

export function PageHero({ title, subtitle, tone = "sanctuary", crumb }: PageHeroProps) {
  return (
    <section className={`page-hero visual-${tone}`}>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {crumb ? <span className="breadcrumb">홈 &gt; {crumb}</span> : null}
      </div>
    </section>
  );
}

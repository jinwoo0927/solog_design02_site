import { CalendarDays, Download, FileText } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureBand } from "@/components/FeatureBand";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { VisualImage } from "@/components/VisualImage";
import { news } from "@/data/site";

export default function NewsPage() {
  return (
    <>
      <PageHero title="교회소식" subtitle="은혜의빛교회의 다양한 소식을 전합니다" tone="building" />
      <section className="container notice-banner">
        <div><span>중요 안내</span><h2>창립 12주년 감사예배</h2><p>은혜의빛교회가 하나님께서 주신 은혜로 12주년을 맞이했습니다. 온 성도가 함께 모여 감사와 찬양으로 예배합니다.</p><p><CalendarDays size={16} /> 2024.06.02(주일) 오전 11:00　본당</p><CTAButton href="#">자세히 보기</CTAButton></div>
        <VisualImage tone="cross" label="감사예배 배너 이미지" />
      </section>
      <section className="container">
        <SectionTitle title="교회소식" action={<CTAButton href="#" variant="light">전체 소식 보기</CTAButton>} />
        <div className="news-grid">{news.map((item) => <NewsCard key={item.title} item={item} />)}</div>
      </section>
      <section className="container">
        <SectionTitle title="이번 달 주요 일정" />
        <div className="monthly-card">
          <div className="mini-month"><h3>2024.06</h3>{Array.from({ length: 35 }, (_, i) => <span key={i} className={[2, 8, 15, 22, 29].includes(i) ? "active" : ""}>{i + 1 <= 30 ? i + 1 : ""}</span>)}</div>
          <div className="month-events">{["창립 12주년 감사예배", "여름성경학교", "목장 리더 교육", "청년부 수련회", "전교인 한마음 체육대회"].map((item, i) => <p key={item}><strong>06.{String(2 + i * 7).padStart(2, "0")}</strong> {item}<small>오전 10:00 · 교회</small></p>)}</div>
          <div className="month-action"><CalendarDays size={54} /><h3>교회 일정 전체 보기</h3><p>더 많은 일정을 확인해보세요.</p><CTAButton href="/worship">전체 일정 보기</CTAButton></div>
        </div>
      </section>
      <section className="container">
        <SectionTitle title="사진으로 보는 은혜의 순간" action={<CTAButton href="#" variant="light">갤러리 전체 보기</CTAButton>} />
        <div className="gallery-row">{["worship", "kids", "people", "choir"].map((tone) => <VisualImage key={tone} tone={tone} label="교회 갤러리 이미지" />)}</div>
      </section>
      <section className="container">
        <SectionTitle title="주보 다운로드" action={<CTAButton href="#" variant="light">전체 주보 보기</CTAButton>} />
        <div className="bulletin-grid">{["2024.05.26", "2024.05.19", "2024.05.12", "2024.05.05"].map((date) => <article key={date}><FileText size={34} /><div><span>{date}</span><h3>주보</h3><p>용량 1.2MB</p></div><Download size={20} /></article>)}</div>
      </section>
      <section className="container"><FeatureBand title="함께 예배하고, 함께 사역하는 기쁨" text="은혜의빛교회의 다양한 사역과 행사에 여러분을 초대합니다."><CTAButton href="#">다가오는 행사 참여하기</CTAButton></FeatureBand></section>
    </>
  );
}

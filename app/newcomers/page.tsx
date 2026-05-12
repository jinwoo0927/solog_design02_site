import { ClipboardList, HeartHandshake, HelpCircle, Home, Leaf, MapPin, Phone, UsersRound } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { VisualImage } from "@/components/VisualImage";
import { faqs } from "@/data/site";

export default function NewcomersPage() {
  const steps = [
    [Home, "방문", "편안한 마음으로 예배에 참석해주세요."],
    [ClipboardList, "등록", "새가족 데스크에서 등록카드를 작성해주세요."],
    [UsersRound, "교제", "새가족팀과 교회 가족들이 따뜻하게 환영합니다."],
    [Leaf, "정착", "교회 안내와 프로그램을 통해 믿음의 성장을 돕습니다."]
  ] as const;

  return (
    <>
      <PageHero title="새가족 안내" subtitle="처음 오신 여러분을 진심으로 환영합니다." tone="newcomers" />
      <section className="container intro-block">
        <InfoCard icon={HeartHandshake} title="처음 오셨나요?" text="은혜의빛교회에 오신 것을 진심으로 환영합니다. 하나님의 사랑 안에서 따뜻한 공동체가 될 수 있도록 함께 동행하겠습니다." soft />
      </section>
      <section className="container">
        <SectionTitle title="예배 참여 절차" />
        <div className="step-grid">{steps.map(([Icon, title, text], index) => <article className="step-card" key={title}><span>{index + 1}</span><Icon size={44} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="container">
        <SectionTitle title="새가족 등록 안내" />
        <div className="contact-strip">
          <InfoCard icon={UsersRound} title="담당부서" text="새가족팀" meta="예배당 1층 새가족 데스크" soft />
          <InfoCard icon={Phone} title="문의전화" text="02-1234-5678" meta="주일 09:00 - 16:00" soft />
          <InfoCard icon={HelpCircle} title="예배시간" text="주일 1부 09:00 · 2부 11:00" meta="수요예배 19:30" soft />
        </div>
      </section>
      <section className="container">
        <SectionTitle title="정착 프로그램" />
        <div className="program-grid">
          {["새가족반", "목장 / 소그룹", "양육과정"].map((title, index) => <article className="program-card" key={title}><VisualImage tone={["people", "newcomers", "bible"][index]} label={`${title} 이미지`} /><div><h3>{title}</h3><p>{index === 0 ? "교회와 믿음의 기본을 배우고 교회 생활에 필요한 안내를 제공합니다." : "믿음의 가족을 만나 교제하고 삶을 나누며 함께 성장합니다."}</p><span>{index === 0 ? "4주 과정" : index === 1 ? "매주" : "수시 개강"}</span></div></article>)}
        </div>
      </section>
      <section className="container">
        <SectionTitle title="자주 묻는 질문 (FAQ)" />
        <FAQAccordion items={faqs} />
      </section>
      <section className="container"><FeatureBand title="함께하면 더 행복합니다" text="지금 바로 문의하고, 우리 교회의 가족이 되어주세요."><CTAButton href="/location">오시는 길 보기 <MapPin size={17} /></CTAButton></FeatureBand></section>
    </>
  );
}

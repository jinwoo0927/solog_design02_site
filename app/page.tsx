import { BookOpen, Church, Clock3, HeartHandshake, Leaf, PlaySquare, UsersRound } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SermonCard } from "@/components/SermonCard";
import { VisualImage } from "@/components/VisualImage";
import { news, sermons } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero visual-sanctuary">
        <div className="hero-shade" />
        <div className="container hero-content">
          <h1>하나님의 사랑이 머무는 공동체</h1>
          <p>예배로 섬기고, 사랑으로 하나 되어, 세상을 향해 희망을 전하는 은혜의빛교회입니다.</p>
          <div className="hero-actions">
            <CTAButton href="/worship">예배시간 보기</CTAButton>
            <CTAButton href="/newcomers" variant="secondary">새가족 안내</CTAButton>
          </div>
          <div className="hero-time"><Clock3 size={18} /> 주일예배 오전 11:00　|　수요예배 오후 7:30</div>
        </div>
      </section>

      <section className="container quick-cards">
        <InfoCard icon={Church} title="예배안내" text="주일예배, 수요예배 등 예배시간을 확인하세요." href="/worship" />
        <InfoCard icon={PlaySquare} title="설교 다시보기" text="지난 설교를 다시 보며 영적 성장을 이어가세요." href="/sermons" />
        <InfoCard icon={UsersRound} title="교회학교" text="영유아부터 청소년까지 믿음으로 함께 자라갑니다." href="/worship" />
      </section>

      <section className="container split-section">
        <VisualImage tone="building" label="은혜의빛교회 건물" className="large-photo" />
        <div>
          <SectionTitle eyebrow="교회 소개" title="하나님의 은혜가 비추는 교회" />
          <p className="lead">은혜의빛교회는 말씀과 기도 위에 세워진 공동체로, 하나님의 사랑을 배우고 이웃과 세상을 섬기며 예수님의 제자로 살아가는 교회입니다.</p>
          <div className="mini-feature-grid">
            <InfoCard icon={Leaf} title="비전" text="예수님의 빛을 따라 세상을 밝히는 교회" soft />
            <InfoCard icon={HeartHandshake} title="사명" text="말씀과 사랑으로 이웃을 섬기는 교회" soft />
            <InfoCard icon={UsersRound} title="공동체" text="함께 예배하고 서로 사랑하는 가족" soft />
          </div>
        </div>
      </section>

      <section className="container sermon-highlight">
        <SectionTitle title="이번 주 말씀" action={<CTAButton href="/sermons" variant="light">전체 설교 보기</CTAButton>} />
        <div className="sermon-highlight-grid interactive-sermon-grid">
          {sermons.slice(0, 4).map((sermon, index) => (
            <SermonCard key={sermon.title} sermon={sermon} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="news-band">
        <div className="container">
          <SectionTitle title="교회 소식" action={<CTAButton href="/news" variant="light">더보기</CTAButton>} />
          <div className="news-row">{news.slice(0, 4).map((item) => <NewsCard key={item.title} item={item} />)}</div>
        </div>
      </section>

      <section className="container">
        <div className="welcome-photo-band">
          <VisualImage tone="newcomers" label="새가족을 환영하는 교회 사람들" />
          <FeatureBand title="새가족을 환영합니다" text="은혜의빛교회에 처음 오신 여러분을 진심으로 환영합니다. 함께 예배하고, 교제하며, 믿음의 여정을 함께 걸어가요.">
            <CTAButton href="/newcomers">새가족 안내 바로가기</CTAButton>
          </FeatureBand>
        </div>
      </section>
    </>
  );
}

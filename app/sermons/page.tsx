import { BookOpen, Radio, ScrollText } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { SermonCard } from "@/components/SermonCard";
import { sermons } from "@/data/site";

export default function SermonsPage() {
  return (
    <>
      <PageHero title="설교" subtitle="말씀을 통해 삶의 방향을 발견하세요." tone="bible" crumb="설교" />
      <section className="container featured-message">
        <SermonCard sermon={sermons[0]} featured />
        <div><span>오늘의 말씀</span><h2>믿음으로 걷는 우리의 삶</h2><p>히브리서 11:1-6</p><p>김요한 담임목사 · 2024.05.12 · 주일예배</p><CTAButton href="#">설교 시청하기</CTAButton></div>
      </section>
      <section className="container sermon-list-box">
        <div className="filter-row"><button>전체</button><button>주일예배</button><button>수요예배</button><button>특별집회</button><select aria-label="정렬"><option>최신순</option></select></div>
        <div className="sermon-grid">{sermons.map((sermon) => <SermonCard key={sermon.title} sermon={sermon} />)}</div>
        <div className="center"><CTAButton href="#" variant="light">더 많은 설교 보기</CTAButton></div>
      </section>
      <section className="container">
        <SectionTitle title="말씀 시리즈" action={<CTAButton href="#" variant="light">전체 시리즈 보기</CTAButton>} />
        <div className="series-grid">
          {["히브리서 강해", "산상수훈 강해", "요한복음 강해"].map((title, index) => <article className={`series-card visual-${["mountain", "road", "book"][index]}`} key={title}><h3>{title}</h3><p>{index === 0 ? "믿음의 본질을 다시 배우는 시간" : "예수님의 가르침을 삶으로 만나는 여정"}</p><span>{[12, 9, 14][index]}개 설교</span></article>)}
        </div>
      </section>
      <section className="container">
        <SectionTitle title="성경별로 보기" />
        <div className="pill-row">{["창세기", "출애굽기", "시편", "마태복음", "요한복음", "사도행전", "로마서", "더보기"].map((item) => <button key={item}>{item}</button>)}</div>
      </section>
      <section className="container"><FeatureBand title="새로운 설교 소식을 받아보세요" text="주간 설교 업데이트와 교회 소식을 이메일로 받아보세요."><CTAButton href="#">구독하기</CTAButton><CTAButton href="/worship" variant="light"><Radio size={17} /> 주일예배 생방송 보기</CTAButton></FeatureBand></section>
    </>
  );
}

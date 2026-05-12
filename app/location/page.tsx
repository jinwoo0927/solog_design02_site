import { Bus, Car, Headphones, Mail, MapPin, ParkingCircle, Phone, TrainFront } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { VisualImage } from "@/components/VisualImage";

export default function LocationPage() {
  return (
    <>
      <PageHero title="오시는 길" subtitle="은혜의빛교회로 오시는 길을 안내합니다." tone="building" />
      <section className="container">
        <div className="map-illustration" role="img" aria-label="은혜의빛교회 주변 지도 일러스트">
          <span className="river" /><span className="park one" /><span className="park two" /><span className="road a" /><span className="road b" /><span className="road c" /><div className="map-marker"><MapPin size={22} /> 은혜의빛교회<small>서울시 강남구 은혜로 123</small></div>
        </div>
      </section>
      <section className="container">
        <div className="four-grid">
          <InfoCard icon={MapPin} title="주소" text="서울시 강남구 은혜로 123 은혜의빛교회 (우)06987" href="#" />
          <InfoCard icon={Phone} title="대표전화" text="02-1234-5678" meta="평일 09:00 - 18:00" />
          <InfoCard icon={Mail} title="이메일" text="info@gracelight.or.kr" meta="24시간 접수 가능합니다." />
          <InfoCard icon={Headphones} title="예배문의" text="02-1234-5678 (내선 1)" meta="주일 09:00 - 17:00" />
        </div>
      </section>
      <section className="container">
        <SectionTitle title="교통 안내" />
        <div className="four-grid">
          <InfoCard icon={TrainFront} title="지하철" text="7호선 송현대입구역 4번 출구 도보 8분, 9호선 노량진역 1번 출구 버스 5분" />
          <InfoCard icon={Bus} title="버스" text="간선 150, 152, 751 · 지선 5516, 5531, 5536 정류장 하차 도보 3분" />
          <InfoCard icon={Car} title="자가용" text="내비게이션에 은혜의빛교회 검색 후 안내 표지판을 따라오시면 됩니다." />
          <InfoCard icon={ParkingCircle} title="주차안내" text="교회 지하 및 지정 주차장을 이용하실 수 있습니다." />
        </div>
      </section>
      <section className="container">
        <SectionTitle title="주변 안내" />
        <div className="program-grid">
          {["소망공원", "빛나루 도서관", "은혜로 상가"].map((title, index) => <article className="program-card" key={title}><VisualImage tone={["park", "library", "street"][index]} label={`${title} 이미지`} /><div><h3>{title}</h3><p>교회에서 도보로 가까운 곳에 위치한 편의 시설입니다.</p><a className="text-link" href="#">자세히 보기</a></div></article>)}
        </div>
      </section>
      <section className="container"><FeatureBand title="첫 방문자를 위한 안내" text="주차는 편하게 이용하시고, 환영 데스크를 찾아주세요. 처음 방문하시는 분을 친절히 안내해 드립니다."><CTAButton href="/worship">예배시간 확인</CTAButton></FeatureBand></section>
      <section className="container"><FeatureBand title="함께 예배하며 은혜를 나눠요" text="궁금한 점이 있으시면 언제든지 문의해 주세요." tone="blue"><CTAButton href="#" variant="light">전화 문의 02-1234-5678</CTAButton></FeatureBand></section>
    </>
  );
}

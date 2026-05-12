import { Building2, Church, Globe2, Heart, Leaf, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { VisualImage } from "@/components/VisualImage";

type HistoryItem = {
  year: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const history: HistoryItem[] = [
  {
    year: "1998",
    title: "은혜의빛교회 설립",
    text: "하나님의 은혜 가운데 교회를 개척하고 첫 예배를 드렸습니다.",
    icon: Church
  },
  {
    year: "2005",
    title: "예배당 이전 및 성장",
    text: "성도들의 기도와 헌신으로 새로운 예배당으로 이전하여 교회의 기틀을 세웠습니다.",
    icon: Building2
  },
  {
    year: "2015",
    title: "교육관 및 선교 비전센터 준공",
    text: "다음세대를 위한 교육관과 선교 비전센터를 세워 사역의 지경을 넓혔습니다.",
    icon: UsersRound
  },
  {
    year: "2024",
    title: "새로운 도약과 비전",
    text: "말씀과 성령 안에서 이웃과 열방을 섬기는 교회로 더 나아가고 있습니다.",
    icon: Globe2
  }
];

const staff = [
  {
    role: "담임목사",
    name: "김은혜 목사",
    text: "교회의 영적 비전을 세우고 말씀을 통해 성도들을 섬깁니다.",
    tone: "about-staff-pastor"
  },
  {
    role: "부목사",
    name: "이도현 목사",
    text: "예배와 교육 사역을 담당하며 성도들의 신앙 성장을 돕습니다.",
    tone: "about-staff-associate"
  },
  {
    role: "전도사",
    name: "박서은 전도사",
    text: "다음세대 및 새가족 사역을 담당하며 복음의 기쁨을 전합니다.",
    tone: "about-staff-minister"
  },
  {
    role: "사무행정",
    name: "한지혜 팀장",
    text: "교회 행정과 성도들의 섬김을 돕고 공동체가 원활히 세워지도록 섬깁니다.",
    tone: "about-staff-admin"
  }
];

const facilities = [
  { title: "본당", text: "하나님께 예배드리는 거룩한 공간", tone: "about-mainhall" },
  { title: "로비", text: "따뜻한 환영이 가득한 만남의 공간", tone: "about-lobby" },
  { title: "교육관", text: "다음세대가 자라나는 배움의 공간", tone: "about-education" },
  { title: "카페/교제공간", text: "함께 나누고 교제하는 쉼의 공간", tone: "about-cafe" }
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="교회소개" subtitle="말씀과 사랑으로 세상을 비추는 공동체" crumb="교회소개" tone="about-hero" />

      <section className="container split-section about-greeting">
        <VisualImage tone="about-pastor-greeting" label="담임목사 인물 사진" className="portrait-photo" />
        <div>
          <SectionTitle eyebrow="담임목사 인사말" title="은혜와 평강이 여러분과 함께하기를 소망합니다." />
          <p className="lead">은혜의빛교회는 하나님의 사랑을 경험하고, 그 사랑을 이웃과 세상에 흘려보내는 공동체입니다.</p>
          <p className="lead">말씀을 삶으로, 예배를 일상으로, 섬김을 기쁨으로 살아가는 교회가 되기 위해 늘 기도하며 나아가겠습니다.</p>
          <p className="lead">여러분의 삶에 하나님의 빛이 비추기를 축복합니다. 함께 걸어가는 모든 발걸음을 주님께서 인도해 주시기를 소망합니다.</p>
          <p className="signature">
            담임목사 <strong>김은혜</strong> 올림
          </p>
        </div>
      </section>

      <section className="container">
        <SectionTitle title="비전 · 사명" />
        <div className="three-grid about-values">
          <InfoCard icon={Leaf} title="비전" text="말씀과 사랑으로 세상을 비추는 교회" meta="너희는 세상의 빛이라 (마태복음 5:14)" />
          <InfoCard icon={Heart} title="사명" text="하나님을 예배하고, 이웃을 사랑하며, 세상을 섬기는 교회" meta="네 이웃을 네 자신 같이 사랑하라 (마태복음 22:39)" />
          <InfoCard icon={UsersRound} title="핵심가치" text="말씀 중심 · 예배 중심 · 공동체 중심 · 선교 중심" meta="오직 성경으로, 오직 은혜로, 오직 믿음으로" />
        </div>
      </section>

      <section className="container">
        <SectionTitle title="교회 연혁" />
        <div className="timeline about-timeline">
          {history.map(({ year, title, text, icon: Icon }) => (
            <article key={year}>
              <Icon size={42} />
              <strong>{year}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle title="섬기는 사람들" />
        <div className="staff-grid about-staff-grid">
          {staff.map((person) => (
            <article className="staff-card" key={person.name}>
              <VisualImage tone={person.tone} label={`${person.name} 사진`} />
              <div>
                <span>{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle title="교회 시설 둘러보기" />
        <div className="facility-grid about-facility-grid">
          {facilities.map((facility) => (
            <article className="facility-card" key={facility.title}>
              <VisualImage tone={facility.tone} label={`${facility.title} 이미지`} />
              <h3>{facility.title}</h3>
              <p>{facility.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <FeatureBand title="처음 방문하셨나요? 은혜의빛교회에 오신 것을 환영합니다!" text="예배안내와 새가족 안내를 통해 교회에 더 가까워지세요." tone="blue">
          <CTAButton href="/worship" variant="light">예배안내 보기</CTAButton>
          <CTAButton href="/newcomers" variant="secondary">새가족 안내</CTAButton>
        </FeatureBand>
      </section>
    </>
  );
}

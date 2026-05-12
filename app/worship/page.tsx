import { Baby, BookOpen, Car, Church, Clock3, MapPin, MessageCircle, MonitorPlay, Phone, Shirt, Star, Sun, UserRound, UsersRound } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { SermonCard } from "@/components/SermonCard";

const mainServices = [
  {
    icon: Church,
    title: "주일예배",
    rows: [["주일 1부", "09:00"], ["주일 2부", "11:00"]],
    place: "본당 (1층)",
    text: "온 세대가 함께 모여 하나님을 예배합니다."
  },
  {
    icon: BookOpen,
    title: "수요예배",
    rows: [["수요일", "19:30"]],
    place: "본당 (1층)",
    text: "말씀과 찬양으로 은혜를 나누는 수요예배에 함께하세요."
  },
  {
    icon: UsersRound,
    title: "금요기도회",
    rows: [["금요일", "20:00"]],
    place: "본당 (1층)",
    text: "찬양과 기도, 말씀으로 한 주를 회복하는 시간입니다."
  },
  {
    icon: Sun,
    title: "새벽기도회",
    rows: [["월~금", "05:30"]],
    place: "본당 (1층)",
    text: "하루를 말씀과 기도로 시작합니다."
  }
];

const nextGenServices = [
  { icon: Baby, title: "영아부", age: "(0~2세)", time: "11:00", place: "영아부실 (2층)", tone: "blue", text: "하나님이 주신 생명을 사랑으로 양육합니다." },
  { icon: UserRound, title: "유치부", age: "(3~5세)", time: "11:00", place: "유치부실 (2층)", tone: "rose", text: "예배와 놀이로 하나님을 만납니다." },
  { icon: BookOpen, title: "유초등부", age: "(초등 1~6학년)", time: "11:00", place: "유초등부실 (2층)", tone: "green", text: "말씀과 찬양으로 믿음을 튼튼히 세웁니다." },
  { icon: UserRound, title: "청소년부", age: "(중·고등부)", time: "11:00", place: "청소년부실 (3층)", tone: "indigo", text: "말씀과 공동체로 성장하는 시간입니다." },
  { icon: Star, title: "청년부", age: "(20~30대)", time: "13:30", place: "청년부실 (3층)", tone: "orange", text: "말씀과 교제로 함께 세워집니다." }
];

const guideItems = [
  { icon: Shirt, title: "복장 안내", text: "예배에 집중할 수 있는 단정한 복장으로 함께해주세요." },
  { icon: Car, title: "주차 안내", text: "교회 주차장을 무료로 이용하실 수 있습니다. 주차요원 안내를 따라주세요." },
  { icon: MonitorPlay, title: "온라인 예배", text: "현장 예배에 참여하지 못하셔도 실시간 혹은 다시보기로 함께 예배하실 수 있습니다." },
  { icon: Baby, title: "유아실 안내", text: "영아를 동반한 가정을 위한 유아실을 운영합니다. 2층 영아부실을 이용해주세요." }
];

const calendarDays = [
  "26", "27", "28", "29", "30", "31", "1",
  "2", "3", "4", "5", "6", "7", "8",
  "9", "10", "11", "12", "13", "14", "15",
  "16", "17", "18", "19", "20", "21", "22",
  "23", "24", "25", "26", "27", "28", "29",
  "30", "1", "2", "3", "4", "5", "6"
];

const dayNotes: Record<number, { label: string; tone: string }> = {
  7: { label: "성찬식", tone: "blue" },
  10: { label: "수요특별예배", tone: "green" },
  13: { label: "금요기도회", tone: "indigo" },
  21: { label: "새가족 환영회", tone: "purple" },
  27: { label: "공동기도회", tone: "blue" },
  35: { label: "기관장 모임", tone: "orange" }
};

const importantEvents = [
  { date: "6월 2일(주일)", title: "성찬식", time: "2부 예배", tone: "blue" },
  { date: "6월 5일(수)", title: "수요특별예배", time: "오후 7:30", tone: "green" },
  { date: "6월 16일(주일)", title: "새가족 환영회", time: "오후 1:00", tone: "purple" },
  { date: "6월 21일(금)", title: "금요기도회", time: "오후 8:00", tone: "blue" },
  { date: "6월 30일(주일)", title: "기관장 모임", time: "오후 1:00", tone: "orange" }
];

const featuredSermon = {
  title: "믿음으로 걷는 우리의 길",
  verse: "히브리서 11:1-6",
  date: "2024.05.12",
  category: "주일예배",
  tone: "pastor"
};

export default function WorshipPage() {
  return (
    <>
      <PageHero title="예배안내" subtitle="예배 시간과 모임 일정을 확인하세요." tone="worship" />

      <section className="container worship-main-grid top-overlap">
        {mainServices.map(({ icon: Icon, title, rows, place, text }) => (
          <article className="worship-service-card" key={title}>
            <div className="icon-bubble"><Icon size={34} /></div>
            <h3>{title}</h3>
            <div className="service-times">
              {rows.map(([label, time]) => (
                <p key={label}><span>{label}</span><strong>{time}</strong></p>
              ))}
            </div>
            <div className="service-place"><MapPin size={16} /> {place}</div>
            <p>{text}</p>
            <a href="#monthly-worship">자세히 보기</a>
          </article>
        ))}
      </section>

      <section className="container">
        <SectionTitle title="다음세대 예배" />
        <div className="worship-next-grid">
          {nextGenServices.map(({ icon: Icon, title, age, time, place, tone, text }) => (
            <article className={`worship-next-card ${tone}`} key={title}>
              <div className="mini-icon"><Icon size={28} /></div>
              <h3>{title}<small>{age}</small></h3>
              <p className="next-time"><span>주일</span><strong>{time}</strong></p>
              <p className="next-place"><MapPin size={15} /> {place}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle title="예배 안내" />
        <div className="worship-guide-strip">
          {guideItems.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={42} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container worship-calendar-section" id="monthly-worship">
        <SectionTitle title="월간 모임 일정" />
        <div className="worship-calendar-layout">
          <div className="worship-calendar-card">
            <div className="calendar-head">
              <button aria-label="이전 달">‹</button>
              <h3>2024년 6월</h3>
              <button aria-label="다음 달">›</button>
            </div>
            <div className="worship-calendar-week">
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => <span key={day}>{day}</span>)}
            </div>
            <div className="worship-calendar-grid">
              {calendarDays.map((day, index) => {
                const note = dayNotes[index];
                return (
                  <span className={Number(day) < 7 && index < 7 ? "muted" : ""} key={`${day}-${index}`}>
                    <strong>{day}</strong>
                    {note ? <em className={note.tone}>{note.label}</em> : null}
                  </span>
                );
              })}
            </div>
          </div>
          <aside className="worship-event-list">
            <h3>주요 일정</h3>
            {importantEvents.map((event) => (
              <p key={event.title}>
                <i className={event.tone} />
                <span><strong>{event.title}</strong>{event.date} {event.time}</span>
              </p>
            ))}
            <small>※ 일정은 변경될 수 있습니다.</small>
          </aside>
        </div>
      </section>

      <section className="container online-sermon">
        <SectionTitle title="온라인 예배" />
        <div className="worship-online-card">
          <SermonCard sermon={featuredSermon} />
          <div className="online-copy">
            <h2>지금, 은혜의빛교회 예배에 함께하세요</h2>
            <p>주일예배를 실시간으로 참여하거나, 다시보기로 은혜의 말씀을 경험하실 수 있습니다.</p>
            <div className="online-actions">
              <CTAButton href="/sermons">실시간 예배 보기</CTAButton>
              <CTAButton href="/sermons" variant="light">다시보기</CTAButton>
            </div>
          </div>
          <ul className="online-benefits">
            <li><MessageCircle size={28} /> 실시간 채팅 참여 가능</li>
            <li><Clock3 size={28} /> 예배 다시보기 제공</li>
            <li><BookOpen size={28} /> 주보 및 자료 제공</li>
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="worship-contact-band">
          <article>
            <div className="round-icon"><Phone size={46} /></div>
            <div>
              <h2>문의하기</h2>
              <p>궁금한 점이 있으시면 언제든지 연락주세요. 사랑으로 안내해 드리겠습니다.</p>
              <a href="tel:02-1234-5678">02-1234-5678</a>
            </div>
          </article>
          <article>
            <div className="round-icon"><MapPin size={46} /></div>
            <div>
              <h2>오시는 길</h2>
              <p>은혜의빛교회에 오시는 길을 안내해 드립니다. 처음 오시는 분들도 환영합니다.</p>
              <CTAButton href="/location" variant="secondary">지도 보기</CTAButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

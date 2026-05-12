import { Banknote, Building, FileText, Globe2, HandHeart, Heart, ShieldCheck, UsersRound } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureBand } from "@/components/FeatureBand";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export default function DonationPage() {
  const donationFaqs = [
    { q: "헌금 종류를 잘못 선택했어요. 변경할 수 있나요?", a: "네, 가능합니다. 문의를 남겨주시면 확인 후 변경을 도와드리겠습니다." },
    { q: "기부금 영수증은 어떻게 발급받을 수 있나요?", a: "교회 사무실 또는 온라인 문의를 통해 기부금 영수증 발급을 신청할 수 있습니다." },
    { q: "해외에서도 온라인 헌금이 가능한가요?", a: "해외에서도 온라인 계좌이체가 가능합니다. 문의 시 영문 정보를 안내해 드립니다." },
    { q: "헌금 내역은 어디서 확인할 수 있나요?", a: "교회 사무실로 문의하시면 본인 확인 후 안내해 드립니다." }
  ];

  return (
    <>
      <PageHero title="온라인 헌금" subtitle="감사와 믿음으로 드리는 예물" tone="donation" />
      <section className="container intro-block top-overlap">
        <InfoCard icon={HandHeart} title="헌금 안내" text="은혜의빛교회는 모든 성도님들이 믿음으로 드리는 예물이 하나님께 성실히 드려지는 귀한 예배임을 믿습니다. 온라인 헌금은 안전한 시스템을 통해 처리되며, 소중한 예물은 교회의 사역과 선교, 이웃 사랑을 위해 투명하고 정직하게 사용됩니다." soft />
      </section>
      <section className="container">
        <SectionTitle title="헌금 종류" action={<CTAButton href="#" variant="light">전체 보기</CTAButton>} />
        <div className="four-grid">
          <InfoCard icon={Building} title="주일헌금" text="예배의 감격과 감사를 담아 드리는 주일 예물입니다." href="#" />
          <InfoCard icon={Heart} title="감사헌금" text="하나님의 은혜에 감사하여 드리는 헌금입니다." href="#" />
          <InfoCard icon={Globe2} title="선교헌금" text="복음 전파와 선교 사역을 위해 드리는 헌금입니다." href="#" />
          <InfoCard icon={Banknote} title="건축헌금" text="하나님의 집과 사역을 위해 드리는 헌금입니다." href="#" />
        </div>
      </section>
      <section className="container account-card">
        <div className="icon-bubble"><Building size={42} /></div>
        <div><h2>은혜은행 <strong>123-456-789012</strong></h2><p>예금주: 은혜의빛교회</p><p>온라인 이체 시 본인의 이름과 헌금 종류를 함께 기재해 주세요. 예시) 홍길동 주일 / 홍길동 감사 / 홍길동 선교</p></div>
        <div className="account-notes"><span><ShieldCheck size={22} /> 안전한 보안 시스템을 적용합니다.</span><span><FileText size={22} /> 기부금 영수증 발급이 가능합니다.</span></div>
      </section>
      <section className="container two-column">
        <div className="form-card">
          <SectionTitle title="온라인 신청 / 문의" />
          <form>
            <input placeholder="이름" aria-label="이름" />
            <input placeholder="연락처" aria-label="연락처" />
            <input placeholder="이메일" aria-label="이메일" />
            <select aria-label="문의 유형"><option>문의 유형 선택</option></select>
            <textarea placeholder="문의 내용을 입력해주세요." aria-label="문의 내용" />
            <button type="button">문의하기</button>
          </form>
          <p>문의는 평일 오전 9:00 - 오후 5:00 사이에 순차적으로 답변드립니다.</p>
        </div>
        <div>
          <SectionTitle title="자주 묻는 질문" action={<CTAButton href="#" variant="light">전체 보기</CTAButton>} />
          <FAQAccordion items={donationFaqs} />
        </div>
      </section>
      <section className="container"><FeatureBand title="하나님께 드린 예물, 투명하고 정직하게 사용합니다." text="정직한 재정 운영, 복음과 사랑 실천, 함께하는 교회를 위해 사용됩니다." tone="blue"><UsersRound size={42} /></FeatureBand></section>
    </>
  );
}

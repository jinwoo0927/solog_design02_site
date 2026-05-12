import { Facebook, Instagram, Mail, MapPin, Phone, Play, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">말씀과 사랑으로 세상을 비추는 교회</p>
          <div className="socials" aria-label="소셜 미디어">
            <Facebook size={18} />
            <Instagram size={18} />
            <Play size={18} />
            <Mail size={18} />
          </div>
        </div>
        <div>
          <h3>예배 안내</h3>
          <p>주일예배 오전 11:00</p>
          <p>수요예배 오후 7:30</p>
          <p>금요기도회 오후 8:00</p>
          <p>새벽기도회 오전 5:30</p>
        </div>
        <div>
          <h3>오시는 길</h3>
          <p>서울특별시 강남구 은혜로 123</p>
          <p>은혜의빛교회</p>
          <a className="outline-light" href="/location">지도 보기</a>
        </div>
        <div>
          <h3>문의 안내</h3>
          <p><Phone size={15} /> 02-1234-5678</p>
          <p><Mail size={15} /> info@gracelight.or.kr</p>
          <p><Clock size={15} /> 평일 09:00 - 18:00</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2024 은혜의빛교회. All rights reserved.</span>
        <span>개인정보처리방침　|　이용약관</span>
      </div>
    </footer>
  );
}

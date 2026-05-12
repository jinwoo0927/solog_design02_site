"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

const bibleCardUrl = "https://bible-verses-vert.vercel.app/";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={bibleCardUrl} className="donate-button" target="_blank" rel="noreferrer">
          말씀카드
        </a>
        <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="메뉴 열기">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="모바일 메뉴">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
          <a href={bibleCardUrl} onClick={() => setOpen(false)} className="mobile-donate" target="_blank" rel="noreferrer">
            말씀카드
          </a>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {items.map((item, index) => (
        <div className="faq-item" key={item.q}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>Q. {item.q}</span>
            <ChevronDown size={20} />
          </button>
          {open === index ? <p>{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}

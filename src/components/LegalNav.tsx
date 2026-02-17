import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "PRIVACY POLICY", path: "/privacy-policy" },
  { name: "TERMS & CONDITIONS", path: "/terms" },
  { name: "REFUND POLICY", path: "/refund-policy" },
];

export default function LegalNav() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((l) => {
        const active = pathname === l.path;
        return (
          <Link
            key={l.path}
            to={l.path}
            className={[
              "px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest",
              "border transition-all",
              active
                ? "bg-[#631C1C] text-[#F6F1EA] border-[#631C1C] shadow-sm"
                : "bg-transparent text-[#631C1C] border-[#631C1C]/25 hover:bg-[#631C1C]/5",
            ].join(" ")}
          >
            {l.name}
          </Link>
        );
      })}
    </div>
  );
}

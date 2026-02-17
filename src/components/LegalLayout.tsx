import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import LegalNav from "./LegalNav";

export default function LegalLayout({
  title,
  children,
  showNav = false,
}: {
  title: string;
  children: ReactNode;
  showNav?: boolean;
}) {
  return (
    <div
      className="min-h-screen pt-8 pb-20 px-4 md:px-8"
      style={{
        background:
          "radial-gradient(ellipse at center, #F6F1EA 0%, #EFE6DB 65%, #E6D7C3 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#631C1C]/70 hover:text-[#631C1C] transition-colors font-serif italic text-sm md:text-base group"
        >
          <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          back to home
        </Link>
      </div>

      <div className="flex justify-center mb-8 px-4">
        <div className="bg-[#631C1C] px-10 py-3 rounded-full border-[1.5px] border-[#C5A059] shadow-lg">
          <h1 className="text-white font-serif text-2xl md:text-3xl lowercase tracking-wide">
            {title}
          </h1>
        </div>
      </div>

      {showNav && (
        <div className="flex justify-center mb-10">
          <LegalNav />
        </div>
      )}

      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
}

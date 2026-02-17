import React, { ReactNode } from "react";

export default function LegalCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-3xl">
      <div
        className="bg-white/85 backdrop-blur rounded-sm border border-[#631C1C]/70 px-6 md:px-10 py-8 md:py-10 mb-9"
        style={{
          boxShadow:
            "18px 18px 0px rgba(197,160,89,0.35), 0 12px 40px rgba(0,0,0,0.06)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

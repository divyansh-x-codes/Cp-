import React from "react";
import LegalLayout from "../components/LegalLayout";
import LegalCard from "../components/LegalCard";
import { Link, useHref } from "react-router-dom";
import { CheckCircle, MessageSquare, ExternalLink } from "lucide-react";

const ThankYou: React.FC = () => {
  return (
    <LegalLayout title="thank you">
      {/* line + buttons (as you asked) */}
      <div className="w-full max-w-3xl mb-8 text-center">
        <div className="border-t border-[#631C1C]/10 pt-6">
          <p className="text-sm italic text-[#631C1C]/60 mb-4">
            Please read our terms & policies once before proceeding.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/privacy-policy"
              className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest border border-[#631C1C]/25 text-[#631C1C] hover:bg-[#631C1C]/5 transition-all"
            >
              PRIVACY POLICY
            </Link>
            <Link
              to="/terms"
              className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest border border-[#631C1C]/25 text-[#631C1C] hover:bg-[#631C1C]/5 transition-all"
            >
              TERMS & CONDITIONS
            </Link>
            <Link
              to="/refund-policy"
              className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-widest border border-[#631C1C]/25 text-[#631C1C] hover:bg-[#631C1C]/5 transition-all"
            >
              REFUND POLICY
            </Link>
          </div>
        </div>
      </div>

      <LegalCard>
        <div className="space-y-10">
          <div className="border-b border-[#631C1C]/10 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-[#631C1C]" size={28} />
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Payment Successful
              </h2>
            </div>
            <p className="text-lg text-[#631C1C]/75 leading-relaxed">
              You’re subscribed to <span className="font-bold italic">ContentOps</span>.
              We’re excited to help you scale. Next steps are below.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-xl italic font-semibold text-[#631C1C]">
              onboarding steps
            </h3>

            <div className="grid gap-6">
              {[
                {
                  n: 1,
                  title: "Join WhatsApp onboarding",
                  desc: "Get direct access to our creators and project managers.",
                },
                {
                  n: 2,
                  title: "Share your syllabus / topics",
                  desc: "Upload your roadmap or content pillars in the group.",
                },
                {
                  n: 3,
                  title: "We start delivery in 24–48h",
                  desc: "The magic begins. Your first batch will arrive shortly.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="flex gap-4 p-4 border border-[#631C1C]/10 bg-[#F6F1EA]/45 rounded-md"
                >
                  <div className="bg-[#631C1C] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-bold text-[#631C1C]">{s.title}</p>
                    <p className="text-sm text-[#631C1C]/65">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://chat.whatsapp.com/DfznNYPwiRzCE1cuN4XhAU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#631C1C] text-white py-4 px-6 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#4a1414] transition-all shadow-md group"
            >
              <MessageSquare size={20} />
              Join WhatsApp
              <ExternalLink
                size={14}
                className="opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>

           <a
  href="https://doodle.com/bp/simplydivyansh/content-strategy-consultation-contentops"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 border border-[#631C1C] text-[#631C1C] py-4 px-6 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#631C1C]/5 transition-all"
>
  Book Your First Journey
</a>
          </div>

          <div className="pt-8 border-t border-[#631C1C]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#631C1C]/60 italic">
              <p>Need help? Reach out instantly:</p>
              <div className="flex gap-6">
                <a href="mailto:support@contentops.io" className="underline hover:text-[#631C1C]">
                  <b>divyansh.coredev@gmail.com</b>
                </a>
                <a href="https://wa.me/919368207339" className="underline hover:text-[#631C1C]">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </LegalCard>
    </LegalLayout>
  );
};

export default ThankYou;

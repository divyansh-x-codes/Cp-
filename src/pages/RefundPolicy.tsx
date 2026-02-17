import React from 'react';
import LegalLayout from '../components/LegalLayout';
import LegalCard from '../components/LegalCard';
import LegalNav from '../components/LegalNav';
import { ShieldAlert } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  return (
    <LegalLayout title="refund policy">
      <LegalNav />

      {/* ONLY CHANGE: push the whole box down */}
      <div className="mt-24">
        <LegalCard>
          <div className="space-y-8">
            <div className="bg-[#631C1C]/5 border-l-4 border-[#631C1C] p-6 rounded-r-md">
              <div className="flex items-center gap-3 mb-2">
                <ShieldAlert className="text-[#631C1C]" size={20} />
                <h3 className="font-serif font-bold text-xl">Core Policy Statement</h3>
              </div>
              <p className="text-lg font-serif italic">
                "ContentOps operates on a strictly{' '}
                <span className="underline decoration-[#C5A059] underline-offset-4">
                  non-refundable
                </span>{' '}
                month-to-month subscription basis."
              </p>
            </div>

            <div className="prose prose-maroon max-w-none">
              <section className="mb-8">
                <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                  1. No Refunds
                </h2>
                <p className="leading-relaxed">
                  Once a subscription fee has been charged for the current billing
                  period, we do not offer refunds. This policy applies regardless
                  of the volume of content requested or utilized during that
                  period.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                  2. Cancellation Policy
                </h2>
                <p className="leading-relaxed mb-4">
                  You are free to cancel your subscription at any time. Upon
                  cancellation:
                </p>
                <ul className="list-disc pl-6 space-y-2 opacity-90">
                  <li>
                    Your access to the service and dashboard remains active until
                    the end of the current billing cycle.
                  </li>
                  <li>
                    No further charges will be applied once the cancellation is
                    processed.
                  </li>
                  <li>
                    We do not provide pro-rated refunds for unused days in the
                    billing cycle.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                  3. Duplicate Charges
                </h2>
                <p className="leading-relaxed">
                  In the rare event of a duplicate charge due to technical error,
                  please contact our support team at{' '}
                  <strong className="font-serif italic text-red-500">
                    divyansh.coredev@gmail.com
                  </strong>{' '}
                  within 48 hours. Verified duplicate charges will be refunded to
                  the original payment method within 7–10 business days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                  4. Service Delivery Failure
                </h2>
                <p className="leading-relaxed">
                  If ContentOps is unable to deliver the promised service due to
                  internal faults or technical downtime exceeding 72 hours, we
                  may at our sole discretion offer service credits or extend your
                  current subscription period.
                </p>
              </section>

              <section className="mt-12 pt-8 border-t border-[#631C1C]/10 text-center">
                <p className="italic opacity-60 font-serif">
                  By subscribing to ContentOps, you acknowledge that you have
                  read and agreed to this Refund Policy.
                </p>
              </section>
            </div>
          </div>
        </LegalCard>
      </div>
    </LegalLayout>
  );
};

export default RefundPolicy;

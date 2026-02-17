import React from 'react';
import LegalLayout from '../components/LegalLayout';
import LegalCard from '../components/LegalCard';
import LegalNav from '../components/LegalNav';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <LegalLayout title="privacy policy">
      <LegalNav />

      {/* ONLY CHANGE: push the whole box down (same as other pages) */}
      <div className="mt-24">
        <LegalCard>
          <div className="prose prose-maroon max-w-none">
            <p className="text-sm italic opacity-60 mb-8 font-serif">
              Last Updated: {lastUpdated}
            </p>

            <section id="info" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                1. Information we collect
              </h2>
              <p className="mb-4 leading-relaxed">
                We collect information that you provide directly to us when you sign up for
                ContentOps. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Contact Information: Name, email address, and phone number.</li>
                <li>Subscription Details: The plan you have chosen and billing address.</li>
                <li>Content Inputs: Any syllabus, documents, or data you share for content generation.</li>
              </ul>
            </section>

            <section id="usage" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                2. How we use your information
              </h2>
              <p className="mb-4 leading-relaxed">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 opacity-90">
                <li>Provide and maintain our subscription services.</li>
                <li>Communicate via WhatsApp and email regarding your content delivery.</li>
                <li>Process your payments and prevent fraudulent transactions.</li>
                <li>Improve our internal AI models and quality control processes.</li>
              </ul>
            </section>

            <section id="payments" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                3. Payments
              </h2>
              <p className="mb-4 leading-relaxed">
                Payment processing is handled by third-party providers (such as Razorpay or
                Stripe). ContentOps does not store your full credit card information on our
                servers. All sensitive data is encrypted and handled according to PCI-DSS
                standards by our payment partners.
              </p>
            </section>

            <section id="cookies" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                4. Cookies & analytics
              </h2>
              <p className="mb-4 leading-relaxed">
                We use essential cookies to keep you logged in and functional. We also use
                third-party analytics (like Google Analytics) to understand how users interact
                with our site to improve the user experience.
              </p>
            </section>

            <section id="retention" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                5. Data retention
              </h2>
              <p className="mb-4 leading-relaxed">
                We retain your personal information for as long as your account is active or as
                needed to provide you with our services. If you cancel your subscription, we
                may retain certain data for a limited period to comply with legal obligations
                or resolve disputes.
              </p>
            </section>

            <section id="rights" className="mb-10">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                6. Your rights
              </h2>
              <p className="mb-4 leading-relaxed">
                Depending on your location, you may have the right to access, correct, or
                delete your personal data. Please contact us if you wish to exercise these
                rights.
              </p>
            </section>

            <section id="contact" className="mb-4">
              <h2 className="font-serif text-2xl mb-4 font-bold border-b border-[#631C1C]/10 pb-2">
                7. Contact us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong className="block mt-2">Email: divyansh.coredev@gmail.com</strong>
              </p>
            </section>
          </div>
        </LegalCard>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;

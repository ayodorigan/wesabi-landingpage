import { useEffect, useRef } from 'react';
import { Package, HeartPulse } from 'lucide-react';

function MoreInfo() {
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (block1Ref.current) observer.observe(block1Ref.current);
    if (block2Ref.current) observer.observe(block2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 space-y-20">
        <div
          ref={block1Ref}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto opacity-0"
        >
          <div>
            <div className="bg-[#2BB673]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-[#2BB673]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reliable Delivery
            </h3>
            <div className="w-16 h-1 bg-[#2BB673] rounded-full"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              We ensure fast, secure, and convenient drug delivery services right to your
              doorstep. Order via phone or WhatsApp and receive your medications within
              the neighborhood. Your health is our priority, and we make sure you get
              what you need when you need it.
            </p>
          </div>
        </div>

        <div
          ref={block2Ref}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto opacity-0"
        >
          <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Walk in for comprehensive health screening services including blood pressure
              checks, blood sugar tests, and BMI measurements anytime during business hours.
              Our qualified pharmaceutical technologists are ready to help monitor and
              maintain your health.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-[#2BB673]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <HeartPulse className="w-8 h-8 text-[#2BB673]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health Screening
            </h3>
            <div className="w-16 h-1 bg-[#2BB673] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreInfo;

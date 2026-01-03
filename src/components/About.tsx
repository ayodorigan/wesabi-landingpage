import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div ref={sectionRef} className="container mx-auto px-4 opacity-0">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mb-6"></div>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wesabi Pharmacy delivers high-quality healthcare to community.
              We offer reliable medication supplies, professional consultations, and friendly
              customer support. Our mission is to make healthcare accessible, affordable,
              and trustworthy for everyone in our neighborhood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useRef } from 'react';
import { Pill, Truck, Activity, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Pill,
    title: 'Prescription Filling',
    description: 'Accurate, fast, and professional medication dispensing with expert pharmaceutical care.',
  },
  {
    icon: Truck,
    title: 'Drug Delivery',
    description: 'Convenient delivery within the neighborhood via phone or WhatsApp for your comfort.',
  },
  {
    icon: Activity,
    title: 'Health Tests',
    description: 'Blood pressure, blood sugar, BMI & weight checks available on-site anytime.',
  },
  {
    icon: Stethoscope,
    title: 'Consultation Services',
    description: 'Get expert advice on medication management and general health guidance.',
  },
];

function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to meet your medical needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-[#2BB673]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#2BB673]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

import { useEffect, useRef } from 'react';
import { Shield, Award, DollarSign, Users, CheckCircle } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Licensed Pharmacy',
    description: 'Fully certified and regulated',
  },
  {
    icon: Award,
    title: 'Qualified Staff',
    description: 'Professional pharmaceutical technologists',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive and fair prices',
  },
  {
    icon: Users,
    title: 'Community Trusted',
    description: 'Serving with care',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: 'Authentic medications only',
  },
];

function TrustBadges() {
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    badgesRef.current.forEach((badge, index) => {
      if (badge) {
        badge.style.animationDelay = `${index * 0.1}s`;
        observer.observe(badge);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#2BB673]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Wesabi
          </h2>
          <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your health and trust are our top priorities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              ref={(el) => (badgesRef.current[index] = el)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center opacity-0 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-[#2BB673]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-7 h-7 text-[#2BB673]" />
              </div>

              <h3 className="font-bold text-gray-900 mb-2">
                {badge.title}
              </h3>

              <p className="text-sm text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;

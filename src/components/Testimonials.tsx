import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Grace Wanjiku',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    review: 'Wesabi Pharmacy has been a lifesaver for our family. The staff is knowledgeable, friendly, and always ready to help. Their delivery service is fast and reliable!',
  },
  {
    name: 'James Omondi',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    review: 'Best pharmacy in Dagoretti! Affordable prices, genuine medicines, and excellent customer service. I always recommend Wesabi to my neighbors.',
  },
  {
    name: 'Mary Njeri',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    review: 'The health screening services are very professional. I get my blood pressure checked here regularly, and the team is always caring and thorough.',
  },
  {
    name: 'David Kamau',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    review: 'Quick prescription filling and great advice on medication. Wesabi Pharmacy truly cares about the community. Highly recommended!',
  },
];

function Testimonials() {
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
            What Our Customers Say
          </h2>
          <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of families in Dagoretti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#2BB673]/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2BB673] text-[#2BB673]" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

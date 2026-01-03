import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Map } from 'lucide-react';

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:0115691220';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254115691220', '_blank');
  };

  const handleMap = () => {
    window.open('https://google.com/maps/place/Wesabi+Pharmacy/data=!4m2!3m1!1s0x0:0x3fe7bdda2041c2b6?sa=X&ved=1t:2428&ictx=111', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#2BB673]/5 to-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-4xl mx-auto text-center opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-[#2BB673] rounded-full mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-[#2BB673]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-[#2BB673]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">0115691220</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-[#2BB673]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-[#2BB673]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-all">wesabipharmacy@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-[#2BB673]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#2BB673]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Wanyee Road, Dagoretti, Nairobi</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleCall}
              className="bg-[#2BB673] hover:bg-[#24a565] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>

            <button
              onClick={handleMap}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Map className="w-5 h-5" />
              View on Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

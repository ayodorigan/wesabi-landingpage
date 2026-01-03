import { useEffect, useRef } from 'react';

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden opacity-0"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img
          src="/logo.png"
          alt="Wesabi Pharmacy"
          className="h-24 md:h-32 mx-auto mb-8 drop-shadow-2xl"
        />

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Trusted Neighborhood Pharmacy
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Affordable medicines, expert consultations, and reliable health services for the Dagoretti community
        </p>

        <button
          onClick={scrollToContact}
          className="bg-[#2BB673] hover:bg-[#24a565] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;

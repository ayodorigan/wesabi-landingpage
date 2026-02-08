import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MoreInfo />
      <TrustBadges />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;

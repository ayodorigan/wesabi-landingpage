import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <MoreInfo />
            <TrustBadges />
            <Testimonials />
            <Blogs />
            <Contact />
        </>
    );
};

export default Home;

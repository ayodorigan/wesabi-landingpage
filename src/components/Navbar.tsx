import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change state when scrolled beyond the hero section (image disappears)
            if (window.scrollY > window.innerHeight - 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact Us', href: '#contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src="/logo.png"
                            alt="Wesabi Pharmacy"
                            className="h-12 md:h-14 drop-shadow-md"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`text-base lg:text-lg font-semibold transition-all hover:text-[#2BB673] ${isScrolled ? 'text-gray-700' : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className={`px-8 py-3 rounded-full text-base lg:text-lg font-bold transition-all transform hover:scale-105 ${isScrolled
                                ? 'bg-[#2BB673] text-white shadow-md hover:bg-[#24a565]'
                                : 'bg-white text-gray-900 hover:bg-gray-100'
                                }`}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-current"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-medium text-gray-800 hover:text-[#2BB673] py-2 border-b border-gray-100"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                            setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-[#2BB673] text-white py-4 rounded-xl font-bold mt-2"
                    >
                        Contact Us Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

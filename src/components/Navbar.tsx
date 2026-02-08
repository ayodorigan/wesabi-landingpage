import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact Us', href: '/#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        setIsMobileMenuOpen(false);

        if (href.includes('#')) {
            const [path, hash] = href.split('#');
            if (location.pathname !== path && path !== '') {
                // Let navigation happen normally, the ScrollToTop or a separate effect will handle the hash
            } else {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }
        }
    };

    // Effect to handle hash scrolling on page load/navigation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                }
            }, 100);
        }
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/'
                ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '/')}
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src="/logo.png"
                            alt="Wesabi Pharmacy"
                            className="h-12 md:h-14 drop-shadow-md"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                                className={`text-base lg:text-lg font-semibold transition-all hover:text-[#2BB673] ${isScrolled || location.pathname !== '/'
                                    ? 'text-gray-700'
                                    : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '/#contact')}
                            className={`px-8 py-3 rounded-full text-base lg:text-lg font-bold transition-all transform hover:scale-105 ${isScrolled || location.pathname !== '/'
                                ? 'bg-[#2BB673] text-white shadow-md hover:bg-[#24a565]'
                                : 'bg-white text-gray-900 hover:bg-gray-100'
                                }`}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-current"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'} />
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
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                            className="text-lg font-medium text-gray-800 hover:text-[#2BB673] py-2 border-b border-gray-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            navigate('/#contact');
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


import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryServices = [
    'Prescription Medication',
    'Over-the-Counter Drugs',
    'Vaccinations & Immunizations',
    'Health Screenings',
    'Drug Delivery Service',
    'Professional Consultation'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Health Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/#contact' }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Wesabi Pharmacy"
                className="h-14 drop-shadow-md"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-base">
              Wesabi Pharmacy is your trusted healthcare partner, providing high-quality medicines and professional pharmaceutical services since 2015.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2BB673] transition-all duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2BB673] transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2BB673] transition-all duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2BB673] transition-all duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-[#2BB673] w-fit pb-1">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#2BB673] flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-[#2BB673] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-[#2BB673] w-fit pb-1">Our Services</h3>
            <ul className="space-y-4">
              {primaryServices.map((item) => (
                <li key={item} className="text-gray-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2BB673]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b-2 border-[#2BB673] w-fit pb-1">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#2BB673] shrink-0 mt-1" />
                <p>Wanyee Road, Dagoretti, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#2BB673] shrink-0" />
                <p>+254 115 691 220</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#2BB673] shrink-0" />
                <p className="text-sm text-gray-400">support@wesabipharmacy.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {currentYear} Wesabi Pharmacy. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



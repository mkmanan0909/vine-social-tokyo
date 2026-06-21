import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';
import { brandLogo, defaultSettings } from '@/data/siteContent';

const Footer = () => {
  const settings = defaultSettings;
  const igHandle = settings.instagram?.replace('@', '') || 'vinesocialtokyo';

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 pt-24 pb-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={brandLogo}
                alt="Vine Social Tokyo"
                className="h-14 w-auto sm:h-16 object-contain object-left"
                width="180"
                height="64"
              />
              <div className="hidden sm:flex flex-col min-w-0">
                <span className="text-2xl font-heading font-light text-[#F5F2E9] tracking-widest truncate">VINE SOCIAL</span>
                <span className="text-xs tracking-[0.3em] text-[#A3A199]">TOKYO</span>
              </div>
            </div>
            <p className="text-[#A3A199] font-light leading-relaxed">
              Modern Indian tapas experience inspired by spice, wine, and social dining.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-heading font-light text-[#CBA052] mb-6 tracking-wider">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <span className="text-[#A3A199] font-light">{settings.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#CBA052] flex-shrink-0" />
                <a href={`tel:${settings.phoneTel}`} className="text-[#A3A199] font-light hover:text-[#CBA052] transition-colors">
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#CBA052] flex-shrink-0" />
                <a href={`mailto:${settings.email}`} className="text-[#A3A199] font-light hover:text-[#CBA052] transition-colors">
                  {settings.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-light text-[#CBA052] mb-6 tracking-wider">HOURS</h3>
            <p className="text-[#A3A199] font-light mb-8">{settings.opening_hours}</p>
            <div className="flex items-center space-x-6">
              <a
                href={`https://instagram.com/${igHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors"
                data-testid="footer-instagram"
              >
                <Camera size={24} />
              </a>
              <a href={`mailto:${settings.email}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors" data-testid="footer-email">
                <Mail size={24} />
              </a>
              <a href={`tel:${settings.phoneTel}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors" data-testid="footer-phone">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            <Link to="/" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">About</Link>
            <Link to="/menu" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">Menu</Link>
            <Link to="/gallery" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">Gallery</Link>
            <Link to="/parties" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">Parties</Link>
            <Link to="/contact" className="text-sm text-[#A3A199] hover:text-[#CBA052] transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-[#A3A199] font-light">
            © {new Date().getFullYear()} Vine Social Tokyo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandLogo, defaultSettings } from '@/data/siteContent';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/menu', label: 'MENU' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/parties', label: 'PARTIES & EVENTS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0" data-testid="header-logo">
            <img
              src={brandLogo}
              alt="Vine Social Tokyo"
              className="h-9 w-auto sm:h-11 object-contain object-left"
              width="160"
              height="44"
            />
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="text-lg sm:text-xl font-heading font-light text-[#F5F2E9] tracking-widest truncate">
                VINE SOCIAL
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.28em] text-[#A3A199]">TOKYO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm tracking-[0.2em] font-light transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#CBA052]'
                    : 'text-[#F5F2E9] hover:text-[#CBA052]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors" data-testid="header-instagram">
              <Camera size={20} />
            </a>
            <a href={`mailto:${defaultSettings.email}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors" data-testid="header-email">
              <Mail size={20} />
            </a>
            <a href={`tel:${defaultSettings.phoneTel}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors" data-testid="header-phone">
              <Phone size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#F5F2E9] hover:text-[#CBA052] transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-white/10"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm tracking-[0.2em] font-light transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#CBA052]'
                      : 'text-[#F5F2E9] hover:text-[#CBA052]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors">
                  <Camera size={20} />
                </a>
                <a href={`mailto:${defaultSettings.email}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors">
                  <Mail size={20} />
                </a>
                <a href={`tel:${defaultSettings.phoneTel}`} className="text-[#F5F2E9] hover:text-[#CBA052] transition-colors">
                  <Phone size={20} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
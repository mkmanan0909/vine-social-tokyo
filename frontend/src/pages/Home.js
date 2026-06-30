import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brandLogo, defaultSettings } from '@/data/siteContent';

const Home = () => {
  const settings = defaultSettings;

  return (
    <div className="min-h-screen" data-testid="home-page">
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-[#0F0F0F]">
          <img
            src={brandLogo}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-contain opacity-[0.22] scale-125 pointer-events-none select-none"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0F0F0F_72%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <img
            src={brandLogo}
            alt="Vine Social Tokyo"
            className="h-24 sm:h-32 lg:h-40 w-auto mx-auto mb-8 object-contain"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-tighter text-[#F5F2E9] mb-6" data-testid="hero-title">
            VINE SOCIAL TOKYO
          </h1>
          <p className="text-lg sm:text-xl text-[#CBA052] tracking-[0.3em] font-light mb-4" data-testid="hero-subtitle">
            CAFE • WINE • SMALL PLATES
          </p>
          <p className="text-base sm:text-lg text-[#A3A199] font-light mb-12 max-w-2xl mx-auto" data-testid="hero-description">
            {settings.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/menu" className="btn-primary" data-testid="hero-view-menu-btn">
              VIEW MENU
            </Link>
            <Link to="/contact" className="btn-secondary" data-testid="hero-contact-btn">
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </section>

      {settings.announcement && (
        <section className="py-6 bg-[#1B3B36] border-b border-white/10" data-testid="announcement-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-[#CBA052] font-light">{settings.announcement}</p>
          </div>
        </section>
      )}

      <section className="py-24 sm:py-32 bg-[#0F0F0F]" data-testid="about-preview-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="image-hover-zoom rounded-sm overflow-hidden border border-white/10"
            >
              <img
                src="/gallery/venue-interior.png"
                alt="Vine Social Tokyo interior"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">ABOUT US</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight text-[#F5F2E9] mb-6">
                Café, Wine & Social Dining
              </h2>
              <p className="text-base font-light leading-relaxed text-[#CBA052] mb-6">
                {settings.tagline}
              </p>
              <p className="text-base font-light leading-relaxed text-[#A3A199] mb-6">
                Inspired by spice, wine, and social dining, Vine Social Tokyo brings together vibrant Indian flavours with shareable plates in Nishikasai.
              </p>
              <p className="text-base font-light leading-relaxed text-[#A3A199] mb-8">
                Join us for lunch, linger over dinner, or stay late for cocktails at the bar.
              </p>
              <Link to="/about" className="btn-secondary" data-testid="about-learn-more-btn">
                LEARN MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[#1B1C1A]" data-testid="menu-highlights-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">MENU</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight text-[#F5F2E9] mb-6">
              Discover Our Flavours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Bites',
                desc: 'Shareable plates from samosa to tartare',
                img: '/gallery/Samosa%20Basket.png',
              },
              {
                title: 'Fire & Grill',
                desc: 'From the grill — bold, aromatic, made to share',
                img: '/gallery/Seekh%20kabab.png',
              },
              {
                title: 'Coffee to Cocktails',
                desc: 'Espresso by day, wine and pours by night',
                img: '/gallery/bar.jpeg',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="menu-card image-hover-zoom"
                data-testid={`menu-highlight-${idx}`}
              >
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover rounded-sm mb-4 border border-white/10" />
                <h3 className="text-xl sm:text-2xl font-heading font-light text-[#CBA052] mb-2">{item.title}</h3>
                <p className="text-base font-light leading-relaxed text-[#A3A199]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary" data-testid="view-full-menu-btn">
              VIEW FULL MENU
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[#0F0F0F]" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light tracking-tight text-[#F5F2E9] mb-6">
            Host Your Next Event With Us
          </h2>
          <p className="text-base font-light leading-relaxed text-[#A3A199] mb-8">
            From intimate gatherings to corporate events, Vine Social Tokyo offers the perfect setting for your special occasion.
          </p>
          <Link to="/parties" className="btn-primary" data-testid="explore-events-btn">
            EXPLORE PARTY PACKAGES
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

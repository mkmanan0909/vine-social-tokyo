import { motion } from 'framer-motion';
import { defaultSettings } from '@/data/siteContent';

const About = () => {
  const { tagline } = defaultSettings;

  return (
    <div className="min-h-screen pt-32 pb-24" data-testid="about-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">OUR STORY</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light tracking-tighter text-[#F5F2E9] mb-6" data-testid="about-title">
            About Vine Social Tokyo
          </h1>
          <p className="text-lg text-[#CBA052] font-light max-w-3xl mx-auto">{tagline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-light text-[#CBA052] mb-4">Who We Are</h2>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              Vine Social Tokyo is a café, wine bar, and social dining room in Nishikasai — where Indian flavours meet shareable plates and a warm, late-night atmosphere.
            </p>
            <p className="text-base font-light leading-relaxed text-[#CBA052]">
              Café &amp; Lunch · Dinner &amp; Bar — From coffee to cocktails, we&apos;ve got your evening covered.
            </p>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              Whether you&apos;re in for a relaxed lunch, a long dinner with friends, or cocktails at the bar until 2 AM, we&apos;re here to make every visit feel social and unhurried.
            </p>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              Every dish is crafted with care, using quality ingredients prepared with traditional techniques and presented with modern flair.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="image-hover-zoom rounded-sm overflow-hidden border border-white/10"
          >
            <img
              src="/gallery/venue-interior.png"
              alt="Vine Social Tokyo"
              className="w-full h-full min-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="image-hover-zoom rounded-sm overflow-hidden border border-white/10 order-2 lg:order-1"
          >
            <img
              src="/gallery/dining-atmosphere.png"
              alt="Dining at Vine Social Tokyo"
              className="w-full h-full min-h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-light text-[#CBA052] mb-4">Our Concept</h2>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              Food tastes better when shared. Our menu spans social bites, grills, mains, and desserts — designed for exploration from lunch through late night.
            </p>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              Start with coffee or a light lunch, return for dinner and wine, and stay for cocktails at the bar. Paired with carefully selected wines and handcrafted pours, every visit becomes a journey.
            </p>
            <p className="text-base font-light leading-relaxed text-[#A3A199]">
              The warm atmosphere of our space reflects social dining — where friends gather over exceptional food, wine, and conversation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1B1C1A] border border-white/10 rounded-sm p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-[#CBA052] mb-8">Why We&apos;re Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-light text-[#F5F2E9] mb-3">All Day &amp; Into the Night</h3>
              <p className="text-base font-light leading-relaxed text-[#A3A199]">
                Lunch from 11 AM, dinner from 5 PM, and bar service until 2 AM — one venue for your whole day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-light text-[#F5F2E9] mb-3">Curated Wine &amp; Bar</h3>
              <p className="text-base font-light leading-relaxed text-[#A3A199]">
                From espresso tonic to wine and cocktails — pours chosen to complement our menu.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-light text-[#F5F2E9] mb-3">Social Atmosphere</h3>
              <p className="text-base font-light leading-relaxed text-[#A3A199]">
                Designed for sharing in the heart of Nishikasai — connection over exceptional food.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

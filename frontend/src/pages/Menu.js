import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { categoryImages, defaultMenuItems, MENU_CATEGORIES } from '@/data/siteContent';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES[0]);
  const menuItems = useMemo(
    () => defaultMenuItems.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );
  const categoryImage = categoryImages[selectedCategory];

  return (
    <div className="min-h-screen pt-32 pb-24" data-testid="menu-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">DISCOVER</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light tracking-tighter text-[#F5F2E9] mb-6" data-testid="menu-title">
            Our Menu
          </h1>
          <p className="text-base font-light leading-relaxed text-[#A3A199] max-w-2xl mx-auto">
            Small plates, grills, mains, and desserts — crafted for sharing from lunch through late night.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="menu-categories">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              data-testid={`menu-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2.5 rounded-sm text-xs sm:text-sm tracking-[0.15em] font-light transition-colors ${
                selectedCategory === category
                  ? 'bg-[#CBA052] text-[#0F0F0F]'
                  : 'border border-white/10 text-[#F5F2E9] hover:border-[#CBA052]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {categoryImage && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative mb-12 rounded-sm overflow-hidden border border-white/10 image-hover-zoom max-h-72"
          >
            <img
              src={categoryImage}
              alt={selectedCategory}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-light text-[#F5F2E9]">{selectedCategory}</h2>
            </div>
          </motion.div>
        )}

        {menuItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="menu-card"
                data-testid={`menu-item-${idx}`}
              >
                {item.image_url && (
                  <div className="image-hover-zoom rounded-sm overflow-hidden mb-4">
                    <img src={item.image_url} alt={item.name} className="w-full h-48 object-cover" />
                  </div>
                )}
                <h3 className="text-xl font-heading font-light text-[#F5F2E9] mb-2">{item.name}</h3>
                <p className="text-base font-light leading-relaxed text-[#A3A199]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16 border border-white/10 rounded-sm">
            <p className="text-[#A3A199] font-light">Ask your server for today&apos;s {selectedCategory} selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

import { motion } from 'framer-motion';
import { defaultGalleryImages } from '@/data/siteContent';

const Gallery = () => {
  const images = defaultGalleryImages;

  return (
    <div className="min-h-screen pt-32 pb-24" data-testid="gallery-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">VISUAL JOURNEY</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light tracking-tighter text-[#F5F2E9] mb-6" data-testid="gallery-title">
            Gallery
          </h1>
          <p className="text-base font-light leading-relaxed text-[#A3A199] max-w-2xl mx-auto">
            A glimpse of our space, plates, and pours — from café hours through late-night bar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`relative image-hover-zoom rounded-sm overflow-hidden border border-white/10 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              data-testid={`gallery-item-${idx}`}
            >
              <img
                src={image.url}
                alt={image.caption || `Gallery image ${idx + 1}`}
                className={`w-full object-cover ${idx === 0 ? 'h-[320px] sm:h-[400px]' : 'h-[280px]'}`}
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-4 py-3">
                  <p className="text-sm font-light text-[#F5F2E9]">{image.caption}</p>
                  {image.category && (
                    <p className="text-xs tracking-wider text-[#CBA052] mt-0.5">{image.category}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

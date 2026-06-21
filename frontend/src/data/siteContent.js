/**
 * Static site copy (replacing former Mongo-backed settings / menu / gallery).
 * Edit this file to update menu, gallery, hours, and contact details.
 */

/** Served from `frontend/public/logo.png` */
export const brandLogo = '/logo.png';

/** Google Maps embed (Nishikasai area) */
export const mapEmbedSrc =
  'https://maps.google.com/maps?q=Nishikasai%2C%20Tokyo%2C%20Japan&hl=en&z=14&output=embed';

export const defaultSettings = {
  opening_hours: 'Mon-Sun: 11:30 AM - 11:00 PM',
  /** Display format */
  phone: '03-6822-3733',
  /** Use in `tel:` links (E.164) */
  phoneTel: '+81368223733',
  email: 'ssvinesocial@gmail.com',
  address: 'Nishikasai, Tokyo, Japan',
  instagram: '@vinesocialtokyo',
  whatsapp: '+81368223733',
  announcement: null,
};

const tapasImg =
  'https://images.pexels.com/photos/14009279/pexels-photo-14009279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const tandoorImg =
  'https://images.pexels.com/photos/31860145/pexels-photo-31860145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const drinksImg =
  'https://images.pexels.com/photos/880424/pexels-photo-880424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

export const defaultMenuItems = [
  {
    id: 'sp-1',
    category: 'Small Plates',
    name: 'Chef’s seasonal chaat',
    description: 'Crisp, tangy, and made for sharing.',
    price: '¥1,200',
    image_url: tapasImg,
    order: 0,
  },
  {
    id: 'td-1',
    category: 'Tandoor',
    name: 'Tandoori platter',
    description: 'Clay-oven classics with house chutneys.',
    price: '¥2,800',
    image_url: tandoorImg,
    order: 0,
  },
  {
    id: 'mn-1',
    category: 'Mains',
    name: 'Slow-cooked curry of the day',
    description: 'Ask your server for today’s selection.',
    price: '¥2,400',
    image_url: tapasImg,
    order: 0,
  },
  {
    id: 'dr-1',
    category: 'Drinks',
    name: 'Wine flight',
    description: 'Three pours paired with small plates.',
    price: '¥3,200',
    image_url: drinksImg,
    order: 0,
  },
  {
    id: 'ln-1',
    category: 'Lunch Sets',
    name: 'Lunch thali',
    description: 'Rice, dal, seasonal veg, and bread.',
    price: '¥1,800',
    image_url: tapasImg,
    order: 0,
  },
  {
    id: 'pc-1',
    category: 'Party Courses',
    name: 'Celebration course',
    description: 'Multi-course menu for groups — inquire for details.',
    price: 'From ¥8,000 / guest',
    image_url: tandoorImg,
    order: 0,
  },
];

/** Served from `frontend/public/gallery/` (copied from your dish photo set). */
const GALLERY_FILES = [
  'Chilli garlic edamame.png',
  'edamame.png',
  'Garlic Prawn.png',
  'Malai Kofta.png',
  'Samosa Basket.png',
  'Scrumbled paneer kulchette.png',
  'Seekh kabab.png',
  'Tuna tartare tostada.png',
];

function galleryAssetUrl(filename) {
  return `/gallery/${encodeURIComponent(filename)}`;
}

function captionFromFilename(filename) {
  return filename.replace(/\.[^.]+$/, '').trim();
}

export const defaultGalleryImages = GALLERY_FILES.map((filename, i) => ({
  id: `dish-${i + 1}`,
  url: galleryAssetUrl(filename),
  caption: captionFromFilename(filename),
  category: 'Food',
}));

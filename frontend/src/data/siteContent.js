/**
 * Static site copy (replacing former Mongo-backed settings / menu / gallery).
 * Edit this file to update menu, gallery, hours, and contact details.
 */

/** Served from `frontend/public/logo.png` */
export const brandLogo = '/logo.png';

export const instagramUrl =
  'https://www.instagram.com/vinesocialtokyo?igsh=MXViNnMwN2J1bDFycA==';

/** Google Maps embed (Nishikasai — Luciel Nishikasai) */
export const mapEmbedSrc =
  'https://maps.google.com/maps?q=%E3%80%92134-0088%20Tokyo%2C%20Edogawa%20City%2C%20Nishikasai%2C%201-ch%C5%8Dme%E2%88%9215%E2%88%9212%20%E3%83%AB%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%AB%E8%A5%BF%E8%91%9B%E8%A5%BF&hl=en&z=16&output=embed';

export const defaultSettings = {
  opening_hours:
    'Mon–Sun: Lunch 11:00 AM – 3:00 PM · Dinner & Bar 5:00 PM – 2:00 AM',
  phone: '03-6822-3733',
  phoneTel: '+81368223733',
  email: 'ssvinesocial@gmail.com',
  address:
    '〒134-0088 Tokyo, Edogawa City, Nishikasai, 1-chōme−15−12 ルシェール西葛西',
  instagram: '@vinesocialtokyo',
  whatsapp: '+81368223733',
  announcement: null,
  tagline:
    'Café & Lunch · Dinner & Bar — From coffee to cocktails, we’ve got your evening covered.',
};

export const MENU_CATEGORIES = [
  'Social Bites',
  'Salad',
  'Fire & Grill',
  'Mains',
  'Rice',
  'Breads',
  'Desserts',
];

function galleryAssetUrl(filename) {
  return `/gallery/${encodeURIComponent(filename)}`;
}

/** Representative image per menu category (`frontend/public/gallery/`). */
export const categoryImages = {
  'Social Bites': galleryAssetUrl('Samosa Basket.png'),
  Salad: galleryAssetUrl('chilli-garlic-edamame.png'),
  'Fire & Grill': galleryAssetUrl('Seekh kabab.png'),
  Mains: galleryAssetUrl('Malai Kofta.png'),
  Rice: galleryAssetUrl('venue-interior.png'),
  Breads: galleryAssetUrl('Scrumbled paneer kulchette.png'),
  Desserts: galleryAssetUrl('cheese-cake.png'),
};

export const defaultMenuItems = [
  {
    id: 'sb-1',
    category: 'Social Bites',
    name: 'Samosa Basket',
    description: 'Crisp samosas with chutneys for the table.',
    image_url: galleryAssetUrl('Samosa Basket.png'),
    order: 0,
  },
  {
    id: 'sb-2',
    category: 'Social Bites',
    name: 'Tuna Tartare Tostada',
    description: 'Crisp tostada topped with seasoned tuna tartare.',
    image_url: galleryAssetUrl('tuna-tartare-tostada.png'),
    order: 1,
  },
  {
    id: 'sb-3',
    category: 'Social Bites',
    name: 'Espresso Tonic',
    description: 'Bright espresso over tonic — a social sip to start the evening.',
    image_url: galleryAssetUrl('espresso-tonic.png'),
    order: 2,
  },
  {
    id: 'sl-1',
    category: 'Salad',
    name: 'Seasonal Garden Salad',
    description: 'Fresh greens with house dressing — ask for today’s selection.',
    image_url: galleryAssetUrl('chilli-garlic-edamame.png'),
    order: 0,
  },
  {
    id: 'fg-1',
    category: 'Fire & Grill',
    name: 'Garlic Prawn',
    description: 'Char-grilled prawns with aromatic garlic and herbs.',
    image_url: galleryAssetUrl('garlic-prawn.png'),
    order: 0,
  },
  {
    id: 'fg-2',
    category: 'Fire & Grill',
    name: 'Seekh Kabab',
    description: 'Juicy minced kebab from the grill, served with mint chutney.',
    image_url: galleryAssetUrl('Seekh kabab.png'),
    order: 1,
  },
  {
    id: 'mn-1',
    category: 'Mains',
    name: 'Malai Kofta',
    description: 'Soft paneer kofta in a rich, creamy tomato sauce.',
    image_url: galleryAssetUrl('Malai Kofta.png'),
    order: 0,
  },
  {
    id: 'rc-1',
    category: 'Rice',
    name: 'Rice Specialties',
    description: 'Fragrant rice dishes to pair with your meal.',
    image_url: galleryAssetUrl('venue-interior.png'),
    order: 0,
  },
  {
    id: 'br-1',
    category: 'Breads',
    name: 'Scrambled Paneer Kulcha',
    description: 'Stuffed kulcha from our oven — warm and shareable.',
    image_url: galleryAssetUrl('Scrumbled paneer kulchette.png'),
    order: 0,
  },
  {
    id: 'ds-1',
    category: 'Desserts',
    name: 'Cheese Cake',
    description: 'Creamy cheesecake with a delicate, indulgent finish.',
    image_url: galleryAssetUrl('cheese-cake.png'),
    order: 0,
  },
  {
    id: 'ds-2',
    category: 'Desserts',
    name: 'Chai Tiramisu',
    description: 'Creamy tiramisu with a warm chai-spiced twist.',
    image_url: galleryAssetUrl('chai-tiramisu.png'),
    order: 1,
  },
];

/** Gallery only — cheese cake is menu/desserts-only and not listed here. */
const GALLERY_FILES = [
  { file: 'bar.jpeg', caption: 'Bar at Vine Social', category: 'Bar' },
  { file: 'venue-interior.png', caption: 'Vine Social Tokyo', category: 'Ambiance' },
  { file: 'dining-atmosphere.png', caption: 'Social dining', category: 'Ambiance' },
  { file: 'garlic-prawn.png', caption: 'Garlic Prawn', category: 'Fire & Grill' },
  { file: 'Seekh kabab.png', caption: 'Seekh Kabab', category: 'Fire & Grill' },
  { file: 'tuna-tartare-tostada.png', caption: 'Tuna Tartare Tostada', category: 'Social Bites' },
  { file: 'Samosa Basket.png', caption: 'Samosa Basket', category: 'Social Bites' },
  { file: 'chilli-garlic-edamame.png', caption: 'Chilli Garlic Edamame', category: 'Social Bites' },
  { file: 'Malai Kofta.png', caption: 'Malai Kofta', category: 'Mains' },
  { file: 'Scrumbled paneer kulchette.png', caption: 'Scrambled Paneer Kulcha', category: 'Breads' },
  { file: 'chai-tiramisu.png', caption: 'Chai Tiramisu', category: 'Desserts' },
  { file: 'espresso-tonic.png', caption: 'Espresso Tonic', category: 'Bar' },
];

export const defaultGalleryImages = GALLERY_FILES.map((entry, i) => ({
  id: `gallery-${i + 1}`,
  url: galleryAssetUrl(entry.file),
  caption: entry.caption,
  category: entry.category,
}));

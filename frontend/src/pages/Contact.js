import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { API } from '@/lib/apiBase';
import { defaultSettings, mapEmbedSrc } from '@/data/siteContent';

const Contact = () => {
  const settings = defaultSettings;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      const detail = err.response?.data?.detail;
      setError(
        typeof detail === 'string'
          ? detail
          : 'Could not send your message. If this keeps happening, email us directly.',
      );
    }
  };

  const igHandle = settings.instagram?.replace('@', '') || 'vinesocialtokyo';

  return (
    <div className="min-h-screen pt-32 pb-24" data-testid="contact-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#CBA052] mb-4 font-semibold">GET IN TOUCH</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-light tracking-tighter text-[#F5F2E9] mb-6" data-testid="contact-title">
            Contact Us
          </h1>
          <p className="text-base font-light leading-relaxed text-[#A3A199] max-w-2xl mx-auto">
            We&apos;d love to hear from you. Messages are sent to our team by email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-light text-[#CBA052] mb-8">Visit Us</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-[#F5F2E9] mb-1">Address</h3>
                  <p className="text-base font-light text-[#A3A199]">{settings.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-[#F5F2E9] mb-1">Phone</h3>
                  <a href={`tel:${settings.phoneTel}`} className="text-base font-light text-[#A3A199] hover:text-[#CBA052] transition-colors">
                    {settings.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-[#F5F2E9] mb-1">Email</h3>
                  <a href={`mailto:${settings.email}`} className="text-base font-light text-[#A3A199] hover:text-[#CBA052] transition-colors">
                    {settings.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-[#F5F2E9] mb-1">Hours</h3>
                  <p className="text-base font-light text-[#A3A199]">{settings.opening_hours}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare size={24} className="text-[#CBA052] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-light text-[#F5F2E9] mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${settings.whatsapp?.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-light text-[#A3A199] hover:text-[#CBA052] transition-colors"
                    data-testid="whatsapp-link"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-light text-[#CBA052] mb-4">Follow Us</h3>
              <p className="text-base font-light text-[#A3A199] mb-4">
                Stay updated with our latest dishes and events on Instagram
              </p>
              <a
                href={`https://instagram.com/${igHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBA052] font-light hover:text-[#DBC184] transition-colors"
                data-testid="instagram-link"
              >
                {settings.instagram}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-light text-[#CBA052] mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-[#F5F2E9] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-testid="contact-form-name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-light text-[#F5F2E9] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  data-testid="contact-form-phone"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-[#F5F2E9] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="contact-form-email"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light text-[#F5F2E9] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-testid="contact-form-message"
                  className="w-full"
                ></textarea>
              </div>
              {error && <p className="text-[#9E2A2B] text-sm font-light">{error}</p>}
              {submitted && (
                <p className="text-[#CBA052] text-sm font-light" data-testid="contact-form-success">
                  Thank you! Your message was sent.
                </p>
              )}
              <button type="submit" className="btn-primary w-full" data-testid="contact-form-submit">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-sm overflow-hidden border border-white/10"
        >
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vine Social Tokyo Location"
            data-testid="google-map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

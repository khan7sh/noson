import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-serif mb-4">Contact</h3>
          <p>123 Mill Road, Cambridge, CB1 2AZ</p>
          <p>Phone: +44 (0)1223 123456</p>
          <p>Email: info@noshecambridge.co.uk</p>
        </div>
        <div>
          <h3 className="text-xl font-serif mb-4">Hours</h3>
          <p>Mon-Fri: 11:30 AM - 10:00 PM</p>
          <p>Sat-Sun: 12:00 PM - 11:00 PM</p>
        </div>
        <div>
          <h3 className="text-xl font-serif mb-4">Follow Us</h3>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-cream">
            <Instagram size={24} />
          </a>
          <div className="mt-4">
            <a href="#" className="block hover:text-cream">Privacy Policy</a>
            <a href="#" className="block hover:text-cream">Terms of Service</a>
            <a href="#" className="block hover:text-cream">Allergen Information</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p>&copy; 2023 Noshe Cambridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif mb-8 text-center">
          <span className="text-primary">Contact </span>
          <span className="text-accent">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-primary">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={24} className="text-primary mr-2" />
                <span>123 Mill Road, Cambridge, CB1 2AZ</span>
              </li>
              <li className="flex items-center">
                <Phone size={24} className="text-primary mr-2" />
                <span>+44 (0)1223 123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={24} className="text-primary mr-2" />
                <span>info@noshecambridge.co.uk</span>
              </li>
              <li className="flex items-start">
                <Clock size={24} className="text-primary mr-2 mt-1" />
                <div>
                  <p>Mon-Fri: 11:30 AM - 10:00 PM</p>
                  <p>Sat-Sun: 12:00 PM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4 text-primary">Make a Reservation</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="date" className="block mb-1">Date</label>
                <input type="date" id="date" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="time" className="block mb-1">Time</label>
                <input type="time" id="time" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="guests" className="block mb-1">Number of Guests</label>
                <input type="number" id="guests" min="1" max="10" className="w-full p-2 border rounded" required />
              </div>
              <button type="submit" className="btn btn-primary w-full">Book a Table</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
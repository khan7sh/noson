import React from 'react';

const BookTable: React.FC = () => {
  return (
    <section id="book-table" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif mb-16 text-center text-primary">Book a Table</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <p className="text-lg mb-8 leading-relaxed text-text">
              Reserve your table at Noshe Cambridge and experience the flavors of Afghanistan in the heart of the city. Whether it's a romantic dinner, family gathering, or a coffee meetup, we're here to make your visit special.
            </p>
            <p className="text-lg leading-relaxed text-text">
              For larger groups or special events, please contact us directly at +44 (0)1223 123456 or info@noshecambridge.co.uk.
            </p>
          </div>
          <form className="md:w-1/2 bg-white p-10 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-bold text-text">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-accent rounded focus:outline-none focus:border-primary transition-colors duration-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-text">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-accent rounded focus:outline-none focus:border-primary transition-colors duration-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block mb-2 text-sm font-bold text-text">Date</label>
              <input type="date" id="date" className="w-full p-3 border border-accent rounded focus:outline-none focus:border-primary transition-colors duration-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="time" className="block mb-2 text-sm font-bold text-text">Time</label>
              <input type="time" id="time" className="w-full p-3 border border-accent rounded focus:outline-none focus:border-primary transition-colors duration-300" required />
            </div>
            <div className="mb-8">
              <label htmlFor="guests" className="block mb-2 text-sm font-bold text-text">Number of Guests</label>
              <input type="number" id="guests" min="1" max="10" className="w-full p-3 border border-accent rounded focus:outline-none focus:border-primary transition-colors duration-300" required />
            </div>
            <button type="submit" className="btn bg-primary text-background hover:bg-primary/90 w-full transition-all duration-300 transform hover:scale-105">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
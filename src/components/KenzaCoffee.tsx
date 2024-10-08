import React from 'react';
import { Coffee } from 'lucide-react';

const KenzaCoffee: React.FC = () => {
  return (
    <section id="coffee" className="py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif mb-16 text-center text-primary">Kenza Coffee</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h3 className="text-3xl font-serif mb-8 text-secondary">House-Roasted Excellence</h3>
            <p className="text-lg mb-8 leading-relaxed text-text">
              At Noshe, we take pride in our house-roasted Kenza Coffee. Our master roasters carefully select the finest beans and roast them to perfection, ensuring a rich and flavorful cup every time.
            </p>
            <p className="text-lg mb-12 leading-relaxed text-text">
              Experience the Kenza difference at home! We offer 250g bags of our freshly roasted coffee for you to enjoy beyond our café walls.
            </p>
            <button className="btn bg-primary text-background hover:bg-primary/90 flex items-center transition-all duration-300 transform hover:scale-105">
              <Coffee size={20} className="mr-2" />
              Order Kenza Coffee
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Kenza Coffee Roasting Process"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenzaCoffee;
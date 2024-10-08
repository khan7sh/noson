import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="relative z-10 text-center text-background">
        <h1 className="text-7xl mb-4 font-bold font-serif">
          <span className="text-background">Noshe</span>
          <span className="text-accent"> Cambridge</span>
        </h1>
        <p className="text-3xl mb-12 font-light tracking-wide">COFFEEHOUSE & AFGHAN RESTAURANT</p>
        <button className="btn bg-secondary text-background hover:bg-secondary/90 mr-4 transition-all duration-300 transform hover:scale-105">View Menu</button>
        <button className="btn bg-accent text-primary hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">Book a Table</button>
      </div>
    </section>
  );
};

export default Hero;
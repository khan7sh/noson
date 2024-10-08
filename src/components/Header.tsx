import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-background py-6 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-3xl font-serif font-bold">
            <span className="text-background">Noshe</span>
            <span className="text-accent"> Cambridge</span>
          </h1>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-primary md:bg-transparent`}>
          <a href="#menu" className="py-2 md:py-0 md:mx-4 hover:text-accent transition-colors duration-200 uppercase tracking-wide text-sm font-medium">Menu</a>
          <a href="#about" className="py-2 md:py-0 md:mx-4 hover:text-accent transition-colors duration-200 uppercase tracking-wide text-sm font-medium">About</a>
          <a href="#coffee" className="py-2 md:py-0 md:mx-4 hover:text-accent transition-colors duration-200 uppercase tracking-wide text-sm font-medium">Kenza Coffee</a>
          <a href="#book-table" className="py-2 md:py-0 md:mx-4 hover:text-accent transition-colors duration-200 uppercase tracking-wide text-sm font-medium">Book a Table</a>
          <a href="#faq" className="py-2 md:py-0 md:mx-4 hover:text-accent transition-colors duration-200 uppercase tracking-wide text-sm font-medium">FAQ</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
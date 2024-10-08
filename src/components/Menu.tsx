import React from 'react';

const menuItems = {
  starters: [
    { name: 'Bolani', description: 'Stuffed flatbread with various fillings' },
    { name: 'Mantu', description: 'Steamed dumplings filled with minced meat and onions' },
    { name: 'Bedanjan Borani', description: 'Fried eggplant with yogurt and tomato sauce' },
  ],
  mainCourses: [
    { name: 'Kabuli Palao', description: 'National dish of Afghanistan, rice with lamb and raisins' },
    { name: 'Kofta Qorma', description: 'Meatballs in a spicy tomato-based sauce' },
    { name: 'Sabzi Palak', description: 'Spinach curry with aromatic spices' },
  ],
  breakfast: [
    { name: 'Noshe Breakfast', description: 'A hearty Afghan-inspired breakfast platter' },
    { name: 'Afghan Shakshuka', description: 'Eggs poached in a sauce of tomatoes, peppers, and spices' },
  ],
};

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-16 text-center text-primary font-serif">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-6 text-secondary capitalize font-serif">{category}</h3>
              <ul className="space-y-6">
                {items.map((item, index) => (
                  <li key={index}>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.name}</h4>
                    <p className="text-text">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
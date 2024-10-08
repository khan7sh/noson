import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif mb-16 text-center text-primary">About Noshe</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <p className="text-lg mb-8 leading-relaxed text-text">
              Opened in early 2024, Noshe Cambridge brings the flavors of Afghanistan to the heart of Cambridge. Our name, "Noshe" (نوش), is a Dari word meaning "sweet" or "delicious," perfectly encapsulating our culinary philosophy.
            </p>
            <p className="text-lg leading-relaxed text-text">
              At Noshe, we focus on traditional Afghan recipes, prepared with modern techniques and locally sourced ingredients. Our goal is to create a dining experience that honors Afghan culinary heritage while embracing contemporary tastes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Noshe Cambridge Restaurant Interior"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
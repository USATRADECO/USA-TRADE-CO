
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-20 md:py-32" 
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Unlock Your U.S. Business Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Expert E-1 & E-2 Visa consulting to transform your American dream into a reality. We provide strategic guidance for treaty traders and investors.
        </p>
        <a 
          href="#assessment" 
          className="bg-brand-gold text-brand-blue font-bold px-8 py-4 rounded-md text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
        >
          Check Your Eligibility
        </a>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const ServiceCard: React.FC<{ title: string; subtitle: string; description: string; link: string; linkText: string }> = ({ title, subtitle, description, link, linkText }) => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
        <div className="p-8 flex-grow">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">{title}</h3>
            <p className="font-semibold text-brand-teal mb-4">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
        <div className="p-8 bg-light-gray">
             <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-teal hover:underline">
                {linkText} &rarr;
            </a>
        </div>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Our Management Consulting Services</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Focused on business immigration and strategic transformation to ensure your success in the U.S. market.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            <ServiceCard 
                title="E-1 Treaty Trader Visa"
                subtitle="For businesses engaged in substantial international trade."
                description="The E-1 classification is for citizens of countries with which the United States maintains a treaty of commerce. We help you navigate the requirements, from demonstrating substantial trade to proving the nationality of your enterprise."
                link="https://www.uscis.gov/working-in-the-united-states/temporary-workers/e-1-treaty-traders"
                linkText="Learn More on USCIS.gov"
            />
            <ServiceCard 
                title="E-2 Treaty Investor Visa"
                subtitle="For individuals investing a significant amount of capital in a U.S. business."
                description="The E-2 visa allows individuals from treaty countries to be admitted to the U.S. when they invest a substantial amount of capital in a U.S. business. Our experts guide you through every step, from business plan creation to the final application."
                link="https://www.uscis.gov/working-in-the-united-states/temporary-workers/e-2-treaty-investors"
                linkText="Learn More on USCIS.gov"
            />
        </div>
        <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-brand-blue">Additional Expertise</h3>
            <p className="text-gray-600 mt-2">We also specialize in Business Transformation and Strategic Leadership consulting.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

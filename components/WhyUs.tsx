
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { UsersIcon } from './icons/UsersIcon';
import { CheckIcon } from './icons/CheckIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-center items-center mb-4">
        <div className="bg-brand-teal text-white rounded-full p-4">
            {icon}
        </div>
    </div>
    <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600 mt-2">Your trusted guide in business and immigration strategy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<TargetIcon className="w-8 h-8"/>} title="Actionable Solutions">
            We deliver practical solutions to real business challenges spanning people, technology, data, and finances.
          </FeatureCard>
          <FeatureCard icon={<UsersIcon className="w-8 h-8"/>} title="Expert Guidance">
            Our consultants provide strategic leadership and transformational insights gained through years of experience.
          </FeatureCard>
          <FeatureCard icon={<CheckIcon className="w-8 h-8"/>} title="Proven Track Record">
            With over five years in business, we have a history of helping clients navigate complex technological and business landscapes.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

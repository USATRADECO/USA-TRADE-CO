
import React from 'react';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  {
    quote: "Their guidance was invaluable in securing my E-2 visa. The process was seamless, and their expertise in business transformation helped us hit the ground running.",
    name: "John D.",
    title: "Treaty Investor, Tech Startup",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "As a long-established trading company, expanding to the U.S. was a major step. Their team made the E-1 visa application process clear and straightforward. Highly recommended!",
    name: "Maria S.",
    title: "CEO, International Trading Co.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Navigating the complexities of U.S. business immigration felt overwhelming until we partnered with them. Their strategic advice was a game-changer for our company.",
    name: "Kenji T.",
    title: "Founder, Manufacturing Firm",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-brand-blue">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-2">Success stories from businesses and individuals we've helped.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };


  return (
    <section id="contact" className="bg-brand-teal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your business goals in the United States. Fill out the form below for a no-obligation consultation.
            </p>
        </div>

        <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
                <div className="bg-green-500/90 text-white text-center p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We will be in touch with you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/10 text-white rounded-md border-white/30 p-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/10 text-white rounded-md border-white/30 p-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">Phone Number (Optional)</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 text-white rounded-md border-white/30 p-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Your Message</label>
                        <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-white/10 text-white rounded-md border-white/30 p-3 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"></textarea>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="bg-brand-gold text-brand-blue font-bold px-8 py-3 rounded-md text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 w-full md:w-auto disabled:bg-yellow-700 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            )}
        </div>

      </div>
    </section>
  );
};

export default CTA;

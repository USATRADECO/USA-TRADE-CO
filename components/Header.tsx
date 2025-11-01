
import React, { useState } from 'react';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href) as HTMLElement;
      if (targetElement) {
        const headerOffset = 80; // Estimated height of the sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-blue">
            <a href="#" onClick={(e) => handleSmoothScroll(e, '#')}>VisaConsult</a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-gray-600 hover:text-brand-teal transition-colors duration-300 cursor-pointer">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="bg-brand-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 cursor-pointer">
            Free Consultation
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-teal transition-colors duration-300" 
                onClick={(e) => {
                  handleSmoothScroll(e, link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-teal text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              onClick={(e) => {
                handleSmoothScroll(e, '#contact');
                setIsMenuOpen(false);
              }}
            >
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

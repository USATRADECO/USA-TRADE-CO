
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
  };

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">VisaConsult</h3>
            <p className="text-gray-400 max-w-md">Your expert partner in navigating U.S. business visas and achieving corporate growth.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-gray-300 mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Services</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">About Us</a></li>
              <li><a href="#assessment" onClick={(e) => handleSmoothScroll(e, '#assessment')} className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Eligibility</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-brand-gold transition-colors duration-300 cursor-pointer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-gray-300 mb-4">Connect</h4>
            <div className="flex space-x-4">
                <SocialIcon href="#">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.596-5.515 5.796 0 .452.05.894.146 1.318-4.576-.229-8.632-2.422-11.353-5.756-.474.811-.746 1.752-.746 2.748 0 2.01.996 3.78 2.535 4.816-.926-.03-1.796-.283-2.557-.704v.07c0 2.808 1.996 5.152 4.646 5.688-.485.132-.996.202-1.52.202-.373 0-.736-.037-1.09-.104.738 2.298 2.88 3.972 5.43 4.02-1.982 1.55-4.49 2.472-7.214 2.472-.47 0-.932-.028-1.386-.082 2.56 1.64 5.6 2.6 8.89 2.6 10.675 0 16.51-8.83 16.51-16.51 0-.253 0-.504-.016-.753.94-.68 1.758-1.53 2.412-2.5z"></path></svg>
                </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} VisaConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

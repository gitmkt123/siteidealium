import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/10 backdrop-blur-sm border-b border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="w-full">
        {/* Centralized container to keep content away from edges */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Clean and balanced header layout with scroll-responsive sizing */}
          <div className={`relative flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'pt-1 pb-1 min-h-[40px] sm:min-h-[45px] md:min-h-[50px]' 
              : 'pt-1 pb-2 sm:pt-1 sm:pb-3 md:pt-1 md:pb-4 min-h-[50px] sm:min-h-[55px] md:min-h-[60px]'
          }`}>
          {/* Logo - Clean and professional with scroll-responsive sizing */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/logos-02.png" 
              alt="Idealium" 
              className={`w-auto transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'h-20 sm:h-24 md:h-28 lg:h-32' 
                  : 'h-28 sm:h-36 md:h-44 lg:h-52'
              }`}
            />
          </div>

          {/* Desktop Navigation - Clean and minimal */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#00FF88] transition-all duration-300 font-medium text-base py-2 px-3 rounded-md"
            >
              Solução
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-[#00FF88] transition-all duration-300 font-medium text-base py-2 px-3 rounded-md"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#00FF88] transition-all duration-300 font-medium text-base py-2 px-3 rounded-md"
            >
              Clientes
            </button>
          </nav>

          {/* Right side - CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Clean design */}
            <div className="hidden lg:flex flex-shrink-0">
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-[#00FF88]/30 transition-all duration-300 text-sm hover:scale-105"
              >
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button - Simple and clean */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#00FF88] transition-all duration-300 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

          {/* Mobile Menu - Clean and simple */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 z-40">
              <nav className="px-6 py-6 space-y-4">
                <button
                  onClick={() => {
                    scrollToSection('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-[#00FF88] transition-all duration-300 font-medium py-3 px-4 text-base rounded-md"
                >
                  Solução
                </button>
                <button
                  onClick={() => {
                    scrollToSection('pricing');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-[#00FF88] transition-all duration-300 font-medium py-3 px-4 text-base rounded-md"
                >
                  Vantagens
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-[#00FF88] transition-all duration-300 font-medium py-3 px-4 text-base rounded-md"
                >
                  Clientes
                </button>
                <div className="pt-4 border-t border-gray-700/50">
                  <button
                  onClick={() => {
                    scrollToContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-[#00FF88]/30 transition-all duration-300 text-sm"
                >
                  Começar Agora
                </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
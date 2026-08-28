import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const onHero = !isScrolled;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-light-gray' : 'bg-transparent'
    }`}>
      <nav className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2.5">
          <svg className="w-8 h-8" viewBox="0 0 64 64" aria-label="Selamawit Tsegaye">
            <rect width="64" height="64" rx="14" fill="#2563eb" />
            <text x="32" y="43" fontFamily="Poppins, Arial, sans-serif" fontSize="28" fontWeight="700" fill="#ffffff" textAnchor="middle">ST</text>
          </svg>
          <span className={`text-lg font-bold transition-colors ${
            onHero ? 'text-text-primary' : 'text-text-primary'
          }`}>
            Selamawit
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a href="#contact" className="ml-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-light-gray shadow-sm">
            <div className="container-custom py-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                      isActive ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="block mt-2 px-4 py-2.5 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
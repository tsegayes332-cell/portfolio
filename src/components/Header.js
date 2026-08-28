import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'testimonials', 'contact'];
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
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const onHero = !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft py-3 border-b border-light-gray'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <svg className="w-9 h-9" viewBox="0 0 64 64" aria-label="Selamawit Tsegaye">
            <rect width="64" height="64" rx="14" fill="#654321" />
            <text x="32" y="43" fontFamily="Poppins, Arial, sans-serif" fontSize="28" fontWeight="700" fill="#ffffff" textAnchor="middle">ST</text>
          </svg>
          <span className={`font-heading text-2xl font-bold transition-colors duration-300 ${
            onHero ? 'text-white hover:text-secondary' : 'text-text-primary hover:text-primary'
          }`}>
            Selamawit<span className="text-secondary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  onHero
                    ? isActive
                      ? 'text-white bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    : isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    onHero ? 'bg-secondary' : 'bg-primary'
                  }`}></span>
                )}
              </a>
            );
          })}

          {/* CTA Button */}
          <a
            href="#contact"
            className={`ml-4 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 shadow-soft ${
              onHero
                ? 'bg-secondary text-coffee hover:bg-accent hover:text-white'
                : 'bg-primary text-white hover:bg-primary-light'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            onHero
              ? 'bg-white/10 text-white hover:bg-white hover:text-primary'
              : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-soft border-t border-light-gray animate-fade-in">
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="block mt-4 px-4 py-3 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary-light transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
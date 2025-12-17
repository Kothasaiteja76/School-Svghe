import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <BookOpen className="logo-icon-svg" />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">Swami Vivekananda </h1>
              <p className="logo-subtitle">Gurukul Of Human Execllence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('achievements')} className="nav-link">Achievements</button>
            <button onClick={() => scrollToSection('events')} className="nav-link">Events</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
             <button onClick={() => scrollToSection('admission')} className="nav-link">Admissions</button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav-container">
            <nav className="mobile-nav">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
              <button onClick={() => scrollToSection('achievements')} className="mobile-nav-link">Achievements</button>

              <button onClick={() => scrollToSection('events')} className="mobile-nav-link">Events</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
              <button onClick={() => scrollToSection('admissions')} className="mobile-nav-link">Adimissions</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
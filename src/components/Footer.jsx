import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* School Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <BookOpen className="footer-logo-svg" />
              </div>
              <div className="footer-logo-text">
                <h3 className="footer-school-name">Swami Vivekananda</h3>
                <p className="footer-school-subtitle">Gurukul</p>
              </div>
            </div>
            <p className="footer-description">
              Nurturing minds, building character, and creating future leaders through 
              traditional wisdom and modern education.
            </p>
            <div className="social-links">
              <a href="#" className="social-link social-facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link social-twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link social-instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link social-youtube">
                <Youtube className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="footer-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="footer-link"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('achievements')}
                  className="footer-link"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="footer-link"
                >
                  Events
                </button>
              </li>
                     <li>
                <button 
                  onClick={() => scrollToSection('admission')}
                  className="footer-link"
                >
                  Admission
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4 className="footer-section-title">Our Programs</h4>
            <ul className="footer-programs">
              <li>Primary Education (1st - 5th)</li>
              <li>Middle School (6th - 8th)</li>
              <li>Secondary School (9th - 10th)</li>
              <li>Co-curricular Activities</li>
              <li>Sports & Recreation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <p className="contact-text">
                  123 xxxxxxxxxxx<br />
                 xxxxxxxxr<br />
                  xxxxxx - 110001
                </p>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <p className="contact-text">+91 000-1234-1234</p>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <p className="contact-text">svghe@svgurukul.edu.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Swami Vivekananda Gurukul. All rights reserved.
            </p>
            <div className="footer-links-bottom">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
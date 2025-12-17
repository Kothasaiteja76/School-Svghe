import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-gradient-text">
              Swami Vivekananda
            </span>
            <br />
            <span className="hero-subtitle">Gurukul</span>
          </h1>
          
          <p className="hero-description">
            Nurturing minds, building character, and creating future leaders through 
            <span className="highlight-orange"> traditional wisdom</span> and 
            <span className="highlight-blue"> modern education</span>
          </p>

          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('about')}
              className="hero-primary-button"
            >
              Discover Our Vision
              <ArrowRight className="button-icon" />
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="hero-secondary-button"
            >
              Join Our Community
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon-container stat-icon-blue">
                <Users className="stat-icon" />
              </div>
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Happy Students</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon-container stat-icon-orange">
                <Star className="stat-icon" />
              </div>
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Years of Excellence</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon-container stat-icon-purple">
                <Award className="stat-icon" />
              </div>
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
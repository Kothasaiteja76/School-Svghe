import React from 'react';
import { Users, Heart, BookOpen, Star, ArrowRight } from 'lucide-react';

const Community = () => {
  const benefits = [
    {
      icon: <BookOpen className="benefit-icon" />,
      title: "Quality Education",
      description: "World-class curriculum that prepares students for future challenges while preserving cultural values."
    },
    {
      icon: <Users className="benefit-icon" />,
      title: "Strong Community",
      description: "Join a family of like-minded parents and students who share common values and aspirations."
    },
    {
      icon: <Heart className="benefit-icon" />,
      title: "Holistic Development",
      description: "Nurturing not just academic excellence but also emotional, physical, and spiritual growth."
    },
    {
      icon: <Star className="benefit-icon" />,
      title: "Individual Attention",
      description: "Small class sizes ensure every child receives personalized attention and care."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="community" className="community-section">
      <div className="community-container">
        <div className="community-header">
          <h2 className="community-title">
            Join Our <span className="community-gradient-text">Learning Community</span>
          </h2>
          <p className="community-subtitle">
            Become part of a vibrant learning community where traditional wisdom meets modern education, 
            creating an environment where every child can thrive and excel.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card-wrapper">
              <div className="benefit-card">
                <div className="benefit-icon-container">
                  {React.cloneElement(benefit.icon, { className: "benefit-icon" })}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          {/* Background decoration */}
          <div className="cta-bg-circle cta-bg-circle-1"></div>
          <div className="cta-bg-circle cta-bg-circle-2"></div>
          
          <div className="cta-content">
            <div className="cta-grid">
              <div className="cta-text">
                <h3 className="cta-title">Ready to Begin Your Child's Journey?</h3>
                <p className="cta-description">
                  We believe that education is not just about academics - it's about shaping character, 
                  building confidence, and preparing students for a meaningful life.
                </p>
                
                <div className="cta-features">
                  <div className="cta-feature-item">
                    <div className="feature-bullet"></div>
                    <span className="feature-text">No formal admission process - direct enrollment</span>
                  </div>
                  <div className="cta-feature-item">
                    <div className="feature-bullet"></div>
                    <span className="feature-text">Flexible learning paths for every child</span>
                  </div>
                  <div className="cta-feature-item">
                    <div className="feature-bullet"></div>
                    <span className="feature-text">Supportive and nurturing environment</span>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="cta-button"
                >
                  Get in Touch Today
                  <ArrowRight className="cta-button-icon" />
                </button>
              </div>
              
              <div className="cta-sidebar">
                <h4 className="sidebar-title">Why Parents Choose Us</h4>
                <div className="sidebar-features">
                  <div className="sidebar-feature">
                    <div className="sidebar-feature-icon">
                      <Heart className="feature-icon" />
                    </div>
                    <div className="sidebar-feature-content">
                      <h5 className="sidebar-feature-title">Caring Environment</h5>
                      <p className="sidebar-feature-description">Every child is valued and nurtured</p>
                    </div>
                  </div>
                  
                  <div className="sidebar-feature">
                    <div className="sidebar-feature-icon">
                      <BookOpen className="feature-icon" />
                    </div>
                    <div className="sidebar-feature-content">
                      <h5 className="sidebar-feature-title">Excellence in Education</h5>
                      <p className="sidebar-feature-description">Proven track record of student success</p>
                    </div>
                  </div>
                  
                  <div className="sidebar-feature">
                    <div className="sidebar-feature-icon">
                      <Users className="feature-icon" />
                    </div>
                    <div className="sidebar-feature-content">
                      <h5 className="sidebar-feature-title">Strong Partnership</h5>
                      <p className="sidebar-feature-description">Close collaboration with parents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </section>
  );
};

export default Community; 
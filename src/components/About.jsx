import React from 'react';
import { BookOpen, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum that balances traditional values with modern learning methodologies."
    },
    {
      icon: <Target className="feature-icon" />,
      title: "Character Building",
      description: "Instilling moral values, discipline, and ethical principles in every student."
    },
    {
      icon: <Heart className="feature-icon" />,
      title: "Holistic Development",
      description: "Nurturing physical, mental, and spiritual growth through various activities."
    },
    {
      icon: <Lightbulb className="feature-icon" />,
      title: "Innovation & Creativity",
      description: "Encouraging critical thinking and creative problem-solving skills."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="about-subtitle">
            At Swami Vivekananda Gurukul, we believe in creating an environment where traditional wisdom meets modern education, 
            fostering well-rounded individuals who are ready to lead and serve society.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-wrapper">
              <div className="feature-card">
                <div className="feature-icon-container">
                  {React.cloneElement(feature.icon, { className: "feature-icon" })}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-banner">
          <div className="stats-content">
            <div className="stats-text">
              <h3 className="stats-title">Why Choose Swami Vivekananda Gurukul?</h3>
              <ul className="stats-list">
                <li className="stats-list-item">
                  <div className="list-bullet"></div>
                  <span>Experienced and dedicated teaching faculty</span>
                </li>
                <li className="stats-list-item">
                  <div className="list-bullet"></div>
                  <span>State-of-the-art infrastructure and facilities</span>
                </li>
                <li className="stats-list-item">
                  <div className="list-bullet"></div>
                  <span>Focus on both academic and co-curricular activities</span>
                </li>
                <li className="stats-list-item">
                  <div className="list-bullet"></div>
                  <span>Safe and nurturing learning environment</span>
                </li>
              </ul>
            </div>
            <div className="stats-grid-container">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Board Results</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Expert Teachers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Co-curricular Activities</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Parent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default About;
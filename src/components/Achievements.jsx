import React from 'react';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="achievement-icon" />,
      title: "National Science Olympiad",
      description: "Gold Medal - 2024",
      category: "Academic Excellence"
    },
    {
      icon: <Medal className="achievement-icon" />,
      title: "State Level Mathematics Competition",
      description: "First Place - 2024",
      category: "Mathematics"
    },
    {
      icon: <Star className="achievement-icon" />,
      title: "Best School Award",
      description: "District Level - 2023",
      category: "Overall Performance"
    },
    {
      icon: <Award className="achievement-icon" />,
      title: "Cultural Fest Championship",
      description: "Regional Winner - 2024",
      category: "Cultural Activities"
    },
    {
      icon: <Trophy className="achievement-icon" />,
      title: "Sports Championship",
      description: "Inter-School Winner - 2024",
      category: "Sports"
    },
    {
      icon: <Medal className="achievement-icon" />,
      title: "Environmental Conservation Award",
      description: "State Recognition - 2023",
      category: "Social Service"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2 className="achievements-title">
            Our <span className="achievements-gradient-text">Achievements</span>
          </h2>
          <p className="achievements-subtitle">
            Celebrating excellence in academics, sports, and cultural activities. 
            Our students consistently achieve remarkable success in various competitions.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card-wrapper">
              <div className="achievement-card">
                <div className="achievement-icon-container">
                  <div className="achievement-icon-bg">
                    {React.cloneElement(achievement.icon, { className: "achievement-icon" })}
                  </div>
                </div>
                
                <div className="achievement-content">
                  <div className="achievement-category">
                    {achievement.category}
                  </div>
                  <h3 className="achievement-item-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="recognition-section">
          <div className="recognition-header">
            <h3 className="recognition-title">Recognition & Awards</h3>
            <p className="recognition-subtitle">We take pride in our students' achievements and our school's recognition</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item-wrapper">
              <div className="stat-icon-bg stat-icon-yellow">
                <Trophy className="stat-icon" />
              </div>
              <h4 className="stat-number">50+</h4>
              <p className="stat-label">Awards Won</p>
            </div>
            
            <div className="stat-item-wrapper">
              <div className="stat-icon-bg stat-icon-blue">
                <Medal className="stat-icon" />
              </div>
              <h4 className="stat-number">25+</h4>
              <p className="stat-label">Gold Medals</p>
            </div>
            
            <div className="stat-item-wrapper">
              <div className="stat-icon-bg stat-icon-green">
                <Star className="stat-icon" />
              </div>
              <h4 className="stat-number">15+</h4>
              <p className="stat-label">Championships</p>
            </div>
            
            <div className="stat-item-wrapper">
              <div className="stat-icon-bg stat-icon-pink">
                <Award className="stat-icon" />
              </div>
              <h4 className="stat-number">10+</h4>
              <p className="stat-label">Excellence Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
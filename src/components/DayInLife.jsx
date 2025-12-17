import React from 'react';
import { Clock, BookOpen, Users, Palette, Zap, Heart } from 'lucide-react';

const DayInLife = () => {
  const schedule = [
    {
      time: "7:30 AM",
      activity: "Morning Assembly & Prayer",
      description: "Start the day with positive energy and spiritual grounding",
      icon: <Heart className="schedule-icon" />,
      colorClass: "schedule-icon-pink"
    },
    {
      time: "8:00 AM",
      activity: "Academic Classes",
      description: "Engaging lessons in core subjects with interactive learning",
      icon: <BookOpen className="schedule-icon" />,
      colorClass: "schedule-icon-blue"
    },
    {
      time: "10:30 AM",
      activity: "Break & Recreation",
      description: "Healthy snacks and social interaction with peers",
      icon: <Users className="schedule-icon" />,
      colorClass: "schedule-icon-green"
    },
    {
      time: "11:00 AM",
      activity: "Specialized Learning",
      description: "Language arts, science labs, and hands-on activities",
      icon: <Zap className="schedule-icon" />,
      colorClass: "schedule-icon-yellow"
    },
    {
      time: "1:00 PM",
      activity: "Lunch & Rest",
      description: "Nutritious meals and quiet time for rejuvenation",
      icon: <Clock className="schedule-icon" />,
      colorClass: "schedule-icon-purple"
    },
    {
      time: "2:00 PM",
      activity: "Creative Arts & Sports",
      description: "Music, dance, art, and physical education activities",
      icon: <Palette className="schedule-icon" />,
      colorClass: "schedule-icon-red"
    }
  ];

  return (
    <section id="day-in-life" className="day-in-life-section">
      <div className="day-in-life-container">
        <div className="day-in-life-header">
          <h2 className="day-in-life-title">
            A Day in the <span className="day-in-life-gradient-text">Life</span>
          </h2>
          <p className="day-in-life-subtitle">
            Experience a typical day at our gurukul where learning, creativity, and character building 
            come together in perfect harmony.
          </p>
        </div>

        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div className="timeline-content">
            {schedule.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-item-even' : 'timeline-item-odd'}`}>
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                {/* Content card */}
                <div className={`timeline-card ${index % 2 === 0 ? 'timeline-card-left' : 'timeline-card-right'}`}>
                  <div className="schedule-card">
                    <div className="schedule-card-content">
                      <div className={`schedule-icon-container ${item.colorClass}`}>
                        {React.cloneElement(item.icon, { className: "schedule-icon" })}
                      </div>
                      <div className="schedule-details">
                        <div className="schedule-time-container">
                          <span className="schedule-time">
                            {item.time}
                          </span>
                        </div>
                        <h3 className="schedule-activity">{item.activity}</h3>
                        <p className="schedule-description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="beyond-classroom">
          <div className="beyond-classroom-header">
            <h3 className="beyond-classroom-title">Beyond the Classroom</h3>
            <p className="beyond-classroom-subtitle">Our holistic approach extends learning beyond traditional boundaries</p>
          </div>
          
          <div className="beyond-classroom-grid">
            <div className="beyond-classroom-item">
              <div className="beyond-icon-container beyond-icon-community">
                <Users className="beyond-icon" />
              </div>
              <h4 className="beyond-title">Community Service</h4>
              <p className="beyond-description">Regular community outreach programs and social service activities</p>
            </div>
            
            <div className="beyond-classroom-item">
              <div className="beyond-icon-container beyond-icon-cultural">
                <Palette className="beyond-icon" />
              </div>
              <h4 className="beyond-title">Cultural Programs</h4>
              <p className="beyond-description">Traditional festivals, cultural events, and artistic expressions</p>
            </div>
            
            <div className="beyond-classroom-item">
              <div className="beyond-icon-container beyond-icon-innovation">
                <Zap className="beyond-icon" />
              </div>
              <h4 className="beyond-title">Innovation Labs</h4>
              <p className="beyond-description">Science experiments, robotics, and technology-based learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInLife;
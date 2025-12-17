import React from 'react';
import { Calendar, Clock, MapPin, Star, Users, Music } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      date: "15",
      month: "Dec",
      title: "Annual Cultural Festival",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      description: "A grand celebration of arts, culture, and talents showcasing student performances",
      type: "Cultural",
      icon: <Music className="event-icon" />
    },
    {
      date: "22",
      month: "Dec",
      title: "Science Exhibition",
      time: "10:00 AM - 4:00 PM",
      location: "Science Lab",
      description: "Students showcase their innovative science projects and experiments",
      type: "Academic",
      icon: <Star className="event-icon" />
    },
    {
      date: "28",
      month: "Dec",
      title: "Sports Day",
      time: "8:00 AM - 2:00 PM",
      location: "Sports Ground",
      description: "Annual sports competition with various athletic events and team games",
      type: "Sports",
      icon: <Users className="event-icon" />
    }
  ];

  const pastHighlights = [
    {
      title: "Diwali Celebration",
      description: "Students and teachers came together to celebrate the festival of lights with traditional performances",
      image: ""
    },
    {
      title: "Independence Day",
      description: "Patriotic fervor filled the air as we celebrated our nation's independence with flag hoisting",
      image: ""
    },
    {
      title: "Teacher's Day",
      description: "Students honored their teachers with special performances and heartfelt gratitude",
      image: ""
    }
  ];

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">
            Events & <span className="events-gradient-text">Announcements</span>
          </h2>
          <p className="events-subtitle">
            Stay updated with our exciting events, celebrations, and important announcements. 
            Join us in creating memorable experiences for our students.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="events-section-block">
          <h3 className="section-subtitle">Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card-wrapper">
                <div className="event-card">
                  <div className="event-header">
                    <div className="event-date-section">
                      <div className="event-date">
                        <div className="event-day">{event.date}</div>
                        <div className="event-month">{event.month}</div>
                      </div>
                      <div className="event-icon-container">
                        {event.icon}
                      </div>
                    </div>
                    <span className="event-type">
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="event-content">
                    <h4 className="event-title">{event.title}</h4>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-details">
                      <div className="event-detail">
                        <Clock className="event-detail-icon" />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin className="event-detail-icon" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Event Highlights */}
        <div className="events-section-block">
          <h3 className="section-subtitle">Recent Highlights</h3>
          <div className="highlights-grid">
            {pastHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card-wrapper">
                <div className="highlight-card">
                  <div className="highlight-image-container">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="highlight-image"
                    />
                    <div className="highlight-overlay"></div>
                  </div>
                  
                  <div className="highlight-content">
                    <h4 className="highlight-title">{highlight.title}</h4>
                    <p className="highlight-description">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Announcements */}
        <div className="announcements-section">
          <div className="announcements-header">
            <h3 className="announcements-title">Important Announcements</h3>
            <p className="announcements-subtitle">Stay informed about the latest updates and notices</p>
          </div>
          
          <div className="announcements-grid">
            <div className="announcement-card">
              <div className="announcement-content">
                <div className="announcement-icon-container">
                  <Calendar className="announcement-icon" />
                </div>
                <div className="announcement-text">
                  <h4 className="announcement-heading">Winter Break Notice</h4>
                  <p className="announcement-details">School will remain closed from December 25th to January 2nd for winter holidays. Classes will resume on January 3rd.</p>
                </div>
              </div>
            </div>
            
            <div className="announcement-card">
              <div className="announcement-content">
                <div className="announcement-icon-container">
                  <Star className="announcement-icon" />
                </div>
                <div className="announcement-text">
                  <h4 className="announcement-heading">Excellence Awards</h4>
                  <p className="announcement-details">Congratulations to our students who won gold medals in the National Science Olympiad. Award ceremony on December 20th.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
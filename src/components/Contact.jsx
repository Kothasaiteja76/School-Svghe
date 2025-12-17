import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact <span className="contact-gradient-text">Us</span>
          </h2>
          <p className="contact-subtitle">
            We'd love to hear from you! Get in touch with us for any inquiries about admissions, 
            programs, or to schedule a visit to our campus.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-description">
                Visit us, call us, or send us a message. Our team is always ready to assist you 
                and answer any questions about our educational programs.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-address">
                  <MapPin className="contact-detail-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Visit Our Campus</h4>
                  <p className="contact-detail-text">Swami Vivekanand Gurukul of Human Excellence.<br /> Dhanaram, Village, Vikarabad, Telangana- 501101, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-phone">
                  <Phone className="contact-detail-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Call Us</h4>
                  <p className="contact-detail-text">+91 1223445677<br />+91 1234567890</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-email">
                  <Mail className="contact-detail-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Email Us</h4>
                  <p className="contact-detail-text">svghe@gurukul.edu.in<br />admissions@svgurukul.edu.in</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-hours">
                  <Clock className="contact-detail-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4 className="contact-detail-title">Office Hours</h4>
                  <p className="contact-detail-text">Monday - Saturday: 9:30 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send us a Message</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-input">
                  <option>General Inquiry</option>
                  <option>Admission Information</option>
                  <option>Academic Programs</option>
                  <option>Campus Visit</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="submit-button"
              >
                Send Message
                <Send className="submit-button-icon" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3 className="map-title">Find Us on Map</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin className="map-pin-icon" />
              <h4 className="map-placeholder-title">Interactive Map</h4>
              <p className="map-placeholder-text">Swami Vivekanand Gurukul of Human Excellence.<br /> Dhanaram, Village, Vikarabad, Telangana- 501101, India</p>
              <button className="map-button">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="quick-contact-grid">
          <div className="quick-contact-card quick-contact-phone">
            <Phone className="quick-contact-icon" />
            <h4 className="quick-contact-title">Call Now</h4>
            <p className="quick-contact-description">Speak directly with our admission team</p>
            <button className="quick-contact-button quick-contact-button-phone">
              +91 123456789
            </button>
          </div>
          
          <div className="quick-contact-card quick-contact-chat">
            <MessageCircle className="quick-contact-icon" />
            <h4 className="quick-contact-title">Live Chat</h4>
            <p className="quick-contact-description">Get instant answers to your questions</p>
            <button className="quick-contact-button quick-contact-button-chat">
              Start Chat
            </button>
          </div>
          
          <div className="quick-contact-card quick-contact-email">
            <Mail className="quick-contact-icon" />
            <h4 className="quick-contact-title">Email Us</h4>
            <p className="quick-contact-description">Send us your detailed inquiries</p>
            <button className="quick-contact-button quick-contact-button-email">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;  
import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Calendar,
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

const Admission = () => {
  const admissionSteps = [
    {
      icon: <FileText className="step-icon" />,
      title: "Application Form",
      description: "Fill out the online application form with student and parent details"
    },
    {
      icon: <Calendar className="step-icon" />,
      title: "Schedule Interview",
      description: "Book a convenient time for student and parent interview"
    },
    {
      icon: <GraduationCap className="step-icon" />,
      title: "Assessment",
      description: "Basic assessment to understand the student's current level"
    },
    {
      icon: <CheckCircle className="step-icon" />,
      title: "Confirmation",
      description: "Receive admission confirmation and complete enrollment process"
    }
  ];

  return (
    <section id="admission" className="admission-section">
      <div className="admission-container">
        <div className="admission-header">
          <h2 className="admission-title">
            Start Your <span className="admission-gradient-text">Journey</span> With Us
          </h2>
          <p className="admission-subtitle">
            Our admission process is designed to be simple and student-friendly, 
            focusing on understanding each child's unique potential.
          </p>
        </div>

        <div className="admission-steps">
          {admissionSteps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon-container">
                {React.cloneElement(step.icon)}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="admission-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <BookOpen className="cta-icon-svg" />
            </div>
            <h3 className="cta-title">Ready to Begin?</h3>
            <p className="cta-description">
              Take the first step towards providing your child with holistic education
            </p>
            <button className="cta-button">
              Start Application
              <ArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Admission;

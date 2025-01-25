import React from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-header">
        Don’t miss out on THE FUSE experience. Sign up to receive updates about HRCRUNCH 2025!
      </h2>
      <div className="input-container">
        <input type="email" placeholder="johndoe@gmail.com" className="newsletter-input" />
        <button className="signup-button">Sign Up</button>
      </div>
      <p className="privacy-statement">
        We’re committed to your privacy. HRCRUNCH uses the information you provide to us to contact you about THE FUSE content and events. You may unsubscribe from these communications at any time. For more information, check out our privacy policy.
      </p>
    </div>
  );
};

export default Newsletter;
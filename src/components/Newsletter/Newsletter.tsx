import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/subscribe', {        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage(`You have successfully signed up for updates about HRCRUNCH 2025!`);
        setEmail(''); 
      } else {
        setMessage('There was an error signing you up. Please try again later.');
      }
    } catch (error) {
      setMessage('There was an error signing you up. Please try again later.');
    }
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-header">
        Don’t miss out on THE FUSE experience. Sign up to receive updates about HRCRUNCH 2025!
      </h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="newsletter-input"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="signup-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
      {message && <p className="subscription-message">{message}</p>}
      <p className="privacy-statement">
        We’re committed to your privacy. HRCRUNCH uses the information you provide to us to contact you about THE FUSE content and events. You may unsubscribe from these communications at any time. For more information, check out our privacy policy.
      </p>
    </div>
  );
};

export default Newsletter;
// Filename: Why.tsx

import React from 'react';
import './Why.css';
import yourImage from '../../assets/bg.jpg'; // Replace with your image path

const Why: React.FC = () => {
  return (
    <div className="why-container">
      <div className="content-container">
        <div className="info-container">
          <h1>WHY ATTEND <span>THE FUSE?</span></h1>
          <h2>Empower talent, elevate your brand, and build lasting connections.</h2>
          <div className="info-section">
            <h3>Unparalleled Networking Opportunities</h3>
            <p>
              Connect with industry leaders, innovators, and creative minds from across Nigeria and Africa to build meaningful relationships and strategic partnerships.
            </p>
          </div>
          <div className="info-section">
            <h3>Exclusive Access to Insights</h3>
            <p>
              Gain insider knowledge and actionable strategies from expert speakers and panelists, tailored to help you thrive in today's competitive landscape.
            </p>
          </div>
          <div className="info-section">
            <h3>Showcase Your Brand</h3>
            <p>
              Elevate your visibility and leave a lasting impression on a diverse audience of professionals, entrepreneurs, and visionaries.
            </p>
          </div>
          <div className="info-section">
            <h3>Fuel Your Growth</h3>
            <p>
              Be part of a transformative experience designed to inspire, empower, and provide you with tools and connections for unparalleled growth.
            </p>
          </div>
          <div className="info-section">
            <h3>Celebrate Creativity and Talent</h3>
            <p>
              Immerse yourself in a dynamic space that celebrates the power of creativity, innovation, and ambition in shaping the future.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={yourImage} alt="Event" className="bouncing-image" />
        </div>
      </div>
    </div>
  );
};

export default Why;
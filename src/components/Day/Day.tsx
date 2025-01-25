// Filename: Day.tsx

import React, { useState } from 'react';
import './Day.css';

const Day: React.FC = () => {
  const [isDay1, setIsDay1] = useState(true); // State to toggle between Day 1 and Day 2

  // Data for Day 1
  const day1Content = [
    "Practical Workshop on Networking Etiquette",
    "Job Fair & Exhibition Begins (Live Interviews, Speed Networking Booth, Professional Headshots, CV/LinkedIn Revamp Booth, Career Clarity Booth)",
    "Pitch Contest for SMEs",
    "Buffer (MC Engagement/Games/Giveaways by Brands)",
    "Fair & Exhibition Continues",
    "Vote of Thanks",
    "Networking Happy Hour",
  ];

  // Data for Day 2
  const day2Content = [
    "Founders' Chat",
    "Learning from Setbacks: How to Turn Mistakes into Strategic Wins",
    "Workshop: Style That Speaks: Crafting Your Personal Brand Through Fashion",
    "Keynotes: Small Acts, Big Impact/Doing big things from a small place",
    "Reinventing Success: Moving from Traditional Metrics to Fulfillment-Based Careers",
    "Networking/Speed dating",
    "Sponsor Presentations",
  ];

  // Select content based on the current day
  const currentContent = isDay1 ? day1Content : day2Content;

  return (
    <div className="day-container">
      <h1 className="event-title">2025 EVENT CONTENT</h1>
      <div className="day-switch">
        <div 
          className={`day-option ${isDay1 ? 'active' : ''}`} 
          onClick={() => setIsDay1(true)}
        >
          DAY 1
        </div>
        <div 
          className={`day-option ${!isDay1 ? 'active' : ''}`} 
          onClick={() => setIsDay1(false)}
        >
          DAY 2
        </div>
      </div>
      <div className="day-box">
        <div className="something">
        <h2 className="day-header">{isDay1 ? "Friday" : "Saturday"}</h2>
        <h3 className="day-subheader">{isDay1 ? "28th March, 2025" : "29th March, 2025"}</h3>
        </div>
        <ul className="schedule-list">
          {currentContent.map((item, index) => (
            <li key={index} className="schedule-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day;
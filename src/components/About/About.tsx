import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutcover from '../../assets/aboutcover.jpg';
import ig from '../../assets/ig.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const instagramPostUrl = 'https://www.instagram.com/reel/DDKcJ4tufnk/?igsh=cXZ3eHpwcGJqZnZt';

  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-section" className='about'>
      <motion.div
        className="about-left"
        initial={{ opacity: 0, y: -50 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1.5 }} 
      >
        <h3>WHO IS HR CRUNCH?</h3>
        <p>HR Crunch 2.0 brings together professionals, job seekers, and thought leaders for a unique fusion of career development, personal branding, and interactive experiences. <br /> With workshops, panels, networking, games, performances, and more, this event is designed to "ignite" the passion, creativity, and professional growth of attendees who would impact Africa and the world.</p>
      </motion.div>
      <motion.div
        className="about-right"
        initial={{ opacity: 0, y: -50 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1.5 }}       
      >
        <img src={aboutcover} alt="" className='about-img'/>
        <a href={instagramPostUrl} target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" className='ig-icon'/>
        </a>
      </motion.div>

    </div>
  );
}

export default About;

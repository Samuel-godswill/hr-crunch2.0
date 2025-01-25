// Filename: Footer.tsx

import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Footer: React.FC = () => {
  return (
   <div className="motherf">
     <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="HRCRUNCH Logo" className="logo" />
        </div>
        <p className="footer-description">
          HRCRUNCH is dedicated to providing the best resources and networking opportunities for HR professionals.
        </p>
      </div>
      <div className="footer-center">
        <h3>Company</h3>
        <ul>
          <li><a href="/speakers">Speakers</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/sponsors">Sponsors</a></li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/become-a-sponsor">Become a Sponsor</a></li>
          <li><a href="/get-ticket">Get Ticket</a></li>
        </ul>
      </div>
      <div className="footer-support">
        <h3>Support</h3>
        <p>+2349061294102</p>
        <p>hello@hrcrunch.com</p>
        <p>hrcrunch@gmail.com</p>
      </div>
      <div className="connected">
      <h3>Stay Connected</h3>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">© 2023 – 2025 HRCRUNCH Limited. All rights reserved.</p>
    </div>
   </div>
  );
};

export default Footer;
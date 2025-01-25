import './Navbar.css';
import logo from '../../assets/logo.png';
import ticket from '../../assets/ticket.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const whatsappNumber = '09061294102'; 
  const message = 'I would like to purchase tickets for The FUSE event.'; 

  const handleTicketClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo'/>
      <ul>
        <li>About</li>
        <li>Speakers</li>
        <li>Sponsors</li>
        <li>
          <button className="ticket-button" onClick={handleTicketClick}>
            GET TICKET
            <img src={ticket} alt="Ticket" className="ticket-icon" />
          </button>
        </li>
        <li>
          <button className="sponsor-button" onClick={handleTicketClick}>
            BECOME A SPONSOR
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
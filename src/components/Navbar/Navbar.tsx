import './Navbar.css';
import logo from '../../assets/logo.png';
import ticket from '../../assets/ticket.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Correct import
import menu from '../../assets/menu.png';

const Navbar = () => {
  const whatsappNumber = '08099448709'; 
  const message = 'I would like to become a sponsor for The FUSE event..'; 

  const handleSponsorClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
  };

  const whatsappNumberTicket = '08099448709'; 
  const messageTicket = 'I would like to buy a ticket for The FUSE event.'; 
  
  const handleTicketClick = () => {
    const url = `https://wa.me/${whatsappNumberTicket}?text=${encodeURIComponent(messageTicket)}`;
    console.log("Opening ticket purchase URL:", url); 
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

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };
  

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}><img src={logo} alt="Logo" className='logo'/></Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-240} duration={500}>About</Link></li>
        <li><Link to="speakers" smooth={true} offset={-70} duration={500}>Speakers</Link></li>
        <li>
  <Link to="ticket" smooth={true} offset={-130} duration={500} className="ticket-button">
    <button onClick={handleTicketClick} className="ticket-button">
      GET TICKET
      <img src={ticket} alt="Ticket" className="ticket-icon" />
    </button>
  </Link>
</li>

        <li>
          <button className="sponsor-button" onClick={handleSponsorClick}>
            BECOME A SPONSOR
          </button>
        </li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
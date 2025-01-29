import ticket from "../../assets/ticket.png";
import "./Hero.css";
import ThreeScene from "./ThreeScene";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "../Hero/CountdownTimer";

const Hero = () => {

  const whatsappNumberSponsor = '09061294102'; 
  const messageSponsor = 'I would like to become a sponsor for The FUSE event.'; 

  const handleSponsorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const url = `https://wa.me/${whatsappNumberSponsor}?text=${encodeURIComponent(messageSponsor)}`;
    console.log("Opening sponsor URL:", url); 
    window.open(url, '_blank');
  };

  const whatsappNumberTicket = '09061294102'; 
const messageTicket = 'I would like to buy a ticket for The FUSE event.'; 

const handleTicketClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
  const url = `https://wa.me/${whatsappNumberTicket}?text=${encodeURIComponent(messageTicket)}`;
  console.log("Opening ticket purchase URL:", url); 
  window.open(url, '_blank');
};

  return (
    <div className="hero container" data-name="hero">
      <ThreeScene />
      <div className="hero-content">
        <div className="hero-text">
          <h1>THE FUSE</h1>
          <p>Africa's biggest two-day event fusing career development, personal branding, and interactive experiences...</p>
          <div className="event-info">
            <span className="event-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> 28TH - 29TH MARCH
            </span>
            <span className="event-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> LAGOS, NIGERIA
            </span>
          </div>
          <button 
            className="btn border-button" 
            onClick={handleSponsorClick} 
            aria-label="Become a sponsor for The FUSE event"
          >
            Become A 2025 Sponsor
          </button>
        </div>
        <div className="countdown-container">
          <h3>Countdown to <span>THE FUSE</span></h3>
          <p>Buy your early bird tickets now!</p>
          <CountdownTimer />
          <button 
            className="btn full-background" 
            onClick={handleTicketClick}
            aria-label="Get tickets for The FUSE event"
          >
            GET TICKET
            <img src={ticket} alt="Ticket" className="ticket-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

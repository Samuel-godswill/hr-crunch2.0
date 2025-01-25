import ticket from "../../assets/ticket.png";
import "./Hero.css";
import ThreeScene from "./ThreeScene";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "../Hero/CountdownTimer";

const Hero = () => {
  return (
    <div className="hero container">
      <ThreeScene />
      <div className="hero-content">
        <div className="hero-text">
          <h1>THE FUSE</h1>
          <p>
            Africa's biggest two-day event fusing career development, personal
            branding, and interactive experiences...
          </p>
          <div className="event-info">
            <span className="event-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" /> 28TH -
              29TH MARCH
            </span>
            <span className="event-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> LAGOS,
              NIGERIA
            </span>
          </div>
          <button className="btn border-button">
            Become A 2025 Sponsor
          </button>
        </div>
        <div className="countdown-container">
          <h3>
            Countdown to <span>THE FUSE</span>
          </h3>
          <p>Buy your early bird tickets now!</p>
          <CountdownTimer />
          <button className="btn full-background">
            GET TICKET
            <img src={ticket} alt="Ticket" className="ticket-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
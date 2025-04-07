import React, { useState } from 'react'; // Removed useEffect since it's not used
import './Ticket.css';

// Define ticket type for better type safety
interface TicketType {
  id: number;
  name: string;
  price: string;
  available?: boolean;
}

const tickets: TicketType[] = [
  { id: 1, name: 'Student Ticket (Early Bird)', price: '₦5,000' },
  { id: 2, name: 'Early Bird Ticket (Early Bird)', price: '₦10,000' },
  { id: 3, name: 'Duo Ticket (Early Bird)', price: '₦19,000' },
  { id: 4, name: 'Quintet [Group of five] (Early Bird)', price: '₦45,000' },
  { id: 5, name: 'Circle [Group of ten] (Early Bird)', price: '₦80,000' },
  { id: 6, name: 'Corporate Package (5 Tickets) (Early Bird)', price: '₦100,000' },
  { id: 7, name: 'Corporate Package (10 Tickets) (Early Bird)', price: '₦180,000' },
];

const Ticket: React.FC = () => {
  // Use the full ticket object instead of just the name for better data handling
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  
  // Handle ticket selection
  const handleTicketSelection = (ticket: TicketType) => {
    setSelectedTicket(ticket);
  };
  
  // Enhanced buy ticket function with redirect feedback
  const handleBuyTicket = () => {
    if (selectedTicket) {
      setIsRedirecting(true);
      const selarUrl = 'https://selar.com/AWS2025';
      console.log(`Navigating to ticket purchase URL for ${selectedTicket.name}:`, selarUrl);
      
      // Short timeout to show redirecting state before actually redirecting
      setTimeout(() => {
        window.open(selarUrl, '_blank');
        setIsRedirecting(false);
      }, 800);
    } else {
      alert('Please select a ticket before proceeding.');
    }
  };
  
  return (
    <div className="ticket-container" data-name="ticket">
      <div className="ticket-options">
        {tickets.map(ticket => (
          <div
            className={`ticket-option ${selectedTicket?.id === ticket.id ? 'selected' : ''}`}
            key={ticket.id}
            onClick={() => handleTicketSelection(ticket)}
          >
            <h3>{ticket.name}</h3>
            <p>{ticket.price}</p>
          </div>
        ))}
      </div>
      
      <button
        className={`buy-ticket-button ${isRedirecting ? 'redirecting' : ''}`}
        onClick={handleBuyTicket}
        disabled={isRedirecting}
      >
        {isRedirecting ? 'Redirecting...' : `Buy Ticket${selectedTicket ? ': ' + selectedTicket.name : ''}`}
      </button>
    </div>
  );
};

export default Ticket;
import React, { useState } from 'react';
import './Ticket.css';

const tickets = [
    { id: 1, name: 'Student Ticket (Early Bird)', price: '₦5,000' },
    { id: 2, name: 'Early Bird Ticket (Early Bird)', price: '₦10,000' },
    { id: 3, name: 'Duo Ticket (Early Bird)', price: '₦19,000' },
    { id: 4, name: 'Quintet [Group of five] (Early Bird)', price: '₦45,000' },
    { id: 5, name: 'Circle [Group of ten] (Early Bird)', price: '₦80,000' },
    { id: 6, name: 'Corporate Package (5 Tickets) (Early Bird)', price: '₦100,000' },
    { id: 7, name: 'Corporate Package (10 Tickets) (Early Bird)', price: '₦180,000' },
];

const Ticket: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

    const handleTicketSelection = (ticketName: string) => {
        setSelectedTicket(ticketName);
    };

    const handleBuyTicket = () => {
        if (selectedTicket) {
            const selarUrl = 'https://selar.co/HRCrunch2025';
            console.log(`Navigating to ticket purchase URL for ${selectedTicket}:`, selarUrl);
            window.open(selarUrl, '_blank');
        } else {
            alert('Please select a ticket before proceeding.');
        }
    };

    return (
        <div className="ticket-container" data-name="ticket">
            <div className="ticket-options">
                {tickets.map(ticket => (
                    <div
                        className={`ticket-option ${selectedTicket === ticket.name ? 'selected' : ''}`}
                        key={ticket.id}
                        onClick={() => handleTicketSelection(ticket.name)}
                    >
                        <h3>{ticket.name}</h3>
                        <p>{ticket.price}</p>
                    </div>
                ))}
            </div>
            <button className="buy-ticket-button" onClick={handleBuyTicket}>
                Buy Ticket
            </button>
        </div>
    );
};

export default Ticket;
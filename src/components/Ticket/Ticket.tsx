// Filename: Ticket.tsx

import React, { useState } from 'react';
import './Ticket.css'; // Import your CSS file for styling

const tickets = [
    { id: 1, name: 'Student Ticket', price: '₦5,000' },
    { id: 2, name: 'Early Bird Ticket', price: '₦10,000' },
    { id: 3, name: 'Duo Ticket', price: '₦19,000' },
    { id: 4, name: 'Quintet [Group of five]', price: '₦45,000' },
    { id: 5, name: 'Circle [Group of ten]', price: '₦80,000' },
    { id: 6, name: 'Corporate Package (5 Tickets)', price: '₦100,000' },
    { id: 7, name: 'Corporate Package (10 Tickets)', price: '₦180,000' },
    { id: 7, name: '', price: '₦' },
];

const Ticket: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

    const handleTicketSelection = (ticketName: string) => {
        setSelectedTicket(ticketName);
    };

    const handleBuyTicket = () => {
        if (selectedTicket) {
            const message = `Hello! I would like to purchase the ${selectedTicket}.`;
            const whatsappUrl = `https://wa.me/+2349061294102?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Please select a ticket before proceeding.');
        }
    };

    return (
        <div className="ticket-container">
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
// Filename: Testimonials.tsx

import React from 'react';
import './Testimonials.css'; // Import your CSS file for styling

const testimonials = [
    {
        text: "HR Crunch was a fantastic opportunity to learn from top HR professionals and industry leaders. The resume review and career coaching sessions provided valuable tips on how to stand out in today’s competitive job market. I left feeling more confident and prepared for my job search.",
        author: "Emeka Okafor",
        position: "Recent Graduate"
    },
    {
        text: "I was thoroughly impressed by the quality of the discussions and workshops at HR Crunch. It wasn’t just about theory, but practical tips and case studies that addressed real HR challenges. I came away with new ideas for optimizing employee engagement and company culture.",
        author: "Ngozi Ike",
        position: "Senior HR Consultant"
    },
    {
        text: "HR Crunch exceeded my expectations. It was well-organized, and the sessions were incredibly relevant to the current HR landscape. The interactive panels and networking breaks allowed me to meet like-minded professionals and potential clients. Can't wait for next year's edition!",
        author: "Tolu Fashola",
        position: "Marketing Manager"

    },
    {
        text: "HR Crunch was an inspiring event with a diverse lineup of speakers and topics. The event provided a fresh perspective on how to approach talent management in today’s evolving workplace. The connections I made have already led to some exciting collaborations!",
        author: "Ahmed Musa",
        position: "Product Designer"
    },
    {
        text: "HR Crunch was a fantastic opportunity to learn from top HR professionals and industry leaders. The resume review and career coaching sessions provided valuable tips on how to stand out in today’s competitive job market. I left feeling more confident and prepared for my job search.",
        author: "Emeka Okafor",
        position: "Recent Graduate"
    },
    {
        text: "I was thoroughly impressed by the quality of the discussions and workshops at HR Crunch. It wasn’t just about theory, but practical tips and case studies that addressed real HR challenges. I came away with new ideas for optimizing employee engagement and company culture.",
        author: "Ngozi Ike",
        position: "Senior HR Consultant"
    },
    {
        text: "HR Crunch exceeded my expectations. It was well-organized, and the sessions were incredibly relevant to the current HR landscape. The interactive panels and networking breaks allowed me to meet like-minded professionals and potential clients. Can't wait for next year's edition!",
        author: "Tolu Fashola",
        position: "Marketing Manager"

    },
    {
        text: "HR Crunch was an inspiring event with a diverse lineup of speakers and topics. The event provided a fresh perspective on how to approach talent management in today’s evolving workplace. The connections I made have already led to some exciting collaborations!",
        author: "Ahmed Musa",
        position: "Product Designer"

    },
    {
        text: "HR Crunch was an inspiring event with a diverse lineup of speakers and topics. The event provided a fresh perspective on how to approach talent management in today’s evolving workplace. The connections I made have already led to some exciting collaborations!",
        author: "Ahmed Musa",
        position: "Product Designer"
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="mother">
            <div className="testimonial-container">
            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-box" key={index}>
                        <p className='text'>{testimonial.text}</p>
                        <p className="author">{testimonial.author}</p>
                        <p className="position">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Testimonials;
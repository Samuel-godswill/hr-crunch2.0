import React, { useState, useRef } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    
    // Format the message to send via WhatsApp
    const whatsappMessage = `New subscription for AWS Newsletter: ${email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp link with the phone number
    const whatsappLink = `https://wa.me/2348099448709?text=${encodedMessage}`;
    
    // Using a hidden iframe to trigger the WhatsApp link without redirecting
    if (iframeRef.current) {
      try {
        // Create a hidden form to submit in the iframe
        const formHtml = `
          <form id="whatsappForm" action="${whatsappLink}" method="get" target="_blank">
            <input type="hidden" name="skip_interstitial" value="1">
          </form>
          <script>
            // Submit form silently and then close immediately
            document.getElementById('whatsappForm').submit();
            setTimeout(() => window.frameElement.remove(), 100);
          </script>
        `;
        
        // Set the iframe content
        const iframeDoc = iframeRef.current.contentDocument || 
                         (iframeRef.current.contentWindow?.document);
        
        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(formHtml);
          iframeDoc.close();
        }
      } catch (e) {
        console.error("Error sending message to WhatsApp:", e);
      }
    }
    
    // Show success message after a brief delay
    setTimeout(() => {
      setMessage(`Thank you! You've successfully signed up for updates about AWS 2025!`);
      setEmail('');
      setIsLoading(false);
    }, 500);
  };
  
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-header">
        Don't miss out on THE FUSE experience. Sign up to receive updates about AWS 2025!
      </h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="newsletter-input"
          value={email}
          onChange={handleEmailChange}
        />
        <button 
          className={`signup-button ${isLoading ? 'loading' : ''}`} 
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Subscribe'}
        </button>
      </div>
      {message && <p className={`subscription-message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</p>}
      <p className="privacy-statement">
        We're committed to your privacy. African Workforce Summit uses the information you provide to us to contact you about THE FUSE content and events. You may unsubscribe from these communications at any time. For more information, check out our privacy policy.
      </p>
      
      {/* Hidden iframe for background submission */}
      <iframe 
        ref={iframeRef}
        style={{ display: 'none', width: 0, height: 0, border: 'none' }}
        title="whatsapp-sender"
      />
    </div>
  );
};

export default Newsletter;
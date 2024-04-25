import React, { useEffect } from 'react';
import './Chatbot.css'; 


const Chatbot = () => {
  useEffect(() => {

    try {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } catch (error) {
      console.error("Error loading script:", error); // Log any errors
    }
  }, []); // Empty dependency array to ensure the script loads once

  return (
    <div className="chatbot-container">
      
      <df-messenger
        intent="WELCOME"
        chat-title="PizzaWebsite"
        agent-id="f3ed9b82-996e-40a6-b07a-469f719076d0"
        language-code="en"
        
      ></df-messenger>
    </div>
  );
};

export default Chatbot;

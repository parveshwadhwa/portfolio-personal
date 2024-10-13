// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 relative">
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '24px',   // Increase font size
            fontWeight: 'bold',
            color: '#4A5568',   // Gray color
            border: '2px solid #4A5568', // Add border
            borderRadius: '50%', // Make it round
            width: '40px',       // Button width
            height: '40px',      // Button height
            display: 'flex',      // Center the text
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            background: 'white',  // Background color
            cursor: 'pointer',     // Pointer cursor
            transition: 'background 0.3s, color 0.3s', // Transition effect
          }}
          onMouseOver={() => {
            // Change background on hover
            this.style.background = '#E2E8F0'; // Light gray
            this.style.color = '#F56565'; // Red
          }}
          onMouseOut={() => {
            // Reset background on mouse out
            this.style.background = 'white'; // Reset to white
            this.style.color = '#4A5568'; // Reset to gray
          }}
          aria-label="Close Modal"
        >
          &times; {/* Simple cross button */}
        </button>
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=97006b2e-54ea-4659-a867-4d2a54f08173"
          style={{ width: '400px', height: '600px', border: 'none' }}
          title="Chatbot"
        />
      </div>
    </div>
  );
};

export default Modal;

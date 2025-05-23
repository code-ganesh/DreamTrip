import React from 'react';

const Welcome = ({ onContinue }) => {
  return (
    <div 
      style={{
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        background: '#87ceeb'
      }}
      onClick={onContinue}
    >
      <h1>Welcome to DreamTrip</h1>
      <p>Tap anywhere to continue</p>
    </div>
  );
};

export default Welcome;

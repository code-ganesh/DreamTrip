import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const userName = localStorage.getItem('userName');

  return (
    <div>
      <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
        <span>DreamTrip</span>
        <button 
          onClick={handleLogout} 
          style={{ float: 'right', background: '#555', color: '#fff', border: 'none', padding: '5px 10px' }}
        >
          Logout
        </button>
      </nav>

      <main style={{ padding: '20px' }}>
        <h2>Welcome, {userName}</h2>
        <p>This is your dashboard. AI Assistance and bucket list will come here.</p>
      </main>
    </div>
  );
};

export default Home;

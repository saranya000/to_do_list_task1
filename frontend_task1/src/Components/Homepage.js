import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    
    const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/taskmanager');
  };

  return (
    <div className="homepage-container">
      <div className="glass-card">
        <h1 className="homepage-title">Your To-Do-List</h1>
        <p className="homepage-description">
          Organize tasks effortlessly with a sleek, modern to-do list powered by clean JavaScript magic.
        </p>
        <button className="homepage-button" onClick={handleStartClick}>Get Started</button>
      </div>
      <div className="homepage-image">
        <img
          src="https://i.git99.com/app_img/20220530/89/87/32/1653922670.webp"
          alt="Decorative Visual"
        />
      </div>
    </div>
  );
};

export default HomePage;

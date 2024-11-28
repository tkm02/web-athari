import React from 'react';
import './CardService.css';

const CardService = ({ icon, text, color, textColor, description }) => {
  return (
    <div className='card-service'>
      <div className='card-inner'>
        <div className='card-front' style={{ backgroundColor: color, color: textColor }}>
          <img src={icon} alt="description" className='card-icon' />
          <hr />
          <span className='card-text'>{text}</span>
        </div>
        <div className='card-back' style={{ backgroundColor: color, color: textColor }}>
          <h3>{text}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardService;

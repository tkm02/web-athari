import React from 'react';
import './ImageGrid.css'

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid-container">
      <div className="image-grid-bg"></div>
      <div className="image-grid-content">
        {images.map((image, index) => (
          <div className={`image-grid-item img-grid-${index}`} key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

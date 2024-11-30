import React, { useState, useEffect } from 'react';
import './ConsultantSlider.css';
import boss2 from '../../assets/BD7A0021.JPG'
import boss from '../../assets/BD7A0095.JPG'
import bile from '../../assets/bile.jpg'
import kouadio from '../../assets/Yvon KOUADIO.jpg'
import soro from '../../assets/soro.jpg'
import jasmine from '../../assets/Janine N’GUESSAN.jpg'
import charle from '../../assets/Jean-Charles DJEDRI.jpg'
import prince from '../../assets/Prince BLE.jpg'

const consultants = [
  {
    id: 1,
    name: "ARNAUD N'GORAN",
    title: "CEO & Founder",
    image: boss,
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."
  },
  {
    id: 2,
    name: "ROLAND SERGE M'BOLO",
    title: "Associé",
    image: boss2,
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 3,
    name: "Prince BLE",
    title: "Consultant",
    image: prince,
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 4,
    name: "Yvon KOUADIO",
    title: "Consultant Senior",
    image: kouadio,  // Assurez-vous de remplacer 'yvonImage' par le chemin réel de l'image
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 5,
    name: "Fèrèlaha SORO",
    title: "Consultante",
    image: soro,  // Assurez-vous de remplacer 'ferelahaImage' par le chemin réel de l'image
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 6,
    name: "Janine N’GUESSAN",
    title: "Consultante junior",
    image: jasmine,  // Assurez-vous de remplacer 'janineImage' par le chemin réel de l'image
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 7,
    name: "Jean-Charles DJEDRI",
    title: "Consultant",
    image: charle,  // Assurez-vous de remplacer 'jeanCharlesImage' par le chemin réel de l'image
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  {
    id: 8,
    name: "Emmanuella BILÉ",
    title: "Consultante senior",
    image: bile,  // Assurez-vous de remplacer 'emmanuellaImage' par le chemin réel de l'image
    quote: "Lorem ipsum dolor sit amet, consectetur. Et integer venenatis sed blandit sed blandit. Cum turpis ut porttitor nulla pharetra vel diam enim laoreet. Orci dui egestas viverra cras enim eleifend. Risus varius velit vel sagittis laoreet nulla mi. Viverra dignissim in mi ut tortor eleifend id in."

  },
  // Add more consultants as needed
];

const ConsultantSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % consultants.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + consultants.length) % consultants.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentConsultant = consultants[currentIndex];
  const nextConsultant = consultants[(currentIndex + 1) % consultants.length];

  return (
    <div className='consultant-container'>
      <div className="consultant-slider">
        <h2>Nos consultant</h2>
        <div className="slider-controls">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
        <div className="slider-content">
          <div className={`consultant-info ${isAnimating ? 'slide-out' : ''}`}>
            <div className="consultant-image">
              <img src={currentConsultant.image} alt={currentConsultant.name} />
            </div>
            <div className="consultant-details">
              <h3>{currentConsultant.name}</h3>
              <p className="post">{currentConsultant.title}</p>
              <hr />
              <p className="quote">"{currentConsultant.quote}"</p>
            </div>
          </div>
          <div className="next-consultant">
            <div className="next-consultant-image">
              <img src={nextConsultant.image} alt={nextConsultant.name} />
            </div>
            <h4>{nextConsultant.name}</h4>
            <p className="post">{nextConsultant.title}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantSlider;
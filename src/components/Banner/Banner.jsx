import React from 'react'
import './Banner.css'
import useCounter from '../../hooks/useCounter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
const StatItem = ({ number, text }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const count = useCounter(isVisible ? number : 0);
  
    return (
      <div className="stat-item" ref={ref}>
        <h2 className="stat-number">{count < number ? `+${count}` : `+${number}`}</h2>
        <p className="stat-text">{text}</p>
      </div>
    );
  };

const Banner = () => {
  return (
    <div className="stats-banner">
      <StatItem number={50} text="PROJETS RÉALISÉS" />
      <StatItem number={20} text="CONSULTANTS" />
      <StatItem number={10} text="PROJETS EN COURS" />
      <StatItem number={15} text="CLIENTS SATISFAITS" />
    </div>
  )
}

export default Banner

import React from 'react'
import './CardValeurs.css'
const CardValeurs = ({image,icon,titre,description,index}) => {
  return (
    <div className='card-valeur'>
      <div className={`ligne-valeur image-valeur`}>
        <img src={image} alt={titre} className='main-image-valeur'/>
      </div>
      <div className='ligne-valeur ligne-2'>
        <div className='ligne-2-1'>
            <img src={icon} alt={titre} />
            <h3>{titre}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardValeurs

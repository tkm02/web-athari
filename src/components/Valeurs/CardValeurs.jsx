import React from 'react'
import './CardValeurs.css'
const CardValeurs = ({image,icon,titre,description,index}) => {
  return (
    <div className='card-valeur'>
      <div className='card-valeur--section-1'>
        <img src={image} alt={titre} className='main-image-valeur'/>
      </div>
      <div className='card-valeur--section-2'>
        <div className='card-valeur--section-2--ligne-1'>
            <div>
              <img src={icon} alt={titre} />
            </div>
            <h3>{titre}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardValeurs

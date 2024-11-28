import React from 'react'
import CardValeurs from './CardValeurs'
import './Valeurs.css'
import image1 from '../../assets/val-1.png'
import image2 from '../../assets/val-2.jpg'
import image3 from '../../assets/val-3.png'
import icon1 from '../../assets/respect.png'
import icon2 from '../../assets/leadship.png'
import icon3 from '../../assets/altruisme.png'
const Valeurs = () => {
  return (
    <div className='section-valeur'>
      <CardValeurs image={image1} icon={icon1} titre={"Le respect de la dignité humaine"} description={"Nullam senectus porttitor in eget. Eget rutrum leo interdum."} index={1}/>
    </div>
  )
}

export default Valeurs

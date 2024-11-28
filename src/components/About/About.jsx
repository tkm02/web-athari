import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <section className='section-about section-1'>
            <h2>A Propos De Nous</h2>
            <p className='about-p-1'>Bienvenue dans notre univers où l'impact 
            et la transformation sont au cœur de notre
            </p>
            <p className='about-p-2'>
            <span>ATHARI ADVISORS</span>  se définit avant tout comme un catalyseur d’impact et un générateur de transformation profonde et durable. Nous croyons fermement en la valeur des hommes et des femmes, d'où qu'ils soient et quelle que soit la classe sociale à laquelle ils appartiennent.
            <br/>
            <br/>
            « Notre obsession est donc d'aider à canaliser les efforts des personnes et des organisations afin que les communautés de tous horizons accèdent à des conditions de vie dignes à travers le monde. »
            </p>
            <button>En savoir plus</button>
        </section>
        <section className='section-about section-2'>
            <div className='container-main-img container-img'></div>
            <div className='container-imgs container-img'>
            <div className='img img-1'></div>
            <div className='img img-2'></div>
            <div className='img img-3'></div>
            </div>
        </section>
    </div>
  )
}

export default About

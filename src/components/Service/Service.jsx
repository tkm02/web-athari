import React from 'react'
import './Service.css'
import ImageGrid from '../ImageGrid/ImageGrid'
import img from '../../assets/happy-african-american-young-family-bought-new-house (1) 1.png'
import img2 from '../../assets/front-view-woman-looking-tablet-while-sitting-backseat-car 1.png'
import img3 from '../../assets/smiley-woman-with-red-baggage-medium-shot 1.png'
import img4 from '../../assets/selective-focus-of-miniature-tourist-on-compass-over-map-with-plastic-toy-airplane-abstract-background-to-travel-concept 1.png'
import CardService from './CardService'
import icon1 from '../../assets/icon.png'
import icon2 from '../../assets/icon (1).png'
import icon3 from '../../assets/icon (2).png'
import icon4 from '../../assets/icon (3).png'
import icon5 from '../../assets/Group 1000001778.png'
import icon6 from '../../assets/icon (5).png'
const Service = () => {
    const images = [
        {
            src: img,
            alt: 'Student raising hand in classroom',
        },
        {
            src: img2,
            alt: 'Woman harvesting crops',
        },
        {
            src: img3,
            alt: 'Healthcare worker preparing vaccine',
        },
        {
            src: img4,
            alt: 'Industrial facility',
        },
    ];
    return (
        <div className='service'>
            <h2>Nos Services</h2>
            <div className='container-service'>
                <div className='service-content service-grid-img'>
                    <ImageGrid images={images} />
                </div>
                <div className='service-content service-cards'>
                    <CardService icon={icon1} text="Education" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                    <CardService icon={icon2} text="Santé" color="#ED820E" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                    <CardService icon={icon3} text="Agrobusiness" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                    <CardService icon={icon4} text="Digital et technologie" color="#ED820E" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                    <CardService icon={icon5} text="Inclusion financière" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                    <CardService icon={icon6} text="Industrialisation" color="#ED820E" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
                </div>
            </div>
            <a href="#" className='en-savoir-plus-service'>En savoir plus <i className="fa-solid fa-arrow-right"></i></a>
        </div>
    )
}

export default Service

import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Service from '../components/Service/Service'
import Banner from '../components/Banner/Banner'
import Valeurs from '../components/Valeurs/Valeurs'
import ConsultantSlider from '../components/Consultant/ConsultantSlider'
import Target from '../components/Target/Target'
import Partner from '../components/Partner/Partner'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer/Footer'

const Acceuil = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Service />
            <Banner />
            <Valeurs />
            <ConsultantSlider />
            <Target />
            <Partner />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Acceuil

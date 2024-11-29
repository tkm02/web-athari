import React from 'react'
import './Home.css'
import carte from "../../assets/carte.png"
const Home = () => {
  return (
    <div className='home'>
        <div className='container-info-home'>
        <h1 className='Athari'>Athari Advisors</h1>
        <h3 className='description-athari'>
            Catalyseurs d'innovation pour
            un impact durable et  transformateur
        </h3>
            <img src={carte} alt="" className='carte-img'/>
        </div>
    </div>
  )
}

export default Home

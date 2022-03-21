import React from 'react'
import Navbar from './Navbar'
import logos from "./logos.js"
import frontBox from "../assets/box.svg"
import backBox from "../assets/box.svg"
import "./styles.css"
import TypeAnimation from 'react-type-animation';
function HeroSection() {
  return (
    <div className='hero-border'>
        <Navbar/>
        <div className='hero-section'>
        <div className='left'> 
        <h1>Smart crypto investments</h1>
                <h1>
                <TypeAnimation
        cursor={true}
        sequence={[  'For us',
        3000,
        'For you',
        300,
        'For Everyone',3000,'']}
        wrapper="span"
       repeat={Infinity}
       />
                </h1>
        </div>
        <div className='right'>
        <p className='bubl-text'>Bubl</p>
      {logos.map((logos)=>(
        <section className={logos.class}>
      <img src={logos.link} alt={logos.alt} height={logos.height} width={logos.width}/>
      </section>
        ))}
        <img className="box-front" src={frontBox} alt="" width={300} height={300}/>
        <img src={backBox} className="box-back" alt="" width={300} height={300}/>
        </div>
        </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> We Ensure better education for a better world </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta adipisci delectus voluptatum facere magnam facilis omnis, debitis necessitatibus molestias eius?</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

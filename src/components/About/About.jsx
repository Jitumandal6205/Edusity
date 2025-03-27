import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ( {setPlayState} ) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={ () => {setPlayState(true)} } />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2> Nurturing Tommorow's Leaders Today </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio suscipit ab nulla tempore corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus tempora, neque ex rem quis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos, quod in tenetur velit earum.</p>
      </div>
    </div>
  )
}

export default About

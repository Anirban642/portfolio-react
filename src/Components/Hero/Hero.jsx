import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import cv from '../../assets/my_resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Anirban Das,</span> Frontend Developer based in India</h1>
      <p>I am a B.Tech CSE student skilled in C,React,HTML,CSS,JS,Python, and PHP programming. I have experience in web development,React and built more than 15 Projects in React.</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <a className='cv' target='_blank' href={cv}>
          <div className="hero-resume">
            My Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero

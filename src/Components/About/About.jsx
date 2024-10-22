import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a frontend developer, I specialize in creating visually engaging and interactive web interfaces. I work closely with designers to translate wireframes and mockups into functional, responsive websites. My expertise in HTML, CSS,React and JavaScript allows me to build dynamic and user-friendly layouts that provide seamless experiences across various devices.</p>
                <p>As a passionate front-end developer, I thrive on crafting engaging and responsive user interfaces that enhance user experience. I am driven by the challenge of blending creativity with technical expertise to bring designs to life across various platforms.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Javascript</p>
                    <hr style={{width:"40%"}} />
                </div>
                <div className="about-skill">
                    <p>Python</p>
                    <hr style={{width:"40%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1.5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About

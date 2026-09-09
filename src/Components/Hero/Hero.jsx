import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import cv from '../../assets/my_resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Portrait of Anirban Das" />
      <h1><span>Full Stack Developer</span> | AI-Integrated Web Applications</h1>
      <p>I am Anirban Das, a Full Stack Developer Intern and B.Tech CSE student at Swami Vivekananda University. I build practical web applications across frontend, backend, APIs, and Shopify.</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#work'>View Projects</AnchorLink>
        </div>
        <a className='hero-github' target='_blank' rel='noopener noreferrer' href='https://github.com/Anirban642'>GitHub</a>
        <AnchorLink className='hero-contact' offset={50} href='#contact'>Contact</AnchorLink>
        <a className='cv' target='_blank' rel='noopener noreferrer' href={cv}>
          <div className="hero-resume">
            Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero

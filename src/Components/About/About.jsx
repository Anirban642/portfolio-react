import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img2 from '../../assets/pp2.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img2} alt="Anirban Das working portrait" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Full Stack Developer Intern and B.Tech CSE student at Swami Vivekananda University, building responsive web applications with JavaScript, React, Next.js, Node.js, Express, Flask, MongoDB, and MySQL.</p>
                <p>My work includes AI-integrated web applications, Shopify and Liquid development, REST APIs, WebSockets, and practical product interfaces. I also solve problems consistently, with 500+ LeetCode problems and a 1650+ contest rating.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>Frontend</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Backend</p>
                    <hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>AI Integration</p>
                    <hr style={{width:"40%"}} />
                </div>
                <div className="about-skill">
                    <p>Shopify</p>
                    <hr style={{width:"40%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>500+</h1>
            <p>LEETCODE PROBLEMS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1650+</h1>
            <p>CONTEST RATING</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2023–2027</h1>
            <p>B.TECH CSE</p>
        </div>
      </div>
    </div>
  )
}

export default About

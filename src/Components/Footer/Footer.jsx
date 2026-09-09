import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="footer-top-left">
          <a className='footer-brand' href='#home' aria-label='Anirban Das home'>
            <span className='brand-mark' aria-hidden='true'>&lt;/&gt;</span>
            <span className='brand-name'>Anirban Das</span>
          </a>
          <p>Anirban Das - Full Stack Developer Intern building practical web applications.</p>
        </div>
        <div className="footer-top-right">
          <a href="mailto:anirbandas64237@gmail.com">Email me <span aria-hidden='true'>↗</span></a>
          <a href="https://github.com/Anirban642" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden='true'>↗</span></a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2026 Anirban Das.
        </p>
        <div className="footer-bottom-right">
          <a href="https://www.linkedin.com/in/anirban64237" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="tel:+917439596392">+91 7439 596 392</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

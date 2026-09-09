import { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu,setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const selectMenu = (section) => {
    setMenu(section)
    closeMenu()
  }

  return (
    <header className='navbar'>
      <a className='navbar-brand' href='#home' aria-label='Anirban Das home'>
        <span className='brand-mark' aria-hidden='true'>&lt;/&gt;</span>
        <span className='brand-name'>Anirban Das</span>
      </a>
      <button type='button' onClick={() => setIsMenuOpen(true)} aria-label='Open navigation menu' aria-expanded={isMenuOpen} className='nav-mob-open'><img src={menu_open} alt="" /></button>
      <ul className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <li className='nav-close-item'><button type='button' onClick={closeMenu} aria-label='Close navigation menu' className="nav-mob-close"><img src={menu_close} alt="" /></button></li>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>selectMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>selectMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={()=>selectMenu("experience")}>Experience</p></AnchorLink>{menu === "experience" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>selectMenu("work")}>Projects</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>selectMenu("skills")}>Skills</p></AnchorLink>{menu === "skills" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#certifications'><p onClick={()=>selectMenu("certifications")}>Certifications</p></AnchorLink>{menu === "certifications" ? <img src={underline} alt='' /> :<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>selectMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> :<></>}</li>
      </ul>
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href='#contact'>Let&apos;s talk <span aria-hidden='true'>↗</span></AnchorLink>
      </div>
    </header>
  )
}

export default Navbar

import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo1.png"
import { Link } from 'react-scroll'
import {GrDocumentText} from 'react-icons/gr'
import menu from "../../assets/menu.png"
import CV from "../../assets/REJATH K P Resume.pdf"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-79} duration={500} className="desktopMenuListItem">About </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact </Link>
      </div>
      <a href={CV} download > 
        <button className="desktopMenuBtn">       
          <GrDocumentText style={{ fontSize: '20px' }}/>Download Resume       
        </button>
      </a>
      <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex' :'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About </Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact </Link>
        <a href={CV} download className='listItem'>Download Resume</a>
      </div>
    </nav>
  )
}
export default Navbar
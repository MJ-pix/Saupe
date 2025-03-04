import React from 'react'
import './Header.css'
import { navItems } from '../../Constants/constants'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [MobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu  = ()  =>  {
        setMobileMenuOpen(!MobileMenuOpen)
    };
    const useMediaQuery = (query) =>  {
      const mediaMatch = window.matchMedia(query);
      const [matches, setMatches] = useState(mediaMatch.matches);
  
      useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change",handler);
        return () => mediaMatch.addEventListener("change",handler);
      });
      return matches;
    }
    const navigate = useNavigate();
    const navigateToContact = (href) => {
      navigate("/");
      setTimeout(() => {
       const contactSection = document.getElementById(href);
       console.log(contactSection,"contac")
        if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        console.log("täälä ollaa")
        }
      }, 100)};
    return (
        <nav className='header-wrapper'>
          {useMediaQuery('(min-width: 960px)') ? ( <ul className='nav-ul'>
            {navItems.map((item, index)  => (
              <li key = {index} onClick = {(e)=>{
                if (item.href.slice(1) !== "") {
                  if(window.location.href === "http://localhost:3000/Gallerypage")  {
                    navigateToContact("gallery")
                    console.log("täälä ollaa2")
                  }
                  window.scrollTo({
                    top: document.querySelector(item.href)?.offsetTop,
                    behavior: "smooth",
                 })
                }
                else{
                  if(window.location.href === "http://localhost:3000/Gallerypage"){
                    navigateToContact("/")
                  }
                  e.preventDefault()
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                 })
                }
                ;}}>
                {/* {<a href className= 'li-a'>{item.label}</a>} */}
                {<Link className='li-a'> {item.label}</Link>}
              </li>
            ))}
          </ul>):
          (<ul className='nav-ul'>
            <li>
              {<a href={navItems[0].href} className='li-a'>{navItems[0].label}</a>}
            </li>
            <div className = "mobile-menu-bars">
                <div onClick = {toggleMobileMenu}>
                  {MobileMenuOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </div>
              </div>
          </ul>)}
          {MobileMenuOpen && (
              <div className = "mobile-menu-open">
                <ul className = "mobile-menu-ul" onClick={() => toggleMobileMenu(prevState => !prevState)}>
                  {navItems.slice(1).map((item, index)  => (
                    <li key = {index}>
                      <a className='mobile-menu-links' href = {item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </nav>
    )
  }

export default Header

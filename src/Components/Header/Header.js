import React from 'react'
import './Header.css'
import { navItems } from '../../Constants/constants'


const Header = () => {
  return (
    <nav className='header-wrapper'>
      <ul className='nav-ul'>
        {navItems.map((item, index)  => (
          <li key = {index}>
            {<a href = {item.href} className= 'li-a'>{item.label}</a>}
          </li>
        ))}
      </ul>    
    </nav>
  )
}

export default Header

import React from 'react'
import './NavBar.css'
import logo from '../../Imags/netflix-logo.png'
import avatar from '../../Imags/nav-avatar.png'
// import banner from '../../Imags/banner.webp'


function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="Netflix logo" />
        <img className='avatar' src={avatar} alt="Avatar" />
    </div>
  )
}

export default NavBar

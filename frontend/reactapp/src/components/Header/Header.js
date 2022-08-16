import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
    <header>
        <div className="container">
        <div className="row py-4 justify-content-between">
            <div className="col-lg-2 col-6 logo">
                <a href="#">COZA</a><span> STORE</span>
            </div>
            <div className="col-lg-6 text-end center">
                <NavLink to='/'>Home</NavLink>
                <a href="">SHOP</a>
                <a href="" className='features'>FEATURES</a>
                <a href="">BLOG</a>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

            </div>
            <div className="col-lg-3 col-6 right text-end">
                <i className="fa-solid fa-cart-shopping shp"></i>
                <i className="fa-regular fa-heart shp"></i>
                <i id='icon' className="fa-solid fa-bars ham"></i>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
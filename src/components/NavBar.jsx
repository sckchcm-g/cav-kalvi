import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../assets/kalvi.svg'
export class NavBar extends Component {
  render() {
    return (
        <div className='navbar'>
          <Link to="/" className='nav-left'>
            <img src={logo} alt="kalvi" />
            <p className='navtext logo'>Kalvium</p>
          </Link>
          <div className='nav-right'>
            <div className="navtext home"><Link to="/" className='homing'>Home</Link></div>
            <div className="navtext about"><Link to="/Aboutus" >Register</Link></div>
          </div>
        </div>
    )
  }
}

export default NavBar


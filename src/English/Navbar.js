import React from 'react'
import './css/NavBar.css';
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import Logo from '../opsihab660.jpg'
import { MdPermContactCalendar } from "react-icons/md";
import { FaInfoCircle } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav>
      
    <ul>
      <li><NavLink to="/" className="logo">
          <img src={Logo} alt="" />
          <span className="nav-item">Md Sihab Hossan</span>
        </NavLink>
      </li>
      <li><NavLink to="/">
          <IoHomeOutline className='Home-icon' />
          <span className="nav-item">Home</span>
        </NavLink></li>
      <li><NavLink to="/about">
      <FaInfoCircle className='Home-icon' />
          <span className="nav-item">About</span>
        </NavLink></li>
      <li><NavLink to="/contact">
      <MdPermContactCalendar className='Home-icon' />
          <span className="nav-item">Contact</span>
        </NavLink></li>
    </ul>
  </nav>
  )
}

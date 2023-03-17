import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import Logo from '../opsihab660.jpg'
import { MdPermContactCalendar } from "react-icons/md";
import { FaInfoCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav>
      
    <ul>
      <li><NavLink to="/" className="logo">
          <img src={Logo} alt="" />
          <span className="nav-item">
          মোঃ সিহাব হোসেন
          </span>
        </NavLink>
      </li>
      <li><NavLink to="/">
          <AiFillHome className='Home-icon' />
          <span className="nav-item">হোম</span>
        </NavLink></li>
      <li><NavLink to="/about">
      <FaInfoCircle className='Home-icon' />
          <span className="nav-item">আমার সম্পর্কে</span>
        </NavLink></li>
      <li><NavLink to="/contact">
      <MdPermContactCalendar className='Home-icon' />
          <span className="nav-item">যোগাযোগ</span>
        </NavLink></li>
    </ul>
  </nav>
  )
}

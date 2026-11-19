import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-dark'>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className='nav-link text-white'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className='nav-link text-white'>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className='nav-link text-white'>
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/service" className='nav-link text-white'>Services</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
    
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to='/create'>New Blog</Link>

        </div>

    </nav>
  )
}

export default Navbar
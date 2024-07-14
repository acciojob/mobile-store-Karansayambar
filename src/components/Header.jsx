import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <p className='logo'>pixxa</p>
            <ul className='tags'>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={`/admin`}>ADMIN</Link></li>
            </ul>
            <span>
                <FaBagShopping size={24}/>
            </span>
        </nav>
    </header>
  )
}

export default Header
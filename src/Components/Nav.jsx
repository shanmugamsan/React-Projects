import React from 'react'
import '../css/Nav.css'
import { motion } from "framer-motion";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Logo from '../Assets/Logo.png'

const Nav = () => {
  return (
    <nav>
      <motion.div 
        initial={{opacity: 0, y:-50 }}
        whileInView={{opacity: 1,y: 0}}
        transition={{duration:1,}}
        className='nav-section'
      >
        <div className='logo-section'>
            <img src={Logo} alt='Logo' width='110px' height='100px'  />
        </div>

        <div className='Nav-links'>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/courses'>Expolre</Link></li>
            </ul>

        </div>

         <div className='btn'>
                <button>
                   <FaUser/> LogIn
                </button>

                <button>
                   <FaSignInAlt/> SignIn
                </button>
            </div>

          </motion.div>

    </nav>
  )
}

export default Nav
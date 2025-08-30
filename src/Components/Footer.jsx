import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='footer'>
      <div className='footer-section'>
        <p>Access Links</p>
           <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/courses'>Expolre</Link></li>
            </ul>
      </div>
      <div className='footer-course'>
        <p>Courses</p>
        <ul>
        <li>Html</li> 
        <li>Css</li> 
        <li>Javascript</li> 
        <li>Bootstrap</li> 
        <li>Node.js</li> 
        </ul>
      </div>
      </div>
      
      <div>
        <p>
          &copy; 2025 , Learner Platform </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
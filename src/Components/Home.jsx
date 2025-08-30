import React from 'react'
import '../css/HeroSection.css'
import Banner from '../Assets/banner-logo.png'
import html from '../Assets/html.jpg'
import css from '../Assets/css.jpg'
import js from '../Assets/js.jpg'
import bootstrap from '../Assets/bootstrap.webp'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import FeaturesContent from './FetauresContent.jsx'
import Footer from './Footer.jsx'

const Home = () => {
  const Navigate=useNavigate()
  const handlechange= ()=>{
    Navigate('/courses')
  }
  return (

    <>
    <section className="hero-section">
      {/*Right Content */}

      <motion.div 
        initial={{ opacity: 0, x:-50}}
        whileInView={{ opacity: 1, x:0}}
        viewport={{ once: true, amount: 0.3}}
        transition={{ duration: 1}}
        className='hero-content'      
      >

        <h1>
          Unlock Your Potential with <span className="highlight">Smart Learning</span>
        </h1>
        <p> Learn new skills, track your progress, and achieve success with our all-in-one interactive learning platform.</p>

        <div className="hero-buttons">
          <motion.button
            className="btn-primary"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            onClick={()=>handlechange()}
          >
            Get Started
          </motion.button>

          <motion.button
            className='btn-outline'
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            onClick={()=>handlechange()}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Left Side content  */}

      <motion.div
        initial={{opacity:0 , scale:0.8}}
        whileInView={{ opacity : 1 , scale:1}}
        viewport = {{once :true, amount : 0.4}}
        transition ={{ duration: 1, delay: 0.3}}
        className='hero-image-wrapper'
      
      >
        <motion.div
          className='image-container'
          animate={{rotate:[0,5,-5,0]}}
          transition={{ repeat:Infinity, duration:6, ease:'easeInOut'}}
        >
          <img 
            src={Banner}
            alt="learning platform" 
            className='hero-image'
          />
        </motion.div>

        
        {/* Floating Knowledge Icons */}

        <motion.span 
          className='floating-icon'
          style={{top:'-20px',left:'-40px'}}
          animate={{y:[0,-20,0]}}
          transition={{repeat:Infinity , duration:4}}
        >
           📘
        </motion.span>

        <motion.span 
          className='floating-icon'
          style={{bottom:'-10px',right:'-20px'}}
          animate={{y:[ 0 , 20 , 0]}}
          transition={{repeat:Infinity , duration:5}}
        >
           🎓
        </motion.span>

        <motion.span 
          className='floating-icon'
          style={{top:'50%',left:'-50px'}}
          animate={{x:[0,25,0]}}
          transition={{repeat:Infinity , duration:6}}
        >
           ✏️
        </motion.span>

        <motion.span 
          className='floating-icon'
          style={{top:'30%',right:'-50px'}}
          animate={{x:[0,-25,0]}}
          transition={{repeat:Infinity , duration:7}}
        >
           🧮
        </motion.span>


        <motion.span 
          className='floating-icon'
          style={{bottom:'20%',left:'20%'}}
          animate={{y:[0,-15,0]}}
          transition={{repeat:Infinity , duration:6}}
        >
            💡
        </motion.span>

          {/* Background glow animation */}
        <motion.div
          className="glow-circle"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
  

      </motion.div>

     
    </section>

    <section className='features-section'>
         <motion.div>
            <motion.div 
              initial={{opacity: 0, scale:0.8}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration: 1, delay:0.2}}
              className='feature-container'
            >
              <h2>Explore Course</h2>
              <div className="feature-boxs">
                <div className="feature-box">
                  <img src={html} alt='course-img' width='150px' height='150px'/>
                  <div className="descrip">
                    <p className='head-title'>HTML</p>
                    <p>Learn the fundamentals of HTML for building web pages.</p>
                  </div>
                </div>

                <div className="feature-box">
                  <img src={css} alt='course-img' width='150px' height='150px' />
                  <div className="descrip">
                    <p className='head-title'>CSS</p>
                    <p>Master CSS for beautiful website styling.</p>
                  </div>
                </div>

                <div className="feature-box">
                  <img src={js} alt='course-img' width='150px' height='150px' />
                  <div className="descrip">
                    <p className='head-title'>JAVASCRIPT</p>
                    <p>From zero to confident with modern JavaScript.</p>
                  </div>
                </div>

                <div className="feature-box">
                  <img src={bootstrap} alt='course-img' width='150px' height='150px' />
                  <div className="descrip">
                    <p className='head-title'>BOOTSTRAP</p>
                    <p>Learn Bootstrap to quickly build responsive and modern websites.</p>
                  </div>
                </div>
              </div>
            </motion.div>

      </motion.div>
    </section>

    <FeaturesContent/>
    <Footer/>

    </>
  )
}

export default Home
import { motion } from "framer-motion";
import React from 'react'


const FeaturesContent = () => {
  return (
    <section >
        <motion.div 
            initial={{opacity: 0, scale:0.8}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration: 1, delay:0.1}}
            className='features'
        >
        <h2>Our Features</h2>
        <ul>
            <li>All-in-One Platform – Courses, PDFs, AI assistance, and progress tracking—all in one place.</li>
            <li>Seamless Experience – Simple, clean interface with secure login, smooth navigation, and an interactive video player.</li>
            <li>Course Management – Instructors can upload and manage courses (videos + PDFs).</li>
            <li>Video Player with Resume – Continue watching lessons from where you left off.</li>
            <li>Expert Instructors – Learn from professionals who upload high-quality courses with video lessons and study materials.</li>
        </ul>
        </motion.div>
    </section>
  )
}

export default FeaturesContent
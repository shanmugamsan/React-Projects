import React from 'react'
import {courses} from './lesson-data/courses.js'
import CourseCard from './CourseCard'
import Search from './lesson-data/Search.jsx'
import { motion } from "framer-motion";


const Courses = ({search,setsearch ,searchResult,setSearchresult}) => {


  return (
    <>
     <motion.div
            initial={{opacity:0 ,scale:0.9}}
            whileInView={{opacity:1 , scale:1}}
            transition={{duration:1 , delay:0.1}}
        >
      <div className='courses'>
        <Search search={search} 
                setsearch={setsearch}
        />
        <h2>Available Courses</h2>

            <div className="course-boxs">
              {searchResult.length ? 
                searchResult.map((course)=>(
                <CourseCard
                    key={course.id}
                    course={course}
                />
              )): 
              <p style={{color:'red',fontSize:'large',textAlign:'center'}}>No Course Founded </p>
              }
              
            </div>
      </div>
      </motion.div>
    </>
  )
}

export default Courses
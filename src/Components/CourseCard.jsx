import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../Assets/banner-logo.png'


const CourseCard = ({course}) => {
    const navigate = useNavigate()
    const handleEnroll = () =>{
        navigate(`/courses/${course.id}`)
    }

  return (

       
    <div className='course-box'>
        <img 
            src={course.image}
            alt='Course Image'
            width='200px '
            height='150px'
        
        />

        <div className="courseTitleBox">
            <h4 className='courseTitle'>
                {course.title}
            </h4>

            <p className='courseDescription'>{course.description}</p>
            <div>
            <button onClick={(e)=>(handleEnroll())}>
                Enroll 
            </button>
            </div>
        </div>
     </div>

  )
}

export default CourseCard
import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import {courses} from './lesson-data/courses'



const LessonPage = () => {

    const {id } = useParams();
    const course = courses.find((c) => String(c.id) === id);

    if (!course) {
        return <h2>Course Not found</h2>
    }

  return (
    
    <>
    <div className='lesson-page'>
        {/* Side nav bar */}
        <div className="sideNav">
            <h2>{course.title}</h2>
            <ul>
                {course.lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <Link to = {`/courses/${course.id}/lessons/${lesson.id}`}>
                            {lesson.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Main Content  */}

        <div className="main-lesson">

            <Outlet context={{ course }}/>

        </div>

    </div>
        
    </>

  )
}

export default LessonPage
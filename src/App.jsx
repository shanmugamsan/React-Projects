// importing Components 
import './css/App.css'
import './css/courses.css'
import './css/footer.css'
import './css/aboutus.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import { useEffect, useState } from 'react'
import About from './Components/About' 
import Courses from './Components/Courses'
import LessonPage from './Components/LessonPage'
import LessonContent from './Components/LessonContent'

import {courses} from './Components/lesson-data/courses.js'


const App =() =>{

       // useState 
    const [search,setsearch] = useState('') 
    const [searchResult,setSearchresult] = useState([])

    useEffect(()=>{
            const filterItem = courses.filter((course) => ((course.title).toLowerCase()).includes(search.toLowerCase()))

             setSearchresult(filterItem);

    },[search,courses])
    

    return (
        <>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/courses' element={<Courses  
                                                        search={search} 
                                                        setsearch={setsearch}
                                                        searchResult={searchResult}
                                                        setSearchresult={setSearchresult}
                    />}/>
                    <Route path='/courses/:id' element={<LessonPage/>}>
                       <Route path='lessons/:lessonId' element={<LessonContent/>}/>
                    </Route>

                </Routes>
            </div>
        </>
    )

}
// Exporting App

export default App

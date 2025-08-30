import React from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
import ReactMarkdown from "react-markdown";

const LessonsContent = () => {
    const {lessonId} = useParams();
    const {course} = useOutletContext()

    const lesson = course.lessons.find((l)=> l.id === lessonId);

    if(!lesson){
      return <h2>Lesson Not Found</h2>
    }

    return (
    <div className='topiclesson'>
    
    <div className='title-page'>
      <h3 className='title'>{lesson.title}</h3>
      {lesson.content.map(list => ( 
       
         <ReactMarkdown key={list.id}>{list.lessonList}</ReactMarkdown>
           
          
      ))}
      
      <center>
          {/* Video */}
      <div className='video-lesson'>
        <iframe
          width="560"
          height="315"
          src={lesson.video}
          title={lesson.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </center>
    

      {/* PDF */}
      {/* <div style={{ marginTop: "10px" }}>
        <a href={lesson.pdf} target="_blank" rel="noopener noreferrer">
          Download PDF
        </a>
      </div> */}
    </div>
    </div>
  )
}

export default LessonsContent
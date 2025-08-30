import React from "react";
import { motion } from "framer-motion";
import aboutus1 from "../Assets/Aboutus2.png";
import aboutus2 from "../Assets/Aboutus.png";
import aboutus3 from "../Assets/Aboutus3.png";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <motion.div>
        <div className="aboutus">
          <div className="aboutBanner">
            <motion.div
                initial={{opacity:0 , scale:0.8}}
                whileInView={{ opacity : 1 , scale:1}}
                viewport = {{once :true, amount : 0.4}}
                transition ={{ duration: 1, delay: 0.3}}
              className="about-image"
            >
              <img
                src={aboutus1}
                alt="This is a image"
                width="500px"
                height="500px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="about-Content"
            >
              <p>online learning</p>
              <h2>
                Learn <span className="head-span">Everyday</span> with Us
              </h2>
              <p>
                At Learnify, we believe learning should be simple, accessible,
                and engaging for everyone.
              </p>
            </motion.div>
          </div>

          <motion.div className="section-about">
            <h3>ABOUT LEARNIFY</h3>
          <motion.div 
            className="about"
            >
              <motion.div
                initial={{opacity:0 , x:60}}
                whileInView={{opacity:1 , x:0}}
                transition={{ duration: 1}}
                viewport={{ once: true, amount: 0.3}}
                className="about-us"
              >
              
              <p>Get access to high quality learning!</p>
              
              <h2>
                Join online courses <span className="highlight">Today</span>
              </h2>

              <p>
                At Learnify, our mission is to make quality education accessible
                to everyone. We provide free courses, learning resources, video
                lessons, and PDF study materials to help learners gain knowledge
                without financial barriers.
              </p>

               <motion.button
                className="btn-outline btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlechange()}
              >
                Learn More
              </motion.button>
              </motion.div>
              

               <motion.div
                initial={{opacity:0 , scale:0.8}}
                whileInView={{ opacity : 1 , scale:1}}
                viewport = {{once :true, amount : 0.4}}
                transition ={{ duration: 1, delay: 0.3}}
               >
              <img
                src={aboutus2}
                alt="this is a image "
                width="400px"
                height="400px"
              />
            </motion.div>

            </motion.div>
           
          </motion.div>

          <motion.div className="about-Card">
            <motion.div 
            initial={{opacity: 0, y:-50}}
            whileInView={{opacity:1 ,y:0}}
            transition={{duration: 1}}
            className="about-card-head"
            >
                <h2>
                  Education and Learning
                </h2>
                <p>Learning is something we do almost every day</p>
            </motion.div>

            <motion.div
            initial={{opacity:0,y:70}}
            whileInView={{opacity:1,y:0}}
            transition={{dyearion:1}}
            className="about-cards"
            >
                  <motion.div 
                  className="about-card"
                  >
                    <div className="card-num"><h2>01</h2></div>
                    <h3>Teaching</h3>
                    <p>We provide structured learning through free courses, video lessons, and PDFs designed by experienced instructors. Our goal is to make education simple, clear, and accessible for everyone.</p>
                  </motion.div>

                   <motion.div 
                  className="about-card"
                  >
                    <div className="card-num"><h2>02</h2></div>
                    <h3>Innovations</h3>
                    <p>At Learnify, we focus on innovative learning methods by combining digital resources with interactive content. We make learning engaging, flexible, and easy to follow.</p>
                  </motion.div>

                   <motion.div 
                  className="about-card"
                  >
                    <div className="card-num"><h2>03</h2></div>
                    <h3>Students</h3>
                    <p>Our platform is built for students of all backgrounds. From beginners to advanced learners, everyone can learn at their own pace, track progress, and grow without limits.</p>
                  </motion.div>

                   <motion.div 
                  className="about-card"
                  >
                    <div className="card-num"><h2>04</h2></div>
                    <h3>Resources</h3>
                    <p>Access a wide range of free study materials, course videos, and downloadable PDFs to support your learning journey—anytime, anywhere.</p>
                  </motion.div>
            </motion.div>

          </motion.div>
        </div>
        <Footer/>
      </motion.div>

    </>
  );
};

export default About;

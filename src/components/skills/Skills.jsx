import React from 'react'
import './Skills.css'
import { BsPatchCheckFill} from 'react-icons/bs'

function Skills() {
  return (
    <section id="skills">
        <span className="skills_title">My Experience</span>
        <span className="skillDesc">Utilized HTML, CSS and JavaScript to create web pages and user interfaces. Developed and implemented React components to create dynamic user interfaces. Developed functional web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js). Implemented REST API using Node.js and Express.js to enable data communication between the frontend and the backend.</span>

        <div className="skills_container">
            <div className="skills_frontend">
                <h3>Frontend Development</h3>
                <div className="skills_content">
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'> 
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>Redux</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>React-Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            
            {/* END OF FRONTEND */}

            <div className='skills_backend'>
            <h3>Backend Development</h3>
                <div className="skills_content">
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'>
                            <h4>Express JS </h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='skills_details'>
                        <BsPatchCheckFill className='skills_icon'/>
                        <div className='texts'> 
                            <h4>Mongo DB</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills
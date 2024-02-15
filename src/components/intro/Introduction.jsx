import React from 'react'
import bg from "../../assets/Rejath1.png"
import './Intro.css'

function Introduction() {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Rejath K P</span> <br />Full Stack Developer</span>
        <p className="introPara">I am a skilled Full Stack Developer with experience in creating <br />visually appealing and user-friendly web applications</p>
      </div>
      
      <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Introduction
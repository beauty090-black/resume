
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const projectList = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my skills and work.',
    image: '/images/portfolio.png',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'Dashboard UI',
    description: 'An interactive admin dashboard built with React.',
    image: '/images/dashboard.png',
    link: 'https://github.com/yourusername/dashboard-ui'
  }
  
];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Melody</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>
      </nav>

      <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <h1>Hi, I'm Melody Collins Chimeka</h1>
        <p>Creative Developer & Designer. Who builds clean,intuitive, and user-focused digital experiences.</p> */}
        <div className="hero">
                 <h1> <span>I'm Melody chimeka Collins,</span> frontend developer based in portHarcort.</h1>
                 <p>I am a frontend developer from portHarcourt. experience of 1year</p>
                 <div className="hero-action">
                     <div className="hero-connect">Connect with me</div>
                     <div className="hero-resume">My resume</div>
                     </div>
                 </div>
      </motion.section>

      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
       <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                    </div>
        <p>I craft visually stunning and user-friendly digital experiences with a focus on design and performance.A passionate"software engineer" with a knack of turning ideas into impactful digital experiences. I specialize on"html,css,react,javascript, and i love building things that are both functional and beautiful."</p>
      </motion.section>

      <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Projects</h2>
        <div className="project-grid">
          {projectList.map((project, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(248, 109, 9, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact</h2>
        <p>Im always open to new opportunities, collaborations,or just a friendly chat. Whether you have a project in mind, want to work together ,or simply want to say hello-feel free to reach out. You can connect with me on:</p>
        <p>Email:  <a href="">melodycollins579@example.com</a></p>
        <p>LinkedIn: <a href="#">linkedin.com/in/carlos</a></p>
        <p>phone no: <a href="">09010644902</a></p>
      </motion.section>

      <motion.section
        id="resume"
        className="resume"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Resume</h2>
        <a href="/resume.pdf" download>Download Resume</a>
      </motion.section>
    </div>
  );
}

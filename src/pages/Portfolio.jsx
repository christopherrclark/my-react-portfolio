import React from 'react'

import gamersHavenImg from '../images/gamers-haven-screenshot.png'
import weatherDashboardImg from '../images/weather-dashboard-screenshot.png'
import guacBottomImg from '../images/guac-bottom-screenshot.png'
import workDaySchedulerImg from '../images/work-day-scheduler-screenshot.png'
import noteTakerImg from '../images/adding-note-screenshot.png'
import jateImg from '../images/jate-screenshot.png'


const Portfolio = () => {

  const projects = [
    
    {
      id: 1, 
      name: 'Guac Bottom', 
      image: guacBottomImg, 
      deployed: 'https://odetothecode.github.io/GuacBottom/', 
      repo: 'https://github.com/OdeToTheCode/GuacBottom'
    },

    {
      id: 2, 
      name: 'Gamers Haven', 
      image: gamersHavenImg, 
      deployed: 'https://gamers-haven.herokuapp.com/', 
      repo: 'https://github.com/christopherrclark/gaming-blog'
    },

    {
      id: 3, 
      name: 'Weather Dashboard', 
      image: weatherDashboardImg, 
      deployed: 'https://christopherrclark.github.io/weather-dashboard/', 
      repo: 'https://github.com/christopherrclark/weather-dashboard'
    },

    {
      id: 4, 
      name: 'Work Day Scheduler', 
      image: workDaySchedulerImg, deployed: 'https://christopherrclark.github.io/work-day-scheduler/', 
      repo: 'https://github.com/christopherrclark/work-day-scheduler'
    },

    {
      id: 5, 
      name: 'Note Taker', 
      image: noteTakerImg, 
      deployed: 'https://note-taker-app-two.herokuapp.com/', 
      repo: 'https://github.com/christopherrclark/note-taker-app-two'
    },

    {
      id: 6, 
      name: 'PWA Text Editor', 
      image: jateImg, 
      deployed: 'https://pwa-text-editor.herokuapp.com/',
      repo: 'https://github.com/christopherrclark/pwa-text-editor'
    }
    

  ]

  return (
    <div className="big-project-container">
      
      {projects.map(project => (
        
        <div className="project-container" key={project.id}>
          
          <div className="project-image-container">
            
            <a className="project-link" href={project.deployed} target="blank">
              <img className="project-image" src={project.image} alt={project.name}/>
            </a>
          
          </div>

          <div className="project-text-container">
            
            <h4 className="project-name">{project.name}</h4>
            
            <div className="project-text">
              <div className="project-links">
                
                <div>
                  <a className='project-link' href={project.deployed} target="blank">Deployed Page</a>
                </div>
                
                <div>
                  <a className='project-link' href={project.repo} target="blank">GitHub</a>
                </div>
              
              </div>
            </div>
          
          </div>
          
        </div>
      
      ))}
    
    </div>
  )
}

export default Portfolio

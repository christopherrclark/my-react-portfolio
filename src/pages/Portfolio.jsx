import React from 'react'
import gamersHavenImg from '../images/gamers-haven-screenshot.png'



const Portfolio = () => {

  const projects = [
    {id: 1, name: 'Gamers Haver', image: gamersHavenImg, deployed: 'https://gamers-haven.herokuapp.com/', repo: 'https://github.com/christopherrclark/gaming-blog', techStack: [{name: "Express"}, {name: "MySQL2"}, {name: "Sequelize"}, {name: ""}, {name: "Node"}, {name: "Bootstrap"}, {name: "JavaScript"}
    ]},
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
              <div className="tech-stack">
                {project.techStack?.map(tech => (
                  <p className="tech-stack-item" key={tech.name}>
                    {tech.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio

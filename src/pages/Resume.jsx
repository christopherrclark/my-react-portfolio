import React from 'react'

const Resume = () => {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <a href='https://docs.google.com/document/d/1bvnP3TpJlIPzsmU2FDU1OIFkoW39pyQPvA_aOae1DUE/edit?usp=sharing'><span>Download my resume</span></a> 
      <h2 className='prof'>Proficiencies:</h2>
        <h3 className='front'>Front End</h3>
          <ul className="front-end">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <h3 className='back'>Back End</h3>
          <ul className="back-end">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

      <p></p>
    </div>
  )
}

export default Resume
import React from 'react'

const Navigation = ({current, setCurrent}) => {
  return (
    <div>
      <nav>
        <h4>Christopher Clark</h4>
        <div className = "menu">
          <p onClick={()=>setCurrent("home")}>Home</p>
          <p onClick={()=>setCurrent("portfolio")}>Portfolio</p>
          <p onClick={()=>setCurrent("contact")}>Contact Me</p>
          <p>Resume</p>
        </div>
      </nav>
      
    </div>
  )
}

export default Navigation

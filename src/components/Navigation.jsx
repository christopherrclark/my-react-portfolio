import React from 'react'


const Navigation = ({current, setCurrent}) => {
  return (
    <div>
      <nav class = "header">
        <h1>Christopher Clark</h1>
        <div className = "menu">
          <p className = "navItem" onClick={()=>setCurrent("about me")}>About</p>
          <p className = "navItem" onClick={()=>setCurrent("portfolio")}>Portfolio</p>
          <p className = "navItem" onClick={()=>setCurrent("contact me")}>Contact</p>
          <p className = "navItem" onClick={()=>setCurrent("resume")}>Resume</p>
        </div>
      </nav>
      
    </div>



  )
}

export default Navigation




// using ant design
// import { Breadcrumb } from 'antd';
    // <>
    //       <Breadcrumb style={{marginLeft: 'auto'}}>
    //   {/* <div>Christopher Clark</div> */}
    // <div style={{backgroundColor:"yellow", width: "100%", marginLeft: 'auto', display: "flex"}}>
    //   <div >Christopher Clark</div>
    //   <div style={{display: "flex"}}><Breadcrumb.Item>About Me</Breadcrumb.Item>
    //     <Breadcrumb.Item>
    //       <a href="">Portfolio</a>
    //     </Breadcrumb.Item>
    //     <Breadcrumb.Item>
    //       <a href="">Contact Me</a>
    //     </Breadcrumb.Item>
    //     <Breadcrumb.Item>Resume</Breadcrumb.Item>
    //     </div>
    //   </div>
    //   </Breadcrumb>
    // </>
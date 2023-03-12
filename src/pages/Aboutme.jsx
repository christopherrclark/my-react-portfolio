import React from 'react'

import MyImage from "../images/me.jpg"

const Aboutme = () => {
  return (
    <div className='about'>
      <div className = "picContainer">
        <img src={MyImage} alt="Profile of Christopher Clark" className = "pic"/>
      </div>
      <div className = "aboutText">
        <h1>About Me</h1>

          <p>My Name Is Christopher Clark and I am full stack web developer from Stewartville, MN. I have recently completed the full stack web development bootcamp through the University of Minnesota. I also have a bachelors of science in Art Education from Unisversity of Wisconsin-Stout.</p>
          <br/>
          <p>I have experience teaching art at the elementary and secondary level. For the last 20 years I have worked as a bench jeweler creating and repairing high end fine jewelery, as well as working one on one with clients developing custom designs and sales.</p>
          <br/>
          <p>I have recently decide to make a career change into the field of web development. After much deliberation I decided to try the U of M's full stack bootcamp and was hooked. I have been working on my own projects and learning new skills ever since. I am excited to continue my journey as a web developer and look forward to the challenges and opportunities that await me.</p>

      </div>
    </div>
  )
}

export default Aboutme



// Ant Design
// import { Card } from "antd"
  // <Card
  //   hoverable
  //   style={{
  //     width: 240,
  //   }}
  //   cover={<img alt="Profile of Christopher Clark" src={MyImage} />}
  // >
  //   <Card.Meta title="Christopher Clark" description="profile" />
  // </Card> 
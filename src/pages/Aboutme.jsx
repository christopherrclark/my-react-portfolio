import React from 'react'

import MyImage from "../images/me.jpg"

const Aboutme = () => {
  return (
    <div className='about'>
      <div className = "picContainer">
        <img src={MyImage} alt="Profile of Christopher Clark" className = "pic"/>
      </div>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos deserunt ducimus molestiae dicta ad ea quas, voluptas magni distinctio asperiores delectus cumque minus odit similique doloribus iste nulla! Sit!</p>
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
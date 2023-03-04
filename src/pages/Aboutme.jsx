import React from 'react'
import { Card } from "antd"

const Aboutme = () => {
  return (
    <div>
      About Me
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Card.Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </div>
  )
}

export default Aboutme

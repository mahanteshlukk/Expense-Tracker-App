import React from "react"
import { Typography } from "antd"
import "../App.css"

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="+123-45678910">+123-45678910</Typography.Link>
      <Typography.Link href="Privacy Policy">Privacy Policy</Typography.Link>
      <Typography.Link href="Terms And Condition">
        Terms And Condition
      </Typography.Link>
    </div>
  )
}

export default AppFooter
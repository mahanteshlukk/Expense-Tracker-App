import React from "react"
import { Alert } from "antd"

const Success = (props) => {
  return (
    <>
      <Alert
        message="Success Tips"
        description="Now your Expenses are below than your Updated budget"
        type="success"
        showIcon
        closable
      />
    </>
  )
}

export default Success 
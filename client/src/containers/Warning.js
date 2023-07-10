import React from "react"
import { useSelector } from "react-redux"
import { Alert } from "antd"

const Warning = () => {
  const onClose = (e) => {
    console.log(e, "I was closed.")
  }

  const { expenses, budget } = useSelector((state) => {
    return state
  })

  const totalAmount = expenses.data.reduce((total, currentValue) => {
    return (total = total + currentValue.amount)
  }, 0)

  const remainingAmount = totalAmount - budget.data.amount

  return (
    <>
      <Alert
        message="Something Went Wrong in Budget"
        description={`Now your budget get Exceeded than your updated budget. And the Exceeded amount is ${remainingAmount}Rs`}
        type="error"
        showIcon
        closable
        onClose={onClose}
      />
    </>
  )
}
export default Warning 
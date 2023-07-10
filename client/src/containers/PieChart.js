import React from "react"
import { useSelector } from "react-redux"
import { Chart } from "react-google-charts"

const PieChart = (props) => {
  const { category, expenses } = useSelector((state) => {
    return state
  })

  const pieObj = {}
  for (let i = 0; i < category.data.length; i++) {
    pieObj[category.data[i].name] = 0
    const result = expenses.data.filter((expense) => {
      return expense.categoryId === category.data[i]._id
    })
    const output = result.reduce((total, currentValue) => {
      return (total = total + currentValue.amount);
    }, 0)
    pieObj[category.data[i].name] = output
  }

  const data = [["category", "expenses"]]
  for (const key in pieObj) {
    data.push([key, pieObj[key]])
  }

  const options = {
    Chart: {
      title: "Expenses Overview",
      subtitle: "category,expense",
    },
  }

  const threed = {
    title: "expense Overview",
    is3D: true,
  }

  const result = [
    ...new Map(expenses.data.map((ele) => [ele.categoryId, ele])).values(),
  ]

  return (
    <div>
      {result.length < 5 ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={threed}
          width={"100%"}
          height={"250px"}
        />
      ) : (
        <Chart
          chartType="Bar"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      )}
    </div>
  )
}

export default PieChart 
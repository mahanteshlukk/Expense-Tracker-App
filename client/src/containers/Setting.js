import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Card, Button, Popconfirm, message } from "antd"
import {
  ArrowRightOutlined,
  LikeFilled,
  DeleteFilled,
  CheckCircleFilled,
} from "@ant-design/icons"
import "../App.css"
import { asyncGetBudget, asyncSetBudget } from "../actions/budgetAction.js"
import Category from "./Category.js"
import {
  asyncGetCategory,
  asyncDeleteCategory,
} from "../actions/categoryAction.js"
import {
  asyncGetExpenses,
  asyncMultipleDelete,
} from "../actions/expenseAction"

const Setting = (props) => {
  const dispatch = useDispatch()

  const { budget, category } = useSelector((state) => {
    return state
  })

  const [budgetValue, setBudgetValue] = useState(budget.data.amount || 0)
  const [toggle, setToggle] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    setBudgetValue(value)
  }

  useEffect(() => {
    dispatch(asyncGetBudget())
    dispatch(asyncGetCategory())
  }, [dispatch])

  useEffect(() => {
    setBudgetValue(budget.data.amount)
  }, [budget.data.amount])

  const handleSubmit = (e) => {
    e.preventDefault()
    const budgetData = {
      amount: Number(budgetValue),
    }
    dispatch(asyncSetBudget(budgetData, budget.data._id))
    setToggle(false)
  }

  const confirm = (id) => {
    dispatch(asyncDeleteCategory(id))
    dispatch(asyncMultipleDelete(id))
    dispatch(asyncGetExpenses())
    message.success(
      "Category and Expenses records under this category both were deleted" 
    )
  }

  const cancel = (e) => {
    console.log(e)
    message.error("No category deleted")
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70fr 30fr",
          marginTop: "70px",
        }}
      >
        <div style={{ justifySelf: "center" }}>
          <Card hoverable={true} className="cards">
            <h1>
              Total Budget-{budget.data.amount}Rs
              <LikeFilled style={{ color: "darkblue" }} />
            </h1>
            {toggle ? (
              <>
                <form>
                  <label style={{ fontWeight: "bold" }}>Total Budget:</label>
                  <input
                    type="text"
                    placeholder={budget.data.amount}
                    value={budgetValue}
                    onChange={handleChange}
                  />
                  <br />
                  <Button
                    onClick={handleSubmit}
                    className="button-two"
                    type="primary"
                  >
                    save
                  </Button>
                </form>
              </>
            ) : (
              <>
                <p style={{ color: "darkgreen" }}>
                  <ArrowRightOutlined />
                  Here click the update button to update your budget value
                </p>
                <Button
                  className="button-two"
                  onClick={() => {
                    setToggle(true)
                  }}
                >
                  update
                </Button>
              </>
            )}
          </Card>
          <Category />
        </div>

        <div>
          {category.data.length > 0 && (
            <ul>
              <h2>Categories list</h2>
              <hr />
              {category.data.map((category) => {
                return (
                  <div key={category._id} style={{ wordSpacing: "1em" }}>
                    <p key={category._id}>
                      <CheckCircleFilled style={{ color: "green" }} />
                      {category.name}
                      <Popconfirm
                        title="Delete the Category"
                        description="Are you sure you want to delete this category and expenses under this category?"
                        onConfirm={() => {
                          confirm(category._id);
                        }}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteFilled style={{ color: "black" }} />
                      </Popconfirm>
                    </p>
                  </div>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default Setting 
import { useSelector, useDispatch } from "react-redux"
import { Button, message, Popconfirm } from "antd"
import { DeleteFilled, CheckCircleFilled } from "@ant-design/icons"
import {
  asyncDeleteExpenses,
  asyncSoftRestore,
} from "../actions/expenseAction"
import "../App.css"

const DeletedExpense = (props) => {
  const { softExpenses } = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()

  const handleRestoreClick = (id) => {
    dispatch(asyncSoftRestore(id))
  }

  const confirm = (id) => {
    dispatch(asyncDeleteExpenses(id))
    message.success("successfully deleted")
  }

  const cancel = (e) => {
    message.error("No expenses deleted")
    console.log(e)
  }

  return (
    <div>
      {softExpenses.length > 0 ? (
        softExpenses.map((expense) => {
          return (
            <p key={expense._id}>
              <CheckCircleFilled style={{ color: "green" }} />
              {expense.name}-{expense.amount}rs-{expense.expenseDate}-
              {expense.description}-
              <Button
                onClick={() => {
                  handleRestoreClick(expense._id)
                }}
                className="button"
                size="small"
              >
                restore
              </Button>
              -
              <Popconfirm
                title="Delete the Expenses"
                description="Are you sure you want to delete this Expenses permanently?"
                onConfirm={() => {
                  confirm(expense._id)
                }}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button>
                  <DeleteFilled />
                </Button>
              </Popconfirm>
            </p>
          )
        })
      ) : (
        <h3>No deleted Expenses Yet</h3>
      )}
    </div>
  )
}

export default DeletedExpense  
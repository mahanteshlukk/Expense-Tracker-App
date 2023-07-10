import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Button, Image, Space, Typography, Drawer } from "antd";
import {
  GithubOutlined,
  BellFilled,
  DownloadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2"
import "../App.css"
import { removeAccount } from "../actions/userAction"
import { asyncDeleteData, asyncGetExpenses } from "../actions/expenseAction"
import DeletedExpense from "./DeletedExpense"

const AppHeader = () => {
  const { user } = useSelector((state) => {
    return state
  })

  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClose = () => {
    setVisible(false)
    dispatch(asyncGetExpenses())
  }

  return (
    <div className="AppHeader">
      <Image
        width={150}
        src="https://1000logos.net/wp-content/uploads/2020/04/Budget-Logo.png"
      ></Image>
      <Typography.Title style={{ fontSize: 30, color: "darkblue" }}>
        Expense Tracker App
      </Typography.Title>
      <Space>
        {Object.keys(user).length > 0 ? (
          <>
            <Button
              size="small"
              style={{
                backgroundColor: "darkblue",
                color: "white",
              }}
              onClick={() => {
                Swal.fire("you successfully loggedOut...!!!")
                dispatch(removeAccount())
                localStorage.removeItem("token")
                navigate("/")
              }}
            >
              <LogoutOutlined />
              LogOut
            </Button>
            <Button
              size="small"
              style={{
                backgroundColor: "darkblue",
                color: "white",
              }}
              onClick={() => {
                setVisible(true);
                dispatch(asyncDeleteData())
              }}
            >
              <DownloadOutlined />
              Archive
            </Button>
            <div>
              <Drawer
                title="listing of deleted expenses"
                style={{
                  width: "100%",
                }}
                open={visible}
                extra={
                  <Space>
                    <Button type="primary" size="small" onClick={onClose}>
                      OK
                    </Button>
                  </Space>
                }
              >
                <DeletedExpense />
              </Drawer>
            </div>
          </>
        ) : (
          <>
            <Badge>
              <GithubOutlined style={{ fontSize: 30 }} />
            </Badge>
            <Badge>
              <BellFilled style={{ fontSize: 30 }} />
            </Badge>
          </>
        )}
      </Space>
    </div>
  )
}

export default AppHeader 
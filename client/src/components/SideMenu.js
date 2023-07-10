import React from "react"
import { useSelector } from "react-redux"
import { Menu } from "antd"
import {
  HomeFilled,
  SettingFilled,
  UserAddOutlined,
  PhoneFilled,
  LoginOutlined,
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import "../App.css"

const SideMenu = () => {
  const { user } = useSelector((state) => {
    return state
  })

  const navigate = useNavigate()

  return (
    <div className="SideMenu">
      {Object.keys(user).length > 0 ? (
        <Menu
          mode="vertical"
          className="SideMenuVertical"
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Home",
              icon: <HomeFilled />,
              key: "/home",
            },
            { label: "Setting", icon: <SettingFilled />, key: "/setting" },
            { label: "Profile", icon: <UserAddOutlined />, key: "/profile" },
          ]}
        ></Menu>
      ) : (
        <Menu
          mode="vertical"
          className="SideMenuVertical"
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              label: "Register",
              icon: <UserAddOutlined />,
              key: "/register",
            },
            { label: "Login", icon: <LoginOutlined />, key: "/login" },
            { label: "AboutUs", icon: <PhoneFilled />, key: "/" },
          ]}
        ></Menu>
      )}
    </div>
  )
}

export default SideMenu 
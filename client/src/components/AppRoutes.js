import React from "react"
import { Route, Routes } from "react-router-dom"
import Profile from "../containers/Profile"
import Setting from "../containers/Setting"
import Home from "../containers/Home"
import Register from "../containers/Register"
import Login from "../containers/Login"
import About from "../containers/About"

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<About />}></Route>
    </Routes>
  )
}

export default AppRoutes 
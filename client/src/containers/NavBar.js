import React from "react"
import { Menu } from "antd"
import { Link, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { removeAccount } from "../actions/userAction.js"
import Home from "./Home.js"
import Register from "./Register.js"
import Login from "./Login.js"
import Setting from "./Setting.js"
import Profile from "./Profile.js"

const NavBar = (props) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const user = useSelector((state) => {
    return state.user
  })

  return (
    <div>
      {Object.keys(user).length > 0 ? (
        <>
          <Link to="/home">Home</Link> | <Link to="/setting">Setting</Link> |
          <Link to="/profile">Profile</Link> |
          <Link
            to="/logOut"
            onClick={() => {
              dispatch(removeAccount());
              localStorage.removeItem("token")
              alert("successfully loggedOut")
              history.push("/home")
            }}
          >
            LogOut
          </Link>
        </>
      ) : (
        <>
          <Link to="/home">Home</Link> | <Link to="/Register">Register</Link> |
          <Link to="/Login">Login</Link>
        </>
      )}

      <Route path="/home" component={Home} exact={true} />
      <Route path="/Register" component={Register} exact={true} />
      <Route path="/Login" component={Login} exact={true} />
      <Route path="/setting" component={Setting} exact={true} />
      <Route path="/profile" component={Profile} exact={true} />
    </div>
  )
}

export default NavBar 
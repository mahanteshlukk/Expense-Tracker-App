import React from "react"
import { startRegisterUser } from "../actions/userAction.js"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import "../App.css"
import { Card } from "antd"
import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  TwitterOutlined,
} from "@ant-design/icons"
import isStrongPassword from "validator/lib/isStrongPassword"

const Register = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <div className="form">
        <Card
          hoverable={true}
          style={{
            width: 250,
            backgroundColor: "rgba(0,0,0,0.0)",
            flexDirection: "column",
            borderRadius: 10,
          }}
          actions={[
            <FacebookFilled style={{ color: "blue" }} />,
            <YoutubeFilled style={{ color: "red" }} />,
            <InstagramFilled style={{ color: "purple" }} />,
            <TwitterOutlined style={{ color: "skyblue" }} />,
          ]}
        >
          <h2>Register With Us</h2>
          <Formik
            initialValues={{ Username: "", email: "", password: "" }}
            validate={(values) => {
              const errors = {}

              if (!values.Username) {
                errors.Username = "required"
              }

              if (!values.email) {
                errors.email = "required"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              }
              if (!values.password) {
                errors.password = "required"
              } else if (!isStrongPassword(values.password)) {
                errors.password =
                  "password must be contain 1 UpperCase 1 LowerCase 1 Symbol"
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              const formData = {
                username: values.Username,
                email: values.email,
                password: values.password,
              }
              dispatch(startRegisterUser(formData, navigate))
              setSubmitting(false)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <label
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  htmlFor="username"
                >
                  Username:
                </label>
                <br />
                <input
                  type="text"
                  name="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Username}
                />
                <span style={{ color: "red", fontSize: 10 }}>
                  {errors.Username && touched.Username && errors.Username}
                </span>
                <br />

                <label
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  htmlFor="email"
                >
                  email:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span style={{ color: "red", fontSize: 10 }}>
                  {errors.email && touched.email && errors.email}
                </span>
                <br />
                <label
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                  }}
                  htmlFor="password"
                >
                  password:
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span style={{ color: "red", fontSize: 10 }}>
                  {errors.password && touched.password && errors.password}
                </span>
                <br />
                <button
                  style={{
                    backgroundColor: "darkblue",
                    color: "white",
                    fontSize: 10,
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  )
}

export default Register 
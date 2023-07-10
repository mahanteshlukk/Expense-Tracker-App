import axios from "axios"
import Swal from "sweetalert2"

export const startRegisterUser = (formData, navigate) => {
  return () => {
    axios
      .post("http://localhost:3333/api/users/register", formData)
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
        } else {
          Swal.fire({
            icon: "success",
            title: "Successfully Register",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          })
          navigate("/Login");
        }
      })
  }
}

export const startGetUserInfo = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/api/users/account", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("error")) {
          alert(result.error)
        } else {
          dispatch(userAccount(result))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

export const startLoginUser = (formData, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/api/users/login", formData)
      .then((response) => {
        const result = response.data
        console.log(result)
        if (result.hasOwnProperty("error")) {
          alert(result.error)
        } else {
          Swal.fire("Don't worry!", "You successfully loggedIn", "success")
          localStorage.setItem("token", result.token)
          dispatch(startGetUserInfo())
          navigate("/home")
        }
      })
  }
}

const userAccount = (data) => {
  return {
    type: "SET_USER",
    payload: data
  }
}

export const removeAccount = () => {
  return {
    type: "REMOVE_ACCOUNT"
  }
}
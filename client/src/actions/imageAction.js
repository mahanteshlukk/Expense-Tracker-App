import axios from "axios"

export const asyncGetImage = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/upload", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data[0]
        dispatch(getImage(result))
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const getImage = (data) => {
  return {
    type: "GET_IMAGE",
    payload: data
  }
}

export const asyncSetImage = (formData) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3333/upload`, formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        console.log(result)
        dispatch(setImage(result))
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const setImage = (data) => {
  return {
    type: "SET_IMAGE",
    payload: data
  }
}

export const asyncUpdateImage = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3333/upload/${id}`, formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        dispatch(updateImage(result))
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const updateImage = (data) => {
  return {
    type: "UPDATE_IMAGE",
    payload: data
  }
}
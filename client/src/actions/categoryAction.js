import axios from "axios"

export const asyncGetCategory = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/api/categories", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          dispatch(setError(result.errors))
        } else {
          dispatch(getCategory(result))
          dispatch(isLoading(false))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const getCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: data,
  }
}

const isLoading = (status) => {
  return {
    type: "SET_STATUS",
    payload: status,
  }
}

export const asyncSetCategory = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/api/categories", data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          dispatch(setError(result.errors))
        } else {
          dispatch(setCategory(result))
        }
      })
  }
}

const setCategory = (data) => {
  return {
    type: "SET_CATEGORY",
    payload: data,
  }
}

export const asyncDeleteCategory = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3333/api/categories/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          dispatch(setError(result.errors))
        } else {
          dispatch(removeCategory(result))
        }
      })
  }
}

const removeCategory = (data) => {
  return {
    type: "DELETE_CATEGORY",
    payload: data,
  }
}

const setError = (data) => {
  return {
    type: "SET_ERROR",
    payload: data,
  }
}
import axios from "axios"

export const asyncGetBudget = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/api/budgets", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data[0]
        if (result.hasOwnProperty("errors")) {
          alert(result.message);
          dispatch(getBudgetError(result.message))
          dispatch(setStatus(false))
        } else {
          dispatch(getBudget(result))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const getBudget = (data) => {
  return {
    type: "GET_BUDGET",
    payload: data,
  }
}

export const asyncSetBudget = (data, id) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3333/api/budgets/${id}`, data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          dispatch(getBudgetError(result))
        } else {
          dispatch(setBudget(result))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const setBudget = (data) => {
  return {
    type: "UPDATE_BUDGET",
    payload: data,
  }
}

const getBudgetError = (data) => {
  return {
    type: "SET_ERROR",
    payload: data,
  }
}

export const setStatus = (data) => {
  return {
    type: "SET_STATUS",
    payload: data,
  }
}
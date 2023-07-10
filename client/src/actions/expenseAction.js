import axios from "axios"

export const asyncGetExpenses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/api/expenses", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
          dispatch(setErrors(result))
        } else {
          dispatch(getExpenses(result))
          dispatch(setStatus(false))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const getExpenses = (data) => {
  return {
    type: "GET_EXPENSES",
    payload: data
  }
}

const setStatus = (data) => {
  return {
    type: "SET_STATUS",
    payload: data
  }
}

export const asyncSetExpenses = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3333/api/expenses", formData, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          dispatch(setErrors(result))
        } else {
          dispatch(setExpenses(result))
          dispatch(setStatus(true))
        }
      })
  }
}

const setExpenses = (data) => {
  return {
    type: "SET_EXPENSES",
    payload: data
  }
}

export const asyncUpdateExpenses = (id, formData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3333/api/expenses/${id}`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const result = response.data
        console.log(result)
        if (result.hasOwnProperty("errors")) {
          dispatch(setErrors(result))
        } else {
          dispatch(updateExpenses(result))
          dispatch(setStatus(true))
        }
      })
  }
}

const updateExpenses = (data) => {
  return {
    type: "UPDATE_EXPENSES",
    payload: data
  }
}

const setErrors = (data) => {
  return {
    type: "SET_ERROR",
    payload: data
  }
}

export const asyncDeleteExpenses = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3333/api/expenses/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        console.log(result)
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
        } else {
          dispatch(deleteExpense(result))
        }
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}

const deleteExpense = (data) => {
  return {
    type: "DELETE_EXPENSE",
    payload: data
  }
}

export const asyncMultipleDelete = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3333/api/multiple/expenses/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

export const asyncSoftDelete = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3333/api/expenses/softDeleted/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
        } else {
          dispatch(softDeletedRecord(id))
        }
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}

const softDeletedRecord = (id) => {
  return {
    type: "SOFT_DELETE",
    payload: id
  }
}

export const asyncSoftRestore = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3333/api/expenses/softRestore/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
        } else {
          dispatch(deleteRestore(id))
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

const deleteRestore = (id) => {
  return {
    type: "DELETE_RESTORE",
    payload: id
  }
}

export const asyncDeleteData = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3333/api/expenses/deleteData`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data
        if (result.hasOwnProperty("errors")) {
          alert(result.message)
        } else {
          dispatch(deletedData(result))
        }
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}

const deletedData = (data) => {
  return {
    type: "DELETED_DATA",
    payload: data
  }
}



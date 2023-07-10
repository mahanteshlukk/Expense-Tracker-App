const softInitialValue = []

const softReducer = (state = softInitialValue, action) => {
  switch (action.type) {
    case "DELETED_DATA" : {
      return [...action.payload]
    }
    case "DELETE_EXPENSE" : {
      return [
        ...state.filter((expense) => {
          return expense._id !== action.payload._id
        }),
      ]
    }
    case "DELETE_RESTORE" : {
      return [
        ...state.filter((expense) => {
          return expense._id !== action.payload
        }),
      ]
    }
    default : {
      return state
    }
  }
}

export default softReducer
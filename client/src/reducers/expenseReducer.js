const expenseInitialState = { 
    error: {}, 
    isLoading: true,
    data: [] 
}

const expenseReducer = (state = expenseInitialState, action) => {
  switch (action.type) {
    case "GET_EXPENSES" : {
      return { ...state, data: [...action.payload] }
    }
    case "SET_STATUS" : {
      return { ...state, isLoading: action.payload }
    }
    case "SET_ERROR" : {
      return { ...state, error: { ...state.error, ...action.payload } }
    }
    case "SET_EXPENSES" : {
      return { ...state, data: [...state.data, action.payload] }
    }
    case "UPDATE_EXPENSES" : {
      return {
        ...state,
        data: [
          ...state.data.map((expense) => {
            if (expense._id === action.payload._id) {
              return { ...expense, ...action.payload }
            } else {
              return { ...expense }
            }
          }),
        ],
      }
    }
    case "DELETE_EXPENSE" : {
      return {
        ...state,
        data: [
          ...state.data.filter((expense) => {
            return expense._id !== action.payload._id
          }),
        ],
      }
    }
    case "SOFT_DELETE" : {
      return {
        ...state,
        data: [
          ...state.data.filter((expense) => {
            return expense._id !== action.payload
          }),
        ],
      }
    }
    default : {
      return state
    }
  }
}

export default expenseReducer
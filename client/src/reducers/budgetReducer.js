const budgetInitialState = { 
    error: "", 
    data: {}, 
    isLoading: true 
}

const budgetReducer = (state = budgetInitialState, action) => {
  switch (action.type) {
    case "GET_BUDGET" : {
      return { ...state, data: { ...action.payload } }
    }
    case "SET_ERROR" : {
      return { ...state, error: action.payload }
    }
    case "UPDATE_BUDGET" : {
      return { ...state, data: { ...state.data, ...action.payload } }
    }
    case "SET_STATUS" : {
      return { ...state, isLoading: action.payload }
    }
    default : {
      return state
    }
  }
}

export default budgetReducer 
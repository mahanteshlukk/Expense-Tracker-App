const categoryInitialState = { 
    error: {}, 
    loading: true, 
    data: [] 
}

const categoryReducer = (state = categoryInitialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY" : {
      return { ...state, data: [...action.payload] }
    }
    case "SET_STATUS" : {
      return { ...state, loading: action.payload }
    }
    case "SET_ERROR": {
      return { ...state, error: { ...action.payload } }
    }
    case "SET_CATEGORY" : {
      return { ...state, data: [...state.data, action.payload] }
    }
    case "DELETE_CATEGORY" : {
      return {
        ...state,
        data: state.data.filter(
          (category) => category._id !== action.payload._id
        ),
      }
    }
    default : {
      return state
    }
  }
}

export default categoryReducer
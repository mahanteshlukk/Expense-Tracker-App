const imageInitialState = {}

const imageReducer = (state = imageInitialState, action) => {
  switch (action.type) {
    case "GET_IMAGE" : {
      return { ...action.payload }
    }
    case "SET_IMAGE" : {
      return { ...state, ...action.payload }
    }
    case "UPDATE_IMAGE" : {
      return { ...state, ...action.payload }
    }
    default : {
      return state
    }
  }
}

export default imageReducer 
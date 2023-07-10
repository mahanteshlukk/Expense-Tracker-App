const userInitialState = {}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "SET_USER" : {
      return { ...state, ...action.payload }
    }
    case "REMOVE_ACCOUNT" : {
      return {}
    }
    default : {
      return state
    }
  }
}

export default userReducer 
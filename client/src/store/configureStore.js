import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "../reducers/userReducer.js"
import budgetReducer from "../reducers/budgetReducer.js"
import categoryReducer from "../reducers/categoryReducer.js"
import expenseReducer from "../reducers/expenseReducer.js"
import softReducer from "../reducers/softReducer"
import imageReducer from "../reducers/imageReducer.js"

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      budget: budgetReducer,
      category: categoryReducer,
      expenses: expenseReducer,
      softExpenses: softReducer,
      profile: imageReducer,
    }),
    applyMiddleware(thunk)
  )
    return store
}

export default configureStore 
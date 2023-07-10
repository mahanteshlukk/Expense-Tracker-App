import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore.js"
import App from "./App.js"
import { startGetUserInfo } from "./actions/userAction.js"
import { asyncGetBudget } from "./actions/budgetAction.js"
import { asyncGetCategory } from "./actions/categoryAction.js"
import { asyncGetExpenses } from "./actions/expenseAction.js"
import { asyncGetImage } from "./actions/imageAction.js"

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

if (localStorage.getItem("token")) {
  store.dispatch(startGetUserInfo())
  store.dispatch(asyncGetBudget())
  store.dispatch(asyncGetCategory())
  store.dispatch(asyncGetExpenses())
  store.dispatch(asyncGetImage())
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
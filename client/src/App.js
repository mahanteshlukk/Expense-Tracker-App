import React from "react"
import AppHeader from "./components/AppHeader.js"
import AppFooter from "./components/AppFooter"
import PageContent from "./components/PageContent.js"
import SideMenu from "./components/SideMenu.js"

const App = (props) => {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  )
}

export default App 
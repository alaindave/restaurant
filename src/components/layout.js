import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <div className={layoutStyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

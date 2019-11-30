import React from "react"
import Layout from "../components/layout"
import homeStyles from "../styles/index.module.scss"
import logo from "../images/logo.png"

export default () => {
  return (
    <Layout>
    <div className={homeStyles.container}>
      <img className={homeStyles.logo} src={logo} alt="Logo" />
    </div> 
    </Layout>
    
  )
}

import React from "react"
import Layout from "../components/layout"
import logoStyles from "../styles/logo.module.scss"

const Logo = () => {
  return (
    <div className={logoStyles.container}>
      <h2 className={logoStyles.logo}>Simba</h2>
      <p className={logoStyles.subtitle}>African restaurant</p>
    </div>
  )
}

export default Logo

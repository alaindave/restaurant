import React from "react"
import Layout from "../components/layout"
import homeStyles from "../styles/index.module.scss"

import Logo from "../components/logo"

export default () => {
  return (
    <div className={homeStyles.container}>
      <Layout>
        <Logo />
      </Layout>
    </div>
  )
}

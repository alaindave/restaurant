import React from "react"
import Layout from "../components/layout"
import contactStyle from "../styles/contact.module.scss"


const ContactPage = () => {
  return (
    <Layout>
      <div className={contactStyle.container}>
          <p><b>Address:</b>180 Mcarthur Avenue.</p>
          <p><b>Telephone:</b>7807109897</p>
          <p><b>Email:</b>bijimmy8@gmail.com</p>
      </div>
    </Layout>
  )
}

export default ContactPage

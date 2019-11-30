import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import brochette from "../images/brochettes.jpeg"

const MenuPage = () => {
  return (
    <Layout>
      <div>
          {/* <Menu item1="brochette" item2="poisson" item3="salade"/>  */}
          <Menu title="Brochettes" image={brochette} items={[{"brochette":19},{"poisson":15},{"salade":10},{"isombe":20}]}/> 

      </div>
    </Layout>
  )
}

export default MenuPage
